import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Tick-Review",
  description: "Common questions about watches, our reviews, and Tick-Review services.",
}

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Find answers to common questions about watches, our reviews, and Tick-Review services.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Tick-Review?</AccordionTrigger>
            <AccordionContent>
              Tick-Review is a comprehensive online resource for watch enthusiasts, collectors, and buyers. We provide
              in-depth reviews, buying guides, industry news, and educational content about timepieces from luxury to
              affordable brands. Our team of expert reviewers tests and evaluates watches to help you make informed
              purchasing decisions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Are your reviews biased?</AccordionTrigger>
            <AccordionContent>
              We strive to provide honest, unbiased reviews based on our hands-on testing and expertise. While we
              participate in affiliate programs like Amazon Associates, this does not influence our editorial content.
              We only recommend products we genuinely believe offer value to our readers, and we clearly disclose when
              we may earn commissions from purchases.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How do you test watches?</AccordionTrigger>
            <AccordionContent>
              Our review process involves wearing each watch for an extended period (typically 1-2 weeks) in various
              real-world conditions. We evaluate build quality, accuracy, comfort, legibility, and overall value. For
              mechanical watches, we may also test accuracy using timing equipment. Our team includes experienced watch
              collectors and horologists who bring decades of combined expertise to each review.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Do you accept watches for review?</AccordionTrigger>
            <AccordionContent>
              Yes, we accept watches from brands and manufacturers for review consideration. However, receiving a watch
              for review does not guarantee a positive review or any review at all. We maintain complete editorial
              independence and will provide our honest assessment. Contact our editorial team at reviews@tick-review.com
              for more information.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>What is an automatic watch?</AccordionTrigger>
            <AccordionContent>
              An automatic watch (also called self-winding) is a mechanical watch that winds itself using the natural
              motion of your wrist. A weighted rotor inside the watch rotates as you move, winding the mainspring that
              powers the watch. Automatic watches typically have a power reserve of 38-72 hours, meaning they'll
              continue running for that long after being fully wound, even when not worn.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>What does water resistance mean?</AccordionTrigger>
            <AccordionContent>
              Water resistance indicates a watch's ability to resist water ingress, measured in meters, ATM, or bar. A
              30m/3ATM watch can handle splashes but not swimming. 50m/5ATM is suitable for swimming but not diving.
              100m/10ATM is appropriate for snorkeling and recreational swimming. 200m+ is required for serious diving.
              Note that water resistance can degrade over time and should be tested periodically, especially before
              water activities.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>How often should I service my watch?</AccordionTrigger>
            <AccordionContent>
              Mechanical watches typically need servicing every 3-5 years, though some modern movements can go longer.
              Quartz watches require less frequent servicing, usually every 5-10 years or when the battery needs
              replacement. Signs your watch needs service include: losing/gaining significant time, stopping
              unexpectedly, difficulty winding or setting, or moisture under the crystal. Regular servicing helps
              maintain accuracy and prevents costly repairs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>What's the difference between quartz and mechanical?</AccordionTrigger>
            <AccordionContent>
              Quartz watches use a battery and electronic oscillator for timekeeping, offering superior accuracy
              (typically ±15 seconds/month) and low maintenance. Mechanical watches use a wound spring and intricate
              gears, requiring no battery but needing regular winding (manual) or wrist motion (automatic). Mechanical
              watches are prized for their craftsmanship and tradition, while quartz watches offer practicality and
              precision. Both have their place in watch collecting.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>How do I choose my first luxury watch?</AccordionTrigger>
            <AccordionContent>
              Start by determining your budget and intended use (daily wear, special occasions, sports). Consider size
              and fit - try watches on if possible, as case diameter and lug-to-lug measurements affect wrist presence.
              Research brands known for quality at your price point. Classic designs from established brands tend to
              hold value better. Don't rush - take time to research and try different styles. Our buying guides can help
              narrow down options based on your preferences and budget.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger>Do you offer watch repair services?</AccordionTrigger>
            <AccordionContent>
              No, Tick-Review is an informational website and does not offer repair services. However, we can provide
              guidance on finding reputable watchmakers and service centers. For warranty repairs, always contact the
              brand's authorized service center first. For vintage or out-of-warranty watches, seek independent
              watchmakers with good reputations and proper certifications.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11">
            <AccordionTrigger>How do affiliate links work?</AccordionTrigger>
            <AccordionContent>
              When you click on certain product links on our site and make a purchase, we may earn a small commission at
              no additional cost to you. This is part of the Amazon Associates Program and other affiliate partnerships.
              These commissions help support our content creation and keep Tick-Review free for readers. We only
              recommend products we believe offer genuine value, and our editorial content is never influenced by
              potential commissions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-12">
            <AccordionTrigger>Can I contribute content to Tick-Review?</AccordionTrigger>
            <AccordionContent>
              We occasionally accept guest contributions from experienced watch enthusiasts and industry professionals.
              If you have expertise in horology and a unique perspective to share, please contact our editorial team at
              editorial@tick-review.com with your article pitch and writing samples. We look for well-researched,
              original content that provides value to our readers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 rounded-lg border bg-muted/50 p-6">
          <h3 className="mb-2 font-semibold">Still have questions?</h3>
          <p className="text-sm text-muted-foreground">
            If you couldn't find the answer you're looking for, please{" "}
            <a href="/contact" className="text-primary hover:underline">
              contact us
            </a>{" "}
            and we'll be happy to help.
          </p>
        </div>
      </div>
    </div>
  )
}
