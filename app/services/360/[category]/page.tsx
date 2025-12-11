import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, Heart, Gem, GraduationCap, Hammer, ArrowLeft, CheckCircle, Phone, Mail, Play,
  TrendingUp, Search, Share2, Clock, Smartphone, Award, Camera, MapPin, Video, MousePointer,
  Calendar, Users, X
} from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { CaseStudy } from '@/components/common/CaseStudy';
import { PricingGrid } from '@/components/common/PricingCard';
import { TestimonialGrid } from '@/components/common/TestimonialCard';
import { Button } from '@/components/ui/button';
import { HomeCTA } from '@/components/sections/HomeCTA';
import { getVirtualTourCategory, VIRTUAL_TOUR_PRICING, HOSPITAL_PRICING, HOTEL_PRICING, JEWELLERY_PRICING, SCHOOL_PRICING, HARDWARE_PRICING, VIRTUAL_TOUR_CATEGORIES } from '@/lib/services-data';
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
  hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
  hospital: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
  jewellery: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
  school: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop',
  hardware: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1200&auto=format&fit=crop',
};

// Benefits data per category
const categoryBenefits: Record<string, Array<{ icon: React.ElementType; title: string; description: string; stat?: string }>> = {
  hotel: [
    { icon: TrendingUp, title: 'Increase Bookings', description: 'Hotels with virtual tours see up to 45% more direct bookings as guests can explore before reserving.', stat: '+45%' },
    { icon: Search, title: 'Boost SEO Rankings', description: 'Google prioritizes businesses with virtual tours, helping you rank higher in local searches.', stat: 'Top 3' },
    { icon: Share2, title: 'Social Media Engagement', description: 'Virtual tours get 5x more shares than photos, expanding your reach to new guests.', stat: '5x' },
    { icon: Clock, title: '24/7 Showcase', description: 'Your hotel is always "open" for exploration, even when the front desk is closed.', stat: '24/7' },
    { icon: Smartphone, title: 'Mobile-Friendly', description: 'Perfectly optimized for smartphones where most travelers discover hotels.', stat: '80%' },
    { icon: Award, title: 'Competitive Edge', description: 'Stand out from competitors with cutting-edge technology that impresses guests.', stat: '#1' },
  ],
  hospital: [
    { icon: Heart, title: 'Reduce Patient Anxiety', description: 'Patients feel more comfortable when they can explore your facility before visiting.', stat: '-60%' },
    { icon: Search, title: 'Boost SEO Rankings', description: 'Google prioritizes healthcare providers with virtual tours in local search results.', stat: 'Top 3' },
    { icon: Users, title: 'Build Patient Trust', description: 'Transparency leads to higher patient confidence and satisfaction scores.', stat: '+40%' },
    { icon: Clock, title: '24/7 Accessibility', description: 'Patients can explore your facility anytime, reducing phone inquiries.', stat: '24/7' },
    { icon: Smartphone, title: 'Mobile-Friendly', description: 'Optimized for smartphones where patients often search for healthcare providers.', stat: '75%' },
    { icon: Award, title: 'Quality Showcase', description: 'Demonstrate your modern equipment and clean facilities visually.', stat: '#1' },
  ],
  jewellery: [
    { icon: TrendingUp, title: 'Increase Store Visits', description: 'Customers who explore your showroom virtually are more likely to visit in person.', stat: '+50%' },
    { icon: Share2, title: 'Reach NRI Customers', description: 'Enable customers abroad to browse your collections from anywhere in the world.', stat: 'Global' },
    { icon: Award, title: 'Build Brand Trust', description: 'Showcase your store ambiance and security to build customer confidence.', stat: '+35%' },
    { icon: Clock, title: '24/7 Showroom', description: 'Your showroom is always open for virtual browsing and appointments.', stat: '24/7' },
    { icon: Smartphone, title: 'Mobile Optimized', description: 'Perfect for customers browsing on smartphones and tablets.', stat: '85%' },
    { icon: Calendar, title: 'Virtual Appointments', description: 'Enable customers to schedule virtual viewing sessions.', stat: '3x' },
  ],
  school: [
    { icon: Users, title: 'Increase Admissions', description: 'Schools with virtual tours see 60% more admission inquiries from outstation applicants.', stat: '+60%' },
    { icon: Clock, title: 'Save Tour Time', description: 'Reduce physical campus tour requests while reaching more prospective parents.', stat: '-50%' },
    { icon: Search, title: 'Better Online Presence', description: 'Rank higher in education-related searches with immersive content.', stat: 'Top 5' },
    { icon: Smartphone, title: 'Mobile Access', description: 'Parents can explore your campus from their phones anytime.', stat: '24/7' },
    { icon: Award, title: 'Showcase Excellence', description: 'Highlight your infrastructure, labs, and facilities visually.', stat: '#1' },
    { icon: Share2, title: 'Easy Sharing', description: 'Parents can easily share your campus tour with family members.', stat: '4x' },
  ],
  hardware: [
    { icon: TrendingUp, title: 'Attract B2B Clients', description: 'Contractors and bulk buyers can inspect your inventory remotely before visiting.', stat: '+40%' },
    { icon: Users, title: 'Build Wholesale Trust', description: 'Showcase your warehouse capacity and product range to potential partners.', stat: '+55%' },
    { icon: Clock, title: 'Remote Inspections', description: 'Enable out-of-city buyers to inspect your stock without traveling.', stat: '24/7' },
    { icon: Search, title: 'Better Visibility', description: 'Stand out in B2B searches with comprehensive virtual warehouse tours.', stat: 'Top 3' },
    { icon: Smartphone, title: 'Mobile Friendly', description: 'Buyers can browse your inventory on any device.', stat: '70%' },
    { icon: Award, title: 'Quality Assurance', description: 'Demonstrate product quality and storage conditions visually.', stat: '#1' },
  ],
};

