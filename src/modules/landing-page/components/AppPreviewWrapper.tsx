function AppPreviewWrapper() {
    return (<div className="w-full max-w-[780px] bg-surface border border-border/20 rounded-2xl overflow-hidden">

        {/* Window chrome bar */}
        <div className="px-4 py-3 bg-raised border-b border-border/20 flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-950"/>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-950"/>
            <div className="w-2.5 h-2.5 rounded-full bg-green-950"/>
        </div>

        {/* Two column body */}
        <div className="grid grid-cols-2 min-h-[340px]">

            {/* Left — PDF view */}
            <div className="p-6 border-r border-border/20">
                <p className="text-[10px] font-medium tracking-[0.08em] uppercase text-muted mb-4">
                    Chapter 3 — Pages 42–58
                </p>
                <div className="bg-accent/[4%] border border-border/15 rounded-lg p-4 space-y-2">
                    {/* Normal lines */}
                    <div className="h-1.5 rounded-full bg-white/[7%] w-full"/>
                    <div className="h-1.5 rounded-full bg-white/[7%] w-4/5"/>
                    {/* Highlighted block */}
                    <div className="border-l-2 border-accent bg-accent/[12%] rounded-r px-3 py-2 space-y-1.5">
                        <div className="h-1.5 rounded-full bg-accent-glow/40 w-full"/>
                        <div className="h-1.5 rounded-full bg-accent-glow/40 w-3/4"/>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[7%] w-full"/>
                    <div className="h-1.5 rounded-full bg-white/[7%] w-2/3"/>
                    <div className="h-1.5 rounded-full bg-white/[7%] w-full"/>
                    {/* Second highlighted block */}
                    <div className="border-l-2 border-accent bg-accent/[12%] rounded-r px-3 py-2">
                        <div className="h-1.5 rounded-full bg-accent-glow/40 w-4/5"/>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[7%] w-full"/>
                    <div className="h-1.5 rounded-full bg-white/[7%] w-3/5"/>
                    <div className="h-1.5 rounded-full bg-white/[7%] w-full"/>
                    <div className="h-1.5 rounded-full bg-white/[7%] w-2/3"/>
                </div>
            </div>

            {/* Right — AI questions */}
            <div className="p-6 flex flex-col gap-3">
                <p className="text-[10px] font-medium tracking-[0.08em] uppercase text-muted mb-1">
                    Generated questions
                </p>
                {/* Question bubble */}
                <div
                    className="bg-accent/10 border border-accent/25 rounded-xl px-4 py-3 text-sm text-primary text-center leading-relaxed">
                    What is the primary mechanism described in section 3.2, and how does it differ from the classical
                    model?
                </div>
                {/* Answer bubble */}
                <div
                    className="bg-white/[3%] border border-border/15 rounded-xl px-4 py-3 text-sm text-secondary text-center leading-relaxed">
                    The section introduces an adaptive model where feedback loops replace fixed thresholds, contrasting
                    with the classical deterministic approach.
                </div>
                {/* Question bubble */}
                <div
                    className="bg-accent/10 border border-accent/25 rounded-xl px-4 py-3 text-sm text-primary text-center leading-relaxed">
                    Why is the boundary condition significant in this context?
                </div>
                {/* Generating indicator */}
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-muted">Generating</span>
                    <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-bright animate-blink"
                              style={{animationDelay: '0ms'}}/>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-bright animate-blink"
                              style={{animationDelay: '200ms'}}/>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-bright animate-blink"
                              style={{animationDelay: '400ms'}}/>
                    </div>
                </div>
            </div>

        </div>
    </div>)
}

export default AppPreviewWrapper;
