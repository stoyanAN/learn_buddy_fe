import type {SignInSchemaType} from "@/modules/auth/schemas/sign-in-schema.ts";
import api from "@/shared/services/api.ts";
import {AUTH_API} from "@/shared/constants/auth-api.const.ts";
import type {SignUpSchemaType} from "@/modules/auth/schemas/sign-up.schema.ts";
import type {User} from "@/modules/auth/interfaces/user.interface.ts";

export const authService = {
    signIn: (credentials: SignInSchemaType): Promise<{
        accessToken: string,
        user: User
    }> => api.post(AUTH_API.SIGN_IN, {...credentials}).then(res => res.data),
    signUp: (userData: Omit<SignUpSchemaType, 'confirmPassword'>): Promise<User> => api.post(AUTH_API.SIGN_UP, {...userData}).then(res => res.data),
    forgotPassword: (payload: Pick<SignInSchemaType, 'email'>): Promise<User> => api.post(AUTH_API.FORGOT_PASSWORD, {...payload}).then(res => res.data),
    resetPassword: (payload: Pick<SignInSchemaType, 'password'>): Promise<User> => api.post(AUTH_API.RESET_PASSWORD, {...payload}).then(res => res.data),
} as const;
