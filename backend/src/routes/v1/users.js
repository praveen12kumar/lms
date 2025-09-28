import express from 'express';

import { forgotPassword, resetPassword, signin, signup, verifyEmail, verifyOtp } from '../../controller/userController.js';
import { forgotPasswordSchema, resetPasswordSchema, userSignInSchema,userSignUpSchema, verifyOtpSchema, verifyUserSchema } from '../../validators/userSchema.js';
import { validate } from '../../validators/zodValidators.js';

const router = express.Router();

router.post('/signup', validate(userSignUpSchema), signup);

router.post('/verify-email', validate(verifyUserSchema), verifyEmail);

router.post('/signin', validate(userSignInSchema), signin);

router.post('/forgot-password', validate(forgotPasswordSchema), forgotPassword);

router.post('/reset-password', validate(resetPasswordSchema), resetPassword);

router.post('/verify-otp', validate(verifyOtpSchema), verifyOtp );


export default router;
