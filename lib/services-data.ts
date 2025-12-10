import { 
  VirtualTour360Category, 
  IndustryService, 
  GoogleAdsCampaign, 
  PricingPackage,
  NavItem 
} from './types';

// =============================================================================
// NAVIGATION DATA WITH SERVICES DROPDOWN
// =============================================================================

export const SERVICES_NAV: NavItem[] = [
  {
    label: "360 Virtual Tours",
    href: "/services/360",
    children: [
      { label: "Hotel & Resort", href: "/services/360/hotel" },
      { label: "Hospital", href: "/services/360/hospital" },
      { label: "Jewellery", href: "/services/360/jewellery" },
      { label: "School & College", href: "/services/360/school" },
      { label: "Hardware/Plywood", href: "/services/360/hardware" },
    ],
  },
  {
    label: "Website Design",
    href: "/services/design",
    children: [
      { label: "Restaurants", href: "/services/design/restaurants" },
      { label: "Clinics", href: "/services/design/clinics" },
      { label: "Retail", href: "/services/design/retail" },
      { label: "B2B", href: "/services/design/b2b" },
      { label: "Education", href: "/services/design/education" },
    ],
  },
  {
    label: "Website Development",
    href: "/services/development",
    children: [
      { label: "Restaurants", href: "/services/development/restaurants" },
      { label: "Clinics", href: "/services/development/clinics" },
      { label: "Retail", href: "/services/development/retail" },
      { label: "B2B", href: "/services/development/b2b" },
      { label: "Education", href: "/services/development/education" },
    ],
  },
  {
    label: "Google Ads",
    href: "/services/google-ads",
    children: [
      { label: "Search Ads", href: "/services/google-ads/search" },
      { label: "Display Ads", href: "/services/google-ads/display" },
      { label: "Local Ads", href: "/services/google-ads/local" },
      { label: "Remarketing", href: "/services/google-ads/remarketing" },
    ],
  },
];

// =============================================================================
// 360 VIRTUAL TOUR PRICING
// =============================================================================

export const VIRTUAL_TOUR_PRICING: PricingPackage[] = [
  {
    id: "360-small",
    name: "Standard Package",
    description: "Perfect for small spaces and boutiques",
    price: "₹6,310",
    priceNote: "for up to 500 sq.ft",
    features: [
      "High-resolution 360° photography",
      "Up to 10 panorama points",
      "Interactive hotspots",
      "Mobile & desktop optimized",
      "Google Street View integration",
      "1 month free hosting",
    ],
    isPopular: false,
    ctaText: "Get Started",
    ctaLink: "/contact?service=360&package=standard",
  },
  {
    id: "360-large",
    name: "Premium Package",
    description: "Ideal for larger spaces and commercial properties",
    price: "₹8,260",
    priceNote: "for up to 1,000 sq.ft",
    features: [
      "Everything in Standard",
      "Up to 20 panorama points",
      "Custom branding & navigation",
      "Floor plan integration",
      "Virtual staging options",
      "3 months free hosting",
      "Priority support",
    ],
    isPopular: true,
    ctaText: "Get Started",
    ctaLink: "/contact?service=360&package=premium",
  },
];

// =============================================================================
// 360 VIRTUAL TOUR CATEGORIES
// =============================================================================

