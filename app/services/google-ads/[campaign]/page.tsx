import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Phone, Mail, Search, Monitor, MapPin, RotateCcw, TrendingUp, Target, Eye, MousePointer } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { CaseStudy } from '@/components/common/CaseStudy';
import { Button } from '@/components/ui/button';
import { getGoogleAdsCampaign, GOOGLE_ADS_CAMPAIGNS } from '@/lib/services-data';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo';
import { COMPANY } from '@/lib/constants';

// Icon mapping
const campaignIcons: Record<string, React.ElementType> = {
  search: Search,
  display: Monitor,
  local: MapPin,
  remarketing: RotateCcw,
};

interface PageProps {
  params: Promise<{ campaign: string }>;
}

// Generate static params
export async function generateStaticParams() {
  return GOOGLE_ADS_CAMPAIGNS.map((campaign) => ({
    campaign: campaign.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const campaign = getGoogleAdsCampaign(resolvedParams.campaign);
  
  if (!campaign) {
    return generateSEOMetadata({ title: 'Campaign Not Found' });
  }

  return generateSEOMetadata({
    title: `${campaign.name} Management | Google Ads Services`,
    description: campaign.description,
    keywords: ['Google Ads', campaign.name, 'PPC management', 'paid advertising'],
  });
}

export default async function GoogleAdsCampaignPage({ params }: PageProps) {
  const resolvedParams = await params;
  const campaign = getGoogleAdsCampaign(resolvedParams.campaign);

  if (!campaign) {
    notFound();
  }

  const Icon = campaignIcons[campaign.slug] || TrendingUp;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Google Ads', url: '/services/google-ads' },
    { name: campaign.name, url: `/services/google-ads/${campaign.slug}` },
  ]);

  const serviceSchema = generateServiceSchema(
    `${campaign.name} Management`,
    campaign.description
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
        title={campaign.name}
        description={campaign.description}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Google Ads', href: '/services/google-ads' },
          { label: campaign.name },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/services/google-ads"
            className="inline-flex items-center text-sm text-gray-600 hover:text-edone-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Google Ads Services
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div className="bg-gradient-to-br from-edone-primary-50 to-white rounded-2xl p-8 border border-edone-primary-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-edone-primary to-edone-secondary rounded-xl text-white">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {campaign.name}
                    </h2>
                    <p className="text-gray-600">{campaign.description}</p>
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">What We Deliver</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {campaign.deliverables.map((deliverable, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                    >
                      <CheckCircle className="w-5 h-5 text-edone-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Results */}
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h2 className="text-xl font-bold mb-6">Expected Results</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {campaign.expectedResults.impressions && (
                    <div className="text-center">
                      <Eye className="w-6 h-6 mx-auto mb-2 text-edone-primary" />
                      <p className="text-2xl font-bold">{campaign.expectedResults.impressions}</p>
                      <p className="text-sm text-gray-400">Impressions</p>
                    </div>
                  )}
                  {campaign.expectedResults.clicks && (
                    <div className="text-center">
                      <MousePointer className="w-6 h-6 mx-auto mb-2 text-edone-primary" />
                      <p className="text-2xl font-bold">{campaign.expectedResults.clicks}</p>
                      <p className="text-sm text-gray-400">Clicks</p>
                    </div>
                  )}
                  {campaign.expectedResults.ctr && (
                    <div className="text-center">
                      <Target className="w-6 h-6 mx-auto mb-2 text-edone-primary" />
                      <p className="text-2xl font-bold">{campaign.expectedResults.ctr}</p>
                      <p className="text-sm text-gray-400">CTR</p>
                    </div>
                  )}
                  {campaign.expectedResults.conversions && (
                    <div className="text-center">
                      <TrendingUp className="w-6 h-6 mx-auto mb-2 text-edone-primary" />
                      <p className="text-2xl font-bold">{campaign.expectedResults.conversions}</p>
                      <p className="text-sm text-gray-400">Conversions</p>
                    </div>
                  )}
                  {campaign.expectedResults.roi && (
                    <div className="text-center">
                      <TrendingUp className="w-6 h-6 mx-auto mb-2 text-edone-primary" />
                      <p className="text-2xl font-bold">{campaign.expectedResults.roi}</p>
                      <p className="text-sm text-gray-400">ROI</p>
                    </div>
                  )}
                </div>
                <p className="text-center text-gray-400 text-sm mt-6">
                  * Results vary based on industry, budget, and competition
                </p>
              </div>

              {/* Case Studies */}
              {campaign.caseStudies.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Success Stories</h2>
                  <div className="space-y-8">
                    {campaign.caseStudies.map((caseStudy) => (
                      <CaseStudy key={caseStudy.id} caseStudy={caseStudy} showPanorama={false} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Pricing Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                <div className="bg-gradient-to-r from-edone-primary to-edone-secondary p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{campaign.name}</h3>
                  <p className="text-white/80 text-sm">Recommended Monthly Budget</p>
                  <p className="text-2xl font-extrabold mt-2">{campaign.recommendedBudget}</p>
                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Deliverables:</h4>
                  <ul className="space-y-3 mb-6">
                    {campaign.deliverables.slice(0, 5).map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-edone-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-edone-primary to-edone-secondary text-white hover:opacity-90"
                    size="lg"
                  >
                    <Link href={`/contact?service=google-ads&campaign=${campaign.slug}`}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Free Consultation</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Discuss your goals and get a custom campaign proposal.
                </p>
                
                <div className="space-y-4">
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-edone-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{COMPANY.phone}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-edone-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{COMPANY.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
