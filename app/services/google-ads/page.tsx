import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  TrendingUp, 
  Search, 
  Monitor, 
  Youtube,
  MapPin, 
  RotateCcw, 
  ArrowRight, 
  CheckCircle, 
  Target, 
  DollarSign, 
  BarChart3,
  Eye,
  FileText,
  Sparkles
} from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { FAQSection, FAQItem } from '@/components/common/FAQSection';
import { StickyCTA } from '@/components/common/StickyCTA';
import { HomeCTA } from '@/components/sections/HomeCTA';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Google Ads Management Services | High-ROI PPC Campaigns',
  description: 'Get more leads with expertly managed Google Ads campaigns. Search, Display, Remarketing, and YouTube ads with complete transparency and weekly reporting.',
  keywords: ['Google Ads management India', 'PPC specialist', 'best PPC service', 'lead generation Google Ads', 'search ads', 'display ads', 'remarketing campaigns'],
});

// Services Offered
const services = [
  {
    icon: Search,
    title: 'Search Ads',
    description: 'Show your ads at the top of Google when customers search for your products or services.',
  },
  {
    icon: Monitor,
    title: 'Display Ads',
    description: 'Visual banner ads that reach customers across millions of websites and apps.',
  },
  {
    icon: RotateCcw,
    title: 'Remarketing',
    description: 'Re-engage visitors who left your website without converting.',
  },
  {
    icon: Youtube,
    title: 'YouTube Video Ads',
    description: 'Engage potential customers with compelling video ads on YouTube.',
  },
  {
    icon: MapPin,
    title: 'Local Lead Generation',
    description: 'Target customers in your area and drive foot traffic to your business.',
  },
];

// Why Choose Us - Human Tone
const whyChooseUs = [
  {
    title: 'We monitor your ads daily',
    description: 'No "set and forget" here. We actively optimize your campaigns every single day.',
  },
  {
    title: 'We reduce wasted budget',
    description: 'Negative keywords, bid adjustments, and smart targeting to maximize every rupee.',
  },
  {
    title: 'We bring real, trackable leads',
    description: 'Proper conversion tracking so you know exactly where your leads come from.',
  },
  {
    title: 'We write persuasive ad copy',
    description: 'Compelling headlines and descriptions that make people click and convert.',
  },
  {
    title: 'You get complete transparency',
    description: 'Weekly reports with clear metrics. No hidden fees, no confusing jargon.',
  },
];

// Deliverables
const deliverables = [
  { icon: Target, text: 'Campaign setup & structure' },
  { icon: Search, text: 'Keyword research & strategy' },
  { icon: FileText, text: 'Landing page optimization' },
  { icon: BarChart3, text: 'A/B testing' },
  { icon: Eye, text: 'Conversion tracking' },
  { icon: TrendingUp, text: 'Weekly performance reports' },
];

// Expected Results
const expectedResults = [
  { metric: '10K-50K', label: 'Monthly Impressions' },
  { metric: '3-5%', label: 'Average CTR' },
  { metric: '50-200', label: 'Monthly Leads' },
  { metric: '300-500%', label: 'Average ROI' },
];

// Process Steps
const processSteps = [
  { step: 1, title: 'Audit', desc: 'Analyze current performance' },
  { step: 2, title: 'Strategy', desc: 'Define goals and approach' },
  { step: 3, title: 'Setup', desc: 'Build campaigns and tracking' },
  { step: 4, title: 'Launch', desc: 'Go live with monitoring' },
  { step: 5, title: 'Optimize', desc: 'Continuous improvement' },
];

// FAQs
const faqs: FAQItem[] = [
  {
    question: 'How much should I budget for Google Ads?',
    answer: 'Budget depends on your industry, competition, and goals. We recommend starting with ₹20,000-50,000/month for most businesses. We\'ll help you determine the optimal budget during our consultation based on your market and objectives.',
  },
  {
    question: 'How quickly will I see results?',
    answer: 'You can start seeing traffic and leads within days of launching. However, it typically takes 2-4 weeks to gather enough data to optimize campaigns effectively. Most clients see significant improvements in ROI within the first month.',
  },
  {
    question: 'Do you manage my ad spend or is it separate?',
    answer: 'Your ad spend goes directly to Google through your own account — we don\'t touch it. Our fee is for management services only. This gives you complete transparency and control over your advertising budget.',
  },
  {
    question: 'What information do you need from me?',
    answer: 'We\'ll need access to your Google Ads account (or we\'ll create one), information about your target customers, services/products you offer, and your business goals. We\'ll guide you through everything.',
  },
  {
    question: 'How do you measure success?',
    answer: 'We track key metrics including impressions, clicks, click-through rate (CTR), cost per click (CPC), conversions, cost per lead, and return on ad spend (ROAS). We provide detailed weekly reports with clear explanations.',
  },
  {
    question: 'Can you help with our landing pages?',
    answer: 'Absolutely! Landing page quality directly affects your ad performance and cost. We provide landing page recommendations and can help create high-converting pages that improve your Quality Score and conversion rates.',
  },
];

export default function GoogleAdsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Google Ads', url: '/services/google-ads' },
  ]);

  const serviceSchema = generateServiceSchema(
    'Google Ads Management Services',
    'Professional Google Ads campaign management for businesses looking to grow through paid advertising.'
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
        title="Google Ads Management"
        description="Drive targeted traffic and generate leads with expertly managed Google Ads campaigns"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Google Ads' }]}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-edone-primary/10 dark:bg-edone-primary/20 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-edone-primary" />
                <span className="text-sm font-semibold text-edone-primary">High-ROI Campaigns</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Get More Leads & Sales with{' '}
                <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
                  High-ROI Google Ads
                </span>{' '}
                Campaigns
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                We run targeted Google Ads campaigns that bring quality customers to your business every day. 
                No wasted budget, no guesswork — just results you can measure.
              </p>
              <div className="space-y-3">
                {['Targeted audience reach', 'Measurable ROI', 'Data-driven optimization', 'Complete transparency'].map((item, i) => (
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
                  Get Free Ads Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                  alt="Google Ads Analytics Dashboard"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
              </div>
              {/* ROI floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">+300%</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Average ROI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Google Ads Services We Offer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Complete PPC solutions to reach customers at every stage of their journey
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
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
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Why Choose Our Google Ads Services?
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
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                    alt="Analytics Dashboard"
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
                Everything you get with our Google Ads management service
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

          {/* Expected Results */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Expected Results
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {expectedResults.map((result, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-edone-primary to-edone-secondary bg-clip-text text-transparent mb-2">{result.metric}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{result.label}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6">
              * Results vary based on industry, budget, and competition
            </p>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Our Approach
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
        title="Google Ads FAQs"
        subtitle="Common questions about our PPC management services"
        faqs={faqs}
      />

      {/* CTA Section */}
      <HomeCTA />

      {/* Sticky CTA */}
      <StickyCTA serviceName="Google Ads" />
    </>
  );
}
