import { Sparkles } from "lucide-react"

export default function FooterSection() {
    return (
        // Footer wrapper matching the global structural borders
        <footer className="w-full bg-background flex flex-col items-center border-b border-grid-line">

            {/* 1200px Grid Container with Left/Right Borders */}
            <div className="w-full max-w-[1200px] border-x border-grid-line flex flex-col">

                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-start px-8 md:px-12 py-[80px] gap-12 md:gap-0">

                    {/* Left: Branding & Description */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-4">
                            {/* Agentik Logo Icon */}
                            <div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center shadow-heavy-button">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-[40px] font-medium text-brand-dark tracking-tight">
                                Agentik
                            </span>
                        </div>

                        <p className="text-[16px] text-gray-500 leading-relaxed max-w-[340px] mt-6">
                            Built for teams that help businesses automate workflows, cut costs, and scale with AI.
                        </p>
                    </div>

                    {/* Right: Navigation Links */}
                    <div className="grid grid-cols-2 gap-16 md:gap-24 md:pr-12 md:pt-4">

                        {/* Column 1 */}
                        <div className="flex flex-col gap-5">
                            <a href="#" className="text-[17px] font-medium text-brand-dark hover:text-[var(--color-brand-purple)] transition-colors">
                                About
                            </a>
                            <a href="#" className="text-[17px] font-medium text-brand-dark hover:text-[var(--color-brand-purple)] transition-colors">
                                Careers
                            </a>
                            <a href="#" className="text-[17px] font-medium text-brand-dark hover:text-[var(--color-brand-purple)] transition-colors">
                                Blog
                            </a>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-5">
                            <a href="#" className="text-[17px] font-medium text-brand-dark hover:text-[var(--color-brand-purple)] transition-colors">
                                Contact
                            </a>
                            <a href="#" className="text-[17px] font-medium text-brand-dark hover:text-[var(--color-brand-purple)] transition-colors">
                                X (Twitter)
                            </a>
                            <a href="#" className="text-[17px] font-medium text-brand-dark hover:text-[var(--color-brand-purple)] transition-colors">
                                LinkedIn
                            </a>
                        </div>

                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <div className="border-t border-grid-line px-8 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[15px] text-gray-500">
                    <p>
                        © {new Date().getFullYear()} <span className="text-[var(--color-brand-purple)] hover:text-brand-dark transition-colors cursor-pointer">Barons Digital</span>. All rights reserved.
                    </p>
                    <p>
                        Designed for the future of work.
                    </p>
                </div>

            </div>
        </footer>
    )
}