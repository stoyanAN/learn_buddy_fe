import {useNavigate} from "react-router";
import {useMutation} from "@tanstack/react-query";
import {AUTH_REQUEST_KEYS} from "@/modules/auth/constants/auth-request-keys.const.ts";
import {authService} from "@/modules/auth/services/auth.service.ts";
import {DASHBOARD_PATHS} from "@/pages/dashboard/paths.ts";
import type {AxiosError} from "axios";
import {toast} from "sonner";

export function useSignUp() {
    const navigate = useNavigate();

    return useMutation({
        mutationKey: [AUTH_REQUEST_KEYS.SIGN_UP],
        mutationFn: authService.signUp,
        onSuccess: () => navigate(DASHBOARD_PATHS.ROOT, {replace: true}),
        onError: (error: AxiosError) => {
            toast.error(error.message);
        }
    })
}
