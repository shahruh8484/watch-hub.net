import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Users, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Advertise With Us | Tick-Review",
  description: "Reach watch enthusiasts and collectors through Tick-Review's advertising opportunities.",
}

export default function AdvertisePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Advertise With Tick-Review</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Connect with passionate watch enthusiasts, collectors, and buyers through our premium advertising platform.
        </p>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Users className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Engaged Audience</CardTitle>
              <CardDescription>
                Reach over 100,000 monthly readers passionate about luxury watches, timepieces, and horology
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>High-Quality Traffic</CardTitle>
              <CardDescription>
                Our readers are serious watch buyers with high purchasing intent and brand loyalty
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Target className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Targeted Placement</CardTitle>
              <CardDescription>
                Choose from banner ads, sponsored content, product reviews, and newsletter placements
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Mail className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Newsletter Reach</CardTitle>
              <CardDescription>
                Feature your brand in our weekly newsletter sent to 50,000+ engaged subscribers
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Advertising Opportunities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold">Display Advertising</h3>
              <p className="text-sm text-muted-foreground">
                Premium banner placements across our homepage, article pages, and category sections. Multiple sizes and
                positions available.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Sponsored Content</h3>
              <p className="text-sm text-muted-foreground">
                Native advertising through sponsored articles, product features, and brand stories written by our
                editorial team.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Product Reviews</h3>
              <p className="text-sm text-muted-foreground">
                In-depth, honest reviews of your timepieces by our expert team of watch reviewers and testers.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Newsletter Sponsorship</h3>
              <p className="text-sm text-muted-foreground">
                Exclusive sponsorship opportunities in our weekly newsletter reaching thousands of watch enthusiasts.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">Social Media Promotion</h3>
              <p className="text-sm text-muted-foreground">
                Amplify your message across our social media channels with combined reach of 200,000+ followers.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription>
              Contact our advertising team to discuss custom packages tailored to your brand's needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                <strong>Email:</strong>{" "}
                <a href="mailto:advertising@tick-review.com" className="text-primary hover:underline">
                  advertising@tick-review.com
                </a>
              </p>
              <p className="text-sm">
                <strong>Response Time:</strong> We typically respond within 24-48 hours
              </p>
              <Link href="/contact">
                <Button size="lg" className="mt-4">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Advertising Team
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
