import { Hero } from "@/components/sections/Hero";
import { FeaturedClients } from "@/components/sections/FeaturedClients";
import { HomeServices } from "@/components/sections/HomeServices";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Testimonials } from "@/components/sections/Testimonials";
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
      
      {/* Process - How we work */}
      <ProcessSection />
      
      {/* Why Choose Us - Differentiators */}
      <WhyChooseUs />
      
      {/* Social Proof - Testimonials */}
      <Testimonials />
      
      {/* Final CTA - Convert visitors */}
      <HomeCTA />
    </>
  );
}
