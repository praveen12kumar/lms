import { StatusCodes } from "http-status-codes";
import { customErrorResponse, internalErrorResponse, successResponse } from "../utils/common/responseObject.js";
import { signUpService } from "../services/userService.js";

export const signup = async(req, res)=>{
    try {
        const user = await signUpService(req.body);
        console.log(user);
        return successResponse(user, "User created successfully");
    } catch (error) {
        console.log("user Controller error", error);
        if(error.statusCode){
            return res.statusCode(error.statusCode).json(customErrorResponse(error));
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(internalErrorResponse(error));
    }
}