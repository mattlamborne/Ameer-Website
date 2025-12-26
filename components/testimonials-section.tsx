"use client"
import Image from "next/image"
import Link from "next/link"

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

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h3 className="font-montserrat font-bold text-2xl text-center text-foreground mb-8">
            CLIENT TRANSFORMATIONS
          </h3>
          <div className="grid grid-cols-2 gap-4">
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

        {/* Video Testimonial CTA */}
        <div className="text-center">
          
        </div>
      </div>
    </section>
  )
}
