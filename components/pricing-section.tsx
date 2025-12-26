import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "1-ON-1 COACHING",
    icon: Star,
    price: "Custom",
    period: "per month",
    description: "Personalized coaching tailored specifically to your goals and lifestyle",
    features: [
      "Cutting-edge workout plans",
      "Nutrition guidance",
      "Weekly check-ins",
      "Community access",
      "Direct 24/7 support",
      "Exclusive access to all E-books",
    ],
    cta: "Get More Information",
    popular: true,
    color: "primary",
  },
]

export function PricingSection() {
  return (
    null
  )
}
