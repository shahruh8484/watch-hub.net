import { getArticleBySlug, articles } from "@/lib/articles-data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, ArrowLeft, Share2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      {/* Article Header */}
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Articles
        </Link>

        <div className="space-y-6 mb-8">
          <Badge variant="secondary">{article.category}</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">{article.title}</h1>
          <p className="text-xl text-muted-foreground text-pretty">{article.excerpt}</p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Image
                src={article.authorImage || "/placeholder.svg"}
                alt={article.author}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <div className="font-semibold">{article.author}</div>
                <div className="text-sm text-muted-foreground">
                  {article.date} • {article.readTime} read
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-12">
          <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" priority />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6 text-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Author Bio */}
        <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-lg mb-12">
          <Image
            src={article.authorImage || "/placeholder.svg"}
            alt={article.author}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h3 className="font-bold text-lg mb-2">About {article.author}</h3>
            <p className="text-muted-foreground text-sm">
              {article.author} is a watch enthusiast and contributor to our publication, specializing in{" "}
              {article.category.toLowerCase()} and bringing years of experience in the watch industry.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link key={related.id} href={`/articles/${related.slug}`} className="group">
                  <Card className="overflow-hidden border-0 shadow-none hover:shadow-lg transition-shadow">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={related.image || "/placeholder.svg"}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 space-y-2">
                      <Badge variant="secondary" className="text-xs">
                        {related.category}
                      </Badge>
                      <h3 className="font-bold text-balance group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{related.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
