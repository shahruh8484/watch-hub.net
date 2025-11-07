import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Our Testing Team - Tick-Review | Meet the Experts Behind Our Reviews",
  description:
    "Meet the watch enthusiasts, collectors, and professionals who test and review timepieces for Tick-Review. Decades of combined expertise in horology.",
}

const testers = [
  {
    name: "Haruko Nakazima",
    role: "Lead Watch Reviewer",
    specialty: "Luxury & Swiss Watches",
    experience: "15 years",
    image: "/professional-asian-man-watch-expert-reviewer-in-bu.jpg",
    bio: "Former watchmaker with extensive experience in Swiss horology. Specializes in mechanical movements and luxury timepieces.",
  },
  {
    name: "Melissa Gerber",
    role: "Dive Watch Specialist",
    specialty: "Professional Dive Watches",
    experience: "12 years",
    image: "/professional-woman-dive-watch-specialist-portrait-.jpg",
    bio: "PADI-certified dive instructor who tests watches in real underwater conditions. Expert in ISO 6425 dive watch standards.",
  },
  {
    name: "Mauricio Pelligrino",
    role: "Vintage Watch Expert",
    specialty: "Vintage & Collectible Watches",
    experience: "20 years",
    image: "/professional-man-vintage-watch-expert-collector-po.jpg",
    bio: "Vintage watch collector and historian. Specializes in authentication, restoration, and valuation of classic timepieces.",
  },
]

export default function TestersPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Meet Our Testing Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team of watch enthusiasts, collectors, and industry professionals brings decades of combined experience
            to every review. Each member personally tests watches in real-world conditions to provide honest, expert
            assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testers.map((tester) => (
            <Card key={tester.name} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <Image src={tester.image || "/placeholder.svg"} alt={tester.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{tester.name}</h3>
                  <p className="text-primary font-medium mb-3">{tester.role}</p>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary">{tester.specialty}</Badge>
                    <Badge variant="outline">{tester.experience}</Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{tester.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-muted/50 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Our Testing Process</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every watch we review undergoes rigorous testing over a minimum of two weeks. We evaluate accuracy, comfort,
            durability, water resistance (when applicable), and overall value. Our testers wear watches in their daily
            lives—from office environments to outdoor adventures—to provide authentic, real-world assessments.
          </p>
        </div>
      </div>
    </div>
  )
}
