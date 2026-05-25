const AUTH_BASE_URL = '/auth';

export const AUTH_API = {
    SIGN_IN: `${AUTH_BASE_URL}/sign-in`,
    REFRESH: `${AUTH_BASE_URL}/refresh`,
    LOGOUT: `${AUTH_BASE_URL}/logout`,
    SIGN_UP: `${AUTH_BASE_URL}/sign-up`,
    RESET_PASSWORD: `${AUTH_BASE_URL}/reset-password`,
    FORGOT_PASSWORD: `${AUTH_BASE_URL}/forgot-password`,
} as const;
