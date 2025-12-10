// Service Category Types
export interface ServiceCategory {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  process?: ProcessStep[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

// 360 Virtual Tour Types
export interface VirtualTour360Category extends ServiceCategory {
  specificFeatures: string[];
  pricingNotes?: string;
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
  clients: Client[];
}

export interface CaseStudy {
  id: string;
  title: string;
  shortDescription: string;
  beforeImage?: string;
  afterImage?: string;
  panoramaUrl?: string;
  streetViewUrl?: string;
  metrics: CaseStudyMetrics;
  testimonial?: Testimonial;
}

export interface CaseStudyMetrics {
  trafficIncrease?: string;
  leadsGenerated?: string;
  conversionRate?: string;
  impressions?: string;
  ctr?: string;
  conversions?: string;
  customMetrics?: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle?: string;
  company: string;
  avatarUrl?: string;
  rating?: number;
}

export interface Client {
  id: string;
  name: string;
  logoUrl?: string;
}

// Pricing Types
export interface PricingPackage {
  id: string;
  name: string;
  description?: string;
  price: string;
  priceNote?: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

// Website Design/Development Types
export interface IndustryService extends ServiceCategory {
  sampleScreenshots: string[];
  pricingModel: 'flat' | 'starting' | 'hourly' | 'custom';
  priceRange?: string;
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
}

// Google Ads Types
export interface GoogleAdsCampaign {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  deliverables: string[];
  recommendedBudget: string;
  expectedResults: GoogleAdsResults;
  caseStudies: CaseStudy[];
}

export interface GoogleAdsResults {
  impressions?: string;
  clicks?: string;
  ctr?: string;
  conversions?: string;
  costPerConversion?: string;
  roi?: string;
}

// Form Types
export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  category?: string;
  message: string;
  source?: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItemChild[];
}

export interface NavItemChild {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  categories?: NavItemCategory[];
}

export interface NavItemCategory {
  label: string;
  href: string;
}
