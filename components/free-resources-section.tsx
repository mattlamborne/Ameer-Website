import { ExternalLink, Calculator, ShoppingCart, Utensils } from "lucide-react"

export function FreeResourcesSection() {
  const resources = [
    {
      title: "Grocery Guide",
      description: "Your complete guide to healthy shopping with the best bulk buys for your fitness goals",
      url: "https://costco.ameerbfit.com",
      icon: ShoppingCart,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Calorie Calculator",
      description: "Calculate your daily caloric needs and macros based on your goals and activity level",
      url: "https://caloriecalculator.ameerbfit.com",
      icon: Calculator,
      color: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Fast Food Guide",
      description: "Make smarter choices when eating out with our comprehensive fast food nutrition guide",
      url: "https://fastfoodguide.ameerbfit.com",
      icon: Utensils,
      color: "from-yellow-400 to-yellow-600",
    },
  ]

  return (
    <section id="free-resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">FREE RESOURCES</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our exclusive free tools to jumpstart your fitness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon
            return (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-black rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-800"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${resource.color} mb-6`}>
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                    {resource.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{resource.description}</p>

                  <div className="flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                    <span>Access Now!</span>
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
