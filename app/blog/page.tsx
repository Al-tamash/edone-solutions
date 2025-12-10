import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Blog - Web Design, Development & Digital Marketing Tips",
  description: "Expert insights, tips, and trends in web design, development, and digital marketing from Edone Solutions.",
  keywords: ["web design blog", "web development tips", "digital marketing", "tech trends"],
});

export default function BlogPage() {
  const breadcrumbs = [{ label: "Blog" }];
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHeader
        title="Latest Insights"
        description="Expert tips, trends, and insights on web design, development, and digital solutions"
        breadcrumbs={breadcrumbs}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group">
              {/* Blog Image */}
              <Link href={`/blog/${post.slug}`} className="relative h-48 overflow-hidden block">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </Link>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Category */}
                <span className="text-xs font-medium text-brand-primary uppercase tracking-wide mb-2">
                  {post.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-brand-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(post.publishedDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-brand-primary hover:text-brand-secondary font-medium text-sm group"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <HomeCTA />
    </>
  );
}
