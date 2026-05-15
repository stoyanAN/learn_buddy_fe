function HeroEyebrow() {
    return (
        <div
            className="relative overflow-hidden flex flex-col items-center justify-center before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[600px] before:h-[150px] before:rounded-full before:bg-accent/20 before:blur-[120px] before:pointer-events-none">
            <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-bright/30 bg-accent/[8%] text-[11px] font-medium tracking-[0.08em] uppercase text-accent-glow my-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-bright animate-pulse-dot"/>
                AI-powered study companion
            </div>
            <h1 className="text-[clamp(48px,7vw,80px)] font-bold leading-[1.1] tracking-[-0.03em] text-heading text-center mb-5">Study
                smarter. <br/>
                <span
                    className="bg-gradient-to-br from-accent-glow via-40% via-accent-bright to-accent bg-clip-text text-transparent">
    Understand deeper.
  </span>
            </h1>
            <p className="text-lg text-secondary leading-relaxed font-light text-center max-w-[480px] mb-9">Upload
                any PDF, select a page range, and let
                AI
                generate
                targeted questions that turn passive reading into active learning.</p>
        </div>)
}

export default HeroEyebrow;
