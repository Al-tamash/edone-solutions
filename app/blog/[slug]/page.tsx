import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { HomeCTA } from '@/components/sections/HomeCTA';
import { getPostBySlug, blogPosts } from '@/lib/blog-data';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return generateSEOMetadata({ title: 'Post Not Found' });
  }

  return generateSEOMetadata({
    title: `${post.title} | Edone Solutions Blog`,
    description: post.excerpt,
    keywords: post.tags,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHeader
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      <article className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-600 hover:text-edone-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-10">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={1200}
                height={600}
                className="object-cover w-full h-[400px] lg:h-[500px]"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-edone-primary text-white text-sm font-semibold rounded-full">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Post Meta */}
            <div className="flex flex-wrap gap-4 mb-8 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-edone-primary prose-a:no-underline hover:prose-a:underline prose-li:text-gray-600 prose-strong:text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-gray-500" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-edone-primary-50 hover:text-edone-primary transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 p-6 bg-gradient-to-br from-edone-primary-50 to-edone-accent-50 rounded-2xl">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Found this helpful?</h3>
                  <p className="text-gray-600 text-sm">Share it with others who might benefit!</p>
                </div>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Share2 className="w-4 h-4" />
                  Share Article
                </button>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-4xl mx-auto mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={related.imageUrl}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-edone-primary uppercase tracking-wider">
                        {related.category}
                      </span>
                      <h3 className="font-bold text-gray-900 mt-2 group-hover:text-edone-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{related.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <HomeCTA />
    </>
  );
}
