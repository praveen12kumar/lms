import express from 'express';

import { signin, signup, verifyEmail } from '../../controller/userController.js';
import { userSignInSchema,userSignUpSchema, verifyUserSchema } from '../../validators/userSchema.js';
import { validate } from '../../validators/zodValidators.js';

const router = express.Router();

router.post('/signup', validate(userSignUpSchema), signup);

router.post('/verify-email', validate(verifyUserSchema), verifyEmail);

router.post('/signin', validate(userSignInSchema), signin);




export default router;
