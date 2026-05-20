"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles, Paperclip, Image as ImageIcon, Mic } from "lucide-react"

export default function HeroChatBox() {
  const texts = [
    "I've cleared your inbox and drafted 5 replies",
    "47 new leads found and added to CRM",
    "Weekly performance report generated",
  ]

  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const target = texts[currentIndex]
    if (isTyping) {
      if (currentText.length < target.length) {
        const timeout = setTimeout(() => setCurrentText(target.slice(0, currentText.length + 1)), 50)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => setCurrentText(currentText.slice(0, -1)), 20)
        return () => clearTimeout(timeout)
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
      }
    }
  }, [currentText, isTyping, currentIndex, texts])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      // Updated for maximum fluid responsiveness 
      className="relative z-10 w-full max-w-md bg-white rounded-2xl p-4 sm:p-6 shadow-chat-box flex flex-col gap-4 sm:gap-6 mx-auto"
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <Sparkles className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
        <div className="flex-1 min-h-[20px] sm:min-h-[24px]">
          <span className="text-gray-800 text-[13px] sm:text-[15px] font-medium leading-relaxed">
            {currentText}
          </span>
          <span className="inline-block w-0.5 h-3 sm:h-4 bg-blue-500 ml-1 animate-pulse" />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-3 sm:pt-4 overflow-hidden">
        <div className="flex gap-2 sm:gap-4">
          <button className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-400 font-semibold hover:text-gray-700 transition-colors whitespace-nowrap">
            <Paperclip className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden min-[350px]:inline">ATTACH</span>
          </button>
          <button className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-400 font-semibold hover:text-gray-700 transition-colors whitespace-nowrap">
            <ImageIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden min-[350px]:inline">IMAGE</span>
          </button>
        </div>
        <button className="text-blue-500 hover:text-blue-600 transition-colors shrink-0 pl-2">
          <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </motion.div>
  )
}