import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Code, UtensilsCrossed, Stethoscope, ShoppingBag, Building, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { HomeCTA } from '@/components/sections/HomeCTA';
import { DEVELOPMENT_INDUSTRIES } from '@/lib/services-data';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Website Development Services - Custom Web Applications',
  description: 'Professional website development services for your industry. Custom web applications, e-commerce, CMS, and enterprise solutions.',
  keywords: ['website development', 'web development', 'custom web applications', 'web development services'],
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
  restaurants: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop',
  clinics: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
  retail: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop',
  b2b: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop',
  education: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
};

export default function WebDevelopmentPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Website Development', url: '/services/development' },
  ]);

  const serviceSchema = generateServiceSchema(
    'Website Development Services',
    'Professional website and web application development services for various industries.'
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
        title="Website Development Services"
        description="Custom web applications built with modern technologies for performance, security, and scalability"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Website Development' }]}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Code className="w-16 h-16 mb-6 text-edone-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Code That Performs
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We develop robust, high-performance web applications using modern frameworks and technologies.
                From simple websites to complex enterprise solutions, our development team ensures your digital
                solution is secure, scalable, and maintainable.
              </p>
              <div className="space-y-3">
                {['Custom web applications', 'Enterprise-grade security', 'API development & integration', 'Scalable architecture'].map((item, i) => (
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
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
                  alt="Web Development"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
              </div>
              {/* Code floating card */}
              <div className="absolute -bottom-6 -left-6 bg-gray-900 text-green-400 rounded-xl shadow-xl p-4 font-mono text-xs">
                <div className="text-gray-500">// Building your dream</div>
                <div><span className="text-purple-400">const</span> app = <span className="text-yellow-400">createApp</span>();</div>
                <div><span className="text-purple-400">await</span> app.<span className="text-yellow-400">deploy</span>();</div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-gray-900 rounded-2xl p-8 mb-20 overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-logo-1),0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-logo-1),0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            <h3 className="text-xl font-bold text-white text-center mb-8 relative">Technologies We Use</h3>
            <div className="flex flex-wrap justify-center gap-4 relative">
              {['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Vercel', 'Docker', 'GraphQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-edone-primary/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features with Images */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { title: 'Custom Development', desc: 'Tailored solutions built for your specific needs', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop' },
              { title: 'Secure & Reliable', desc: 'Enterprise-grade security and 99.9% uptime', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop' },
              { title: 'Fast Performance', desc: 'Optimized for speed and user experience', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop' },
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
              Solutions by Industry
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Explore development solutions tailored for your industry
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEVELOPMENT_INDUSTRIES.map((industry) => {
                const Icon = industryIcons[industry.slug] || Code;
                const image = industryImages[industry.slug] || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop';
                return (
                  <Link
                    key={industry.id}
                    href={`/services/development/${industry.slug}`}
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
              Development Process
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: 1, title: 'Requirements', desc: 'Technical specs and architecture' },
                { step: 2, title: 'Planning', desc: 'Roadmap and tech stack selection' },
                { step: 3, title: 'Development', desc: 'Agile sprints with regular updates' },
                { step: 4, title: 'Testing', desc: 'QA, security, and performance' },
                { step: 5, title: 'Deployment', desc: 'Launch and ongoing support' },
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
