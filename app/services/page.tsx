import { PageHeader } from "@/components/common/PageHeader";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { SERVICES } from "@/lib/constants";
import { generateMetadata as generateSEOMetadata, generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Palette, Code, Camera, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
  title: "Our Services - Web Design, Development & 360 Virtual Tours",
  description: "Professional web design, custom web development, and immersive 360 virtual tour services. Transform your digital presence with our expert solutions.",
  keywords: ["web design services", "web development", "360 virtual tours", "custom websites", "digital solutions"],
});

const iconMap = {
  Palette: Palette,
  Code: Code,
  Camera: Camera,
};

const serviceImages = [
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
];

const serviceLinks = [
  "/services/design",
  "/services/development",
  "/services/360",
];

const gradients = [
  "from-edone-primary via-edone-secondary to-edone-accent",
  "from-edone-accent via-edone-primary to-edone-secondary",
  "from-edone-secondary via-edone-accent to-edone-primary",
];

export default function ServicesPage() {
  const breadcrumbs = [{ label: "Services" }];
  
  // Generate schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  const serviceSchemas = SERVICES.map((service) =>
    generateServiceSchema(service.title, service.fullDescription)
  );

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <PageHeader
        title="Our Services"
        description="Comprehensive digital solutions tailored to elevate your brand and drive business growth"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction with image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Digital Solutions That{" "}
                <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
                  Transform Businesses
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Edone Solutions, we combine creativity, technical expertise, and strategic thinking
                to deliver digital solutions that make an impact. Whether you need a stunning website,
                a powerful web application, or immersive virtual tours, we've got you covered.
              </p>
              <div className="space-y-3">
                {["Custom designs tailored to your brand", "Responsive & mobile-friendly", "SEO optimized for visibility", "Fast loading & high performance"].map((item, i) => (
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Our team at work"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-edone-primary to-edone-secondary flex items-center justify-center">
                    <span className="text-white font-bold">5+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Years Experience</p>
                    <p className="text-xs text-gray-500">180+ Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              const isEven = index % 2 === 1;
              const image = serviceImages[index % serviceImages.length];
              const link = serviceLinks[index % serviceLinks.length];
              const gradient = gradients[index % gradients.length];

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image */}
                  <div className={`${isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <Image
                        src={image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-[350px] group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-30 group-hover:opacity-40 transition-opacity`} />
                      <div className="absolute top-4 left-4">
                        <div className="w-14 h-14 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                          <Icon className="w-7 h-7 text-edone-primary" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? 'lg:order-1' : ''}`}>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {service.features.slice(0, 6).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Process steps */}
                    {service.process && (
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-800 mb-3">Our Process:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.process.map((step, i) => (
                            <span key={i} className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                              <span className="w-4 h-4 rounded-full bg-edone-primary text-white text-[10px] font-bold flex items-center justify-center mr-1.5">
                                {i + 1}
                              </span>
                              {step.title}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link
                      href={link}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-edone-primary to-edone-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity group"
                    >
                      Explore {service.title}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
