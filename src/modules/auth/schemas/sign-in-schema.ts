import * as z from "zod";

export const signInSchema = z.object({
    email: z.email('Invalid email'),
    password: z.string().min(8, 'Password must be at least 8 characters').max(20, 'Password must be at most 20 characters')
})

export type SignInSchemaType = z.infer<typeof signInSchema>;
