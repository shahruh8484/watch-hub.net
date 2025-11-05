import { articles, getAllCategories } from "@/lib/articles-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ArticlesPage() {
  const categories = getAllCategories()
  const featuredArticle = articles[0]
  const recentArticles = articles.slice(1, 7)
  const moreArticles = articles.slice(7)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Featured Article */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <Link href={`/articles/${featuredArticle.slug}`} className="group">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <Badge variant="secondary">{featuredArticle.category}</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-balance group-hover:text-primary transition-colors">
                  {featuredArticle.title}
                </h1>
                <p className="text-lg text-muted-foreground text-pretty">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Image
                      src={featuredArticle.authorImage || "/placeholder.svg"}
                      alt={featuredArticle.author}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="default" className="cursor-pointer">
              All Articles
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {recentArticles.map((article) => (
            <Link key={article.id} href={`/articles/${article.slug}`} className="group">
              <Card className="overflow-hidden border-0 shadow-none hover:shadow-lg transition-shadow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-balance group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                    <Image
                      src={article.authorImage || "/placeholder.svg"}
                      alt={article.author}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* More Articles - Compact List */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">More Articles</h2>
          <div className="grid gap-6">
            {moreArticles.map((article) => (
              <Link key={article.id} href={`/articles/${article.slug}`} className="group">
                <Card className="overflow-hidden border hover:shadow-md transition-shadow">
                  <div className="grid md:grid-cols-[300px_1fr] gap-6">
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-center space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-balance group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-pretty line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Image
                          src={article.authorImage || "/placeholder.svg"}
                          alt={article.author}
                          width={28}
                          height={28}
                          className="rounded-full"
                        />
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
