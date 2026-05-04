import {createBrowserRouter} from "react-router";
import LoginForm from "@/modules/auth/components/login/LoginForm.tsx";
import SignUpForm from "@/modules/auth/components/sign-up/SIgnUpForm.tsx";
import Navigation from "@/modules/landing-page/components/Navigation.tsx";

export const rootRouter = createBrowserRouter([
    {
        index: true,
        Component: Navigation
    },
    {
        path: 'sign-in',
        Component: LoginForm
    },
    {
        path: 'sign-up',
        Component: SignUpForm
    },
]);
