import express from 'express';

import { forgotPassword, resetPassword, signin, signup, verifyEmail, verifyOtp, changePassword } from '../../controller/userController.js';
import { changePasswordSchema, forgotPasswordSchema, resetPasswordSchema, userSignInSchema,userSignUpSchema, verifyOtpSchema, verifyUserSchema } from '../../validators/userSchema.js';
import { validate } from '../../validators/zodValidators.js';
import { isAuthenticated } from '../../middlewares/authMiddleware.js';


const router = express.Router();

router.post('/signup', validate(userSignUpSchema), signup);

router.post('/verify-email', validate(verifyUserSchema), verifyEmail);

router.post('/signin', validate(userSignInSchema), signin);

router.post('/forgot-password', validate(forgotPasswordSchema), forgotPassword);

router.post('/verify-otp', validate(verifyOtpSchema), verifyOtp );

router.post('/change-password', validate(changePasswordSchema), changePassword);

router.post('/reset-password', isAuthenticated, validate(resetPasswordSchema), resetPassword);




export default router;