// What We Offer data per category
const categoryOfferings: Record<string, Array<{ icon: React.ElementType; title: string; description: string }>> = {
  hotel: [
    { icon: Camera, title: 'Full Property Tours', description: 'Complete 360° coverage of rooms, lobby, pool, restaurant, and all amenities with seamless navigation.' },
    { icon: MapPin, title: 'Google Business Integration', description: 'Get your tour featured directly on your Google Business profile for maximum visibility.' },
    { icon: MousePointer, title: 'Interactive Hotspots', description: 'Add clickable information points highlighting room features, amenities, or booking options.' },
    { icon: Video, title: 'Video Integration', description: 'Embed welcome videos, chef interviews, or event highlights within your virtual tour.' },
  ],
  hospital: [
    { icon: Camera, title: 'Department Tours', description: 'Complete 360° coverage of all departments, patient rooms, and diagnostic facilities.' },
    { icon: MapPin, title: 'Google Business Integration', description: 'Feature your tour on Google Maps for better local healthcare searches.' },
    { icon: MousePointer, title: 'Navigation Hotspots', description: 'Add directions, department info, and emergency contact points throughout the tour.' },
    { icon: Video, title: 'Doctor Introductions', description: 'Embed video introductions of key doctors and staff within the tour.' },
  ],
  jewellery: [
    { icon: Camera, title: 'Showroom Tours', description: 'High-detail 360° coverage of all display cases, collections, and private viewing areas.' },
    { icon: MapPin, title: 'Google Business Integration', description: 'Showcase your store directly on Google Maps and search results.' },
    { icon: MousePointer, title: 'Collection Hotspots', description: 'Link directly to collection pages, price ranges, and appointment booking.' },
    { icon: Video, title: 'Artisan Stories', description: 'Embed videos showcasing craftsmanship and brand heritage.' },
  ],
  school: [
    { icon: Camera, title: 'Campus Tours', description: 'Complete coverage of classrooms, labs, library, sports facilities, and hostels.' },
    { icon: MapPin, title: 'Google Integration', description: 'Feature your campus tour on Google Maps for prospective parents.' },
    { icon: MousePointer, title: 'Information Points', description: 'Add details about programs, faculty, and admission at relevant locations.' },
    { icon: Video, title: 'Campus Life Videos', description: 'Embed student testimonials and event highlights in the tour.' },
  ],
  hardware: [
    { icon: Camera, title: 'Warehouse Tours', description: 'Complete 360° coverage of your inventory, storage, and bulk sections.' },
    { icon: MapPin, title: 'Google Business Profile', description: 'Showcase your warehouse capacity on Google Maps for B2B visibility.' },
    { icon: MousePointer, title: 'Product Hotspots', description: 'Link to product catalogs, price lists, and bulk order forms.' },
    { icon: Video, title: 'Quality Demonstrations', description: 'Embed product demos and quality testing videos in the tour.' },
  ],
};

// Process steps
const processSteps = [
  { 
    step: 1, 
    title: 'Schedule Your Shoot', 
    description: 'We coordinate a convenient time to photograph your space when it looks its best.',
    icon: Calendar 
  },
  { 
    step: 2, 
    title: 'Professional Capture', 
    description: 'Our expert photographers use specialized 360° cameras to capture every angle in high resolution.',
    icon: Camera 
  },
  { 
    step: 3, 
    title: 'Delivery & Integration', 
    description: 'Within 3-5 business days, receive your interactive tour ready for your website and Google.',
    icon: TrendingUp 
  },
];

