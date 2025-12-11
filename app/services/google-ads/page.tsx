import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Search, Monitor, MapPin, RotateCcw, ArrowRight, CheckCircle, Target, DollarSign, BarChart3 } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { HomeCTA } from '@/components/sections/HomeCTA';
import { GOOGLE_ADS_CAMPAIGNS } from '@/lib/services-data';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Google Ads Management Services - PPC Advertising',
  description: 'Professional Google Ads management services. Search, Display, Local, and Remarketing campaigns to drive leads and sales for your business.',
  keywords: ['Google Ads', 'PPC management', 'Google advertising', 'search ads', 'display ads', 'remarketing'],
});

// Icon mapping
const campaignIcons: Record<string, React.ElementType> = {
  search: Search,
  display: Monitor,
  local: MapPin,
  remarketing: RotateCcw,
};

// Campaign images
const campaignImages: Record<string, string> = {
  search: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=800&auto=format&fit=crop',
  display: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
  local: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop',
  remarketing: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop',
};

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

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <TrendingUp className="w-16 h-16 mb-6 text-edone-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Advertise Where It Matters
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Reach your ideal customers at the exact moment they&apos;re searching for your products or services.
                Our Google Ads experts create and manage campaigns that maximize your ROI and drive real business results.
              </p>
              <div className="space-y-3">
                {['Targeted audience reach', 'Measurable ROI', 'Data-driven optimization', 'Scalable campaigns'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-edone-primary flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
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
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">+300%</p>
                    <p className="text-xs text-gray-500">Average ROI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits with Images */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Target, title: 'Targeted Reach', desc: 'Show ads to people actively looking for you', image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=400&auto=format&fit=crop' },
              { icon: DollarSign, title: 'Measurable ROI', desc: 'Track every click, lead, and conversion', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=400&auto=format&fit=crop' },
              { icon: BarChart3, title: 'Data-Driven', desc: 'Optimize campaigns based on performance', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop' },
              { icon: TrendingUp, title: 'Scalable Growth', desc: 'Increase budget as you see results', image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=400&auto=format&fit=crop' },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-5">
                    <Icon className="w-8 h-8 text-edone-primary mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Campaign Types with Images */}
          <div className="mb-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-4">
              Campaign Types
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Choose the right campaign type for your business goals
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {GOOGLE_ADS_CAMPAIGNS.map((campaign) => {
                const Icon = campaignIcons[campaign.slug] || TrendingUp;
                const image = campaignImages[campaign.slug] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop';
                return (
                  <Link
                    key={campaign.id}
                    href={`/services/google-ads/${campaign.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:border-edone-primary/20 transition-all duration-300"
                  >
                    {/* Campaign Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={image}
                        alt={campaign.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-white">
                          {campaign.name}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <p className="text-sm text-gray-600 mb-3">
                        {campaign.description}
                      </p>
                      <p className="text-sm font-semibold text-edone-accent mb-4">
                        Recommended: {campaign.recommendedBudget}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-edone-primary group-hover:text-edone-secondary">
                        Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-gray-900 rounded-2xl p-8 mb-20 overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-logo-1),0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-logo-1),0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            <h3 className="text-xl font-bold text-white text-center mb-8 relative">
              Included in All Campaigns
            </h3>
            <div className="grid md:grid-cols-3 gap-6 relative">
              {[
                'Keyword research & strategy',
                'Ad copy writing & optimization',
                'Landing page recommendations',
                'Conversion tracking setup',
                'A/B testing',
                'Competitor analysis',
                'Monthly performance reports',
                'Dedicated account manager',
                'Ongoing optimization',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-edone-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Results */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
              Expected Results
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { metric: '10K-50K', label: 'Monthly Impressions' },
                { metric: '3-5%', label: 'Average CTR' },
                { metric: '50-200', label: 'Monthly Leads' },
                { metric: '300-500%', label: 'Average ROI' },
              ].map((result, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-edone-primary to-edone-secondary bg-clip-text text-transparent mb-2">{result.metric}</p>
                  <p className="text-sm text-gray-600">{result.label}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              * Results vary based on industry, budget, and competition
            </p>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: 1, title: 'Audit', desc: 'Analyze current performance' },
                { step: 2, title: 'Strategy', desc: 'Define goals and approach' },
                { step: 3, title: 'Setup', desc: 'Build campaigns and tracking' },
                { step: 4, title: 'Launch', desc: 'Go live with monitoring' },
                { step: 5, title: 'Optimize', desc: 'Continuous improvement' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-edone-primary to-edone-secondary text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