export const VIRTUAL_TOUR_CATEGORIES: VirtualTour360Category[] = [
  {
    id: "hotel",
    slug: "hotel",
    name: "Hotel & Resort",
    icon: "Building2",
    shortDescription: "Showcase your hospitality excellence with immersive virtual tours that let guests explore before they book.",
    fullDescription: "Give potential guests a virtual walkthrough of your hotel rooms, lobby, pool, restaurant, and amenities. Our 360° tours help increase booking confidence and reduce no-shows.",
    features: [
      "360° room tours for each room type",
      "Lobby and common area panoramas",
      "Restaurant and dining showcases",
      "Pool, spa, and fitness center views",
      "Conference and event space tours",
      "Google Street View integration",
    ],
    benefits: [
      "Increase direct bookings by 30%",
      "Reduce customer inquiries about facilities",
      "Stand out from OTA competition",
      "Show real guest experience",
    ],
    specificFeatures: [
      "Room type comparison views",
      "Seasonal decoration updates",
      "Wedding venue showcases",
      "Virtual concierge integration",
    ],
    caseStudies: [
      {
        id: "hotel-case-1",
        title: "Grand Palace Hotel - Hyderabad",
        shortDescription: "A 5-star hotel that increased direct bookings by 45% after implementing 360° virtual tours.",
        beforeImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop",
        panoramaUrl: "https://tourmkr.com/F1GzsCVngb/45697729p&354.26h&119.75t",
        streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1234567890!6m8!1m7!1s!2m2!1d17.385044!2d78.486671!3f0!4f0!5f0.7820865974627469",
        metrics: {
          trafficIncrease: "+120%",
          leadsGenerated: "850+ inquiries",
          conversionRate: "45% more bookings",
        },
        testimonial: {
          id: "hotel-test-1",
          quote: "The virtual tour transformed our online presence. Guests now book with confidence after exploring our property virtually.",
          authorName: "Rajesh Kumar",
          authorTitle: "General Manager",
          company: "Grand Palace Hotel",
          rating: 5,
        },
      },
    ],
    testimonials: [
      {
        id: "hotel-test-2",
        quote: "Our guests love exploring the room types before booking. It has significantly reduced complaints about room expectations.",
        authorName: "Anita Sharma",
        authorTitle: "Marketing Director",
        company: "Lakeside Resort",
        rating: 5,
      },
    ],
    clients: [
      { id: "client-1", name: "Grand Palace Hotel", logoUrl: "" },
      { id: "client-2", name: "Lakeside Resort", logoUrl: "" },
      { id: "client-3", name: "City Comfort Suites", logoUrl: "" },
    ],
  },
  {
    id: "hospital",
    slug: "hospital",
    name: "Hospital",
    icon: "Heart",
    shortDescription: "Build patient trust with transparent virtual tours of your healthcare facilities.",
    fullDescription: "Help patients and families feel comfortable before their visit by showcasing your hospital's modern equipment, clean facilities, and caring environment through immersive 360° tours.",
    features: [
      "Department-wise virtual tours",
      "Patient room showcases",
      "Operation theater previews",
      "Diagnostic center views",
      "Pharmacy and lab tours",
      "Emergency department navigation",
    ],
    benefits: [
      "Reduce patient anxiety",
      "Increase appointment bookings",
      "Build trust and transparency",
      "Showcase modern equipment",
    ],
    specificFeatures: [
      "Department navigation maps",
      "Accessibility route highlights",
      "Staff introduction points",
      "Insurance desk directions",
    ],
    caseStudies: [
      {
        id: "hospital-case-1",
        title: "City Care Hospital - Patient Trust Initiative",
        shortDescription: "A multi-specialty hospital that improved patient satisfaction scores by implementing comprehensive virtual tours.",
        beforeImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=600&auto=format&fit=crop",
        panoramaUrl: "https://tourmkr.com/F1GzsCVngb/45697729p&354.26h&119.75t",
        metrics: {
          trafficIncrease: "+85%",
          leadsGenerated: "500+ appointments",
          conversionRate: "35% more walk-ins",
          customMetrics: [
            { label: "Patient Satisfaction", value: "+40%" },
          ],
        },
      },
    ],
    testimonials: [
      {
        id: "hospital-test-1",
        quote: "Parents now feel confident about their children's treatment after seeing our pediatric ward virtually.",
        authorName: "Dr. Priya Reddy",
        authorTitle: "Chief Medical Officer",
        company: "City Care Hospital",
        rating: 5,
      },
    ],
    clients: [
      { id: "client-h1", name: "City Care Hospital", logoUrl: "" },
      { id: "client-h2", name: "Wellness Multi-Specialty", logoUrl: "" },
    ],
  },
  {
    id: "jewellery",
    slug: "jewellery",
    name: "Jewellery",
    icon: "Gem",
    shortDescription: "Bring the showroom experience online with stunning 360° tours of your jewellery store.",
    fullDescription: "Let customers browse your exquisite collections from the comfort of their homes. Our virtual tours capture the sparkle and elegance of your jewellery displays with high-resolution photography.",
    features: [
      "High-detail display case tours",
      "Collection-wise navigation",
      "Bridal section showcases",
      "Vault and security views",
      "Customer lounge previews",
      "Artisan workshop tours",
    ],
    benefits: [
      "Attract out-of-city customers",
      "Showcase store ambiance",
      "Build brand trust online",
      "Enable virtual appointments",
    ],
    specificFeatures: [
      "Collection hotspot links",
      "Price range navigation",
      "Virtual appointment booking",
      "Festival collection highlights",
    ],
    caseStudies: [
      {
        id: "jewellery-case-1",
        title: "Ratna Jewellers - Virtual Showroom Success",
        shortDescription: "A heritage jewellery store that attracted customers from 5 new cities after launching their virtual tour.",
        beforeImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop",
        panoramaUrl: "https://tourmkr.com/F1GzsCVngb/45697729p&354.26h&119.75t",
        metrics: {
          trafficIncrease: "+200%",
          leadsGenerated: "320+ inquiries",
          conversionRate: "50% virtual to store visits",
        },
      },
    ],
    testimonials: [
      {
        id: "jewellery-test-1",
        quote: "NRI customers now shop confidently from abroad after touring our showroom virtually.",
        authorName: "Suresh Agarwal",
        authorTitle: "Owner",
        company: "Ratna Jewellers",
        rating: 5,
      },
    ],
    clients: [
      { id: "client-j1", name: "Ratna Jewellers", logoUrl: "" },
      { id: "client-j2", name: "Diamond House", logoUrl: "" },
    ],
  },
  {
    id: "school",
    slug: "school",
    name: "School & College",
    icon: "GraduationCap",
    shortDescription: "Help parents and students explore your campus before enrollment decisions.",
    fullDescription: "Showcase your educational institution's infrastructure, classrooms, labs, sports facilities, and campus life through engaging 360° virtual tours that can be accessed anytime, anywhere.",
    features: [
      "Classroom and lab tours",
      "Library and study area views",
      "Sports and playground showcases",
      "Hostel facility previews",
      "Cafeteria and common areas",
      "Administrative office navigation",
    ],
    benefits: [
      "Increase admission inquiries",
      "Save time on physical campus tours",
      "Reach out-of-town students",
      "Showcase campus life",
    ],
    specificFeatures: [
      "Department-wise navigation",
      "Faculty introduction points",
      "Event space showcases",
      "Safety feature highlights",
    ],
    caseStudies: [
      {
        id: "school-case-1",
        title: "Vidya International School - Enrollment Boost",
        shortDescription: "An international school that saw 60% increase in out-of-city admissions after virtual campus tours.",
        beforeImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop",
        panoramaUrl: "https://tourmkr.com/F1GzsCVngb/45697729p&354.26h&119.75t",
        metrics: {
          trafficIncrease: "+150%",
          leadsGenerated: "1200+ inquiries",
          conversionRate: "60% more admissions",
        },
      },
    ],
    testimonials: [
      {
        id: "school-test-1",
        quote: "Parents from abroad can now confidently enroll their children after virtually touring our campus.",
        authorName: "Dr. Kavitha Rao",
        authorTitle: "Principal",
        company: "Vidya International School",
        rating: 5,
      },
    ],
    clients: [
      { id: "client-s1", name: "Vidya International", logoUrl: "" },
      { id: "client-s2", name: "City Public School", logoUrl: "" },
    ],
  },
  {
    id: "hardware",
    slug: "hardware",
    name: "Hardware/Plywood",
    icon: "Hammer",
    shortDescription: "Display your extensive product range and warehouse capabilities through virtual tours.",
    fullDescription: "Let customers and B2B partners explore your hardware store or plywood showroom virtually. Showcase your product range, warehouse capacity, and quality standards through immersive 360° experiences.",
    features: [
      "Product category navigation",
      "Warehouse capacity showcases",
      "Quality testing area views",
      "Bulk storage displays",
      "Customer service counters",
      "Loading dock previews",
    ],
    benefits: [
      "Attract B2B partnerships",
      "Showcase inventory depth",
      "Build wholesale confidence",
      "Enable remote inspections",
    ],
    specificFeatures: [
      "Product catalog integration",
      "Price list hotspots",
      "Bulk order inquiry points",
      "Delivery zone maps",
    ],
    caseStudies: [
      {
        id: "hardware-case-1",
        title: "Shree Hardware Mart - B2B Growth Story",
        shortDescription: "A hardware wholesale business that doubled their B2B client base through virtual warehouse tours.",
        beforeImage: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=600&auto=format&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
        panoramaUrl: "https://tourmkr.com/F1GzsCVngb/45697729p&354.26h&119.75t",
        metrics: {
          trafficIncrease: "+180%",
          leadsGenerated: "200+ B2B inquiries",
          conversionRate: "40% partnership conversion",
        },
      },
    ],
    testimonials: [
      {
        id: "hardware-test-1",
        quote: "Contractors from other cities now order confidently after seeing our warehouse stock virtually.",
        authorName: "Mohan Das",
        authorTitle: "Managing Director",
        company: "Shree Hardware Mart",
        rating: 5,
      },
    ],
    clients: [
      { id: "client-hw1", name: "Shree Hardware Mart", logoUrl: "" },
      { id: "client-hw2", name: "City Plywood Center", logoUrl: "" },
    ],
  },
];

