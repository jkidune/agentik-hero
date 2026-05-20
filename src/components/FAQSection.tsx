"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

// --- FAQ Data ---
const faqs = [
    {
        question: "How long does it take to get set up?",
        answer: "Most clients are fully up and running within 2-4 weeks. It depends on the complexity of your workflows, but we move fast and keep you in the loop at every stage."
    },
    {
        question: "Do I need any technical knowledge?",
        answer: "Not at all. Our team handles the heavy lifting, from initial setup to ongoing maintenance. We build everything to be intuitive for you and your team."
    },
    {
        question: "Will AI replace my team?",
        answer: "No, our AI tools are designed to augment your team, handling repetitive tasks so your employees can focus on high-value, strategic work."
    },
    {
        question: "What tools do you integrate with?",
        answer: "We integrate with hundreds of popular platforms including Salesforce, HubSpot, Slack, Gmail, and custom internal tools via API."
    },
    {
        question: "What if it doesn't work for my business?",
        answer: "We offer a thorough discovery phase to ensure a good fit before any commitment, and provide ongoing support to adapt the solution as needed."
    },
    {
        question: "Can I switch plans later?",
        answer: "Absolutely. You can upgrade or downgrade your plan at any time as your business needs evolve. We make scaling painless."
    },
    {
        question: "How do I get started?",
        answer: "Simply reach out through our contact form or book a call. We'll schedule a quick discovery meeting to discuss your exact needs and map out a solution."
    }
]

export default function FAQSection() {
    // Store the index of the currently open FAQ. Null means all are closed.
    const [openIndex, setOpenIndex] = useState<number | null>(0) // Default to first item open to match reference

    return (
        // Section wrapper with bottom border
        <section className="w-full bg-background flex flex-col items-center border-b border-grid-line">

            {/* 1200px Grid Container with Left/Right Borders */}
            <div className="w-full max-w-[1200px] border-x border-grid-line flex flex-col">

                {/* Center-Aligned Header Area */}
                <div className="flex flex-col items-center text-center px-6 md:px-12 py-[100px] border-b border-grid-line">

                    <span className="text-[var(--color-brand-purple)] text-[12px] font-bold uppercase tracking-wider mb-6">
                        FAQS
                    </span>

                    <h2 className="text-4xl md:text-[56px] font-semibold text-brand-dark leading-[1.1em] tracking-tight mb-4 max-w-2xl">
                        Clearing all doubts and concerns
                    </h2>

                    <p className="text-[16px] text-gray-500 leading-relaxed max-w-[500px]">
                        Everything you need to know before getting started with us. Below are our most common questions we get asked.
                    </p>

                </div>

                {/* FAQ Accordion List */}
                <div className="flex flex-col w-full">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index

                        return (
                            <div
                                key={index}
                                className="flex flex-col border-b border-grid-line last:border-b-0 bg-background"
                            >
                                {/* Clickable Question Header */}
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex items-center justify-between w-full py-7 px-6 md:px-12 text-left cursor-pointer group transition-colors hover:bg-gray-50/50"
                                >
                                    <span className="text-[17px] md:text-[19px] font-medium text-brand-dark pr-8">
                                        {faq.question}
                                    </span>

                                    {/* Plus Icon that rotates into an 'X' */}
                                    <motion.div
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-[var(--color-brand-purple)] shrink-0"
                                    >
                                        <Plus className="w-5 h-5 stroke-[2px]" />
                                    </motion.div>
                                </button>

                                {/* Animated Answer Body */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-8 px-6 md:px-12 text-[15px] md:text-[16px] text-gray-500 leading-relaxed max-w-3xl">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}