import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Phone, Mail, Code, UtensilsCrossed, Stethoscope, ShoppingBag, Building, BookOpen } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { CaseStudy } from '@/components/common/CaseStudy';
import { TestimonialGrid } from '@/components/common/TestimonialCard';
import { Button } from '@/components/ui/button';
import { getDevelopmentIndustry, DEVELOPMENT_INDUSTRIES } from '@/lib/services-data';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo';
import { COMPANY } from '@/lib/constants';

// Icon mapping
const industryIcons: Record<string, React.ElementType> = {
  restaurants: UtensilsCrossed,
  clinics: Stethoscope,
  retail: ShoppingBag,
  b2b: Building,
  education: BookOpen,
};

interface PageProps {
  params: Promise<{ industry: string }>;
}

// Generate static params
export async function generateStaticParams() {
  return DEVELOPMENT_INDUSTRIES.map((industry) => ({
    industry: industry.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = getDevelopmentIndustry(resolvedParams.industry);
  
  if (!industry) {
    return generateSEOMetadata({ title: 'Industry Not Found' });
  }

  return generateSEOMetadata({
    title: `Website Development for ${industry.name} | Custom Solutions`,
    description: industry.fullDescription,
    keywords: ['website development', industry.name, 'web development', 'custom web applications'],
  });
}

export default async function DevelopmentIndustryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const industry = getDevelopmentIndustry(resolvedParams.industry);

  if (!industry) {
    notFound();
  }

  const Icon = industryIcons[industry.slug] || Code;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Website Development', url: '/services/development' },
    { name: industry.name, url: `/services/development/${industry.slug}` },
  ]);

  const serviceSchema = generateServiceSchema(
    `Website Development for ${industry.name}`,
    industry.fullDescription
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
        title={`Website Development for ${industry.name}`}
        description={industry.shortDescription}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Website Development', href: '/services/development' },
          { label: industry.name },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/services/development"
            className="inline-flex items-center text-sm text-gray-600 hover:text-edone-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Development Services
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div className="bg-gradient-to-br from-edone-accent-50 to-white rounded-2xl p-8 border border-edone-accent-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-edone-primary to-edone-secondary rounded-xl text-white">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {industry.name} Web Development
                    </h2>
                    <p className="text-gray-600">{industry.fullDescription}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Features & Functionality</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {industry.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                    >
                      <CheckCircle className="w-5 h-5 text-edone-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h2 className="text-xl font-bold mb-6">Business Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {industry.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-edone-primary rounded-full" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Screenshots */}
              {industry.sampleScreenshots.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Sample Applications</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {industry.sampleScreenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 border border-gray-200"
                      >
                        <Image
                          src={screenshot}
                          alt={`${industry.name} application sample ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Case Studies */}
              {industry.caseStudies.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Case Studies</h2>
                  <div className="space-y-8">
                    {industry.caseStudies.map((caseStudy) => (
                      <CaseStudy key={caseStudy.id} caseStudy={caseStudy} showPanorama={false} />
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonials */}
              {industry.testimonials.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
                  <TestimonialGrid testimonials={industry.testimonials} />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Pricing Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                <div className="bg-gradient-to-r from-edone-primary to-edone-secondary p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{industry.name} Development</h3>
                  <p className="text-white/80 text-sm">Custom web application</p>
                  {industry.priceRange && (
                    <p className="text-2xl font-extrabold mt-2">{industry.priceRange}</p>
                  )}
                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Included:</h4>
                  <ul className="space-y-3 mb-6">
                    {industry.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-edone-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-edone-primary to-edone-secondary text-white hover:opacity-90"
                    size="lg"
                  >
                    <Link href={`/contact?service=development&industry=${industry.slug}`}>
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Ready to Start?</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Let&apos;s build your {industry.name.toLowerCase()} web application.
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
