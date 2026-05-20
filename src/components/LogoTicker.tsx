"use client"
import { motion } from "framer-motion"

const logos = ["umbrella", "waveless", "Scale", "monochrome", "SnapShot"]

export default function LogoTicker() {
  return (
    <div className="w-full h-[88px] py-[20px] flex items-center gap-8 relative overflow-hidden">
      
      {/* 40px left padding and 14px text as requested */}
      <p className="text-[14px] text-gray-400 whitespace-nowrap min-w-max hidden md:block pl-[40px] shrink-0 leading-tight">
        Transforming companies <br/> around the globe:
      </p>
      
      {/* Fade edges */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden relative w-full h-full items-center">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex items-center gap-16 whitespace-nowrap px-8"
        >
          {/* Double array for seamless looping */}
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-2xl font-bold text-gray-300 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md border-2 border-gray-300 flex items-center justify-center text-xs">
                {logo.charAt(0)}
              </span>
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}