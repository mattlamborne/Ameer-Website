"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 border-b border-yellow-500/20 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="relative">
              <img
                src="/images/design-mode/Primary%20Logo.png"
                alt="AB Fitness Logo"
                className="h-14 w-auto drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-yellow-500/10 blur-xl rounded-full -z-10"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="#services" className="text-white hover:text-yellow-400 transition-colors font-medium text-lg">
              Services
            </Link>
            <Link href="#about" className="text-white hover:text-yellow-400 transition-colors font-medium text-lg">
              About
            </Link>
            <Link
              href="#success-stories"
              className="text-white hover:text-yellow-400 transition-colors font-medium text-lg"
            >
              Success Stories
            </Link>
            <Link
              href="#free-resources"
              className="text-white hover:text-yellow-400 transition-colors font-medium text-lg"
            >
              Free Resources
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/1-on-1">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 text-lg shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-yellow-500/20 bg-black/20">
            <nav className="flex flex-col space-y-6">
              <Link
                href="#services"
                className="text-white hover:text-yellow-400 transition-colors font-medium text-lg px-4"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-white hover:text-yellow-400 transition-colors font-medium text-lg px-4"
              >
                About
              </Link>
              <Link
                href="#success-stories"
                className="text-white hover:text-yellow-400 transition-colors font-medium text-lg px-4"
              >
                Success Stories
              </Link>
              <Link
                href="#free-resources"
                className="text-white hover:text-yellow-400 transition-colors font-medium text-lg px-4"
              >
                Free Resources
              </Link>
              <Link href="/1-on-1">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full mt-6 py-3 text-lg">
                  Start Your Journey
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
