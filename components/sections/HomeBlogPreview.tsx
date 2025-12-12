'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Clock, User, Sparkles } from 'lucide-react';

// Sample blog posts for preview
const blogPosts = [
  {
    id: 1,
    title: '10 Reasons Why Your Business Needs a 360° Virtual Tour',
    excerpt: 'Discover how immersive virtual tours can boost engagement, increase conversions, and give you a competitive edge in today\'s digital marketplace.',
    category: 'Virtual Tours',
    author: 'Edone Team',
    readTime: '5 min read',
    date: 'Dec 10, 2024',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop',
    slug: 'why-business-needs-virtual-tour',
  },
  {
    id: 2,
    title: 'Website Design Trends to Watch in 2025',
    excerpt: 'From AI-powered personalization to immersive 3D experiences, here are the design trends that will shape the web in 2025.',
    category: 'Web Design',
    author: 'Edone Team',
    readTime: '7 min read',
    date: 'Dec 8, 2024',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop',
    slug: 'website-design-trends-2025',
  },
  {
    id: 3,
    title: 'How SEO and Google Ads Work Together for Maximum ROI',
    excerpt: 'Learn how to combine organic search optimization with paid advertising to create a powerful digital marketing strategy.',
    category: 'Digital Marketing',
    author: 'Edone Team',
    readTime: '6 min read',
    date: 'Dec 5, 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    slug: 'seo-google-ads-together',
  },
];

const categoryColors: Record<string, string> = {
  'Virtual Tours': 'from-edone-primary to-edone-secondary',
  'Web Design': 'from-edone-secondary to-edone-accent',
  'Digital Marketing': 'from-edone-accent to-edone-primary',
};

export function HomeBlogPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(var(--color-logo-1),0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-edone-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <BookOpen className="h-4 w-4 text-edone-primary" />
            <span className="text-sm font-semibold text-edone-primary">Latest Insights</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          >
            From Our{' '}
            <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
              Blog
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Stay updated with the latest trends, tips, and insights in digital marketing and web development
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-edone-primary/20 transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${categoryColors[post.category] || 'from-gray-600 to-gray-700'}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-edone-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center text-edone-primary font-semibold text-sm group-hover:text-edone-secondary transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="group bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-6 rounded-xl shadow-xl"
          >
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
