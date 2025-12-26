import { Star } from "lucide-react"
import Image from "next/image"

export default function YouTubeLandingPage() {
  const transformationGallery = [
    { name: "Jesse", image: "/transformations/jesse-1.png" },
    { name: "Jacob", image: "/transformations/jacob-1.png" },
    { name: "Jesse", image: "/transformations/jesse-2.png" },
    { name: "Kevin", image: "/transformations/kevin-1.png" },
    { name: "Bill", image: "/transformations/bill-garrett-1.png" },
    { name: "Bron", image: "/transformations/bron-p.png" },
    { name: "Andrew", image: "/transformations/andrew-1.png" },
    { name: "Johnny", image: "/transformations/johny-p-1.png" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 border-b border-yellow-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="h-16"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="text-gray-400 text-sm">500+ Transformations</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight">
            Get <span className="text-yellow-500">Shredded</span> Without Endless Hours in the Gym in{" "}
            <span className="text-yellow-500">90 Days</span>, Guaranteed
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 text-center mb-12 leading-relaxed">
            Download my free guide and discover the exact system I use to help busy professionals build their dream
            physique—without living in the gym.
          </p>

          {/* Email Form */}
          <div className="bg-zinc-900 border border-yellow-500/20 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Get Your Free Guide Now</h2>
            <p className="text-gray-400 text-center mb-8">
              Enter your email below to receive instant access to the complete training system.
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors text-lg"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-yellow-500/20"
              >
                Download Free Guide
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-6">
              No spam. Unsubscribe anytime. Your information is 100% secure.
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">Trusted by 500+ clients worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
              <div className="text-2xl font-bold">RESULTS</div>
              <div className="text-2xl font-bold">PROVEN</div>
              <div className="text-2xl font-bold">GUARANTEED</div>
            </div>
          </div>

          {/* What You'll Get */}
          <div className="mt-20 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">What's Inside the Guide:</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "The 3-Day Training Split for Maximum Results",
                "Nutrition Blueprint for Sustainable Fat Loss",
                "Recovery Strategies to Accelerate Progress",
                "Supplement Guide (What Actually Works)",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-zinc-900/50 border border-yellow-500/10 rounded-lg p-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4">Real Results from Real Clients</h3>
            <p className="text-gray-400 text-center mb-12">
              See the transformations our clients have achieved with this exact system
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {transformationGallery.map((transformation, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={transformation.image || "/placeholder.svg"}
                    alt={`${transformation.name} transformation`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-yellow-500/10 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Ameer Bfit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
