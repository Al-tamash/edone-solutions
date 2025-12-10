import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, Heart, Gem, GraduationCap, Hammer, ArrowLeft, CheckCircle, Phone, Mail, Play } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { CaseStudy } from '@/components/common/CaseStudy';
import { PricingGrid } from '@/components/common/PricingCard';
import { TestimonialGrid } from '@/components/common/TestimonialCard';
import { Button } from '@/components/ui/button';
import { getVirtualTourCategory, VIRTUAL_TOUR_PRICING, VIRTUAL_TOUR_CATEGORIES } from '@/lib/services-data';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo';
import { COMPANY } from '@/lib/constants';

// Icon mapping
const categoryIcons: Record<string, React.ElementType> = {
  hotel: Building2,
  hospital: Heart,
  jewellery: Gem,
  school: GraduationCap,
  hardware: Hammer,
};

// Category images from Unsplash
const categoryImages: Record<string, string> = {
  hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
  hospital: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop',
  jewellery: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop',
  school: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop',
  hardware: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1000&auto=format&fit=crop',
};

interface PageProps {
  params: Promise<{ category: string }>;
}

// Generate static params for all categories
export async function generateStaticParams() {
  return VIRTUAL_TOUR_CATEGORIES.map((category) => ({
    category: category.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getVirtualTourCategory(resolvedParams.category);
  
  if (!category) {
    return generateSEOMetadata({ title: 'Category Not Found' });
  }

  return generateSEOMetadata({
    title: `360 Virtual Tours for ${category.name} | Edone Solutions`,
    description: category.fullDescription,
    keywords: ['360 virtual tours', category.name, 'virtual tour services', 'immersive tours'],
  });
}

export default async function VirtualTourCategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const category = getVirtualTourCategory(resolvedParams.category);

  if (!category) {
    notFound();
  }

  const Icon = categoryIcons[category.slug] || Building2;
  const heroImage = categoryImages[category.slug] || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop';

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: '360 Virtual Tours', url: '/services/360' },
    { name: category.name, url: `/services/360/${category.slug}` },
  ]);

  const serviceSchema = generateServiceSchema(
    `360 Virtual Tours for ${category.name}`,
    category.fullDescription
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
        title={`360° Virtual Tours for ${category.name}`}
        description={category.shortDescription}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: '360 Virtual Tours', href: '/services/360' },
          { label: category.name },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/services/360"
            className="inline-flex items-center text-sm text-gray-600 hover:text-edone-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All 360 Virtual Tour Services
          </Link>

          {/* Hero Image Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-edone-primary to-edone-secondary rounded-xl text-white">
                  <Icon className="w-8 h-8" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  360° Tours for {category.name}
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{category.fullDescription}</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-edone-primary to-edone-secondary text-white hover:opacity-90"
                  size="lg"
                >
                  <Link href={`/contact?service=360&category=${category.slug}`}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={heroImage}
                  alt={`360 Virtual Tour for ${category.name}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-[350px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-6">
                  <div className="text-white text-center">
                    <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Play className="w-7 h-7 text-white fill-white" />
                    </div>
                    <p className="font-semibold text-sm">Interactive 360° Tour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded 360 Virtual Tour Demo */}
          <div className="mb-16">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 text-center mb-4">
              Experience a Live 360° Virtual Tour
            </h2>
            <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
              Click and drag to explore. This is an example of the immersive experience we create for our clients.
            </p>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <iframe
                src="https://tourmkr.com/F1GzsCVngb/45697725p&30.36h&85.33t"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={`360 Virtual Tour Demo for ${category.name}`}
                className="w-full"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              ↑ Drag to look around • Use scroll to zoom
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-12">
              {/* Features */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.features.map((feature, index) => (
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

              {/* Specific Features */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  {category.name}-Specific Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.specificFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gradient-to-br from-edone-accent-50 to-white rounded-xl border border-edone-accent-100"
                    >
                      <CheckCircle className="w-5 h-5 text-edone-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,150,30,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,150,30,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                <h2 className="text-xl font-bold mb-6 relative">Benefits for Your Business</h2>
                <div className="grid sm:grid-cols-2 gap-4 relative">
                  {category.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-edone-primary rounded-full" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Studies */}
              {category.caseStudies.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Case Studies & Results</h2>
                  <div className="space-y-8">
                    {category.caseStudies.map((caseStudy) => (
                      <CaseStudy key={caseStudy.id} caseStudy={caseStudy} />
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonials */}
              {category.testimonials.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
                  <TestimonialGrid testimonials={category.testimonials} />
                </div>
              )}

              {/* Client Logos */}
              {category.clients.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Our {category.name} Clients</h2>
                  <div className="flex flex-wrap gap-6 items-center">
                    {category.clients.map((client) => (
                      <div
                        key={client.id}
                        className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 h-16 w-32 flex items-center justify-center"
                      >
                        {client.logoUrl ? (
                          <Image
                            src={client.logoUrl}
                            alt={client.name}
                            width={100}
                            height={40}
                            className="object-contain max-h-10"
                          />
                        ) : (
                          <span className="text-sm font-medium text-gray-500 text-center">
                            {client.name}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-8">
              {/* Hero Image Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <div className="relative h-48">
                  <Image
                    src={heroImage}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <Icon className="w-6 h-6 text-white" />
                    <span className="text-white font-bold">{category.name}</span>
                  </div>
                </div>
              </div>

              {/* Pricing Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                <div className="bg-gradient-to-r from-edone-primary to-edone-secondary p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Get Your 360° Tour</h3>
                  <p className="text-white/80 text-sm">Professional virtual tours starting from</p>
                  <p className="text-3xl font-extrabold mt-2">₹6,310</p>
                </div>

                <div className="p-6">
                  <PricingGrid packages={VIRTUAL_TOUR_PRICING} className="!grid-cols-1" />
                  
                  {category.pricingNotes && (
                    <p className="text-sm text-gray-500 mt-4 text-center">
                      {category.pricingNotes}
                    </p>
                  )}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Have Questions?</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Our team is ready to help you create the perfect virtual tour for your {category.name.toLowerCase()}.
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

                <Button
                  asChild
                  className="w-full mt-6 bg-gradient-to-r from-edone-primary to-edone-secondary text-white hover:opacity-90"
                  size="lg"
                >
                  <Link href={`/contact?service=360&category=${category.slug}`}>
                    Book a Tour
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
