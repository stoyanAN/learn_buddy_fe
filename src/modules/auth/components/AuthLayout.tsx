import Navigation from "@/shared/components/navigation/Navigation.tsx";
import Footer from "@/shared/components/navigation/Footer.tsx";
import {Outlet} from "react-router";

function AuthLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation/>
            <main className="flex-1 flex items-center justify-center py-16">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}

export default AuthLayout;
