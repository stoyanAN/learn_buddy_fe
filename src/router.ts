import {createBrowserRouter} from "react-router";
import LandingPage from "@/modules/landing-page/components/LandingPage.tsx";
import AuthLayout from "@/modules/auth/components/AuthLayout.tsx";
import {authRoutes} from "@/pages/auth/auth.routes.ts";
import {MAIN_PATHS} from "@/shared/constants/main-paths.const.ts";
import PageNotFound from "@/shared/components/errors/PageNotFound.tsx";

export const rootRouter = createBrowserRouter([
    {
        index: true,
        Component: LandingPage
    },
    {
        path: MAIN_PATHS.AUTH,
        Component: AuthLayout,
        children: [
            ...authRoutes
        ]
    },
    {path: '*', Component: PageNotFound}
]);
