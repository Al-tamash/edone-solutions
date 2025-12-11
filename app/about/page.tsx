import { PageHeader } from "@/components/common/PageHeader";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";
import Image from "next/image";
import { Users, Target, Award, Heart, Lightbulb, TrendingUp, CheckCircle } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
  title: "About Us - Leading Web Solutions Provider in Hyderabad",
  description: "Learn about Edone Solutions, a team of passionate professionals dedicated to delivering exceptional web design, development, and virtual tour services.",
  keywords: ["about edone solutions", "web company hyderabad", "digital agency"],
});

const teamImages = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop',
];

const valueIcons = [Award, Lightbulb, Heart, Users, Target, TrendingUp];

export default function AboutPage() {
  const breadcrumbs = [{ label: "About" }];
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHeader
        title="About Edone Solutions"
        description="Your trusted partner for innovative digital solutions"
        breadcrumbs={breadcrumbs}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Story with Images */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded with a vision to transform the digital landscape, Edone Solutions has grown
                  into a trusted name in web design, development, and virtual tour services. Based in
                  Hyderabad, we serve businesses across India and beyond.
                </p>
                <p>
                  Our journey began with a simple belief: that every business deserves a powerful
                  digital presence. Over the years, we've helped hundreds of clients bring their visions
                  to life, from startups to established enterprises.
                </p>
                <p>
                  What sets us apart is our commitment to excellence, innovation, and client
                  satisfaction. We don't just build websites – we create digital experiences that drive
                  results.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={teamImages[0]}
                      alt="Team collaboration"
                      width={300}
                      height={200}
                      className="object-cover w-full h-48"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={teamImages[1]}
                      alt="Office meeting"
                      width={300}
                      height={250}
                      className="object-cover w-full h-56"
                    />
                  </div>
                </div>
                <div className="pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-xl h-full">
                    <Image
                      src={teamImages[2]}
                      alt="Creative workspace"
                      width={300}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-edone-primary to-edone-secondary flex items-center justify-center">
                    <span className="text-white font-bold text-lg">5+</span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">Years</p>
                    <p className="text-xs text-gray-500">of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-900 rounded-3xl p-8 lg:p-12 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-logo-1),0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-logo-1),0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '180+', label: 'Happy Clients' },
              { number: '250+', label: 'Projects Completed' },
              { number: '5+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision with Images */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-edone-primary-50 to-white rounded-2xl p-8 border border-edone-primary-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <Target className="w-12 h-12 text-edone-primary mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with cutting-edge digital solutions that enhance their online
                presence, engage their audience, and drive measurable growth. We strive to be the
                catalyst for our clients' digital success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-edone-accent-50 to-white rounded-2xl p-8 border border-edone-accent-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=200&auto=format&fit=crop"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <Lightbulb className="w-12 h-12 text-edone-accent mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as India's leading digital solutions provider, known for
                innovation, quality, and exceptional client service. We aspire to shape the future
                of digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We pursue excellence in every project, never settling for good enough.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop",
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and creative solutions to stay ahead.",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop",
              },
              {
                title: "Integrity",
                description: "We build relationships on trust, transparency, and honest communication.",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=400&auto=format&fit=crop",
              },
              {
                title: "Collaboration",
                description: "We work closely with clients as partners in their success.",
                image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=400&auto=format&fit=crop",
              },
              {
                title: "Quality",
                description: "We deliver solutions that meet the highest standards of quality.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop",
              },
              {
                title: "Growth",
                description: "We're committed to continuous learning and improvement.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
              },
            ].map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us with Image */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
                alt="Why choose Edone Solutions"
                width={600}
                height={500}
                className="object-cover w-full h-[500px]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-2 text-edone-primary">
                <CheckCircle className="w-6 h-6" />
                <span className="font-bold">180+ Happy Clients</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
            <div className="space-y-6">
              {[
                { title: '8+ Years of Experience', desc: 'Proven track record of delivering successful projects across various industries.' },
                { title: 'Expert Team', desc: 'Skilled designers, developers, and strategists passionate about your success.' },
                { title: 'Client-Centric Approach', desc: 'Your goals are our goals. We listen, understand, and deliver exactly what you need.' },
                { title: 'Cutting-Edge Technology', desc: 'We use the latest tools and frameworks to build modern, future-proof solutions.' },
                { title: 'Comprehensive Support', desc: "From concept to launch and beyond, we're with you every step of the way." },
                { title: 'Competitive Pricing', desc: 'Quality service at fair prices, with flexible packages to suit your budget.' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-edone-primary to-edone-secondary flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <HomeCTA />
    </>
  );
}
