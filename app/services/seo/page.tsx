import { Metadata } from 'next';
import Image from 'next/image';
import { 
  Search, 
  Settings, 
  MapPin, 
  Link2, 
  FileText, 
  Users, 
  FileSearch,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Target,
  ArrowRight
} from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { FAQSection, FAQItem } from '@/components/common/FAQSection';
import { StickyCTA } from '@/components/common/StickyCTA';
import { HomeCTA } from '@/components/sections/HomeCTA';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo';
import Link from 'next/link';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Professional SEO Services India | Get Higher Google Rankings',
  description: 'Boost your Google rankings with our proven SEO strategies. On-page, technical, local SEO, and backlink building that delivers real, trackable results.',
  keywords: ['SEO services India', 'best SEO company', 'Google ranking service', 'local SEO agency', 'SEO optimization for business', 'on-page SEO', 'technical SEO', 'backlink building'],
});

// SEO Services Data
const seoServices = [
  {
    icon: FileText,
    title: 'On-Page SEO',
    description: 'Optimize your website content, meta tags, headings, and internal linking for better Google visibility.',
  },
  {
    icon: Settings,
    title: 'Technical SEO',
    description: 'Fix technical issues, improve site speed, ensure mobile-friendliness, and enhance crawlability.',
  },
  {
    icon: MapPin,
    title: 'Local SEO',
    description: 'Dominate local search results and Google Maps to attract nearby customers to your business.',
  },
  {
    icon: Link2,
    title: 'Off-Page / Backlink Building',
    description: 'Build high-quality backlinks from reputable websites to boost your domain authority.',
  },
  {
    icon: FileSearch,
    title: 'Content Optimization',
    description: 'Create and optimize content that ranks for your target keywords and engages visitors.',
  },
  {
    icon: Users,
    title: 'Competitor Research',
    description: 'Analyze your competitors\' strategies to find opportunities and outrank them.',
  },
  {
    icon: BarChart3,
    title: 'Website Audit',
    description: 'Complete technical and on-page audit to identify issues holding back your rankings.',
  },
];

// Why Choose Us Points
const whyChooseUs = [
  {
    title: 'We explain everything in simple language',
    description: 'No confusing jargon — we make SEO easy to understand so you know exactly what we\'re doing.',
  },
  {
    title: 'No fake promises — only real results',
    description: 'We don\'t guarantee #1 rankings overnight. We deliver sustainable, long-term growth.',
  },
  {
    title: 'Custom SEO strategy for your business',
    description: 'Every business is unique. We create tailored strategies that work specifically for you.',
  },
  {
    title: 'You\'ll see improvements within weeks',
    description: 'While SEO takes time, we focus on quick wins to show progress from the start.',
  },
  {
    title: 'We monitor rankings & traffic daily',
    description: 'Constant monitoring allows us to adapt and optimize your strategy in real-time.',
  },
];

// Deliverables
const deliverables = [
  'Comprehensive keyword research',
  'On-page optimization for all pages',
  'Title & meta description improvement',
  'Schema markup implementation',
  'Google My Business optimization',
  'Monthly SEO performance report',
  'Backlink strategy & building',
  'Technical SEO fixes',
  'Content recommendations',
  'Competitor analysis report',
];

// Process Steps
const processSteps = [
  { step: 1, title: 'Audit', desc: 'Complete website and competitor analysis' },
  { step: 2, title: 'Strategy', desc: 'Custom SEO plan based on your goals' },
  { step: 3, title: 'Optimize', desc: 'On-page and technical improvements' },
  { step: 4, title: 'Build', desc: 'Content creation and backlink building' },
  { step: 5, title: 'Monitor', desc: 'Track rankings and refine strategy' },
];

// FAQs
const faqs: FAQItem[] = [
  {
    question: 'How long does it take to see SEO results?',
    answer: 'SEO is a long-term strategy. You can expect to see initial improvements within 2-3 months, with significant results typically appearing between 4-6 months. However, we focus on quick wins early on to show progress while building for long-term success.',
  },
  {
    question: 'Do you guarantee first page rankings?',
    answer: 'No ethical SEO company can guarantee specific rankings because Google\'s algorithm is constantly changing. What we do guarantee is implementing proven strategies, transparent reporting, and continuous optimization to maximize your chances of ranking higher.',
  },
  {
    question: 'What\'s included in your SEO service?',
    answer: 'Our SEO service includes keyword research, on-page optimization, technical SEO fixes, content recommendations, Google My Business optimization, backlink building, competitor analysis, and monthly performance reports. We customize the package based on your specific needs.',
  },
  {
    question: 'How is your SEO different from others?',
    answer: 'We focus on sustainable, white-hat SEO techniques that build long-term value. We explain everything in simple language, provide complete transparency with detailed reports, and create custom strategies rather than using one-size-fits-all approaches.',
  },
  {
    question: 'Do I need to sign a long-term contract?',
    answer: 'While SEO works best as an ongoing effort, we offer flexible arrangements. We recommend a minimum 3-month commitment to see meaningful results, but we don\'t lock you into long-term contracts. Our goal is to earn your trust through results.',
  },
  {
    question: 'Will you need access to my website?',
    answer: 'Yes, to implement on-page optimizations and track performance, we\'ll need access to your website\'s backend, Google Analytics, Search Console, and Google My Business (if applicable). All access is kept secure and confidential.',
  },
];

export default function SEOServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'SEO Services', url: '/services/seo' },
  ]);

  const serviceSchema = generateServiceSchema(
    'SEO Services',
    'Professional SEO services including on-page optimization, technical SEO, local SEO, and backlink building to improve Google rankings.'
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
        title="SEO Services"
        description="Rank higher on Google and get organic customers with proven SEO strategies that work"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'SEO Services' }]}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-edone-primary/10 dark:bg-edone-primary/20 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-edone-primary" />
                <span className="text-sm font-semibold text-edone-primary">SEO That Works</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Rank Higher on Google &{' '}
                <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
                  Get Organic Customers
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                We help your business get more visibility on Google through smart SEO strategies that work. 
                No confusing jargon, no fake promises — just real results that grow your business.
              </p>
              <div className="space-y-3">
                {['Increased organic traffic', 'Higher Google rankings', 'More qualified leads', 'Better conversion rates'].map((item, i) => (
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
                  Get Free SEO Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd3?q=80&w=1000&auto=format&fit=crop"
                  alt="SEO Analytics Dashboard"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">+150%</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Avg Traffic Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our SEO Services
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Complete SEO solutions to help your business dominate search results
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-edone-primary/20 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-edone-primary/10 to-edone-secondary/10 dark:from-edone-primary/20 dark:to-edone-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-edone-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop"
                    alt="SEO Team Working"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Why Choose Our SEO Services?
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
            </div>
          </div>

          {/* Deliverables */}
          <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 mb-20 overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-logo-1),0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-logo-1),0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            <div className="relative">
              <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-4">
                What You Get
              </h2>
              <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
                Everything included in our SEO service to help you rank higher
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-edone-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Our SEO Process
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
        title="SEO FAQs"
        subtitle="Common questions about our SEO services"
        faqs={faqs}
      />

      {/* CTA Section */}
      <HomeCTA />

      {/* Sticky CTA */}
      <StickyCTA serviceName="SEO Services" />
    </>
  );
}
