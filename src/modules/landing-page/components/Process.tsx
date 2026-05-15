const PROCESS_STEPS = [
    {
        number: "01",
        title: "Upload your PDF",
        desc: "Drop any document. Textbooks, research papers, lecture notes. We store it securely and extract the text once.",
    },
    {
        number: "02",
        title: "Select a page range",
        desc: "Tell us which chapter or section you're studying. Focused context means better, more relevant questions.",
    },
    {
        number: "03",
        title: "Generate questions",
        desc: "Claude reads your selection and creates targeted questions that test comprehension, not just recall.",
    },
    {
        number: "04",
        title: "Study actively",
        desc: "Answer, reflect, repeat. Your session is logged, your progress tracked, your weak spots surfaced.",
    },
] as const;

function Process() {
    return (<section className="py-20 px-6 bg-raised/40">
        <div className="max-w-[1000px] mx-auto">

            {/* Header */}
            <div className="text-center mb-16">
      <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-accent-bright block mb-4">
        Process
      </span>
                <h2 className="text-[clamp(32px,4vw,52px)] font-bold tracking-tight text-heading leading-[1.1]">
                    From PDF to knowledge<br/>in four steps
                </h2>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-4 gap-0">

                {PROCESS_STEPS.map(({number, title, desc}, index) => (
                    <div
                        key={number}
                        className={`px-8 ${index !== 0 ? "border-l border-border/20" : ""}`}
                    >
                        {/* Step number */}
                        <div className="flex items-center gap-2 mb-5">
            <span className="font-mono text-[11px] font-medium text-accent-bright tracking-[0.08em]">
              {number}
            </span>
                            <span className="text-accent-bright/30 text-[11px]">—</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-[15px] font-semibold text-heading mb-3">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="text-[13px] text-secondary leading-relaxed">
                            {desc}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    </section>)
}

export default Process;
