"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// --- The Exact Requested Button Implementation ---
const AnimatedBlogButton = () => {
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
                    View more <ArrowRight className="w-4 h-4" />
                </motion.div>

                <motion.div
                    className="flex items-center gap-2 whitespace-nowrap"
                    variants={{ initial: { y: "0%" }, hover: { y: "-150%" } }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    View more <ArrowRight className="w-4 h-4" />
                </motion.div>
            </div>
        </motion.button>
    )
}

// --- Mock Data (Ready to be replaced by Sanity CMS) ---
const mockPosts = [
    {
        id: 1,
        title: "How we saved a logistics company 200 hours a month",
        category: "CASE STUDIES",
        author: "EMMANUEL KARURI",
        // Using placeholders that match the vibe
        authorImage: "https://i.pravatar.cc/150?u=emmanuel",
        coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Why voice agents are the next big thing for agencies",
        category: "TRENDS",
        author: "ADNAN SAMI",
        authorImage: "https://i.pravatar.cc/150?u=adnan",
        coverImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
    }
]

// --- Main Blog Section Component ---
export default function BlogSection() {
    return (
        // Section strictly has bottom border only to fit the flow
        <section className="w-full bg-background flex flex-col items-center border-b border-grid-line">

            {/* 1200px Grid Container with Left/Right Borders */}
            <div className="w-full max-w-[1200px] border-x border-grid-line flex flex-col">

                {/* Header Area */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-12 py-[80px] gap-8 border-b border-grid-line">

                    <div className="flex flex-col max-w-2xl">
                        <span className="text-[var(--color-brand-purple)] text-[12px] font-bold uppercase tracking-wider mb-6">
                            Blog
                        </span>
                        <h2 className="text-4xl md:text-[56px] font-semibold text-brand-dark leading-[1.1em] tracking-tight mb-4">
                            Insights to keep you ahead of the curve
                        </h2>
                        <p className="text-[16px] text-gray-500 leading-relaxed max-w-xl">
                            Practical guides, AI trends, and real strategies to help you get more from automation, written for business owners, not engineers.
                        </p>
                    </div>

                    {/* Re-used Animated Button Component */}
                    <div className="pb-1">
                        <AnimatedBlogButton />
                    </div>

                </div>

                {/* 2 Column Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">

                    {mockPosts.map((post, index) => (
                        <div
                            key={post.id}
                            className={`flex flex-col group cursor-pointer ${index === 0 ? "border-b md:border-b-0 md:border-r border-grid-line" : ""
                                }`}
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-[280px] lg:h-[340px] overflow-hidden bg-gray-100">
                                <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col flex-1 p-8 lg:p-10">
                                <h3 className="text-2xl lg:text-[28px] font-semibold text-brand-dark leading-[1.2em] mb-8 transition-colors group-hover:text-[var(--color-brand-purple)]">
                                    {post.title}
                                </h3>

                                {/* Meta Footer - Pushed to bottom using mt-auto */}
                                <div className="mt-auto flex items-center gap-3">
                                    <span className="text-[11px] font-bold text-gray-500 tracking-wider">
                                        {post.category}
                                    </span>

                                    <span className="w-1 h-1 rounded-full bg-gray-300" />

                                    <div className="flex items-center gap-2">
                                        <img
                                            src={post.authorImage}
                                            alt={post.author}
                                            // User requested subtle shadow directly on the profile image
                                            className="w-6 h-6 rounded-full object-cover shadow-sm ring-1 ring-gray-100"
                                        />
                                        <span className="text-[11px] font-bold text-gray-500 tracking-wider">
                                            {post.author}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}