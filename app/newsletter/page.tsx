import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Clock, Star, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Newsletter | WatchHub",
  description: "Subscribe to WatchHub's weekly newsletter for the latest watch news, reviews, and exclusive content.",
}

export default function NewsletterPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Mail className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">WatchHub Newsletter</h1>
          <p className="text-lg text-muted-foreground">
            Join 50,000+ watch enthusiasts receiving our weekly digest of the latest news, reviews, and exclusive
            content.
          </p>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Subscribe Now</CardTitle>
            <CardDescription>Get the best of WatchHub delivered to your inbox every week</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4 sm:flex-row">
              <Input type="email" placeholder="Enter your email address" className="flex-1" required />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">
              By subscribing, you agree to receive marketing emails from WatchHub. You can unsubscribe at any time. View
              our{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </CardContent>
        </Card>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Clock className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Weekly Digest</CardTitle>
              <CardDescription>
                Every Monday morning, get a curated selection of the week's best watch content
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Star className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Exclusive Content</CardTitle>
              <CardDescription>
                Access subscriber-only articles, early product reviews, and special offers
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Latest Releases</CardTitle>
              <CardDescription>
                Be the first to know about new watch releases, limited editions, and industry news
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Mail className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>No Spam</CardTitle>
              <CardDescription>
                Just one email per week with quality content. Unsubscribe anytime with one click
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="rounded-lg border bg-muted/50 p-8">
          <h2 className="mb-4 font-serif text-2xl font-bold">What You'll Get</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>In-depth reviews of the latest timepieces from luxury and affordable brands</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>Breaking news from the watch industry and major announcements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>Expert buying guides and recommendations for every budget</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>Behind-the-scenes stories from watchmakers and collectors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>Exclusive deals and special offers from our partners</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>Technical deep-dives into movements, complications, and craftsmanship</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
