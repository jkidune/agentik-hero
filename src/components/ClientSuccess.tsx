"use client"

import { motion } from "framer-motion"

export default function ClientSuccess() {
    return (
        // Section strictly has border-b ONLY
        <section className="w-full bg-background flex flex-col items-center border-b border-grid-line">

            {/* 1200px Grid Container - Exact 805px height strictly enforced */}
            <div className="w-full max-w-[1200px] h-auto lg:h-[805px] border-x border-grid-line flex flex-col lg:flex-row">

                {/* LEFT COLUMN: Full Bleed Image 
            Zero padding, zero border radius, flush with the grid lines.
        */}
                <div className="w-full lg:w-1/2 h-[400px] lg:h-[805px] border-b lg:border-b-0 lg:border-r border-grid-line relative bg-brand-dark overflow-hidden shrink-0">
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        src="/images/client-success-1.jpg"
                        alt="James Walker, COO at Greenfield Logistics"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* RIGHT COLUMN: Content & Metrics (Exactly 50% width) */}
                <div className="w-full lg:w-1/2 flex flex-col">

                    {/* Main Content Area (Flex-1 allows it to fill space above the grid) */}
                    <div className="flex-1 flex flex-col justify-center px-8 lg:px-[60px] py-16 lg:py-0">

                        {/* The Pill / Eyebrow */}
                        <span className="text-[var(--color-brand-purple)] text-[12px] font-bold uppercase tracking-wider block mb-6">
                            Client Success
                        </span>

                        {/* H3 Headline - Exact specs applied: 40px, -0.03em tracking, 1.4em leading, 40px bottom margin */}
                        <h3 className="text-[32px] lg:text-[40px] font-medium text-brand-dark tracking-[-0.03em] leading-[1.4em] mb-[40px]">
                            We had no idea where to start with AI. Now we're saving 30 hours a week.
                        </h3>

                        {/* Body Text */}
                        <p className="text-[16px] text-gray-500 leading-relaxed mb-[40px]">
                            We were drowning in manual processes and knew AI could help but didn't know how. They came in, learned our business in a week, and built automations that changed how our entire team works. Best investment we've made.
                        </p>

                        {/* 12px Name and Title */}
                        <div className="flex flex-col">
                            <span className="text-[12px] font-bold text-gray-800 tracking-wide uppercase">
                                James Walker
                            </span>
                            <span className="text-[12px] text-gray-500 font-semibold tracking-wide uppercase mt-1">
                                COO @ Greenfield Logistics
                            </span>
                        </div>

                    </div>

                    {/* Bottom Facts Grid: 2x2 Layout. 
              Each cell strictly hardcoded to 115.5px. Text centered.
          */}
                    <div className="grid grid-cols-2 grid-rows-2 w-full shrink-0 border-t border-grid-line">

                        {/* Cell 1: Top Left */}
                        <div className="h-[115.5px] flex flex-col justify-center items-center text-center px-4 border-r border-b border-grid-line">
                            <span className="text-3xl lg:text-[32px] font-medium text-brand-dark">30hr</span>
                            <span className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mt-2">
                                Saved Per Week
                            </span>
                        </div>

                        {/* Cell 2: Top Right */}
                        <div className="h-[115.5px] flex flex-col justify-center items-center text-center px-4 border-b border-grid-line">
                            <span className="text-3xl lg:text-[32px] font-medium text-brand-dark">$42k</span>
                            <span className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mt-2">
                                Saved Annually
                            </span>
                        </div>

                        {/* Cell 3: Bottom Left */}
                        <div className="h-[115.5px] flex flex-col justify-center items-center text-center px-4 border-r border-grid-line">
                            <span className="text-3xl lg:text-[32px] font-medium text-brand-dark">98%</span>
                            <span className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mt-2">
                                Customer Satisfaction
                            </span>
                        </div>

                        {/* Cell 4: Bottom Right */}
                        <div className="h-[115.5px] flex flex-col justify-center items-center text-center px-4">
                            <span className="text-3xl lg:text-[32px] font-medium text-brand-dark">3x</span>
                            <span className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mt-2">
                                Faster Response Time
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}