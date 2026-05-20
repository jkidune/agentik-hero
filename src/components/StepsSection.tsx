"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Mail, Database } from "lucide-react"
import { FaSlack, FaLinkedin, FaHubspot } from "react-icons/fa6"
import LiquidGradient from "@/src/components/LiquidGradient"
import HeroChatBox from "@/src/components/HeroChatBox"

const stepsData = [
    {
        id: "STEP 1",
        title: "Data Sync",
        description: "Connect your CRM, inbox, and tools. We pull your existing data and map out your workflows automatically.",
    },
    {
        id: "STEP 2",
        title: "AI Training",
        description: "Our agents analyze your past emails, call transcripts, and data points to match your exact brand voice and logic.",
    },
    {
        id: "STEP 3",
        title: "Workflow Automation",
        description: "Set up triggers. When a lead comes in, the agent qualifies them, drafts a reply, and updates your CRM instantly.",
    },
    {
        id: "STEP 4",
        title: "Autonomous Scaling",
        description: "Turn it on. Watch as the agents handle thousands of interactions 24/7 without you lifting a finger.",
    },
]

// --- Custom Animated Integration Hub for Step 2 ---
const IntegrationHub = ({ isActive }: { isActive: boolean }) => {
    return (
        <div className="relative w-full max-w-[360px] aspect-square">

            {/* SVG Layer for the Animated Lines */}
            <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 360 360">
                <motion.line
                    x1="180" y1="180" x2="60" y2="80"
                    stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
                <motion.line
                    x1="180" y1="180" x2="300" y2="80"
                    stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                />
                <motion.line
                    x1="180" y1="180" x2="60" y2="280"
                    stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                />
                <motion.line
                    x1="180" y1="180" x2="300" y2="280"
                    stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
                />
            </svg>

            {/* Center AI Node */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isActive ? 1 : 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[var(--color-brand-dark)] rounded-2xl border border-white/20 shadow-2xl flex items-center justify-center z-10"
            >
                <Sparkles className="text-[var(--color-brand-purple)] w-7 h-7" />
            </motion.div>

            {/* Outer Nodes (Solid bg, rounded corners) */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }} transition={{ delay: 0.3 }}
                className="absolute top-[56px] left-[36px] w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center z-10"
            >
                <FaSlack className="text-gray-800 w-6 h-6" />
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }} transition={{ delay: 0.5 }}
                className="absolute top-[56px] right-[36px] w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center z-10"
            >
                <Mail className="text-gray-800 w-6 h-6" />
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }} transition={{ delay: 0.7 }}
                className="absolute bottom-[56px] left-[36px] w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center z-10"
            >
                <Database className="text-gray-800 w-6 h-6" />
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }} transition={{ delay: 0.9 }}
                className="absolute bottom-[56px] right-[36px] w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center z-10"
            >
                <FaHubspot className="text-orange-500 w-6 h-6" />
            </motion.div>

        </div>
    )
}

export default function StepsSection() {
    const [activeStep, setActiveStep] = useState(0)

    return (
        <section className="w-full bg-background flex flex-col items-center border-b border-grid-line">

            <div className="w-full max-w-[1200px] border-x border-grid-line pt-[80px] flex flex-col">

                {/* Header Area */}
                <div className="flex flex-col items-center text-center px-6 md:px-10 mb-[40px]">
                    <span className="text-[var(--color-brand-purple)] text-[12px] font-bold uppercase tracking-wider mb-[28px]">
                        The Process
                    </span>
                    <h2 className="text-4xl md:text-[56px] font-semibold text-brand-dark leading-[1.1em] tracking-tight mb-[16px]">
                        How it works
                    </h2>
                    <p className="text-[16px] text-gray-500 max-w-xl leading-relaxed">
                        We don't just give you a tool. We build a custom infrastructure that plugs directly into the software you already use.
                    </p>
                </div>

                {/* Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-grid-line">

                    {/* Left Column: Interactive Steps List */}
                    <div className="flex flex-col lg:border-r border-grid-line">
                        {stepsData.map((step, index) => {
                            const isActive = activeStep === index

                            return (
                                <div
                                    key={step.id}
                                    onClick={() => setActiveStep(index)}
                                    className={`h-[209px] flex flex-col justify-center px-8 lg:px-12 border-b border-grid-line cursor-pointer transition-all duration-500 ${
                                        // Darker color (black with 5% opacity) for active state, fully transparent for inactive
                                        isActive ? "bg-black/5" : "bg-transparent hover:bg-black/5"
                                        }`}
                                >
                                    {/* Container fades out drastically when inactive */}
                                    <div className={`flex flex-col items-start transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-30"}`}>

                                        {/* The Pill - Only purple when active */}
                                        <span
                                            className={`text-[12px] font-bold tracking-wider mb-4 transition-colors duration-300 ${isActive ? "text-[var(--color-brand-purple)]" : "text-gray-400"
                                                }`}
                                        >
                                            {step.id}
                                        </span>

                                        {/* The H5 Headline */}
                                        <h5 className="text-xl font-semibold mb-2 text-brand-dark">
                                            {step.title}
                                        </h5>

                                        {/* The Body Paragraph */}
                                        <p className="text-[16px] leading-relaxed text-gray-600">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Right Column: Sticky Media Container */}
                    <div className="hidden lg:flex relative w-full h-full bg-brand-dark overflow-hidden items-center justify-center border-b border-grid-line p-12">

                        <LiquidGradient />

                        <div className="relative w-full max-w-[500px] h-[440px] flex items-center justify-center">
                            <AnimatePresence mode="wait">

                                {/* STEP 1: Video */}
                                {activeStep === 0 && (
                                    <motion.div
                                        key="step-1"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                                    >
                                        <video src="/videos/step-1.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
                                    </motion.div>
                                )}

                                {/* STEP 2: Custom SVG Integration Hub */}
                                {activeStep === 1 && (
                                    <motion.div
                                        key="step-2"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-2xl"
                                    >
                                        <IntegrationHub isActive={activeStep === 1} />
                                    </motion.div>
                                )}

                                {/* STEP 3: HeroChatBox */}
                                {activeStep === 2 && (
                                    <motion.div
                                        key="step-3"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-full flex justify-center items-center"
                                    >
                                        <div className="w-full max-w-[360px]">
                                            <HeroChatBox />
                                        </div>
                                    </motion.div>
                                )}

                                {/* STEP 4: Video */}
                                {activeStep === 3 && (
                                    <motion.div
                                        key="step-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                                    >
                                        <video src="/videos/step-4.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
                                    </motion.div>
                                )}

                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}