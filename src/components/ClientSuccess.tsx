"use client"

import { motion } from "framer-motion"

export default function ClientSuccess() {
    return (
        // Section has border-b ONLY to prevent double lines with the previous section
        <section className="w-full bg-background flex flex-col items-center border-b border-grid-line">

            {/* 1200px Grid Container - Exact 805px height enforced on desktop */}
            <div className="w-full max-w-[1200px] lg:h-[805px] border-x border-grid-line flex flex-col lg:flex-row">

                {/* LEFT COLUMN: Content & Metrics */}
                <div className="w-full lg:w-1/2 flex flex-col border-b lg:border-b-0 lg:border-r border-grid-line">

                    {/* Top Header Area */}
                    <div className="px-8 lg:px-12 pt-[80px]">
                        <span className="text-[var(--color-brand-purple)] text-[12px] font-bold uppercase tracking-wider block mb-[28px]">
                            Client Success
                        </span>
                        <h3 className="text-3xl md:text-[40px] lg:text-[48px] font-semibold text-brand-dark leading-[1.1em] tracking-tight mb-[16px]">
                            Real results from real teams.
                        </h3>
                        <p className="text-[16px] text-gray-500 max-w-sm leading-relaxed">
                            Don't just take our word for it. See how we've helped companies scale their operations on autopilot.
                        </p>
                    </div>

                    {/* Middle Quote Area */}
                    {/* flex-1 allows this to stretch and center perfectly between the header and the grid */}
                    <div className="px-8 lg:px-12 flex-1 flex flex-col justify-center py-12 lg:py-0">
                        <motion.blockquote
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl lg:text-[32px] font-medium text-brand-dark leading-[1.3em] tracking-tight mb-6"
                        >
                            "Since partnering with Agentik, our sales team no longer does manual outreach. The AI agents handle the top of the funnel, qualifying leads perfectly."
                        </motion.blockquote>

                        {/* 12px Name and Title */}
                        <div className="flex flex-col">
                            <span className="text-[12px] font-bold text-gray-800 tracking-wide uppercase">
                                Johnathan Doe
                            </span>
                            <span className="text-[12px] text-gray-400 font-semibold tracking-wide uppercase mt-0.5">
                                Operations Director at Scale
                            </span>
                        </div>
                    </div>

                    {/* Bottom Facts Grid */}
                    <div className="grid grid-cols-3 w-full h-[120px] shrink-0 border-t border-grid-line">

                        {/* Fact 1 */}
                        <div className="flex flex-col justify-center px-6 lg:px-8 border-r border-grid-line">
                            <span className="text-2xl lg:text-3xl font-semibold text-brand-dark">50+</span>
                            <span className="text-[10px] lg:text-[12px] text-gray-500 font-medium uppercase tracking-wide mt-1 leading-tight">
                                Hours saved<br />per week
                            </span>
                        </div>

                        {/* Fact 2 */}
                        <div className="flex flex-col justify-center px-6 lg:px-8 border-r border-grid-line">
                            <span className="text-2xl lg:text-3xl font-semibold text-brand-dark">2.5x</span>
                            <span className="text-[10px] lg:text-[12px] text-gray-500 font-medium uppercase tracking-wide mt-1 leading-tight">
                                Pipeline<br />velocity
                            </span>
                        </div>

                        {/* Fact 3 */}
                        <div className="flex flex-col justify-center px-6 lg:px-8">
                            <span className="text-2xl lg:text-3xl font-semibold text-brand-dark">98%</span>
                            <span className="text-[10px] lg:text-[12px] text-gray-500 font-medium uppercase tracking-wide mt-1 leading-tight">
                                Lead<br />accuracy
                            </span>
                        </div>

                    </div>
                </div>

                {/* RIGHT COLUMN: Image */}
                {/* We use standard padding to frame the image beautifully inside the architectural grid */}
                <div className="w-full lg:w-1/2 h-[400px] lg:h-full p-6 lg:p-12 bg-background flex flex-col relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full rounded-2xl overflow-hidden relative shadow-sm border border-grid-line/50"
                    >
                        {/* Drop your client image in the public/images folder.
              Later, Sanity CMS will replace this src string.
            */}
                        <img
                            src="/images/client-success-1.jpg"
                            alt="Client Success Story"
                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    )
}