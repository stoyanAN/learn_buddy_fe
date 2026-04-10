import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import App from "@/App.tsx";

const router = createBrowserRouter([
    {
        index: true,
        Component: App
    },
]);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);
