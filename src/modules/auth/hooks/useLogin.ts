import {useNavigate} from "react-router";
import {useMutation} from "@tanstack/react-query";
import {JWT_KEY} from "@/shared/constants/storage-keys.const.ts";
import {toast} from "sonner";
import type {AxiosError} from "axios";
import {authService} from "@/modules/auth/services/auth.service.ts";
import {DASHBOARD_PATHS} from "@/pages/dashboard/paths.ts";

export function useLogin(formResetFunction: () => void) {
    const navigate = useNavigate();

    return useMutation({
        mutationKey: ['loginUser'],
        mutationFn: authService.login,
        onSuccess: (response: { accessToken: string }) => {
            localStorage.setItem(JWT_KEY, response.accessToken);
            navigate(DASHBOARD_PATHS.ROOT);
        },
        onError: (error: AxiosError) => {
            if (error.status === 401) {
                toast.error('Incorrect email or password', {
                    position: 'top-center',
                    duration: 5000,
                    className: '!bg-red-300/75 !w-auto'
                });

                formResetFunction();
            }
        }
    })
}
