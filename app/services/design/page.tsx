import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Palette, UtensilsCrossed, Stethoscope, ShoppingBag, Building, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { HomeCTA } from '@/components/sections/HomeCTA';
import { DESIGN_INDUSTRIES } from '@/lib/services-data';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Website Design Services - Professional UI/UX Design',
  description: 'Professional website design services tailored for your industry. Custom UI/UX design for restaurants, clinics, retail, B2B, and education sectors.',
  keywords: ['website design', 'UI/UX design', 'web design services', 'custom website design', 'professional web design'],
});

// Icon mapping
const industryIcons: Record<string, React.ElementType> = {
  restaurants: UtensilsCrossed,
  clinics: Stethoscope,
  retail: ShoppingBag,
  b2b: Building,
  education: BookOpen,
};

// Industry images
const industryImages: Record<string, string> = {
  restaurants: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
  clinics: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=800&auto=format&fit=crop',
  retail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
  b2b: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  education: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
};

export default function WebDesignPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Website Design', url: '/services/design' },
  ]);

  const serviceSchema = generateServiceSchema(
    'Website Design Services',
    'Professional website design services with custom UI/UX for various industries.'
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
        description="Stunning, user-friendly website designs that captivate your audience and drive conversions"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Website Design' }]}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Palette className="w-16 h-16 mb-6 text-edone-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Design That Converts
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We create visually stunning, intuitive website designs that reflect your brand identity
                and drive business results. Our designs focus on user experience, mobile responsiveness,
                and conversion optimization.
              </p>
              <div className="space-y-3">
                {['Custom UI/UX tailored to your brand', 'Mobile-first responsive design', 'Conversion-focused layouts', 'SEO-friendly structure'].map((item, i) => (
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
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
                  alt="Website Design Process"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
              </div>
              {/* Sample designs floating */}
              <div className="absolute -bottom-6 -right-6 w-32 h-24 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=400&auto=format&fit=crop"
                  alt="Design sample"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Features with Images */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { title: 'Custom UI/UX Design', desc: 'Unique designs tailored to your brand and audience', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=400&auto=format&fit=crop' },
              { title: 'Mobile-First Approach', desc: 'Responsive designs that look great on all devices', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&auto=format&fit=crop' },
              { title: 'Brand Integration', desc: 'Seamless incorporation of your brand identity', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop' },
            ].map((feature, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <CheckCircle className="w-8 h-8 text-edone-primary mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Cards with Images */}
          <div className="mb-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-4">
              Industries We Design For
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Select your industry to see customized design solutions, sample work, and pricing
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DESIGN_INDUSTRIES.map((industry) => {
                const Icon = industryIcons[industry.slug] || Palette;
                const image = industryImages[industry.slug] || 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop';
                return (
                  <Link
                    key={industry.id}
                    href={`/services/design/${industry.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:border-edone-primary/20 transition-all duration-300"
                  >
                    {/* Industry Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={image}
                        alt={industry.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-white">
                          {industry.name}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <p className="text-sm text-gray-600 mb-3">
                        {industry.shortDescription}
                      </p>
                      {industry.priceRange && (
                        <p className="text-sm font-semibold text-edone-accent mb-4">
                          {industry.priceRange}
                        </p>
                      )}
                      <span className="inline-flex items-center text-sm font-medium text-edone-primary group-hover:text-edone-secondary">
                        View details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
              Our Design Process
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: 1, title: 'Discovery', desc: 'Understanding your brand, goals, and audience' },
                { step: 2, title: 'Wireframing', desc: 'Creating layout structure and user flow' },
                { step: 3, title: 'Visual Design', desc: 'High-fidelity mockups with branding' },
                { step: 4, title: 'Handoff', desc: 'Development-ready designs delivered' },
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
