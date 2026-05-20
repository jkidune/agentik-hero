"use client"

import { motion } from "framer-motion"
import { Sparkles, Phone } from "lucide-react"
import LiquidGradient from "@/src/components/LiquidGradient"
import HeroChatBox from "@/src/components/HeroChatBox"
import LogoTicker from "@/src/components/LogoTicker"


// --- Helper Components for Hover Interactions ---

const AnimatedLink = ({ text }: { text: string }) => {
  return (
    <motion.a 
      href="#" 
      className="relative flex items-center justify-center overflow-hidden h-6 font-semibold text-gray-600 text-sm cursor-pointer"
      initial="initial"
      whileHover="hover"
    >
      <motion.span 
        className="absolute inset-0 flex items-center justify-center text-[var(--color-brand-purple)]"
        variants={{ initial: { y: "100%" }, hover: { y: "0%" } }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {text}
      </motion.span>
      <motion.span
        className="flex items-center justify-center"
        variants={{ initial: { y: "0%" }, hover: { y: "-100%" } }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {text}
      </motion.span>
    </motion.a>
  )
}

const AnimatedPrimaryButton = () => {
  return (
    <motion.button 
      className="relative overflow-hidden w-full sm:w-auto flex items-center justify-center bg-brand-dark text-white px-7 py-3.5 rounded-xl font-medium shadow-heavy-button transition-all duration-300 hover:bg-[var(--color-brand-purple)] hover:shadow-glow-button hover:-translate-y-0.5 cursor-pointer"
      initial="initial"
      whileHover="hover"
    >
      <div className="relative flex items-center gap-2 overflow-hidden h-6">
        <motion.div 
          className="absolute inset-0 flex items-center gap-2 whitespace-nowrap text-white"
          variants={{ initial: { y: "150%" }, hover: { y: "0%" } }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Phone className="w-4 h-4" /> Book a free consultation
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-2 whitespace-nowrap"
          variants={{ initial: { y: "0%" }, hover: { y: "-150%" } }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Phone className="w-4 h-4" /> Book a free consultation
        </motion.div>
      </div>
    </motion.button>
  )
}

const AnimatedSecondaryButton = () => {
  return (
    <motion.button 
      className="relative overflow-hidden w-full sm:w-auto bg-white border border-gray-200 px-7 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition-colors cursor-pointer"
      initial="initial"
      whileHover="hover"
    >
      <div className="relative flex items-center justify-center overflow-hidden h-6">
        <motion.div 
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-[var(--color-brand-purple)]"
          variants={{ initial: { y: "150%" }, hover: { y: "0%" } }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          See how it works
        </motion.div>
        
        <motion.div 
          className="flex items-center justify-center whitespace-nowrap text-brand-dark"
          variants={{ initial: { y: "0%" }, hover: { y: "-150%" } }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          See how it works
        </motion.div>
      </div>
    </motion.button>
  )
}

// --- Main Hero Component ---

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col bg-background">
      
      {/* --- Full-Width Header Layer --- */}
      {/* The bottom border spans the entire width of the browser */}
      <div className="w-full border-b border-grid-line flex justify-center px-4 md:px-0">
        
        {/* The nav content stays locked to 1200px with side borders */}
        <nav className="h-20 w-full max-w-[1200px] flex items-center justify-between px-6 md:px-10 border-x border-grid-line">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-brand-dark p-1.5 rounded-lg shadow-lg">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">Agentik</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <AnimatedLink text="About" />
            <AnimatedLink text="Careers" />
            <AnimatedLink text="Blog" />
            <button className="bg-white border border-gray-200 px-5 py-2 rounded-full text-black hover:border-gray-300 transition-all shadow-sm text-sm font-semibold cursor-pointer">
              Contact
            </button>
          </div>
        </nav>
      </div>

      {/* --- Main Content Grid --- */}
      {/* 1200px locked width, filling the rest of the screen vertically */}
      <div className="flex-1 w-full max-w-[1200px] mx-auto flex flex-col border-x border-grid-line px-4 md:px-0">
        
        {/* Middle Layer (Content & Shader Split) */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 relative">
          
          {/* Left Column: Typography */}
          <div className="flex flex-col justify-center px-6 md:px-10 py-12 lg:py-0 border-b lg:border-b-0 border-grid-line">
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
              </span>
              <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                3 spots left for April
              </span>
            </div>

            <h1 
              className="text-5xl md:text-[68px] font-semibold text-brand-dark mb-6"
              style={{ lineHeight: '1.1em', letterSpacing: '-0.04em' }}
            >
              AI made easy so <br className="hidden md:block"/> your business <br className="hidden md:block"/> scales fast
            </h1>
            
            <p className="text-base text-gray-500 max-w-md mb-10 leading-relaxed">
              We help businesses implement AI tools and workflows that cut costs, save time, and drive real growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <AnimatedPrimaryButton />
              <AnimatedSecondaryButton />
            </div>
          </div>

          {/* Right Column: Media / Shader Container */}
          <div className="relative w-full h-[400px] lg:h-full lg:border-l border-grid-line overflow-hidden flex items-center justify-center">
            <LiquidGradient />
            <HeroChatBox />
          </div>
        </div>

        {/* Bottom Layer: Logo Ticker */}
        <div className="border-t border-grid-line shrink-0">
          <LogoTicker />
        </div>
        
      </div>
    </section>
  )
}