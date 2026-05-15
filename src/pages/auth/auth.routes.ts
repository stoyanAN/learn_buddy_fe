import {AUTH_PATHS} from "@/pages/auth/paths.ts";

export const authRoutes = [
    {
        path: AUTH_PATHS.SIGN_IN,
        lazy: {
            Component: async () => (await import('@/modules/auth/components/SignInForm')).default
        }
    },
    {
        path: AUTH_PATHS.SIGN_UP,
        lazy: {
            Component: async () => (await import('@/modules/auth/components/SignUpForm')).default
        }
    }
];
