import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Affiliate Disclaimer - Tick-Review | Amazon Associates Disclosure",
  description:
    "Tick-Review participates in the Amazon Associates Program. Learn about our affiliate relationships and how we maintain editorial independence.",
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">Affiliate Disclaimer</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Amazon Associates Program</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tick-Review is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
              program designed to provide a means for sites to earn advertising fees by advertising and linking to
              Amazon.com and affiliated sites.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">How Affiliate Links Work</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you click on certain links on our website and make a purchase, we may receive a small commission at
              no additional cost to you. These commissions help support our work and allow us to continue providing
              free, high-quality content to our readers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Affiliate links are clearly marked throughout our site. The presence of an affiliate link does not
              influence our editorial content or recommendations in any way.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Editorial Independence</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We maintain strict editorial independence. Our reviews, recommendations, and content are based solely on:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Hands-on testing and real-world experience</li>
              <li>Expert analysis and technical evaluation</li>
              <li>Reader feedback and community insights</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We never recommend products solely because they offer higher commission rates. Our goal is to help you
              find the best watches for your needs and budget, regardless of affiliate earnings.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Product Testing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We personally test and evaluate watches before recommending them. Our team purchases many of the watches
              we review with our own funds or receives them as press samples for evaluation. When we receive products
              for review, this does not influence our assessment or guarantee a positive review.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Product Availability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Product availability on Amazon can change without notice. If a product is unavailable, we recommend
              checking back later or exploring our alternative recommendations in the same category. For current pricing
              information, please visit Amazon directly through our affiliate links.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">No Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to provide accurate and helpful information, we make no warranties or guarantees about the
              accuracy, completeness, or adequacy of the information contained on this website. Your use of this website
              and reliance on any information is solely at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website contains links to third-party websites, including Amazon.com. We are not responsible for the
              content, privacy policies, or practices of these external sites. We encourage you to review the terms and
              privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Changes to This Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to update this disclaimer at any time. Changes will be posted on this page with an
              updated revision date. Your continued use of our website following any changes constitutes acceptance of
              those changes.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Questions</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our affiliate relationships or this disclaimer, please contact us at{" "}
              <a href="mailto:hello@tick-review.com" className="text-primary hover:underline">
                hello@tick-review.com
              </a>
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
    </div>
  )
}
