import type {User} from "@/modules/auth/interfaces/user.interface.ts";
import {create} from 'zustand';
import {JWT_KEY} from "@/shared/constants/storage-keys.const.ts";
import {persist} from "zustand/middleware";

interface AuthState {
    user: User | null;
    token: string | null;

    // derived — no need to store this separately
    isAuthenticated: boolean; // 👈 how would you derive this from user/token?

    setAuth: (user: User, token: string) => void;
    clearAuth: () => void;
}

const initialState = {
    user: null,
    token: null,
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            // initial state
            ...initialState,

            isAuthenticated: !!get()?.token,// 👈 hint: use a getter pattern

            // actions
            setAuth: (user, token) => set({
                ...user,
                token
            }),

            clearAuth: () => set({
                ...initialState
            }),
        }),
        {
            name: JWT_KEY,// 👈 localStorage key for persistence
            partialize: (state) => ({
                // 👈 which parts of state should persist?
                // hint: should the whole state persist or just some fields?
                token: state.token
            })
        }
    )
)
