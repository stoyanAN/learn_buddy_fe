import axios, {type AxiosResponse, type InternalAxiosRequestConfig} from "axios";
import {JWT_KEY} from "@/shared/constants/storage-keys.const.ts";
import {useAuthStore} from "@/modules/auth/store/auth.store.ts";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
    withCredentials: true
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const jwtLocalStorageToken = useAuthStore.getState().token;

    if (jwtLocalStorageToken) {
        config.headers.setAuthorization(`Bearer ${jwtLocalStorageToken}`, true);
    }

    return config;
});

api.interceptors.response.use(
    (response: AxiosResponse) => response, // success — just pass it through
    async (error) => {
        if (error.response?.status === 401 && error.config.url !== '/auth/refresh' && error.config.url !== '/auth/login') {
            // 👈 token expired — what should happen here?
            try {
                const refreshTokenResponse: AxiosResponse = await api.post('auth/refresh');

                if (refreshTokenResponse?.data?.accessToken) {
                    localStorage.setItem(JWT_KEY, refreshTokenResponse.data.accessToken);
                    error.config.headers.Authorization = `Bearer ${refreshTokenResponse.data.accessToken}`;
                    return api.request(error.config);
                }

                return Promise.reject(error);
            } catch (e) {
                localStorage.removeItem(JWT_KEY);
                return Promise.reject(e);
            }
        }

        return Promise.reject(error)
    }
)

export default api;
