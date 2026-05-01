import {useNavigate} from "react-router";
import {useMutation} from "@tanstack/react-query";
import {toast} from "sonner";
import type {AxiosError} from "axios";
import {authService} from "@/modules/auth/services/auth.service.ts";
import {DASHBOARD_PATHS} from "@/pages/dashboard/paths.ts";
import {AUTH_REQUEST_KEYS} from "@/modules/auth/constants/auth-request-keys.const.ts";
import {useAuthStore} from "@/modules/auth/store/auth.store.ts";

export function useLogin() {
    const navigate = useNavigate();
    const setAuth = useAuthStore((state) => state.setAuth);


    return useMutation({
        mutationKey: [AUTH_REQUEST_KEYS.LOGIN],
        mutationFn: authService.login,
        onSuccess: ({accessToken, user}) => {
            setAuth(user, accessToken);
            navigate(DASHBOARD_PATHS.ROOT);
        },
        onError: (error: AxiosError) => {
            if (error.status === 401) {
                toast.error('Incorrect email or password', {
                    position: 'top-center',
                    duration: 5000,
                    className: '!bg-red-300/75 !w-auto'
                });
            } else {
                toast.error('Something went wrong. Please try again.', {
                    position: 'top-center',
                    duration: 5000,
                })
            }
        }
    })
}
