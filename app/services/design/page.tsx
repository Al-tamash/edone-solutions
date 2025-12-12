import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Palette, 
  CheckCircle, 
  Smartphone, 
  Zap, 
  Eye, 
  Search,
  ArrowRight,
  Sparkles,
  Monitor,
  MessageCircle
} from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { FAQSection, FAQItem } from '@/components/common/FAQSection';
import { StickyCTA } from '@/components/common/StickyCTA';
import { HomeCTA } from '@/components/sections/HomeCTA';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Professional Website Design Services | Modern, Responsive & SEO-Ready',
  description: 'Create stunning, mobile-first website designs that build trust and convert visitors. Custom UI/UX, brand-focused visuals, and SEO-friendly structure.',
  keywords: ['website design company', 'business website design', 'best web design service India', 'mobile responsive website design', 'custom website design', 'UI/UX design'],
});

// Key Features
const keyFeatures = [
  {
    icon: Smartphone,
    title: 'Mobile-First Layouts',
    description: 'Your website looks and works perfectly on all devices — phones, tablets, and desktops.',
  },
  {
    icon: Palette,
    title: 'Clean UI/UX',
    description: 'Simple, intuitive designs that make it easy for visitors to navigate and take action.',
  },
  {
    icon: Eye,
    title: 'Brand-Focused Visuals',
    description: 'Every design element reflects your brand identity and builds customer trust.',
  },
  {
    icon: Search,
    title: 'SEO-Friendly Design',
    description: 'Built with SEO best practices so your website ranks higher on Google.',
  },
  {
    icon: Zap,
    title: 'Fast Loading Performance',
    description: 'Optimized for speed to keep visitors engaged and reduce bounce rates.',
  },
];

// Why Choose Us - Human Tone
const whyChooseUs = [
  {
    title: 'We make your website simple, modern, and easy to navigate',
    description: 'No complicated menus or confusing layouts. Your visitors will find what they need quickly.',
  },
  {
    title: 'We use real business psychology to improve customer trust',
    description: 'Strategic placement of testimonials, trust badges, and CTAs that actually convert.',
  },
  {
    title: 'Every design is optimized for Google visibility',
    description: 'We don\'t just make pretty websites — we make websites that rank.',
  },
  {
    title: 'We focus on your business goals, not just graphics',
    description: 'Every design decision is made to help you get more leads and customers.',
  },
];

// Deliverables
const deliverables = [
  { icon: Monitor, text: 'Custom Homepage + 3 Inner Pages' },
  { icon: MessageCircle, text: 'Contact Page + WhatsApp Integration' },
  { icon: Search, text: 'On-Page SEO Setup' },
  { icon: Palette, text: 'Professional Color Theme' },
  { icon: Eye, text: 'Stock Images Included' },
  { icon: Smartphone, text: 'Fully Responsive Design' },
];

// Process Steps
const processSteps = [
  { step: 1, title: 'Discovery', desc: 'Understanding your brand, goals, and audience' },
  { step: 2, title: 'Wireframing', desc: 'Creating layout structure and user flow' },
  { step: 3, title: 'Visual Design', desc: 'High-fidelity mockups with your branding' },
  { step: 4, title: 'Review', desc: 'Your feedback and refinements' },
  { step: 5, title: 'Handoff', desc: 'Development-ready designs delivered' },
];

// FAQs
const faqs: FAQItem[] = [
  {
    question: 'How long does it take to design a website?',
    answer: 'A typical website design takes 2-3 weeks depending on the number of pages and complexity. We provide a detailed timeline after understanding your requirements during our initial consultation.',
  },
  {
    question: 'Will my website work on mobile devices?',
    answer: 'Absolutely! We follow a mobile-first design approach. Your website will look and function perfectly on all devices — smartphones, tablets, laptops, and desktops.',
  },
  {
    question: 'Do you provide the final design files?',
    answer: 'Yes, you\'ll receive all design files in formats suitable for development (Figma/Adobe XD). You have full ownership of all designs we create for you.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Yes! We can completely redesign your existing website while preserving your content. We\'ll modernize the look, improve user experience, and optimize for conversions.',
  },
  {
    question: 'What do I need to provide for the design process?',
    answer: 'We\'ll need your logo, brand guidelines (if available), content for each page, and any specific design preferences or competitor websites you like. We guide you through the entire process.',
  },
  {
    question: 'Is SEO included in website design?',
    answer: 'Yes, our designs are structured with SEO best practices in mind. This includes proper heading hierarchy, image optimization, mobile responsiveness, and fast loading times — all factors that help with Google rankings.',
  },
];

export default function WebDesignPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Website Design', url: '/services/design' },
  ]);

  const serviceSchema = generateServiceSchema(
    'Website Design Services',
    'Professional website design services with custom UI/UX, mobile-first layouts, and SEO-friendly structure.'
  );

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHeader
        title="Website Design Services"
        description="Create stunning, user-friendly websites that captivate your audience and drive conversions"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Website Design' }]}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-edone-primary/10 dark:bg-edone-primary/20 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-edone-primary" />
                <span className="text-sm font-semibold text-edone-primary">Premium Designs</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Create a Modern, Professional Website That{' '}
                <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
                  Builds Trust & Converts Visitors
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                We design beautiful, responsive, SEO-ready websites that help your business look premium 
                and attract more customers. Every pixel is crafted to build trust and drive action.
              </p>
              <div className="space-y-3">
                {['Mobile-first responsive design', 'Conversion-focused layouts', 'SEO-optimized structure', 'Fast loading performance'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-edone-primary flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-edone-primary to-edone-secondary text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
                  alt="Website Design Process"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
              </div>
              {/* Sample designs floating */}
              <div className="absolute -bottom-6 -right-6 w-32 h-24 rounded-lg overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=400&auto=format&fit=crop"
                  alt="Design sample"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What Makes Our Designs Different
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Every website we design is built with these core principles
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-edone-primary/20 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-edone-primary/10 to-edone-secondary/10 dark:from-edone-primary/20 dark:to-edone-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-edone-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Why Choose Our Website Design Services?
                </h2>
                <div className="space-y-6">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-edone-primary to-edone-secondary flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1000&auto=format&fit=crop"
                    alt="UI/UX Design Process"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 mb-20 overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-logo-1),0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-logo-1),0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            <div className="relative">
              <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-4">
                What's Included
              </h2>
              <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
                Everything you get with our website design service
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deliverables.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 text-white">
                      <Icon className="w-5 h-5 text-edone-primary flex-shrink-0" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Our Design Process
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {processSteps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-edone-primary to-edone-secondary text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Website Design FAQs"
        subtitle="Common questions about our design services"
        faqs={faqs}
      />

      {/* CTA Section */}
      <HomeCTA />

      {/* Sticky CTA */}
      <StickyCTA serviceName="Website Design" />
    </>
  );
}