// =============================================================================
// WEBSITE DESIGN INDUSTRIES
// =============================================================================

export const DESIGN_INDUSTRIES: IndustryService[] = [
  {
    id: "restaurants",
    slug: "restaurants",
    name: "Restaurants",
    icon: "UtensilsCrossed",
    shortDescription: "Mouth-watering website designs that showcase your cuisine and ambiance.",
    fullDescription: "We create stunning restaurant websites that feature your menu beautifully, enable online reservations, and capture the essence of your dining experience.",
    features: [
      "Menu showcase with food photography",
      "Online reservation system",
      "Location and hours display",
      "Special offers section",
      "Customer review integration",
      "Social media feeds",
    ],
    benefits: [
      "Increase online reservations",
      "Showcase signature dishes",
      "Build brand presence",
      "Mobile-friendly design",
    ],
    process: [
      { step: 1, title: "Menu & Branding Review", description: "Understanding your cuisine and brand identity" },
      { step: 2, title: "Design Mockups", description: "Creating appetizing visual designs" },
      { step: 3, title: "Development", description: "Building responsive website with booking features" },
      { step: 4, title: "Launch", description: "Going live with SEO optimization" },
    ],
    sampleScreenshots: [
      "/images/samples/design-restaurant-1.jpg",
      "/images/samples/design-restaurant-2.jpg",
    ],
    pricingModel: "starting",
    priceRange: "Starting from ₹25,000",
    caseStudies: [
      {
        id: "design-rest-case-1",
        title: "Spice Garden Restaurant - Digital Transformation",
        shortDescription: "A traditional restaurant that modernized their online presence and saw 80% more online reservations.",
        beforeImage: "/images/case-studies/restaurant-design-before.jpg",
        afterImage: "/images/case-studies/restaurant-design-after.jpg",
        metrics: {
          trafficIncrease: "+150%",
          leadsGenerated: "500+ reservations/month",
          conversionRate: "80% booking increase",
        },
      },
    ],
    testimonials: [
      {
        id: "design-rest-test-1",
        quote: "Our new website perfectly captures the warmth of our restaurant. Customers love browsing our menu online!",
        authorName: "Chef Vikram",
        authorTitle: "Owner",
        company: "Spice Garden",
        rating: 5,
      },
    ],
  },
  {
    id: "clinics",
    slug: "clinics",
    name: "Clinics",
    icon: "Stethoscope",
    shortDescription: "Professional healthcare website designs that build patient trust.",
    fullDescription: "We design clean, professional clinic websites that showcase your services, doctors, and facilities while making it easy for patients to book appointments.",
    features: [
      "Doctor profiles and credentials",
      "Service listing with details",
      "Online appointment booking",
      "Patient testimonials",
      "Insurance information",
      "Emergency contact display",
    ],
    benefits: [
      "Build patient trust",
      "Streamline appointments",
      "Showcase expertise",
      "HIPAA-aware design",
    ],
    sampleScreenshots: [
      "/images/samples/design-clinic-1.jpg",
      "/images/samples/design-clinic-2.jpg",
    ],
    pricingModel: "starting",
    priceRange: "Starting from ₹30,000",
    caseStudies: [],
    testimonials: [],
  },
  {
    id: "retail",
    slug: "retail",
    name: "Retail",
    icon: "ShoppingBag",
    shortDescription: "E-commerce ready designs that convert visitors into customers.",
    fullDescription: "From boutiques to supermarkets, we create retail websites that showcase your products beautifully and drive sales with smart UX design.",
    features: [
      "Product catalog with filters",
      "Shopping cart integration",
      "Payment gateway setup",
      "Inventory management",
      "Order tracking",
      "Customer accounts",
    ],
    benefits: [
      "24/7 online sales",
      "Expand market reach",
      "Reduce overhead costs",
      "Data-driven insights",
    ],
    sampleScreenshots: [
      "/images/samples/design-retail-1.jpg",
      "/images/samples/design-retail-2.jpg",
    ],
    pricingModel: "starting",
    priceRange: "Starting from ₹40,000",
    caseStudies: [],
    testimonials: [],
  },
  {
    id: "b2b",
    slug: "b2b",
    name: "B2B",
    icon: "Building",
    shortDescription: "Professional B2B website designs that generate quality leads.",
    fullDescription: "We create corporate websites that establish credibility, showcase your capabilities, and generate qualified leads for your B2B business.",
    features: [
      "Service/product showcase",
      "Case study presentations",
      "Lead capture forms",
      "Partner logos section",
      "Resource downloads",
      "CRM integration",
    ],
    benefits: [
      "Generate quality leads",
      "Establish credibility",
      "Showcase expertise",
      "Support sales team",
    ],
    sampleScreenshots: [
      "/images/samples/design-b2b-1.jpg",
      "/images/samples/design-b2b-2.jpg",
    ],
    pricingModel: "custom",
    priceRange: "Custom pricing based on requirements",
    caseStudies: [],
    testimonials: [],
  },
  {
    id: "education",
    slug: "education",
    name: "Education",
    icon: "BookOpen",
    shortDescription: "Engaging educational website designs that inform and inspire.",
    fullDescription: "We design educational institution websites that showcase your programs, faculty, and campus life while streamlining admissions and communication.",
    features: [
      "Program listings and curriculum",
      "Faculty profiles",
      "Online admission forms",
      "Event calendar",
      "News and announcements",
      "Student portal integration",
    ],
    benefits: [
      "Increase enrollments",
      "Streamline admissions",
      "Improve communication",
      "Showcase achievements",
    ],
    sampleScreenshots: [
      "/images/samples/design-education-1.jpg",
      "/images/samples/design-education-2.jpg",
    ],
    pricingModel: "starting",
    priceRange: "Starting from ₹35,000",
    caseStudies: [],
    testimonials: [],
  },
];

