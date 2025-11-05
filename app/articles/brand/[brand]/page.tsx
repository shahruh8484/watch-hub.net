import { articles } from "@/lib/articles-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"
import { notFound } from "next/navigation"

const brandMap: Record<string, string[]> = {
  rolex: ["rolex"],
  omega: ["omega"],
  seiko: ["seiko"],
  casio: ["casio"],
  patek: ["patek philippe", "patek"],
  ap: ["audemars piguet", "ap", "royal oak"],
}

export function generateStaticParams() {
  return Object.keys(brandMap).map((brand) => ({
    brand,
  }))
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params
  const brandKeywords = brandMap[brand.toLowerCase()]

  if (!brandKeywords) {
    notFound()
  }

  // Filter articles that mention the brand in title, excerpt, or content
  const filteredArticles = articles.filter((article) => {
    const searchText = `${article.title} ${article.excerpt} ${article.content}`.toLowerCase()
    return brandKeywords.some((keyword) => searchText.includes(keyword.toLowerCase()))
  })

  if (filteredArticles.length === 0) {
    notFound()
  }

  // Get display name for brand
  const brandDisplayName =
    brand === "ap"
      ? "Audemars Piguet"
      : brand === "patek"
        ? "Patek Philippe"
        : brand.charAt(0).toUpperCase() + brand.slice(1)

  return (
    <div className="container py-12 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{brandDisplayName}</h1>
        <p className="text-muted-foreground">
          {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} about {brandDisplayName}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <Link key={article.id} href={`/articles/${article.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">
                  {article.category}
                </Badge>
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h2>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article.readTime}
                  </div>
                  <span>{article.date}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
