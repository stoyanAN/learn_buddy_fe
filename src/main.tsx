import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import Login from "@/modules/auth/components/login/Login.tsx";
import {Toaster} from "sonner";

const router = createBrowserRouter([
    {
        index: true,
        Component: Login
    },
]);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false
        }
    }
});

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
            <ReactQueryDevtools initialIsOpen={false}/>
            <Toaster/>
        </QueryClientProvider>
    </StrictMode>
);
