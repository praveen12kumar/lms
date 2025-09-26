import {z} from 'zod';

export const userSignUpSchema = z.object({
    email: z.string().email({pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/}),
    username: z.string().min(3).max(20),
    password: z.string().min(6).max(20),
});

export const userSignInSchema = z.object({
    email: z.string().email({pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/}),
    password: z.string().min(6).max(20),
});