// =============================================================================
// WEBSITE DEVELOPMENT INDUSTRIES
// =============================================================================

export const DEVELOPMENT_INDUSTRIES: IndustryService[] = [
  {
    id: "restaurants",
    slug: "restaurants",
    name: "Restaurants",
    icon: "UtensilsCrossed",
    shortDescription: "Full-featured restaurant platforms with ordering and reservation systems.",
    fullDescription: "We build powerful restaurant websites with online ordering, table reservations, menu management, and integration with delivery platforms.",
    features: [
      "Online ordering system",
      "Table reservation with capacity management",
      "Menu CMS with modifiers",
      "Kitchen order display",
      "Delivery platform integration",
      "Loyalty program features",
    ],
    benefits: [
      "Increase order efficiency",
      "Reduce phone orders",
      "Build customer loyalty",
      "Real-time analytics",
    ],
    sampleScreenshots: [
      "/images/samples/dev-restaurant-1.jpg",
      "/images/samples/dev-restaurant-2.jpg",
    ],
    pricingModel: "starting",
    priceRange: "Starting from ₹75,000",
    caseStudies: [],
    testimonials: [],
  },
  {
    id: "clinics",
    slug: "clinics",
    name: "Clinics",
    icon: "Stethoscope",
    shortDescription: "Healthcare management systems with patient portals and EMR integration.",
    fullDescription: "We develop comprehensive clinic management systems with appointment scheduling, patient records, billing, and telemedicine capabilities.",
    features: [
      "Appointment scheduling system",
      "Patient management portal",
      "Electronic health records",
      "Billing and invoicing",
      "Telemedicine integration",
      "Lab report uploads",
    ],
    benefits: [
      "Streamline operations",
      "Improve patient experience",
      "Secure data management",
      "Reduce no-shows",
    ],
    sampleScreenshots: [
      "/images/samples/dev-clinic-1.jpg",
      "/images/samples/dev-clinic-2.jpg",
    ],
    pricingModel: "custom",
    priceRange: "Custom pricing based on features",
    caseStudies: [],
    testimonials: [],
  },
  {
    id: "retail",
    slug: "retail",
    name: "Retail",
    icon: "ShoppingBag",
    shortDescription: "Complete e-commerce solutions with inventory and order management.",
    fullDescription: "We build scalable e-commerce platforms with product management, inventory tracking, payment processing, and analytics dashboards.",
    features: [
      "Product catalog management",
      "Inventory tracking system",
      "Multiple payment gateways",
      "Order management dashboard",
      "Shipping integration",
      "Customer analytics",
    ],
    benefits: [
      "Scale your business",
      "Automate inventory",
      "Accept all payments",
      "Data-driven decisions",
    ],
    sampleScreenshots: [
      "/images/samples/dev-retail-1.jpg",
      "/images/samples/dev-retail-2.jpg",
    ],
    pricingModel: "starting",
    priceRange: "Starting from ₹1,00,000",
    caseStudies: [],
    testimonials: [],
  },
  {
    id: "b2b",
    slug: "b2b",
    name: "B2B",
    icon: "Building",
    shortDescription: "Enterprise web applications with custom workflows and integrations.",
    fullDescription: "We develop custom B2B platforms including CRM systems, partner portals, quote management, and ERP integrations.",
    features: [
      "Custom CRM development",
      "Partner portal systems",
      "Quote and proposal management",
      "ERP integration",
      "Document management",
      "Workflow automation",
    ],
    benefits: [
      "Automate processes",
      "Integrate systems",
      "Custom workflows",
      "Enterprise security",
    ],
    sampleScreenshots: [
      "/images/samples/dev-b2b-1.jpg",
      "/images/samples/dev-b2b-2.jpg",
    ],
    pricingModel: "custom",
    priceRange: "Custom enterprise pricing",
    caseStudies: [],
    testimonials: [],
  },
  {
    id: "education",
    slug: "education",
    name: "Education",
    icon: "BookOpen",
    shortDescription: "Learning management systems and educational platforms.",
    fullDescription: "We build comprehensive educational platforms including LMS, student portals, online examination systems, and admission management.",
    features: [
      "Learning Management System",
      "Student and parent portals",
      "Online examination system",
      "Admission management",
      "Fee collection integration",
      "Attendance tracking",
    ],
    benefits: [
      "Digital learning",
      "Streamline administration",
      "Parent engagement",
      "Remote examinations",
    ],
    sampleScreenshots: [
      "/images/samples/dev-education-1.jpg",
      "/images/samples/dev-education-2.jpg",
    ],
    pricingModel: "starting",
    priceRange: "Starting from ₹1,50,000",
    caseStudies: [],
    testimonials: [],
  },
];

