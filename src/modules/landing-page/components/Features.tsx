import {Activity, FileText, HelpCircle, LayoutGrid, Search, ShieldCheck} from "lucide-react";

const INFORMATION_CARDS_LIST = [
    {
        icon: <FileText className="size-[18px] text-accent-bright"/>,
        title: "Page-range targeting",
        desc: "Focus AI on exactly the pages you're studying. No noise, no irrelevant context — just the chapter in front of you.",
    },
    {
        icon: <HelpCircle className="size-[18px] text-accent-bright"/>,
        title: "AI-generated questions",
        desc: "Claude generates questions that test real understanding — not trivia, but the kind of questions that reveal whether you truly got it.",
    },
    {
        icon: <Activity className="size-[18px] text-accent-bright"/>,
        title: "Session tracking",
        desc: "Track time spent per document and page range. See patterns in your study habits and optimise where your focus goes.",
    },
    {
        icon: <Search className="size-[18px] text-accent-bright"/>,
        title: "Semantic search",
        desc: "Ask questions about your documents in natural language. Vector search finds the most relevant passages instantly.",
    },
    {
        icon: <LayoutGrid className="size-[18px] text-accent-bright"/>,
        title: "Study analytics",
        desc: "Visualise which topics you've covered, your question accuracy over time, and where the gaps in your knowledge are.",
    },
    {
        icon: <ShieldCheck className="size-[18px] text-accent-bright"/>,
        title: "Private by design",
        desc: "Your documents stay yours. Stored securely in isolated S3 buckets, never used for training, deleted on request.",
    },
] as const;

function Features() {
    return (<section className="py-20 px-6">
        <div className="max-w-[1000px] mx-auto">

            {/* Header */}
            <div className="text-center mb-14">
      <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-accent-bright block mb-4">
        Why Learn Buddy
      </span>
                <h2 className="text-[clamp(32px,4vw,52px)] font-bold tracking-tight text-heading leading-[1.1] mb-4">
                    Built for the way<br/>you actually learn
                </h2>
                <p className="text-[15px] text-secondary max-w-[460px] mx-auto leading-relaxed">
                    Not a chatbot. Not a highlighter. A system that turns any document into an active study session.
                </p>
            </div>

            {/* Feature cards grid */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">

                {INFORMATION_CARDS_LIST.map(({icon, title, desc}) => (
                    <div
                        key={title}
                        className="bg-surface border border-border/20 rounded-2xl p-6
            hover:border-border/50 transition-all hover:-translate-y-0.5"
                    >
                        {/* Icon */}
                        <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/30
            flex items-center justify-center mb-5">
                            {icon}
                        </div>

                        {/* Title */}
                        <div className="text-sm font-semibold text-heading mb-2">{title}</div>

                        {/* Description */}
                        <p className="text-[13px] text-secondary leading-relaxed">{desc}</p>
                    </div>
                ))}

            </div>
        </div>
    </section>)
}

export default Features;
