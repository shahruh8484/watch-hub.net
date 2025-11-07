import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Tick-Review",
  description: "Information about how Tick-Review uses cookies and similar technologies.",
}

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Cookie Policy</h1>
        <p className="mb-8 text-sm text-muted-foreground">Last Updated: January 2025</p>

        <div className="prose prose-stone max-w-none">
          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website.
            They are widely used to make websites work more efficiently and provide information to website owners.
          </p>

          <h2>How We Use Cookies</h2>
          <p>Tick-Review uses cookies for several purposes:</p>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable basic functions like page
            navigation and access to secure areas of the website. The website cannot function properly without these
            cookies.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            We use analytics cookies to understand how visitors interact with our website. This helps us improve our
            content and user experience. These cookies collect information such as:
          </p>
          <ul>
            <li>Number of visitors to the site</li>
            <li>Pages visited and time spent on each page</li>
            <li>How visitors arrived at the site</li>
            <li>What links visitors click on</li>
          </ul>

          <h3>Advertising Cookies</h3>
          <p>
            As an Amazon Associate and participant in other affiliate programs, we use cookies to track affiliate
            referrals and commissions. These cookies help us understand which products our visitors are interested in
            and allow us to earn commissions on qualifying purchases.
          </p>

          <h3>Functionality Cookies</h3>
          <p>
            These cookies allow the website to remember choices you make (such as your preferred language or region) and
            provide enhanced, more personalized features.
          </p>

          <h2>Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of
            the website and deliver advertisements on and through the website. These include:
          </p>
          <ul>
            <li>
              <strong>Amazon Associates:</strong> Cookies used to track affiliate referrals and purchases
            </li>
            <li>
              <strong>Google Analytics:</strong> Cookies used to analyze website traffic and user behavior
            </li>
            <li>
              <strong>Social Media:</strong> Cookies from social media platforms when you share content
            </li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings preferences. However, if you limit the
            ability of websites to set cookies, you may worsen your overall user experience, as some features may no
            longer function properly.
          </p>

          <h3>Browser Controls</h3>
          <p>
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your
            computer and you can set most browsers to prevent them from being placed. However, if you do this, you may
            have to manually adjust some preferences every time you visit a site.
          </p>

          <h3>Opt-Out Options</h3>
          <p>To opt out of analytics cookies, you can:</p>
          <ul>
            <li>Use browser settings to block or delete cookies</li>
            <li>Install browser extensions that block tracking</li>
            <li>Use the "Do Not Track" feature in your browser</li>
          </ul>

          <h2>Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our
            business operations. We encourage you to review this policy periodically.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at{" "}
            <a href="mailto:privacy@tick-review.com" className="text-primary hover:underline">
              privacy@tick-review.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
