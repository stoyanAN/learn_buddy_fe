import {useMutation} from "@tanstack/react-query";
import {AUTH_REQUEST_KEYS} from "@/modules/auth/constants/auth-request-keys.const.ts";
import {authService} from "@/modules/auth/services/auth.service.ts";
import type {AxiosError} from "axios";
import {toast} from "sonner";

export function useForgotPassword() {

    return useMutation({
        mutationKey: [AUTH_REQUEST_KEYS.FORGOT_PASSWORD],
        mutationFn: authService.forgotPassword,
        onError: (error: AxiosError) => {
            toast.error(error.message);
        }
    })
}
