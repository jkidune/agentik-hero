"use client"

import { motion } from "framer-motion"
import { Mic, CheckCircle2, TrendingUp, Calendar, ArrowRight } from "lucide-react"

// --- The Exact Hero Button Implementation ---
const AnimatedFeatureButton = () => {
    return (
        <motion.button
            className="relative overflow-hidden w-full sm:w-auto flex items-center justify-center bg-brand-dark text-white px-7 py-3.5 rounded-xl font-medium shadow-heavy-button transition-all duration-300 hover:bg-[var(--color-brand-purple)] hover:shadow-glow-button hover:-translate-y-0.5 cursor-pointer shrink-0"
            initial="initial"
            whileHover="hover"
        >
            <div className="relative flex items-center gap-2 overflow-hidden h-6">
                <motion.div
                    className="absolute inset-0 flex items-center gap-2 whitespace-nowrap text-white"
                    variants={{ initial: { y: "150%" }, hover: { y: "0%" } }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    Explore all features <ArrowRight className="w-4 h-4" />
                </motion.div>

                <motion.div
                    className="flex items-center gap-2 whitespace-nowrap"
                    variants={{ initial: { y: "0%" }, hover: { y: "-150%" } }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    Explore all features <ArrowRight className="w-4 h-4" />
                </motion.div>
            </div>
        </motion.button>
    )
}

// --- Visual Component 1: Orbiting Emoticons (No Center Icon) ---
const CurvedSentiment = () => {
    const emojis = ["😠", "😐", "🙂", "🤩", "🤔", "🙌"]

    return (
        // Light purple background
        <div className="relative w-full h-[220px] flex items-center justify-center bg-[#E3E7FF] rounded-2xl overflow-hidden shrink-0">

            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-40 h-40"
            >
                {emojis.map((emoji, i) => {
                    // Calculate perfect curved positioning
                    const angle = (i / emojis.length) * Math.PI * 2
                    const radius = 76 // Distance to create the curved ring
                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius

                    return (
                        <motion.div
                            key={i}
                            // Counter-rotate so the emojis always stay right-side up
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-xl"
                            style={{
                                left: `calc(50% + ${x}px)`,
                                top: `calc(50% + ${y}px)`,
                                x: "-50%",
                                y: "-50%"
                            }}
                        >
                            {emoji}
                        </motion.div>
                    )
                })}
            </motion.div>

        </div>
    )
}

// --- Visual Component 2: Audio Waves ---
const FloatingAudio = () => {
    return (
        <div className="relative w-full h-[220px] flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden shrink-0">

            {/* Animated Audio Waves */}
            <div className="flex items-center gap-1.5 opacity-60">
                {[...Array(16)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: ["12px", "48px", "16px", "32px", "12px"] }}
                        transition={{
                            duration: 1.5 + Math.random(),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.05
                        }}
                        className="w-1.5 bg-[var(--color-brand-purple)] rounded-full"
                    />
                ))}
            </div>

            {/* Floating Center Icon with subtle shadow */}
            <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bg-white w-14 h-14 rounded-full shadow-md flex items-center justify-center z-10"
            >
                <Mic className="w-6 h-6 text-brand-dark" />
            </motion.div>

        </div>
    )
}

// --- Visual Component 3: Soft Notification Ticker ---
const SeamlessNotifications = () => {
    const notifications = [
        { icon: CheckCircle2, title: "Deal Closed", desc: "Contract signed by Acme Corp", color: "text-green-500", bg: "bg-green-50" },
        { icon: TrendingUp, title: "Lead Scored", desc: "New high-intent lead in CRM", color: "text-blue-500", bg: "bg-blue-50" },
        { icon: Calendar, title: "Meeting Set", desc: "Demo scheduled for 2:00 PM", color: "text-purple-500", bg: "bg-purple-50" },
    ]

    const loopingItems = [...notifications, ...notifications, ...notifications]

    return (
        // Fading Top & Bottom for Seamless effect
        <div
            className="relative w-full h-[220px] flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden shrink-0"
            style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}
        >
            <motion.div
                animate={{ y: [0, -320] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="flex flex-col gap-3 absolute top-8 w-full px-6"
            >
                {loopingItems.map((item, i) => {
                    const Icon = item.icon
                    return (
                        // Soft rounded corners, explicit shadow, no borders
                        <div key={i} className="bg-white p-3 rounded-2xl shadow-sm flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${item.bg} ${item.color}`}>
                                <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[12px] font-bold text-brand-dark">{item.title}</span>
                                <span className="text-[10px] text-gray-500 truncate">{item.desc}</span>
                            </div>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}

// --- Main Section Component ---
export default function FeaturesSection() {
    return (
        // Section strictly has bottom border only
        <section className="w-full bg-background flex flex-col items-center border-b border-grid-line">

            {/* 1200px Grid Container with Left/Right Borders */}
            <div className="w-full max-w-[1200px] border-x border-grid-line flex flex-col">

                {/* Header Area */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-12 py-[80px] gap-8">

                    <div className="flex flex-col max-w-xl">
                        <span className="text-[var(--color-brand-purple)] text-[12px] font-bold uppercase tracking-wider mb-6">
                            Platform Features
                        </span>
                        <h2 className="text-4xl md:text-[56px] font-semibold text-brand-dark leading-[1.1em] tracking-tight mb-4">
                            Everything you need. Nothing you don't.
                        </h2>
                        <p className="text-[16px] text-gray-500 leading-relaxed">
                            A complete suite of autonomous tools designed to replace your manual outreach, qualification, and data-entry processes.
                        </p>
                    </div>

                    {/* Corrected Hero Button with Arrow */}
                    <div className="pb-1">
                        <AnimatedFeatureButton />
                    </div>

                </div>

                {/* 3 Column Grid separated from header by top border */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-grid-line w-full">

                    {/* Column 1: Component First, then Text */}
                    <div className="flex flex-col p-8 lg:p-10 border-b md:border-b-0 md:border-r border-grid-line h-auto md:h-[480px]">
                        <CurvedSentiment />
                        <h5 className="text-xl font-semibold text-brand-dark mt-8 mb-2">Sentiment Intelligence</h5>
                        <p className="text-[16px] text-gray-500 leading-relaxed">
                            Our agents read the emotional tone of a conversation and escalate frustrated prospects directly to human reps.
                        </p>
                    </div>

                    {/* Column 2: Component First, then Text */}
                    <div className="flex flex-col p-8 lg:p-10 border-b md:border-b-0 md:border-r border-grid-line h-auto md:h-[480px]">
                        <FloatingAudio />
                        <h5 className="text-xl font-semibold text-brand-dark mt-8 mb-2">Hyper-realistic Voice</h5>
                        <p className="text-[16px] text-gray-500 leading-relaxed">
                            Sub-500ms latency voice agents that sound indistinguishable from a real human, complete with natural pauses.
                        </p>
                    </div>

                    {/* Column 3: Component First, then Text */}
                    <div className="flex flex-col p-8 lg:p-10 h-auto md:h-[480px]">
                        <SeamlessNotifications />
                        <h5 className="text-xl font-semibold text-brand-dark mt-8 mb-2">Zero-touch Actions</h5>
                        <p className="text-[16px] text-gray-500 leading-relaxed">
                            When a lead qualifies, the agent automatically updates your CRM, sends calendar links, and notifies Slack.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}