import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRES_IN } from '../../config/serverConfig.js';

export const createJWT = (payload)=>{
    return jwt.sign(payload, JWT_SECRET,{expiresIn: JWT_EXPIRES_IN} )
}