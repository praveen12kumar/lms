import express from 'express';

import { signin, signup } from '../../controller/userController.js';
import { validate } from '../../validators/zodValidators.js';
import { userSignUpSchema, userSignInSchema } from '../../validators/userSchema.js';

const router = express.Router();

router.post('/signup', validate(userSignUpSchema), signup);

router.post('/signin', validate(userSignInSchema), signin);




export default router;
