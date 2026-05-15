import {NavigationMenu, NavigationMenuLink} from "@/components/ui/navigation-menu.tsx";
import {useNavigate} from "react-router";
import {AUTH_PATHS} from "@/pages/auth/paths.ts";
import {MAIN_PATHS} from "@/shared/constants/main-paths.const.ts";

function Navigation() {
    const navigate = useNavigate();

    return (
        <NavigationMenu
            className="flex items-center justify-between !w-screen max-w-full px-16 py-5 border-b-[0.5px] border-border/30">
            <NavigationMenuLink
                onClick={() => navigate("/")}
                className="text-accent-bright cursor-pointer transition-colors px-1 focus-visible:ring-1 text-lg font-semibold">
                <img width={32} height={32} src="../../../../public/logo.svg" alt="Learn Buddy logo"/>
                Learn Buddy
            </NavigationMenuLink>

            <div className="flex items-center gap-4">
                <NavigationMenuLink
                    onClick={() => navigate("/login")}
                    className="text-text-secondary hover:text-text-primary px-3 py-1.5 rounded-sm hover:bg-text-primary/10 cursor-pointer transition-all text-sm">
                    Features
                </NavigationMenuLink>
                <NavigationMenuLink
                    onClick={() => navigate("/login")}
                    className="text-text-secondary hover:text-text-primary cursor-pointer px-3 py-1.5 rounded-sm hover:bg-text-primary/10 transition-colors focus-visible:ring-1">
                    How it works
                </NavigationMenuLink>
                <NavigationMenuLink
                    onClick={() => navigate("/login")}
                    className="text-text-secondary hover:text-text-primary cursor-pointer px-3 py-1.5 rounded-sm hover:bg-text-primary/10 transition-colors focus-visible:ring-1">
                    Pricing
                </NavigationMenuLink>
                <NavigationMenuLink
                    onClick={() => navigate(`../${MAIN_PATHS.AUTH}/${AUTH_PATHS.SIGN_IN}`, {relative: 'route'})}
                    className="rounded-sm
                    disabled:pointer-events-auto
    bg-accent hover:bg-accent-bright active:bg-accent-dim
    text-white text-sm font-medium border-none cursor-pointer
    disabled:cursor-not-allowed
    px-3.5 py-2
    hover:-translate-y-px active:translate-y-0 transition-all">
                    Start free
                </NavigationMenuLink>
            </div>
        </NavigationMenu>
    )
}

export default Navigation;
