// src/app/page.tsx
import HeroSection from "@/src/components/HeroSection"
import ServicesSection from "@/src/components/ServicesSection"
import StepsSection from "@/src/components/StepsSection"

export default function Home() {
  return (
    <main className="w-full bg-background overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <StepsSection />
    </main>
  )
}