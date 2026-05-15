import logo from "@/assets/logo.svg"

function Footer() {
    return (<footer className="border-t border-border/20 px-14 py-6 flex items-center justify-between">

        <span
            className="flex gap-2 text-accent-bright transition-colors px-1 focus-visible:ring-1">
            <img width={20} height={20} src={logo} alt="Learn Buddy logo"/>
            Learn Buddy
        </span>

        <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors">Privacy</a>
            <a href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors">Terms</a>
            <a href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors">Contact</a>
        </div>

        <span className="text-xs text-text-muted">© 2026 Learn Buddy</span>

    </footer>)
}

export default Footer;
