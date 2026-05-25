import * as z from 'zod';

export const forgotPasswordSchema = z.object({
    email: z.email('Invalid email').max(200, {message: 'Email must be at most 200 characters long'}),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
