import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Camera, Building2, Heart, Gem, GraduationCap, Hammer, ArrowRight, CheckCircle, Play,
  Smartphone, Share2, Glasses, MapPin, Palette, BarChart3, DollarSign, Globe, MousePointer
} from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { HomeCTA } from '@/components/sections/HomeCTA';
import { PricingGrid } from '@/components/common/PricingCard';
import { VIRTUAL_TOUR_CATEGORIES, VIRTUAL_TOUR_PRICING } from '@/lib/services-data';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: '360 Virtual Tours - Immersive Digital Experiences',
  description: 'Transform your space with immersive 360° virtual tours. Perfect for hotels, hospitals, jewellery stores, schools, and hardware stores. Starting from ₹6,310.',
  keywords: ['360 virtual tours', '360 photography', 'virtual tour services', 'Google Street View', 'immersive tours', 'Hyderabad'],
});

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
  hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
  hospital: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
  jewellery: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
  school: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
  hardware: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop',
};

// Feature badges data (like Turiya's 9 features)
const featureBadges = [
  {
    icon: MousePointer,
    title: 'Interactive & Informative',
    description: 'Engage audience with interactive hotspots, text, music, voice over, images and embedded videos',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Responsive design ensures customers experience 360° tours on all Android/iOS devices',
  },
  {
    icon: Share2,
    title: 'Built for Social',
    description: 'Integrated social media icons for easy sharing across messengers and social platforms',
  },
  {
    icon: Globe,
    title: 'Platform Neutral',
    description: 'Works on all modern browsers running Windows, Apple iOS, OSX and Google Android',
  },
  {
    icon: Glasses,
    title: 'Virtual Reality Ready',
    description: 'Can be embedded and made VR ready for your head mounted display devices',
  },
  {
    icon: MapPin,
    title: 'Google Maps Integration',
    description: 'Improve retention rate and organic search by listing on Google Street View / Maps',
  },
  {
    icon: Palette,
    title: 'Brand Consistency',
    description: 'Tours align with your branding and design guidelines for seamless customer experience',
  },
  {
    icon: BarChart3,
    title: 'Measurable Analytics',
    description: 'Integrated with Google Analytics to provide accurate overview of user engagement',
  },
  {
    icon: DollarSign,
    title: 'No Hidden Charges',
    description: 'Pay nothing extra for UI/UX, web development, testing and VR version. No AMC fees',
  },
];

export default function VirtualToursPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: '360 Virtual Tours', url: '/services/360' },
  ]);

  const serviceSchema = generateServiceSchema(
    '360 Virtual Tour Services',
    'Professional 360° virtual tour photography and development services for businesses across various industries.'
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
        title="360° Virtual Tours"
        description="Give your customers an immersive experience that brings your space to life"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: '360 Virtual Tours' }]}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Camera className="w-16 h-16 mb-6 text-edone-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Showcase Your Space Like Never Before
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our 360° virtual tours allow potential customers to explore your business from anywhere
                in the world. From hotels to hospitals, jewellery stores to schools, we create immersive
                experiences that drive engagement and conversions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-edone-primary to-edone-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop"
                  alt="360 Virtual Tour Photography"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-8">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                    <p className="font-semibold">Interactive 360° Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Badges Section (Like Turiya's 9 Features) */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Features to <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">Enhance and Empower</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need for a premium 360° virtual tour experience
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureBadges.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-edone-primary/30 hover:shadow-xl hover:shadow-edone-primary/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-edone-primary/10 to-edone-secondary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-edone-primary group-hover:to-edone-secondary transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-edone-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Embedded 360 Tour Demo */}
          <div className="mb-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-4">
              Experience a Live 360° Tour
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Drag to look around and explore this sample virtual tour
            </p>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1702200000000!6m8!1m7!1sCAoSLEFGMVFpcE5iN3lYMGtQMW5YbVp6eHlYX0V6eGJ1UGRfR0Y3TnFfX3B5dG4w!2m2!1d17.4326!2d78.5011!3f180!4f0!5f0.7820865974627469"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="360 Virtual Tour Demo"
                className="w-full"
              />
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {[
              { title: 'Increase Engagement', desc: 'Visitors spend 5x more time on pages with virtual tours', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=400&auto=format&fit=crop' },
              { title: 'Boost Conversions', desc: 'Up to 45% increase in booking and inquiry rates', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop' },
              { title: 'Build Trust', desc: 'Transparency leads to higher customer confidence', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=400&auto=format&fit=crop' },
              { title: '24/7 Availability', desc: 'Your virtual door is always open for exploration', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop' },
            ].map((benefit, index) => (
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
                  <CheckCircle className="w-8 h-8 text-edone-primary mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Category Cards with Images */}
          <div className="mb-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Click on a category to see industry-specific features, case studies, and pricing
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VIRTUAL_TOUR_CATEGORIES.map((category) => {
                const Icon = categoryIcons[category.slug] || Camera;
                const image = categoryImages[category.slug] || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop';
                return (
                  <Link
                    key={category.id}
                    href={`/services/360/${category.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:border-edone-primary/20 transition-all duration-300"
                  >
                    {/* Category Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-white">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <p className="text-sm text-gray-600 mb-4">
                        {category.shortDescription}
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

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Choose the package that fits your space. Custom pricing available for larger properties.
            </p>

            <PricingGrid packages={VIRTUAL_TOUR_PRICING} />

            <p className="text-center text-gray-500 text-sm mt-8">
              * Prices are for the Hyderabad area. Additional travel charges may apply for other locations.
            </p>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
              Our 360° Tour Process
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: 1, title: 'Consultation', desc: 'We discuss your space and goals' },
                { step: 2, title: 'Site Visit', desc: 'Our team captures 360° images' },
                { step: 3, title: 'Processing', desc: 'We stitch and enhance the photos' },
                { step: 4, title: 'Interactive Build', desc: 'Adding navigation and hotspots' },
                { step: 5, title: 'Delivery', desc: 'Published on your website & Google' },
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
