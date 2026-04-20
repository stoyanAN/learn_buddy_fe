import {createBrowserRouter} from "react-router";
import Login from "@/modules/auth/components/login/Login.tsx";

export const rootRouter = createBrowserRouter([
    {
        index: true,
        Component: Login
    },
]);
