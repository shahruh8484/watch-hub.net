import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, ArrowLeft, ExternalLink } from "lucide-react"

const products = [
  {
    slug: "casio-f91w-series",
    name: "Casio F91W Series",
    rating: 4.8,
    reviews: 2847,
    image: "https://m.media-amazon.com/images/I/51mu4w1lJwL._AC_SX522_.jpg",
    badge: "Best Value",
    amazonLink: "https://www.amazon.com/Casio-F91W-1-Classic-Resin-Digital/dp/B000GAWSDG",
    price: "$299",
    description:
      "The Casio F91W Series is one of the most iconic digital watches ever created — simple, reliable, and built to last. First introduced in the early 1990s, it remains a global favorite thanks to its timeless design, impressive battery life, and unbeatable price. Whether you need a basic everyday watch or a lightweight companion for outdoor activities, the F91W continues to deliver flawless performance. The watch features a classic rectangular case with a slim, lightweight build that sits comfortably on any wrist. Despite its plastic construction, the Casio F91W feels durable enough for daily wear. Its resin strap is soft and adjustable, making it ideal for both adults and teenagers.The display is clear and easy to read, showing hours, minutes, seconds, day, and date. A built-in LED light ensures visibility even in low-light conditions — a small but practical feature. The Casio F91W is a true classic that proves simplicity never goes out of style. It's a perfect choice for anyone seeking an inexpensive, durable, and no-nonsense digital watch. Whether for everyday use, travel, or as a backup watch, the F91W remains one of the best budget-friendly options on the market.",
    features: [
      "1/100-Second Stopwatch: Perfect for timing workouts, sports, or any activity that requires precision.",
      "Daily Alarm and Hourly Time Signal: Keeps you punctual throughout the day.",
      "Water Resistant: Can handle splashes and rain, but not recommended for swimming or showering.",
      "Automatic Calendar: Displays day and date accurately.",
      "7-Year Battery Life: Exceptionally long-lasting, minimizing the need for replacements.",
      "Regular Timekeeping: Shows hours, minutes, seconds, AM/PM indicator, day, and date.",
    ],
    images: [
      "https://m.media-amazon.com/images/I/51mu4w1lJwL._AC_SX522_.jpg",
      "https://m.media-amazon.com/images/I/51ErgHuWHcL._AC_SX425_.jpg",
      
    ],
  },
  {
    slug: "seiko-5-sports-automatic",
    name: "SEIKO 5 Automatic Blue Dial Stainless Steel",
    rating: 4.9,
    reviews: 1923,
    image: "https://m.media-amazon.com/images/I/61FgZRrx9UL._AC_SY741_.jpg",
    badge: "Editor's Choice",
    amazonLink: "https://www.amazon.com/Seiko-SNXS77-Automatic-Silver-Bracelet/dp/B000KKO85S",
    price: "$425",
    description:
      "The Seiko 5 Automatic SNXS77K1 is a standout within the Seiko 5 lineup—a beautiful blue-sunburst dial, automatic movement, and stainless steel case and bracelet at a very attractive price point. It manages to combine dressy and everyday appeal, making it a strong value option for someone looking to get into mechanical watches without spending a fortune. The SNXS77K1 impresses with its elegant yet modest proportions. At ~38 mm it fits well on many wrist sizes, and the lug-to-lug being short helps wearability. SIXIW. The blue dial stands out — in good light the sunburst effect brings depth and variation; in lower light it becomes a more subtle tone, making it versatile for both casual and semi-dress settings. Build-wise, Seiko delivers a steel case and bracelet which, for the price, is solid. Some reviewers point out that the bracelet uses folded links (in earlier versions) which is a slight compromise for the price point. The Hardlex crystal is a sensible choice for affordability: better than basic mineral in many respects, though not as scratch-resistant as sapphire. For normal daily use it holds up well if you treat it decently. As an automatic watch, the SNXS77K1 gives you the mechanical experience: winding from your wrist movement, the smooth sweep seconds hand (compared to quartz “tick”), and the charm of mechanical-engineering. Users report that the watch “wears like a much more expensive piece” given the dial, finishing and proportions. For example: “It wears like a thousand-dollar watch … the stock bracelet being the only weak link.” Given the size and finish, it easily transitions from office to weekend. The day/date display adds practicality. On the flip side, because of the 30 m water resistance, you’ll want to avoid swimming or heavy water exposure. The movement (7S26) is robust and proven, though lacks hand-winding and hacking (in many versions) which is something more advanced watch enthusiasts may notice. If you’re looking for a mechanical automatic watch that punches way above its price point, the Seiko 5 SNXS77K1 is a strong choice. It brings an attractive blue dial, genuine heritage, solid everyday wearability, and represents one of the best value propositions in watches for under maybe USD 200 (depending on street price). For someone entering the automatic watch world, or wanting one versatile piece for both daily wear and dress-up, this is a compelling option. The trade-offs (modest water resistance, bracelet quality, movement simplifications) are acceptable given the price. With a strap upgrade and good care, this watch can easily satisfy for years. Recommendation: Grab it while you can at a good price. If you want to personalize further, consider swapping to a better bracelet or strap to elevate the feel even more.",
    features: [
      "Case diameter: ~ 38 mm",
      "Stainless steel case and bracelet",
      "Blue sunburst dial — dynamic appearance that shifts with light",
      "Day and date display (day of the week + calendar date) at 3 o’clock",
      "Automatic (self-winding) movement — in house Seiko calibre (e.g., 7S26) with approximately 41-hour power reserve",
      "Hardlex crystal (Seiko’s proprietary hardened mineral) for the dial cover",
      "Exhibition case-back (transparent) in some versions so you can view the movement",
      "Water-resistance: 30 m / 3 ATM (suitable for everyday splashes but not swimming/diving)",
    ],
    images: [
      "https://m.media-amazon.com/images/I/61FgZRrx9UL._AC_SY741_.jpg",
      "https://m.media-amazon.com/images/I/61QYTJBUvGL._AC_SX679_.jpg",
      
    ],
  },
  {
    name: "Citizen Men's Classic Quartz Watch",
    slug: "citizen-eco-drive-promaster",
    rating: 4.7,
    reviews: 3156,
    image: "https://m.media-amazon.com/images/I/81YJMXUexJL._AC_SY741_.jpg",
    badge: "Best Seller",
    amazonLink: "https://www.amazon.com/Citizen-Mens-Quartz-Watch-BF0580-57L/dp/B008FG6ZRI",
    price: "$199",
    description:
      "If you’re looking for a timeless timepiece that marries understated elegance with reliable craftsmanship, the Citizen Men’s Classic Quartz in stainless steel is a standout option. This watch offers a refined dress-watch aesthetic, complemented by Citizen’s reputation for quality and precision. It’s ideal for everyday office wear, dress occasions, or as a dependable go-to in a minimalist collection. Design & Build Quality. From the moment you pick it up, the Classic Quartz conveys a sense of thoughtful simplicity. The tainless-steel case and bracelet deliver a polished look that transitions effortlessly from a business suit to a smart casual outfit. The case diameter (in similar Citizen quartz models) hovers around the 39-41 mm range, with thickness slim enough to slide under a shirt cuff comfortably. The dial embraces the “classic” concept: clean lines, clear hour indices, a date window (in many variants), and minimal clutter. This lends to legibility and a look that won’t feel dated. One model review noted: “The white dial and silver accents make the display extremely easy to read … every little detail … created with the purpose of looking great.” The bracelet (or in some models leather strap) is well-finished for the price tier and the clasp feels secure. The mineral (or in select models sapphire) crystal gives decent scratch protection — adequate for everyday use though not “luxury-level” hardness. Movement & Performance This model uses a quartz movement — meaning battery-powered, predictable accuracy, and low maintenance. You get the benefits of high precision without the need to worry about winding or power reserves. On similar models (e.g., the BI5000-01A), users report excellent time-keeping out of the box. Many Citizen “Classic” quartz watches also bring the trusted Citizen build-quality and the feeling of wearing something that “costs more than it does”. For example, one reviewer for a Citizen quartz dress watch said: “It’s a perfect option for those who want their first dress watch and don’t want to break the bank.” Features & Specifications While the exact spec sheet will depend on the specific variant you pick, here are common features in the Citizen Men’s Classic Quartz stainless-steel line: Straightforward three-hand (hour, minute, seconds) display plus date window. The Citizen Men’s Classic Quartz Stainless-Steel watch is an excellent pick for anyone seeking a smart, reliable, and well-proportioned dress watch without entering the luxury price tier. It ticks the right boxes: honest brand, clean aesthetics, daily wearability and ease. While it doesn’t offer high-end luxury features (like mechanical movement, ultra high water resistance or exotic materials), it offers tremendous value and style in its class. If you’re building a watch rotation and want one versatile piece that can serve for years without fuss, this Citizen is a smart choice. And if you value reliability and simplicity over complication and flash, you’ll likely be very happy.",
    features: [
      "Case diameter in the ballpark of ~39–41 mm",
      "Stainless-steel case and bracelet (or steel case with alternate strap in some models)",
      "Mineral crystal (or in select upgraded models sapphire)",
      "Water resistance: many variants rated around 30 m to 50 m (not designed for diving, but fine for everyday wear)",
      "Clean dial, minimalist styling, polished steel finish — emphasizing dress/everyday versatility",
      
    ],
    images: [
      "https://m.media-amazon.com/images/I/81YJMXUexJL._AC_SY741_.jpg",
      "https://m.media-amazon.com/images/I/71I7lWZTjzL._AC_SX679_.jpg",
      
    ],
  },
  {
    name: "Timex Men's Easy Reader Watch",
    slug: "timex-mens-easy-reader-watch",
    rating: 4.8,
    reviews: 5234,
    image: "https://m.media-amazon.com/images/I/71S-CCwawqL._AC_SY550_.jpg",
    badge: "Most Popular",
    amazonLink: "https://amazon.com/dp/B0EXAMPLE4?tag=youraffid-20",
    price: "$99",
    description:
      "The Timex Men’s Easy Reader is a textbook example of “less is more” done right. With a design focused squarely on readability, practicality, and everyday reliability, this model has earned its place as a staple watch for decades. For anyone seeking a no-fuss, affordable timepiece that simply tells the time — and does it well — the Easy Reader is a strong contender. Design & Build Quality. From the moment you glance at it, the Easy Reader makes its purpose clear: large numerals, high-contrast dial, simple case. One reviewer of the 35 mm T20041 version notes it draws inspiration from “schoolroom clocks” and offers a clean, timeless look. The case is modest in size (for many versions around 35-38 mm) and quite thin, meaning it wears unobtrusively on the wrist. One spec list shows 35 mm diameter, 8 mm thickness for a version. Build materials are consistent with its price tier: a mineral crystal (not sapphire), quartz movement, modest water resistance (30 m or so) in many versions. For example, the T20041 is rated at 30 m. Despite the simplicity, many owners praise its durability and that it “just works”. One comment: “It’s a very honest product at an attractive price. The design is clean and minimalist. It’s durable and will last a long time, too.” Features & Specifications. Here are the key features you’ll typically find on the Timex Easy Reader line: Clean analog display with large, easy-to-read Arabic numerals (often 1-12) and a simple minute track. INDIGLO® backlight: Press the crown (or dedicated button depending on the version) and the full dial glows, aiding legibility in low light. Quartz movement: Reliable and low maintenance. Many reviews note that the Easy Reader simply “set and forget”. Case sizes commonly around 35-38 mm depending on variant, thickness often quite slim. Modest water resistance: Many versions rated 30 m (splash resistant), which means not suitable for swimming. Strap/bracelet options: Leather straps, stainless steel bracelets or expansion bands depending on model. One version features an expansion (stretch) bracelet. Variety of styles and finishes: While the core formula remains the same, you’ll find variants with date window, different dial colors or case finishes. For example, the “Easy Reader Bold 43mm” variant. Performance & Wearability. When it comes to daily wear, the Easy Reader delivers exactly what you'd hope for: readability and ease. Legibility: The large numbers, high contrast dial and Indiglo light make telling time quick and easy — even in low light. Comfort: The relatively small case size and thin profile mean it sits nicely on a variety of wrists, under a shirt cuff or casual. Reliability: Because it uses a quartz movement and has a simple feature set, there’s less that can go wrong — battery changes aside. Versatility: It suits casual wear, everyday office use and even more formal settings depending on strap/finish). One reviewer observed it pairs well with T-shirt & jeans and also suits dressier outfits. On the flip side: Because the water resistance is modest, if you’re planning to swim or dive you’ll need a different watch. The mineral crystal is less scratch-resistant than sapphire; if you’re rough on watches, you may see wear over time. Some variants may have a tick louder than high-end watches; one forum noted the “tick” being audible when worn to bed. ",
    features: [
      "Easy-to-read dial with large Arabic numerals and simple design for rapid time-reading",
      "Date (and in some models day + date) window for added practicality",
      "Mineral crystal (typical for this model) with a slim case profile for comfortable everyday wear",
      "Water resistance (commonly around 30 m) — suitable for splashes and brief exposure, but not for swimming or diving",
      "Choice of strap/bracelet options: leather strap, expansion/stretch metal bracelet or standard stainless-steel band",
      "Case sizes that suit various wrists (e.g., 35 mm and 38 mm variants) for versatility in wear-style",
      
    ],
    images: [
      "https://m.media-amazon.com/images/I/71S-CCwawqL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/I/81LzNUh5rtL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71QoajRRICL._AC_SY550_.jpg",
    ],
  },
  {
    name: "Tissot Supersport Chrono",
    slug: "tissot-supersport-chrono",
    rating: 4.6,
    reviews: 4521,
    image: "https://m.media-amazon.com/images/I/81QI4SufOjL._AC_SX679_.jpg",
    badge: "Budget Pick",
    amazonLink: "https://amazon.com/dp/B0EXAMPLE5?tag=youraffid-20",
    price: "$59",
    description:
      "Tissot Supersport Chrono The Tissot Supersport Chrono is a bold sports-chronograph wristwatch that combines Swiss reliability, robust design, and everyday usability. With a 45.5 mm case, clear chronograph functions, and water-resistance up to 100 m, it’s built for those who want a sporty look but also Swiss-made performance. Design & Build Quality The Supersport Chrono stands out with its muscular case, prominent push-buttons, and large crown guard, giving a definite “sport tool” aesthetic. The 45.5 mm diameter and typically ~11.9 mm thickness mean the watch has presence on the wrist. Materials are high quality: 316L stainless steel or PVD-coated steel in some variants, sapphire crystal for scratch resistance, and a solid case back. The dial design includes imposing applied indexes coated with Super-LumiNova®, providing excellent readability in low light. Strap/bracelet options vary from stainless steel bracelet to leather or textile straps, allowing some personalization of the sporty look. Some models even include quick-release strap changes. Performance & Wearability. Movement: This is a Swiss quartz chronograph (for example ETA G10.212 calibre) — so expect high accuracy, low maintenance, and a good level of features for the price. Chronograph functions include: central seconds hand for the chronograph, 1/10-second timing, 30-minute counter, ADD/SPLIT functions in some editions. Water resistance is rated at 10 bar / 100 m (330 ft) for many models — meaning you can wear it swimming and for daily aquatic exposure (though not deep diving). Wearability note: Because of the size (45.5 mm) and weight, some users with smaller wrists might find it large. For example: Diameter: 45.5 mm… Lug-to-lug: ~50mm… Weight: 188g If your wrist is relatively small (< 16.5 cm/6.5″), it’s worth going in person to try it on.",
    features: [
      "Case diameter: 45.5 mm",
      "Case material: 316L stainless steel (some variants with PVD or rose-gold PVD)",
      "Crystal: Scratch-resistant sapphire crystal",
      "Movement: Swiss quartz chronograph (ETA G10.212) with 1/10 second, 30 minute counters, ADD/SPLIT functions, and End-of-Life (EOL) indicator for the battery",
      "Chronograph: Central chronograph seconds, sub-dials for 1/10 sec and 30 minutes",
      "Tachymeter scale (on bezel or fixed glass) for speed/distance calculations",
      "Lume: Super-LumiNova® on hour markers and hands for high legibility",
      "Water resistance: Up to 100 m / 10 bar in many models",
    ],
    images: [
      "https://m.media-amazon.com/images/I/81QI4SufOjL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Dvv+L3QZL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81bX5kYonpL._AC_SX679_.jpg",
    ],
  },
  {
    name: "Bulova Men's Classic Sutton 4-Hand Automatic Watch",
    slug: "bulova-mens-classic-sutton-4-hand-automatic-watch",
    rating: 4.9,
    reviews: 1456,
    image: "https://m.media-amazon.com/images/I/71fLKaBwOAL._AC_SX679_.jpg",
    badge: "Premium Choice",
    amazonLink: "https://amazon.com/dp/B0EXAMPLE6?tag=youraffid-20",
    price: "$595",
    description:
      "The Bulova Men’s Classic Sutton Automatic combines timeless design with a touch of modern mechanical flair. It’s not just a dress watch — it’s a piece that bridges elegance and engineering. With its open-heart dial, visible movement, and sophisticated detailing, this timepiece appeals to anyone who appreciates both aesthetics and craftsmanship. Unlike many quartz dress watches in its price range, the Sutton’s automatic movement gives it life — a smooth sweeping seconds hand and a view into its mechanical heart. This watch feels alive on the wrist, offering both sophistication and personality for everyday business wear or formal occasions. Design & Build Quality. At first glance, the Sutton’s dial immediately catches the eye. The open-heart window at 7 o’clock reveals the oscillating balance wheel — a subtle reminder that this is a true automatic, not a battery-powered piece. The sunray dial finish, combined with Roman numeral hour markers and skeleton hands, creates a refined, vintage-inspired look that never feels outdated. The case measures around 43 mm, giving it a bold wrist presence while remaining proportionate for most men’s wrists. The stainless-steel construction feels solid, well-polished, and substantial without being heavy. A domed mineral crystal covers the dial, offering clarity and decent scratch resistance. On the back, you’ll find an exhibition case back — another window into the automatic movement. It’s a nice touch that reinforces Bulova’s attention to mechanical artistry at an accessible price. The watch is typically paired with a brown or black leather strap, or stainless-steel bracelet depending on variant — both complement the design perfectly. Movement & Performance. Inside, the Sutton runs on a Japanese-made automatic movement, visible through both the front open-heart and rear exhibition case back. The four-hand configuration includes hour, minute, second, and 24-hour sub-dial, adding both functionality and balance to the dial layout. Accuracy is solid for an entry-level automatic — you can expect a slight deviation of a few seconds per day, which is standard for this type of movement. Power reserve is approximately 40 hours, so if you set it down for a day or two, it will keep running until you’re ready to wear it again. Unlike quartz watches, there’s no battery to replace — simply wear it daily or give it a few winds via the crown to keep it ticking smoothly.",
    features: [
      "Automatic self-winding movement — no battery required; powered by wrist motion",
      "4-hand configuration: hour, minute, sweeping second hand, and 24-hour sub-dial",
      "Open-heart dial window showing internal mechanics",
      "Exhibition case back revealing the full movement",
      "Case diameter: approximately 43 mm",
      "Case material: stainless steel with polished and brushed finishes",
      "Crystal: domed mineral glass for durability and clear viewing",
      "Dial options: silver, blue, or black sunray finishes (depending on variant)",
    ],
    images: [
      "https://m.media-amazon.com/images/I/71fLKaBwOAL._AC_SX679_.jpg",
      
    ],
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} Review | WatchHub`,
    description: product.description,
    openGraph: {
      title: `${product.name} Review`,
      description: product.description,
      images: [product.image],
    },
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{product.badge}</Badge>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, idx) => (
                <div key={idx} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} view ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            {/* CTA Button */}
            <Button size="lg" className="w-full mb-8" asChild>
              <a href={product.amazonLink} target="_blank" rel="noopener noreferrer sponsored">
                View on Amazon
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>

            {/* Key Features */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.slug} href={`/products/${relatedProduct.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative h-56 overflow-hidden rounded-t-lg">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {relatedProduct.badge}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(relatedProduct.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
