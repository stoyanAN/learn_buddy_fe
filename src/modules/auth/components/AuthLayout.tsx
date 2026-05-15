import Navigation from "@/shared/components/Navigation.tsx";
import Footer from "@/shared/components/Footer.tsx";
import {Outlet} from "react-router";

function AuthLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation/>
            <main className="flex-1 flex items-center justify-center py-16">
                <Outlet/> {/* 👈 login/register renders here */}
            </main>
            <Footer/>
        </div>
    );
}

export default AuthLayout;
