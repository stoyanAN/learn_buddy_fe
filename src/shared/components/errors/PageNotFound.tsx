import {useNavigate} from "react-router";

function PageNotFound() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-base flex flex-col">

            {/* Nav */}
            <nav className="bg-surface/95 border-b border-border/20 px-6 py-3 flex items-center justify-between">
                <span
                    onClick={() => navigate("/")}
                    className="text-accent-bright cursor-pointer transition-colors px-1 focus-visible:ring-1 text-lg font-semibold flex gap-2">
                    <img width={32} height={32} src="public/logo.svg" alt="Learn Buddy logo"/>
                Learn Buddy
                    </span>
            </nav>

            {/* Body */}
            <div
                className="flex-1 flex flex-col items-center justify-center px-6 py-14 text-center relative overflow-hidden">

                {/* Glow */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-accent/10 blur-[70px] pointer-events-none"/>

                {/* 404 + diamond */}
                <div
                    className="flex gap-3 font-mono text-[100px] font-bold leading-none text-transparent select-none"
                    style={{WebkitTextStroke: "1px rgba(124,92,191,0.3)"}}
                >
                    <span>4</span>
                    <img width={52} height={52} src="public/logo.svg" alt="Learn Buddy logo"/>
                    <span>4</span>
                </div>


                {/* Eyebrow */}
                <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-accent-bright block mb-2.5">
          Page not found
        </span>

                {/* Heading */}
                <h1 className="text-[26px] font-bold text-heading tracking-tight mb-2.5">
                    You've gone off the map
                </h1>

                {/* Subtitle */}
                <p className="text-sm text-secondary leading-relaxed max-w-[320px] mb-7">
                    This page doesn't exist or may have been moved. Head back and keep studying.
                </p>

                {/* Actions */}
                <div className="flex items-center gap-2.5">
                    <button
                        onClick={() => navigate("/")}
                        className="px-5 py-2.5 rounded-[9px] bg-accent hover:bg-accent-bright
              text-white text-sm font-medium border-none cursor-pointer
              hover:-translate-y-px transition-all"
                    >
                        Go home
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="px-4 py-2.5 rounded-[9px]
              border border-border/20 hover:border-border/50
              bg-transparent text-secondary hover:text-primary
              text-sm cursor-pointer transition-all
              flex items-center gap-1.5"
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round">
                            <path d="M19 12H5M12 5l-7 7 7 7"/>
                        </svg>
                        Go back
                    </button>
                </div>

            </div>
        </div>
    )
}

export default PageNotFound
