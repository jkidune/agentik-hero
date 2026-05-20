// src/app/page.tsx
import HeroSection from "@/src/components/HeroSection"
import ServicesSection from "@/src/components/ServicesSection"
import StepsSection from "@/src/components/StepsSection"
import ClientSuccess from "@/src/components/ClientSuccess"
import FeaturesSection from "@/src/components/FeaturesSection"
import PricingSection from "@/src/components/PricingSection"
import BlogSection from "@/src/components/BlogSection"
import FAQSection from "@/src/components/FAQSection"
import FooterSection from "@/src/components/FooterSection"

export default function Home() {
  return (
    <main className="w-full bg-background overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <StepsSection />
      <ClientSuccess />
      <FeaturesSection />
      <PricingSection />
      <BlogSection />
      <FAQSection />
      <FooterSection />
    </main>
  )
}