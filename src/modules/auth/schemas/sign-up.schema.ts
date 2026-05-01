import * as z from 'zod';

export const signUpSchema = z.object({
    firstName: z.string().min(2, {message: 'First name must be at least 2 characters long'}).max(50, {
        message: 'First name must be at most 50 characters long'
    }),
    lastName: z.string().min(2, {message: 'Last name must be at least 2 characters long'}).max(50, {
        message: 'Last name must be at most 50 characters long'
    }),
    email: z.email('Invalid email').max(200, {message: 'Email must be at most 200 characters long'}),
    password: z.string().min(8, {message: 'Password must be at least 8 characters long'}).max(50, {
        message: 'Password must be at most 50 characters long'
    }),
    confirmPassword: z.string().min(8, {message: 'Password must be at least 8 characters long'}).max(50, {
        message: 'Password must be at most 50 characters long'
    })
}).refine(
    (data) => data.password === data.confirmPassword,
    {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    }
);

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
