import Navigation from "@/shared/components/navigation/Navigation.tsx";
import HeroEyebrow from "@/modules/landing-page/components/HeroEyebrow.tsx";
import AppPreviewWrapper from "@/modules/landing-page/components/AppPreviewWrapper.tsx";
import Features from "@/modules/landing-page/components/Features.tsx";
import Footer from "@/shared/components/navigation/Footer.tsx";
import Process from "@/modules/landing-page/components/Process.tsx";

function LandingPage() {
    return (
        <>
            <Navigation/>
            <HeroEyebrow/>
            <div className="flex flex-col items-center justify-items-center my-5">
                <AppPreviewWrapper/>
                <Features/>
            </div>
            <div className="my-15">
                <Process/>
            </div>
            <Footer/>
        </>
    )
}

export default LandingPage;
