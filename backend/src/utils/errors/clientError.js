import { StatusCodes } from "http-status-codes";
import { de } from "zod/v4/locales";

class ClientError extends Error{
    constructor(error){
        super();
        this.name = 'ClientError';
        this.statusCode = error.statusCode ? error.statusCode : StatusCodes.BAD_REQUEST;
        this.explanation = error.explanation;
        this.message = error.message;
    }
}

export default ClientError;