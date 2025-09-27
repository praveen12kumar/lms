
import bcrypt from "bcryptjs";
import { StatusCodes } from "http-status-codes";

import userRepository from "../repository/userRepository.js";
import { checkOtpRestrictions, sendOtp, trackOtpRequests } from "../utils/common/authHelper.js";
import { createJWT } from "../utils/common/authUtils.js";
import ClientError from "../utils/errors/clientError.js";
import { ValidationError } from "../utils/errors/validationError.js";




export const signUpService = async (data) => {
  try {
    const existingUser = await userRepository.getByEmail(data.email);
    if(existingUser){
      throw new ClientError({
        message: "User already exists",
        statusCode: StatusCodes.BAD_REQUEST,
        explanation: ["Invalid data sent from the client"],
      })
    }
    await checkOtpRestrictions(data.email);
    await trackOtpRequests(data.email);
    await sendOtp(data.username, data.email, 'user-activation-mail');

    return;
  } 
  catch (error) {
    // Mongoose validation error (schema validators)
    if (error.name === "ValidationError") {
      throw new ValidationError({ error: error.errors },error.message);
    }

    // Duplicate key (unique index) from MongoDB
    // - Could be a direct MongoServerError (error.name === 'MongoServerError' && error.code === 11000)
    // - Or wrapped by Mongoose: error.name === 'MongooseError' and details on error.cause
    const mongoCode = error.code ?? error?.cause?.code;
    if (mongoCode === 11000) {
      // Try to extract the duplicate field name from keyValue (or cause.keyValue)
      const keyVal = error.keyValue ?? error?.cause?.keyValue;
      const field = keyVal ? Object.keys(keyVal)[0] : "field";

      throw new ValidationError(
        { error: [`A user with this ${field} already exists`] }
      );
    }

    throw error;
  }
};


export const signInService = async (data)=>{
  try {
    const user  = await userRepository.getByEmail(data.email);
    if(!user){
      throw new ClientError({
        message: "User not found",
        statusCode: StatusCodes.NOT_FOUND,
        explanation: ["Invalid data sent from the client"],
      })
    }

    // match the incoming password with the one in the database;
    const isMatch = await bcrypt.compare(data.password, user.password);
    if(!isMatch){
      throw new ClientError({
        message: "Invalid Password",
        statusCode: StatusCodes.UNAUTHORIZED,
        explanation: ["Invalid data sent from the client"],
      })
    }

    return {
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      token: createJWT({id: user._id, email: user.email})
    }


  } catch (error) {
    console.log('User Service error', error);
    throw error;
  }
}
