import express from 'express';

import { signin, signup } from '../../controller/userController.js';
import { userSignInSchema,userSignUpSchema } from '../../validators/userSchema.js';
import { validate } from '../../validators/zodValidators.js';

const router = express.Router();

router.post('/signup', validate(userSignUpSchema), signup);

router.post('/signin', validate(userSignInSchema), signin);




export default router;
