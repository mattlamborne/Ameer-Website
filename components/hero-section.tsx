"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/design-mode/DSC09683.png.jpeg"
          alt="Ameer in modern gym"
          className="w-full h-full object-cover object-center opacity-80"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white animate-fade-in-up">
            {/* Trust Indicators */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-200">500+ Transformations</span>
            </div>

            <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-white">
              FITNESS
              <br />
              <span className="text-yellow-400">ENGINEERED</span>
              <br />
              FOR YOU
            </h1>

            <p className="text-xl text-gray-200 mb-4 max-w-lg">Take the guesswork out of fitness.</p>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              By combining the latest scientific principles with in-the-trenches experience, I'll equip you with the
              tools you need to build the physique of your dreams, and{" "}
              <span className="text-yellow-400 font-semibold">keep it for life</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/1-on-1">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg group w-full sm:w-auto"
                >
                  Get More Information
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-500">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-gray-300">Clients Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">5+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"></div>
    </section>
  )
}
