import jwt from 'jsonwebtoken';

import { JWT_EXPIRES_IN,JWT_SECRET } from '../../config/serverConfig.js';

export const createJWT = (payload)=>{
    return jwt.sign(payload, JWT_SECRET,{expiresIn: JWT_EXPIRES_IN} )
}