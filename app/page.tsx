import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FreeResourcesSection } from "@/components/free-resources-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <PricingSection />
      <FreeResourcesSection />
      <Footer />
    </main>
  )
}
