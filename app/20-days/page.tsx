"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function TwentyDaysFunnelPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      email: formData.get("email"),
    }

    try {
      await fetch(
        "https://services.leadconnectorhq.com/hooks/9ioDUu7jv9gdOyWXXhG6/webhook-trigger/26416f6b-6c89-4d8d-8d23-1103c3039794",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      )
      setIsSuccess(true)
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
              <span className="text-white">20 DAYS,</span>
              <br />
              <span className="text-yellow-500">20 WAYS</span>
              <br />
              <span className="text-white">TO ENGINEER YOUR</span>
              <br />
              <span className="text-white">PERFECT BODY</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto text-balance">
              Get the exact system I use with my clients to build muscle, burn fat, and transform their bodies—without
              spending hours in the gym.
            </p>
          </div>

          {/* Email Capture Form */}
          <div className="max-w-md mx-auto space-y-6">
            {isSuccess ? (
              <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-6">
                <p className="text-yellow-500 font-semibold">Success! Check your email for instant access.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  className="h-14 bg-white/10 border-yellow-500/50 text-white placeholder:text-gray-500 text-lg focus:border-yellow-500"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="h-14 bg-white/10 border-yellow-500/50 text-white placeholder:text-gray-500 text-lg focus:border-yellow-500"
                  required
                />
                <Button
                  type="submit"
                  className="w-full h-14 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SUBMITTING..." : "GET INSTANT ACCESS"}
                </Button>
              </form>
            )}

            <p className="text-sm text-gray-500">No spam. Unsubscribe anytime. Your email is safe with us.</p>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="text-gray-400">Trusted by 500+ clients</p>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Here's What You'll Get:</h2>

          <div className="space-y-6">
            {[
              "Day-by-day blueprint to maximize fat loss and muscle gain",
              "Science-backed nutrition strategies that actually work",
              "Training techniques used by professional athletes",
              "Meal timing secrets to optimize your metabolism",
              "Recovery protocols to prevent burnout and injury",
              "Supplement guide—what works and what's a waste of money",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Ready to Engineer Your Perfect Body?</h2>

          <p className="text-xl text-gray-400">
            Join hundreds of people who've already transformed their bodies with this proven system.
          </p>

          <div className="max-w-md mx-auto space-y-4">
            {isSuccess ? (
              <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-6">
                <p className="text-yellow-500 font-semibold">Success! Check your email for instant access.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  className="h-14 bg-white/10 border-yellow-500/50 text-white placeholder:text-gray-500 text-lg focus:border-yellow-500"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="h-14 bg-white/10 border-yellow-500/50 text-white placeholder:text-gray-500 text-lg focus:border-yellow-500"
                  required
                />
                <Button
                  type="submit"
                  className="w-full h-14 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SUBMITTING..." : "GET INSTANT ACCESS"}
                </Button>
              </form>
            )}

            <p className="text-sm text-gray-500">100% FREE • No credit card required</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500">© 2025 Ameer B Fitness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
