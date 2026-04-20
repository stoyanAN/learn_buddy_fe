import type {LoginSchemaType} from "@/modules/auth/schemas/login.schema.ts";
import api from "@/shared/services/api.ts";
import {AUTH_API} from "@/shared/constants/auth-api.const.ts";

export const authService = {login: (credentials: LoginSchemaType) => api.post(AUTH_API.LOGIN, {...credentials}).then(res => res.data)} as const;
