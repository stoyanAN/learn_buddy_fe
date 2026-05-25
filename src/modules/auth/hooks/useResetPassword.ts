import {useNavigate} from "react-router";
import {useMutation} from "@tanstack/react-query";
import {AUTH_REQUEST_KEYS} from "@/modules/auth/constants/auth-request-keys.const.ts";
import {authService} from "@/modules/auth/services/auth.service.ts";
import {DASHBOARD_PATHS} from "@/pages/dashboard/paths.ts";
import type {AxiosError} from "axios";
import {toast} from "sonner";

export function useResetPassword() {
    const navigate = useNavigate();

    return useMutation({
        mutationKey: [AUTH_REQUEST_KEYS.RESET_PASSWORD],
        mutationFn: authService.resetPassword,
        onSuccess: () => navigate(DASHBOARD_PATHS.ROOT),
        onError: (error: AxiosError) => {
            toast.error(error.message);
        }
    })
}