// =============================================================================
// GOOGLE ADS CAMPAIGNS
// =============================================================================

export const GOOGLE_ADS_CAMPAIGNS: GoogleAdsCampaign[] = [
  {
    id: "search",
    slug: "search",
    name: "Search Ads",
    description: "Appear at the top of Google search results when potential customers search for your products or services.",
    icon: "Search",
    deliverables: [
      "Keyword research and strategy",
      "Ad copy writing (3-5 ad variations)",
      "Landing page recommendations",
      "Conversion tracking setup",
      "Negative keyword list",
      "Monthly performance reports",
    ],
    recommendedBudget: "₹15,000 - ₹50,000/month",
    expectedResults: {
      impressions: "10,000 - 50,000/month",
      clicks: "500 - 2,500/month",
      ctr: "3-5%",
      conversions: "50 - 200/month",
      costPerConversion: "₹100 - ₹500",
    },
    caseStudies: [
      {
        id: "search-case-1",
        title: "Local Service Business - Lead Generation",
        shortDescription: "A home services company that generated 200+ leads per month through targeted search campaigns.",
        metrics: {
          impressions: "45,000/month",
          ctr: "4.5%",
          conversions: "220 leads/month",
          customMetrics: [
            { label: "Cost per Lead", value: "₹180" },
            { label: "ROI", value: "400%" },
          ],
        },
      },
    ],
  },
  {
    id: "display",
    slug: "display",
    name: "Display Ads",
    description: "Reach potential customers across millions of websites with visually engaging banner ads.",
    icon: "Monitor",
    deliverables: [
      "Display ad design (5 sizes)",
      "Audience targeting strategy",
      "Placement optimization",
      "A/B testing setup",
      "Brand awareness metrics",
      "Monthly performance reports",
    ],
    recommendedBudget: "₹20,000 - ₹75,000/month",
    expectedResults: {
      impressions: "100,000 - 500,000/month",
      clicks: "1,000 - 5,000/month",
      ctr: "0.5-1%",
      conversions: "25 - 100/month",
    },
    caseStudies: [],
  },
  {
    id: "local",
    slug: "local",
    name: "Local Ads",
    description: "Drive foot traffic to your physical store with Google Local campaigns and Maps presence.",
    icon: "MapPin",
    deliverables: [
      "Google Business Profile optimization",
      "Local campaign setup",
      "Store visit tracking",
      "Location extension setup",
      "Call tracking implementation",
      "Monthly footfall reports",
    ],
    recommendedBudget: "₹10,000 - ₹30,000/month",
    expectedResults: {
      impressions: "20,000 - 80,000/month",
      clicks: "400 - 1,500/month",
      conversions: "100 - 400 store visits/month",
    },
    caseStudies: [],
  },
  {
    id: "remarketing",
    slug: "remarketing",
    name: "Remarketing",
    description: "Re-engage visitors who left your website without converting with targeted follow-up ads.",
    icon: "RotateCcw",
    deliverables: [
      "Remarketing tag implementation",
      "Audience segmentation",
      "Dynamic remarketing setup",
      "Ad creative development",
      "Conversion optimization",
      "Monthly retargeting reports",
    ],
    recommendedBudget: "₹8,000 - ₹25,000/month",
    expectedResults: {
      impressions: "50,000 - 200,000/month",
      clicks: "500 - 2,000/month",
      ctr: "1-2%",
      conversions: "30 - 120/month",
      roi: "300-500%",
    },
    caseStudies: [],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getVirtualTourCategory(slug: string): VirtualTour360Category | undefined {
  return VIRTUAL_TOUR_CATEGORIES.find(cat => cat.slug === slug);
}

export function getDesignIndustry(slug: string): IndustryService | undefined {
  return DESIGN_INDUSTRIES.find(ind => ind.slug === slug);
}

export function getDevelopmentIndustry(slug: string): IndustryService | undefined {
  return DEVELOPMENT_INDUSTRIES.find(ind => ind.slug === slug);
}

export function getGoogleAdsCampaign(slug: string): GoogleAdsCampaign | undefined {
  return GOOGLE_ADS_CAMPAIGNS.find(camp => camp.slug === slug);
}

export function getAllServiceCategories() {
  return {
    virtualTour: VIRTUAL_TOUR_CATEGORIES.map(c => ({ slug: c.slug, name: c.name })),
    design: DESIGN_INDUSTRIES.map(i => ({ slug: i.slug, name: i.name })),
    development: DEVELOPMENT_INDUSTRIES.map(i => ({ slug: i.slug, name: i.name })),
    googleAds: GOOGLE_ADS_CAMPAIGNS.map(c => ({ slug: c.slug, name: c.name })),
  };
}