// Stats data
const stats = [
  { value: '+45%', label: 'More Bookings' },
  { value: '3x', label: 'Longer Engagement' },
  { value: '+85%', label: 'Google Ranking' },
  { value: '5x', label: 'More Social Shares' },
];

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
  const heroImage = categoryImages[category.slug] || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop';
  const benefits = categoryBenefits[category.slug] || categoryBenefits.hotel;
  const offerings = categoryOfferings[category.slug] || categoryOfferings.hotel;

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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-logo-1),0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-logo-1),0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/services/360"
            className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All 360 Virtual Tour Services
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <Icon className="w-4 h-4 text-edone-primary" />
                <span>{category.name} Virtual Tours</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Transform Your{' '}
                <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
                  {category.name}
                </span>{' '}
                With Immersive 360° Tours
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                {category.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-edone-primary to-edone-secondary text-white hover:opacity-90 text-lg px-8"
                >
                  <Link href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Get Your Virtual Tour
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-8"
                >
                  <Link href="#how-it-works">
                    See How It Works
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={heroImage}
                  alt={`360 Virtual Tour for ${category.name}`}
                  width={700}
                  height={500}
                  className="object-cover w-full h-[400px] lg:h-[450px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors cursor-pointer">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                    <p className="font-semibold">Interactive 360° Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Benefits for Your {category.name}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover how 360° virtual tours can transform your business and attract more customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-edone-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-edone-primary/10 to-edone-accent/10 rounded-xl group-hover:from-edone-primary/20 group-hover:to-edone-accent/20 transition-colors">
                    <benefit.icon className="w-7 h-7 text-edone-primary" />
                  </div>
                  {benefit.stat && (
                    <span className="ml-auto text-2xl font-bold bg-gradient-to-r from-edone-primary to-edone-accent bg-clip-text text-transparent">
                      {benefit.stat}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Transform Your Digital Presence
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Static Photos */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <X className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Static Photos Only</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Limited perspective of your space',
                  'Customers can\'t visualize the full experience',
                  'Lower engagement on your website',
                  'Harder to stand out from competitors',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* With 360 Tour */}
            <div className="bg-gradient-to-br from-edone-primary/5 to-edone-accent/5 dark:from-edone-primary/10 dark:to-edone-accent/10 rounded-2xl p-8 border-2 border-edone-primary/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-edone-primary to-edone-secondary rounded-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">With 360° Virtual Tour</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Immersive experience of your entire space',
                  'Customers feel like they\'re already there',
                  '3x longer engagement on your website',
                  'Competitive advantage in local search',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-edone-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-logo-1),0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-logo-1),0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive 360° virtual tour solutions tailored for your {category.name.toLowerCase()}.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-edone-primary/10 to-edone-accent/10 rounded-2xl flex items-center justify-center">
                  <offering.icon className="w-8 h-8 text-edone-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {offering.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Getting your 360° virtual tour is simple and hassle-free.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-edone-primary to-edone-accent" />
                )}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-edone-primary to-edone-secondary text-white flex items-center justify-center shadow-lg relative z-10">
                  <step.icon className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-edone-primary mb-2">Step {step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Tour Demo */}
      <section className="py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience a Live 360° Virtual Tour
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Click and drag to explore. This is an example of the immersive experience we create.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
            <iframe
              src="https://tourmkr.com/F1GzsCVngb/45697725p&30.36h&85.33t"
              width="100%"
              height="550"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title={`360 Virtual Tour Demo for ${category.name}`}
              className="w-full"
            />
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
            ↑ Drag to look around • Use scroll to zoom • Click hotspots for more info
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {
                {
                  hospital: 'Healthcare Virtual Tour Packages',
                  hotel: 'Hotel & Resort Virtual Tour Packages',
                  jewellery: 'Jewellery Store Virtual Tour Packages',
                  school: 'Educational Institution Virtual Tour Packages',
                  hardware: 'Hardware & Warehouse Virtual Tour Packages',
                }[category.slug] || '360° Virtual Tour Packages'
              }
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {
                {
                  hospital: 'Custom solutions for medical facilities of all sizes',
                  hotel: 'Showcase your property and attract more direct bookings',
                  jewellery: 'Bring the showroom experience to customers worldwide',
                  school: 'Help parents and students explore your campus virtually',
                  hardware: 'Display your inventory to B2B clients remotely',
                }[category.slug] || 'Choose the package that fits your space. Custom pricing available for larger properties.'
              }
            </p>
          </div>
          
          <PricingGrid packages={
            {
              hospital: HOSPITAL_PRICING,
              hotel: HOTEL_PRICING,
              jewellery: JEWELLERY_PRICING,
              school: SCHOOL_PRICING,
              hardware: HARDWARE_PRICING,
            }[category.slug] || VIRTUAL_TOUR_PRICING
          } />
          
          <div className="text-center mt-12">
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Not sure which package you need?
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-edone-primary text-edone-primary hover:bg-edone-primary hover:text-white"
            >
              <Link href={`/contact?service=360&category=${category.slug}`}>
                <Phone className="w-5 h-5 mr-2" />
                Talk to Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {category.testimonials.length > 0 && (
        <section className="py-20 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What Our Clients Say
              </h2>
            </div>
            <TestimonialGrid testimonials={category.testimonials} />
          </div>
        </section>
      )}

      {/* Case Studies */}
      {category.caseStudies.length > 0 && (
        <section className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Success Stories
              </h2>
            </div>
            <div className="space-y-8 max-w-4xl mx-auto">
              {category.caseStudies.map((caseStudy) => (
                <CaseStudy key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>
      )}

      <HomeCTA />
    </>
  );
}
