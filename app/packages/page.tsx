import { PageHeader } from "@/components/common/PageHeader";
import { HomeCTA } from "@/components/sections/HomeCTA";
import Link from "next/link";
import { Check, ArrowRight, Star, Sparkles, Zap, Shield, HeadphonesIcon } from "lucide-react";
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Packages & Pricing - Customized Digital Solutions",
  description: "Explore our flexible packages for web design, web development, and 360° virtual tours. Get a custom quote tailored to your business needs.",
  keywords: ["web design packages", "pricing", "virtual tour packages", "custom quote"],
});

const servicePackages = [
  {
    id: 'web-design',
    name: 'Web Design',
    description: 'Beautiful, conversion-focused designs',
    icon: Sparkles,
    tiers: [
      {
        name: 'Starter',
        description: 'Perfect for small businesses',
        features: [
          'Up to 5 pages design',
          'Mobile-responsive layout',
          'Basic SEO setup',
          'Contact form',
          '2 revision rounds',
          '1 week delivery',
        ],
        highlighted: false,
      },
      {
        name: 'Professional',
        description: 'Most popular choice',
        features: [
          'Up to 10 pages design',
          'Mobile-responsive layout',
          'Advanced SEO setup',
          'Contact & booking forms',
          'Social media integration',
          'Unlimited revisions',
          '2 weeks delivery',
          '30 days support',
        ],
        highlighted: true,
      },
      {
        name: 'Enterprise',
        description: 'For large organizations',
        features: [
          'Unlimited pages design',
          'Mobile-responsive layout',
          'Complete SEO audit',
          'Custom forms & integrations',
          'CRM integration',
          'Unlimited revisions',
          'Priority delivery',
          '90 days support',
          'Dedicated designer',
        ],
        highlighted: false,
      },
    ],
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Powerful, scalable web solutions',
    icon: Zap,
    tiers: [
      {
        name: 'Basic',
        description: 'Simple websites',
        features: [
          'Static website',
          'Up to 5 pages',
          'Contact form',
          'Mobile responsive',
          'Basic hosting setup',
          '1 week delivery',
        ],
        highlighted: false,
      },
      {
        name: 'Business',
        description: 'Dynamic websites & apps',
        features: [
          'Dynamic CMS website',
          'Up to 15 pages',
          'Admin panel',
          'Blog functionality',
          'E-commerce ready',
          'Payment integration',
          '3 weeks delivery',
          '60 days support',
        ],
        highlighted: true,
      },
      {
        name: 'Custom',
        description: 'Complex applications',
        features: [
          'Custom web application',
          'Unlimited features',
          'Full admin dashboard',
          'API development',
          'Third-party integrations',
          'Database design',
          'Scalable architecture',
          '6 months support',
          'Dedicated team',
        ],
        highlighted: false,
      },
    ],
  },
  {
    id: 'virtual-tours',
    name: '360° Virtual Tours',
    description: 'Immersive visual experiences',
    icon: Shield,
    tiers: [
      {
        name: 'Essential',
        description: 'Small spaces',
        features: [
          'Up to 5 panoramic shots',
          'Basic navigation',
          'Web embed code',
          'Mobile optimized',
          'Google Maps listing',
          '3 days delivery',
        ],
        highlighted: false,
      },
      {
        name: 'Premium',
        description: 'Medium properties',
        features: [
          'Up to 15 panoramic shots',
          'Interactive hotspots',
          'Custom branding',
          'Info pop-ups',
          'Google Maps + Street View',
          'Social sharing',
          '1 week delivery',
          'Analytics integration',
        ],
        highlighted: true,
      },
      {
        name: 'Ultimate',
        description: 'Large properties',
        features: [
          'Unlimited panoramic shots',
          'Full interactive tour',
          'Custom UI/UX',
          'Video & audio integration',
          'VR Ready',
          'Floor plan integration',
          'Lead capture forms',
          'Priority support',
          'Drone shots (if needed)',
        ],
        highlighted: false,
      },
    ],
  },
];

const whyChooseFeatures = [
  { icon: Star, title: 'Quality Guaranteed', description: 'We don\'t compromise on quality' },
  { icon: HeadphonesIcon, title: '24/7 Support', description: 'Always here when you need us' },
  { icon: Zap, title: 'Fast Delivery', description: 'Quick turnaround on all projects' },
  { icon: Shield, title: 'Secure & Reliable', description: 'Your data is safe with us' },
];

export default function PackagesPage() {
  const breadcrumbs = [{ label: "Packages" }];
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Packages", url: "/packages" },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHeader
        title="Our Packages"
        description="Flexible solutions tailored to your business needs and budget"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-600">
              Every business is unique, and so are our solutions. Browse our packages below and 
              <Link href="/contact" className="text-edone-primary font-semibold hover:underline"> contact us</Link> for a customized quote.
            </p>
          </div>

          {/* Service Packages */}
          {servicePackages.map((service, serviceIndex) => (
            <div key={service.id} className="mb-20">
              {/* Service Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-edone-primary to-edone-secondary flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{service.name}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>

              {/* Pricing Tiers */}
              <div className="grid md:grid-cols-3 gap-6">
                {service.tiers.map((tier, tierIndex) => (
                  <div
                    key={tierIndex}
                    className={`relative rounded-2xl p-6 ${
                      tier.highlighted
                        ? 'bg-gradient-to-br from-edone-primary via-edone-secondary to-edone-accent text-white shadow-2xl shadow-edone-primary/25 scale-105 z-10'
                        : 'bg-white border-2 border-gray-100 hover:border-edone-primary/30 hover:shadow-xl'
                    } transition-all duration-300`}
                  >
                    {tier.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-edone-primary px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </div>
                    )}

                    <h3 className={`text-xl font-bold mb-1 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {tier.name}
                    </h3>
                    <p className={`text-sm mb-6 ${tier.highlighted ? 'text-white/80' : 'text-gray-500'}`}>
                      {tier.description}
                    </p>

                    <div className={`text-3xl font-bold mb-6 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      Contact for Quote
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className={`w-5 h-5 flex-shrink-0 ${tier.highlighted ? 'text-white' : 'text-edone-primary'}`} />
                          <span className={`text-sm ${tier.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                        tier.highlighted
                          ? 'bg-white text-edone-primary hover:bg-gray-100'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      Get Quote
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Why Choose Us */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose Edone Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-edone-primary to-edone-secondary flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Quote CTA */}
          <div className="text-center bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent rounded-3xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our packages are starting points. We'll create a tailored solution that perfectly fits your requirements and budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-edone-primary rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Request Custom Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
