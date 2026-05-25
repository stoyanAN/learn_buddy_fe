const RESET_PASSWORD_INSTRUCTIONS = [
    {n: 1, title: 'Enter your email', desc: "We'll look up your account and send a reset link."},
    {
        n: 2,
        title: 'Check your inbox',
        desc: 'Click the link in the email — it expires in 15 minutes.'
    },
    {n: 3, title: 'Set a new password', desc: "Choose a strong password and you're back in."},
];

export default function ForgotPasswordInstructions() {
    return (
        <div className="flex flex-col justify-between p-10 bg-[#13101c] border-r border-purple-900/20">

            {/* Body */}
            <div className="flex flex-col justify-center">
                <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-400/30 bg-purple-600/10 text-[11px] font-medium tracking-widest uppercase text-purple-300 mb-6 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"/>
                    Password Recovery
                </div>

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#f5f0e8] mb-4">
                    Back in just<br/>a few <em className="not-italic text-purple-400">seconds</em>
                </h1>

                <p className="text-[#b0a8c8] text-sm leading-relaxed font-light mb-10 max-w-sm">
                    Resetting your password is quick and secure. Follow the steps and you'll be back to your studies in
                    no time.
                </p>

                {/* Steps */}
                <div className="flex flex-col gap-4">
                    {RESET_PASSWORD_INSTRUCTIONS.map(({n, title, desc}) => (
                        <div key={n} className="flex items-start gap-3">
                            <div
                                className="w-7 h-7 rounded-full bg-purple-600/15 border border-purple-600/30 flex items-center justify-center text-xs font-semibold text-purple-300 font-mono shrink-0">
                                {n}
                            </div>
                            <div>
                                <div className="text-sm font-medium text-[#ede8f5] mb-0.5">{title}</div>
                                <div className="text-xs text-[#7a7090] leading-relaxed">{desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>)
}
