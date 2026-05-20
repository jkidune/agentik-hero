"use client"

import { motion } from "framer-motion"
import { 
  Mail, Calendar, TrendingUp, UserPlus 
} from "lucide-react"
import { 
  FaGithub, FaSlack, FaFigma, FaTrello, FaChrome 
} from "react-icons/fa6"
import HeroChatBox from "@/src/components/HeroChatBox"

// --- Sub-components for the Grid ---

const NotificationTicker = () => {
  const notifications = [
    { icon: Mail, title: "Email Sent", desc: "Follow up sent to John Doe", color: "text-blue-500" },
    { icon: Calendar, title: "Meeting Booked", desc: "Demo scheduled for Tuesday", color: "text-purple-500" },
    { icon: TrendingUp, title: "Lead Scored", desc: "New high-intent lead captured", color: "text-green-500" },
    { icon: UserPlus, title: "CRM Updated", desc: "Contact info synced to Hubspot", color: "text-orange-500" },
  ]

  const loopingItems = [...notifications, ...notifications, ...notifications]

  return (
    <div 
      className="relative flex-1 w-full overflow-hidden mt-6"
      style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}
    >
      <motion.div
        animate={{ y: [0, -400] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        className="flex flex-col gap-3 absolute w-full"
      >
        {loopingItems.map((item, i) => {
          const Icon = item.icon
          return (
            // Cards remain white to pop off the F5F5F5 background
            <div key={i} className="flex items-center gap-4 bg-white border border-gray-200 p-3 shadow-chat-box">
              <div className={`p-2 rounded-full bg-gray-50 shadow-sm border border-gray-100 ${item.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] font-bold text-brand-dark">{item.title}</span>
                <span className="text-[10px] text-gray-500">{item.desc}</span>
              </div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

const HorizontalIconTicker = () => {
  const icons = [FaGithub, FaSlack, FaFigma, FaTrello, FaChrome]
  const loopingIcons = [...icons, ...icons, ...icons]

  return (
    <div 
      className="relative w-full overflow-hidden mt-4"
      style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
    >
      <motion.div
        animate={{ x: [0, -300] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        className="flex items-center gap-4 w-max"
      >
        {loopingIcons.map((Icon, i) => (
          // Icons remain white to pop off the F5F5F5 background
          <div key={i} className="w-12 h-12 rounded-full bg-white shadow-chat-box flex items-center justify-center border border-gray-200 shrink-0">
            <Icon className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const AudioWaveform = () => {
  return (
    <div className="flex items-center gap-1 h-12 w-full mt-4">
      {[...Array(24)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ height: ["20%", "100%", "40%", "80%", "30%"] }}
          transition={{
            repeat: Infinity,
            duration: 1.5 + (i * 0.05),
            ease: "easeInOut",
            delay: i * 0.05,
            repeatType: "mirror"
          }}
          className="w-1.5 bg-[var(--color-brand-purple)] opacity-80"
        />
      ))}
    </div>
  )
}

// --- Main Service Section Component ---

export default function ServicesSection() {
  return (
    // FULL WIDTH BORDERS: border-y border-grid-line ensures the top and bottom stretch across the whole browser
    <section className="w-full bg-background flex flex-col items-center border-y border-grid-line">
      
      {/* 1200px locked inner container with vertical borders */}
      <div className="w-full max-w-[1200px] border-x border-grid-line flex flex-col pt-24 pb-12">
        
        {/* Header Area (Perfectly Centered) */}
        <div className="flex flex-col items-center text-center px-6 md:px-10 mb-16">
          <span className="text-[var(--color-brand-purple)] text-[12px] font-bold uppercase tracking-wider mb-4">
            What we do
          </span>
          <h2 className="text-4xl md:text-[56px] font-semibold text-brand-dark leading-[1.1em] tracking-tight max-w-2xl">
            AI workflows that run themselves.
          </h2>
          <p className="text-[16px] text-gray-500 max-w-xl leading-relaxed mt-6">
            Stop wasting time on repetitive tasks. We build intelligent systems that handle your outreach, data, and communications on autopilot.
          </p>
        </div>

        {/* Architectural Grid 
          Exactly 436px high on desktop. 
          No bg-colors, strictly inheriting the F5F5F5 background.
        */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 md:h-[436px] border-y border-grid-line">
          
          {/* Column 1: Full Height (Automated Outreach) */}
          <div className="border-b md:border-b-0 md:border-r border-grid-line p-8 flex flex-col overflow-hidden relative">
            <h5 className="text-xl font-semibold text-brand-dark mb-2">Automated Outreach</h5>
            <p className="text-[16px] text-gray-500 leading-relaxed">Personalized emails and follow-ups sent exactly at the right moment.</p>
            <NotificationTicker />
          </div>

          {/* Column 2: Split into 2 Rows */}
          <div className="border-b md:border-b-0 md:border-r border-grid-line flex flex-col">
            
            {/* Top Row: Integrations */}
            <div className="flex-1 border-b border-grid-line p-8 flex flex-col justify-center overflow-hidden">
              <h5 className="text-xl font-semibold text-brand-dark mb-2">Seamless Integrations</h5>
              <p className="text-[16px] text-gray-500 leading-relaxed truncate">Connects instantly with your stack.</p>
              <HorizontalIconTicker />
            </div>

            {/* Bottom Row: Voice Agents */}
            <div className="flex-1 p-8 flex flex-col justify-center overflow-hidden">
              <h5 className="text-xl font-semibold text-brand-dark mb-2">24/7 Voice Agents</h5>
              <p className="text-[16px] text-gray-500 leading-relaxed truncate">Inbound & outbound calling.</p>
              <AudioWaveform />
            </div>
          </div>

          {/* Column 3: Full Height (Lead Intelligence) */}
          <div className="p-8 flex flex-col overflow-hidden relative">
            <h5 className="text-xl font-semibold text-brand-dark mb-2">Lead Intelligence</h5>
            <p className="text-[16px] text-gray-500 leading-relaxed">Our agents qualify leads and drop them straight into your pipeline.</p>
            
            {/* Chatbox positioned properly within the cell */}
            <div className="flex-1 flex justify-center items-end mt-6 pb-4">
              <div className="w-full max-w-[320px] transform origin-bottom scale-90 md:scale-100">
                <HeroChatBox />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}