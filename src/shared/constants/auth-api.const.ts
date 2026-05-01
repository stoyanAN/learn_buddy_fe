const AUTH_BASE_URL = '/auth';

export const AUTH_API = {
    LOGIN: `${AUTH_BASE_URL}/login`,
    REFRESH: `${AUTH_BASE_URL}/refresh`,
    LOGOUT: `${AUTH_BASE_URL}/logout`,
    SIGN_UP: `${AUTH_BASE_URL}/sign-up`,
} as const;
