import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {Toaster} from "sonner";
import {rootRouter} from "@/router.ts";


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
            <RouterProvider router={rootRouter}/>
            <ReactQueryDevtools initialIsOpen={false}/>
            <Toaster/>
        </QueryClientProvider>
    </StrictMode>
);
