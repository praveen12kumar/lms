import express from 'express';

import { signup } from '../../controller/userController.js';
import { validate } from '../../validators/zodValidators.js';
import { userSignUpSchema } from '../../validators/userSchema.js';

const router = express.Router();

router.post('/signup', validate(userSignUpSchema), signup);

export default router;
