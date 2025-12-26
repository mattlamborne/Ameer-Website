import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, MessageCircle, Trophy } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "World Class Fitness & Nutrition Coaching",
    description:
      "Plans crafted specifically for YOU and your goals, or access to elite training programs for a more hands-off approach.",
    features: ["Personalized workout plans", "Custom nutrition guidance", "Progress tracking", "Form corrections"],
    badge: "Most Popular",
  },
  {
    icon: Users,
    title: "Community Memberships",
    description:
      "Community forums, educational courses, and access to an entire E-book collection on the latest fitness science.",
    features: ["Exclusive community access", "Educational resources", "E-book library", "Peer support network"],
    badge: "Great Value",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support System",
    description: "A direct line of contact with Ameer. You'll have expert guidance every step of the way.",
    features: [
      "Direct messaging access",
      "Quick response times",
      "Motivation & accountability",
      "Problem-solving support",
    ],
    badge: "Premium",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            WHAT YOU GET
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform your body and build lasting healthy habits
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
            >
              {service.badge && (
                <Badge className="absolute -top-3 left-6 bg-secondary text-secondary-foreground font-semibold">
                  {service.badge}
                </Badge>
              )}

              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-montserrat font-bold text-xl text-foreground mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Ready to start your transformation?</span>
          </div>
        </div>
      </div>
    </section>
  )
}
