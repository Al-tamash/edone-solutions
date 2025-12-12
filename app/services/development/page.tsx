import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Code, 
  CheckCircle, 
  Globe,
  ShoppingCart,
  Layers,
  Server,
  Headphones,
  ArrowRight,
  Zap,
  Shield,
  Database,
  RefreshCw
} from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { FAQSection, FAQItem } from '@/components/common/FAQSection';
import { StickyCTA } from '@/components/common/StickyCTA';
import { HomeCTA } from '@/components/sections/HomeCTA';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Custom Website Development Services | Fast, Secure & Scalable',
  description: 'Professional website development using modern technologies. WordPress, ecommerce, React/Next.js development with SEO-optimized, secure code.',
  keywords: ['website development company India', 'WordPress developer', 'ecommerce website development', 'custom web development', 'React developer', 'Next.js development'],
});

// Services Offered
const services = [
  {
    icon: Globe,
    title: 'Custom WordPress Development',
    description: 'Fully customized WordPress websites with powerful admin panels that you can easily manage.',
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Development',
    description: 'Complete online stores with payment integration, inventory management, and order tracking.',
  },
  {
    icon: Layers,
    title: 'React & Next.js Sites',
    description: 'Lightning-fast, modern web applications built with the latest technologies.',
  },
  {
    icon: Database,
    title: 'API Integration',
    description: 'Connect your website with third-party services, CRMs, payment gateways, and more.',
  },
  {
    icon: Server,
    title: 'Hosting & Maintenance',
    description: 'Reliable hosting, regular updates, security monitoring, and ongoing support.',
  },
];

// Why Choose Us - Human Tone
const whyChooseUs = [
  {
    title: 'We build websites using modern code standards',
    description: 'Clean, well-organized code that\'s easy to maintain and scale as your business grows.',
  },
  {
    title: 'Your website is secure, stable, and future-ready',
    description: 'SSL, regular updates, and security best practices to protect your site from threats.',
  },
  {
    title: 'You get full ownership of all files',
    description: 'Your website is yours. We provide complete source code and documentation.',
  },
  {
    title: 'We help you with ongoing support and updates',
    description: 'From minor changes to major updates, we\'re here to help whenever you need.',
  },
];

// Deliverables
const deliverables = [
  { icon: Code, text: 'Responsive front-end development' },
  { icon: Zap, text: 'Speed-optimized backend' },
  { icon: CheckCircle, text: 'SEO-friendly development' },
  { icon: Shield, text: 'SSL certificate setup' },
  { icon: Headphones, text: 'Admin panel training' },
  { icon: RefreshCw, text: 'Post-launch support' },
];

// Technologies
const technologies = [
  'Next.js', 'React', 'Node.js', 'TypeScript', 'WordPress', 
  'WooCommerce', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Vercel'
];

// Process Steps
const processSteps = [
  { step: 1, title: 'Requirements', desc: 'Technical specs and architecture' },
  { step: 2, title: 'Planning', desc: 'Roadmap and tech stack selection' },
  { step: 3, title: 'Development', desc: 'Agile sprints with regular updates' },
  { step: 4, title: 'Testing', desc: 'QA, security, and performance' },
  { step: 5, title: 'Deployment', desc: 'Launch and ongoing support' },
];

// FAQs
const faqs: FAQItem[] = [
  {
    question: 'How long does it take to develop a website?',
    answer: 'Development time depends on complexity. A simple WordPress site takes 2-4 weeks, while custom web applications can take 6-12 weeks. We provide detailed timelines during our initial consultation based on your specific requirements.',
  },
  {
    question: 'What technologies do you use for development?',
    answer: 'We use modern, industry-standard technologies including Next.js, React, Node.js, TypeScript, WordPress, WooCommerce, and various databases. We choose the best technology stack based on your project requirements and goals.',
  },
  {
    question: 'Will I be able to update my website myself?',
    answer: 'Absolutely! We build user-friendly admin panels (especially with WordPress) and provide training so you can update content, add products, and manage your site. We\'re also available for ongoing support if needed.',
  },
  {
    question: 'Do you provide hosting and maintenance?',
    answer: 'Yes, we offer reliable hosting solutions and ongoing maintenance packages. This includes regular updates, security monitoring, backups, and technical support to keep your website running smoothly.',
  },
  {
    question: 'Is my website code secure?',
    answer: 'Security is a priority in all our projects. We follow security best practices, implement SSL certificates, use secure coding standards, and perform regular security updates. For ecommerce sites, we ensure PCI compliance.',
  },
  {
    question: 'Can you integrate third-party services?',
    answer: 'Yes, we can integrate your website with various third-party services including payment gateways (Razorpay, Stripe, PayPal), CRMs, email marketing tools, shipping APIs, social media platforms, and custom APIs.',
  },
];

export default function WebDevelopmentPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Website Development', url: '/services/development' },
  ]);

  const serviceSchema = generateServiceSchema(
    'Website Development Services',
    'Professional website and web application development using modern technologies for performance, security, and scalability.'
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

      {/* Hero Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-edone-primary/10 dark:bg-edone-primary/20 px-4 py-2 rounded-full mb-6">
                <Code className="w-4 h-4 text-edone-primary" />
                <span className="text-sm font-semibold text-edone-primary">Expert Development</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Fast, Secure & Scalable{' '}
                <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
                  Website Development
                </span>{' '}
                for Your Business
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                We develop websites that load fast, rank higher, and are extremely easy for you to manage. 
                Built with clean code and modern technologies that scale with your business.
              </p>
              <div className="space-y-3">
                {['Custom web applications', 'Enterprise-grade security', 'Speed-optimized performance', 'Full code ownership'].map((item, i) => (
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
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
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
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-edone-primary/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Development Services We Offer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Complete web development solutions for every business need
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
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                    alt="Code Development"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Why Choose Our Development Services?
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
            </div>
          </div>

          {/* Deliverables */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 lg:p-12 mb-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
              What You Get
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              Everything included in our development service
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-edone-primary to-edone-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-900 dark:text-white font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Development Process
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
        title="Website Development FAQs"
        subtitle="Common questions about our development services"
        faqs={faqs}
      />

      {/* CTA Section */}
      <HomeCTA />

      {/* Sticky CTA */}
      <StickyCTA serviceName="Website Development" />
    </>
  );
}
