import type {LoginSchemaType} from "@/modules/auth/schemas/login.schema.ts";
import api from "@/shared/services/api.ts";
import {AUTH_API} from "@/shared/constants/auth-api.const.ts";
import type {SignUpSchemaType} from "@/modules/auth/schemas/sign-up.schema.ts";
import type {User} from "@/modules/auth/interfaces/user.interface.ts";

export const authService = {
    login: (credentials: LoginSchemaType): Promise<{
        accessToken: string,
        user: User
    }> => api.post(AUTH_API.LOGIN, {...credentials}).then(res => res.data),
    signUp: (userData: Omit<SignUpSchemaType, 'confirmPassword'>): Promise<User> => api.post(AUTH_API.SIGN_UP, {...userData}).then(res => res.data),
} as const;
