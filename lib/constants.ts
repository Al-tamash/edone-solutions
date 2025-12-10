// Company Information
export const COMPANY = {
  name: "Edone Solutions",
  tagline: "Transforming Digital Visions into Reality",
  phone: "+91 9494720878",
  email: "info@edonesolutions.com",
  address: {
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
  },
  businessHours: "Monday - Saturday: 9:00 AM - 6:00 PM",
  mapUrl: "https://maps.app.goo.gl/MrQuytyqVrEBKwGZ8",
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  googleMaps: "https://maps.app.goo.gl/MrQuytyqVrEBKwGZ8",
  facebook: "https://www.facebook.com/Edonesolution/",
  instagram: "https://www.instagram.com/edonesolutions/?hl=en",
  linkedin: "https://in.linkedin.com/company/edone-solutions",
  youtube: "https://www.youtube.com/channel/UCcmcsvZI0aZ-PSvpiXuJ3pw",
  twitter: "https://x.com/edonesolutions",
} as const;

// Navigation Menu Items
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

// Services Data
export const SERVICES = [
  {
    id: "web-design",
    title: "Web Design",
    slug: "web-design",
    icon: "Palette",
    shortDescription:
      "Create stunning, user-friendly websites that captivate your audience and drive conversions with our expert design services.",
    fullDescription:
      "Our web design services focus on creating visually appealing, intuitive, and responsive websites that reflect your brand identity. We combine creativity with user experience best practices to deliver designs that not only look great but also drive business results.",
    features: [
      "Custom UI/UX Design",
      "Responsive Mobile-First Design",
      "Brand Identity Integration",
      "Wireframing & Prototyping",
      "User Experience Optimization",
      "Visual Design & Graphics",
    ],
    benefits: [
      "Increased user engagement and conversions",
      "Professional brand representation",
      "Mobile-optimized designs",
      "Fast loading and performance",
      "Accessible to all users",
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Research",
        description: "Understanding your brand, goals, and target audience",
      },
      {
        step: 2,
        title: "Wireframing",
        description: "Creating layout structure and user flow",
      },
      {
        step: 3,
        title: "Visual Design",
        description: "Designing high-fidelity mockups with branding",
      },
      {
        step: 4,
        title: "Review & Refinement",
        description: "Iterating based on your feedback",
      },
      {
        step: 5,
        title: "Design Handoff",
        description: "Delivering final designs ready for development",
      },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    slug: "web-development",
    icon: "Code",
    shortDescription:
      "Build fast, secure, and scalable web applications with cutting-edge technologies and best coding practices.",
    fullDescription:
      "We develop robust, high-performance web applications using modern frameworks and technologies. From simple websites to complex web applications, our development team ensures your digital solution is secure, scalable, and maintainable.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Content Management Systems",
      "API Development & Integration",
      "Database Design & Optimization",
      "Performance Optimization",
    ],
    benefits: [
      "Fast, responsive web applications",
      "Secure and reliable code",
      "Scalable architecture",
      "SEO-friendly structure",
      "Easy to maintain and update",
    ],
    process: [
      {
        step: 1,
        title: "Requirements Analysis",
        description: "Defining technical specifications and architecture",
      },
      {
        step: 2,
        title: "Development Planning",
        description: "Creating roadmap and technology stack selection",
      },
      {
        step: 3,
        title: "Implementation",
        description: "Writing clean, efficient, and tested code",
      },
      {
        step: 4,
        title: "Testing & QA",
        description: "Rigorous testing across devices and browsers",
      },
      {
        step: 5,
        title: "Deployment & Support",
        description: "Launching and providing ongoing maintenance",
      },
    ],
  },
  {
    id: "virtual-tours",
    title: "360 Virtual Tours",
    slug: "360-virtual-tours",
    icon: "Camera",
    shortDescription:
      "Immersive 360° virtual tours that showcase your space and engage visitors like never before.",
    fullDescription:
      "Our 360 virtual tour services provide an immersive experience for your visitors, allowing them to explore your space from anywhere. Perfect for real estate, hospitality, education, and retail businesses looking to showcase their facilities.",
    features: [
      "High-Resolution 360° Photography",
      "Interactive Hotspots & Information",
      "Google Street View Integration",
      "Virtual Reality (VR) Compatible",
      "Mobile & Desktop Optimized",
      "Custom Branding & Navigation",
    ],
    benefits: [
      "Increase visitor engagement",
      "Save time on physical tours",
      "Showcase every detail",
      "Available 24/7 online",
      "Boost online visibility",
    ],
    process: [
      {
        step: 1,
        title: "Site Assessment",
        description: "Planning the tour route and identifying key areas",
      },
      {
        step: 2,
        title: "360° Photography",
        description: "Capturing high-quality panoramic images",
      },
      {
        step: 3,
        title: "Post-Processing",
        description: "Stitching and enhancing images",
      },
      {
        step: 4,
        title: "Interactive Development",
        description: "Adding navigation and interactive elements",
      },
      {
        step: 5,
        title: "Publishing & Integration",
        description: "Deploying on your website and platforms",
      },
    ],
  },
] as const;

// Statistics/Company Achievements
export const STATS = [
  { label: "Years Experience", value: 8 },
  { label: "Projects Completed", value: 250 },
  { label: "Happy Clients", value: 180 },
  { label: "Team Members", value: 12 },
] as const;

// SEO Metadata Defaults
export const DEFAULT_SEO = {
  siteName: "Edone Solutions",
  siteUrl: "https://edonesolutions.com",
  defaultTitle: "Edone Solutions - Professional Web Design & Development Services in Hyderabad",
  defaultDescription:
    "Expert web design, web development, and 360 virtual tour services in Hyderabad. Transform your digital presence with custom solutions tailored to your business needs.",
  twitterHandle: "@edonesolutions",
  keywords: [
    "web design Hyderabad",
    "web development services",
    "360 virtual tours",
    "website design company",
    "digital solutions Hyderabad",
    "custom web development",
    "professional web design",
  ],
} as const;
