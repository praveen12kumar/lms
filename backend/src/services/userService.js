
import userRepository from "../repository/userRepository.js";
import { ValidationError } from "../utils/errors/validationError.js";


export const signUpService = async (data) => {
  try {
    const newUser = await userRepository.create(data);
    return newUser;
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
