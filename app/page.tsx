import { Hero } from "@/components/sections/Hero";
import { FeaturedClients } from "@/components/sections/FeaturedClients";
import { HomeServices } from "@/components/sections/HomeServices";
import { VirtualTourShowcase } from "@/components/sections/VirtualTourShowcase";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { HomeBlogPreview } from "@/components/sections/HomeBlogPreview";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/seo";

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero - Above the fold, attention-grabbing */}
      <Hero />
      
      {/* Trust indicators - Show credibility immediately */}
      <FeaturedClients />
      
      {/* Services - What we offer */}
      <HomeServices />
      
      {/* 360° Virtual Tour Showcase - Interactive demo like Turiya */}
      <VirtualTourShowcase />
      
      {/* Industries We Serve - Show vertical expertise */}
      <IndustriesServed />
      
      {/* Process - How we work */}
      <ProcessSection />
      
      {/* Why Choose Us - Differentiators */}
      <WhyChooseUs />
      
      {/* Social Proof - Testimonials */}
      <Testimonials />
      
      {/* Blog Preview - Latest insights */}
      <HomeBlogPreview />
      
      {/* FAQ - Common questions like competitors */}
      <HomeFAQ />
      
      {/* Final CTA - Convert visitors */}
      <HomeCTA />
    </>
  );
}
