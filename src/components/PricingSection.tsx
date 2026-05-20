"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import LiquidGradient from "@/src/components/LiquidGradient"

export default function PricingSection() {
    const [isAnnual, setIsAnnual] = useState(true)

    return (
        // Section border-b applied here
        <section className="w-full bg-background flex flex-col items-center border-b border-grid-line">

            {/* 1200px Grid Container */}
            <div className="w-full max-w-[1200px] border-x border-grid-line flex flex-col">

                {/* Header Area */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end px-8 lg:px-12 py-[80px] gap-10 border-b border-grid-line">

                    <div className="flex flex-col max-w-xl">
                        <span className="text-[var(--color-brand-purple)] text-[12px] font-bold uppercase tracking-wider mb-6">
                            Pricing
                        </span>
                        <h2 className="text-4xl md:text-[56px] font-semibold text-brand-dark leading-[1.1em] tracking-tight mb-4">
                            Simple, transparent pricing.
                        </h2>
                        <p className="text-[16px] text-gray-500 leading-relaxed">
                            Choose the plan that best fits your needs. Scale up as your autonomous operations grow.
                        </p>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex items-center gap-4 pb-2 relative shrink-0">
                        <span className={`text-[15px] font-semibold transition-colors duration-300 ${!isAnnual ? "text-brand-dark" : "text-gray-400"}`}>
                            Monthly
                        </span>

                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative w-14 h-7 bg-gray-200 rounded-full flex items-center px-1 cursor-pointer transition-colors hover:bg-gray-300"
                        >
                            <motion.div
                                layout
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className="w-5 h-5 bg-white rounded-full shadow-sm"
                                style={{ x: isAnnual ? 28 : 0 }}
                            />
                        </button>

                        <span className={`text-[15px] font-semibold transition-colors duration-300 ${isAnnual ? "text-brand-dark" : "text-gray-400"}`}>
                            Annually
                        </span>

                        {/* Save 20% Badge */}
                        <div className="absolute -top-6 right-0 bg-[var(--color-brand-purple)] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                            Save 20%
                        </div>
                    </div>

                </div>

                {/* 3 Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full">

                    {/* Column 1: Growth */}
                    <div className="flex flex-col p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-grid-line">
                        <h5 className="text-xl font-semibold text-brand-dark mb-4">Growth</h5>
                        <div className="flex items-end gap-1 mb-4">
                            <span className="text-[48px] font-semibold text-brand-dark leading-none tracking-tight">
                                ${isAnnual ? "799" : "999"}
                            </span>
                            <span className="text-gray-500 font-medium pb-1">/mo</span>
                        </div>
                        <p className="text-[16px] text-gray-500 leading-relaxed mb-8 h-12">
                            Perfect for small teams getting started with AI automation.
                        </p>

                        <button className="w-full bg-brand-dark text-white py-3.5 rounded-xl font-medium shadow-heavy-button transition-all duration-300 hover:bg-[var(--color-brand-purple)] hover:shadow-glow-button hover:-translate-y-0.5 cursor-pointer mb-8">
                            Get started
                        </button>

                        <span className="text-[12px] font-bold text-brand-dark uppercase tracking-wider mb-4">
                            What's included
                        </span>
                        <ul className="flex flex-col gap-3">
                            {["2 AI Agents", "1,000 interactions / mo", "Basic CRM Sync", "Email Support"].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-[15px] text-gray-600">
                                    <Check className="w-4 h-4 text-[var(--color-brand-purple)] shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Scale */}
                    <div className="flex flex-col p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-grid-line">
                        <h5 className="text-xl font-semibold text-brand-dark mb-4">Scale</h5>
                        <div className="flex items-end gap-1 mb-4">
                            <span className="text-[48px] font-semibold text-brand-dark leading-none tracking-tight">
                                ${isAnnual ? "1,999" : "2,499"}
                            </span>
                            <span className="text-gray-500 font-medium pb-1">/mo</span>
                        </div>
                        <p className="text-[16px] text-gray-500 leading-relaxed mb-8 h-12">
                            For growing companies that need high-volume automated workflows.
                        </p>

                        <button className="w-full bg-brand-dark text-white py-3.5 rounded-xl font-medium shadow-heavy-button transition-all duration-300 hover:bg-[var(--color-brand-purple)] hover:shadow-glow-button hover:-translate-y-0.5 cursor-pointer mb-8">
                            Get started
                        </button>

                        <span className="text-[12px] font-bold text-brand-dark uppercase tracking-wider mb-4">
                            Everything in Growth, plus:
                        </span>
                        <ul className="flex flex-col gap-3">
                            {["10 AI Agents", "10,000 interactions / mo", "Advanced Integrations", "Dedicated Slack Channel"].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-[15px] text-gray-600">
                                    <Check className="w-4 h-4 text-[var(--color-brand-purple)] shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Enterprise (Shader Background) */}
                    <div className="relative flex flex-col p-8 lg:p-12 overflow-hidden group">

                        {/* Liquid Shader Background absolute positioned behind content */}
                        <div className="absolute inset-0 z-0">
                            <LiquidGradient />
                            {/* Subtle dark overlay to ensure white text is always perfectly readable against the shader */}
                            <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply" />
                        </div>

                        {/* Content sitting on top of the shader */}
                        <div className="relative z-10 flex flex-col h-full">
                            <h5 className="text-xl font-semibold text-white mb-4">Enterprise</h5>
                            <div className="flex items-end gap-1 mb-4">
                                <span className="text-[48px] font-semibold text-white leading-none tracking-tight">
                                    Custom
                                </span>
                            </div>
                            <p className="text-[16px] text-white/80 leading-relaxed mb-8 h-12">
                                Custom infrastructure and unlimited scaling for large teams.
                            </p>

                            <button className="w-full bg-white text-brand-dark py-3.5 rounded-xl font-semibold shadow-xl transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 cursor-pointer mb-8">
                                Contact Sales
                            </button>

                            <span className="text-[12px] font-bold text-white uppercase tracking-wider mb-4">
                                Everything in Scale, plus:
                            </span>
                            <ul className="flex flex-col gap-3">
                                {["Unlimited AI Agents", "Unlimited interactions", "Custom AI Training", "24/7 Phone Support"].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[15px] text-white/90">
                                        <Check className="w-4 h-4 text-white shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}