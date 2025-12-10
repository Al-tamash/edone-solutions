export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: "web-design" | "web-development" | "virtual-tours";
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  completedDate: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    slug: "techvista-corporate-website",
    title: "TechVista Corporate Website",
    client: "TechVista Solutions",
    industry: "Technology",
    category: "web-development",
    shortDescription: "Modern corporate website with custom CMS and lead generation",
    fullDescription:
      "A comprehensive corporate website built for TechVista Solutions, featuring a custom content management system, integrated lead capture forms, and a portfolio showcase.",
    challenge:
      "TechVista needed a professional online presence that could effectively showcase their technology solutions while capturing leads and providing easy content management for their non-technical team.",
    solution:
      "We developed a modern, responsive website using Next.js with a headless CMS integration. The site features custom animations, an intuitive admin panel, and seamless form integrations with their CRM.",
    results: [
      "150% increase in lead generation within first 3 months",
      "Average page load time under 2 seconds",
      "95+ Lighthouse performance score",
      "50% reduction in bounce rate",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    projectUrl: "https://techvista-demo.com",
    completedDate: "2024-08",
  },
  {
    id: "2",
    slug: "urban-spaces-virtual-tours",
    title: "Urban Spaces 360° Property Tours",
    client: "Urban Spaces Realty",
    industry: "Real Estate",
    category: "virtual-tours",
    shortDescription: "Immersive 360° virtual tours for premium properties",
    fullDescription:
      "Created stunning 360° virtual tours for Urban Spaces Realty's premium property portfolio, allowing potential buyers to explore properties from anywhere in the world.",
    challenge:
      "With international clients and busy professionals, Urban Spaces needed a way to showcase their properties without requiring physical visits for initial viewings.",
    solution:
      "We produced high-quality 360° photography and developed interactive virtual tours with hotspot navigation, property information overlays, and Google Street View integration.",
    results: [
      "60% reduction in unnecessary property visits",
      "Increased international inquiries by 200%",
      "Tours shared 300+ times on social media",
      "Faster property sale cycle",
    ],
    technologies: ["360° Photography", "Matterport", "Custom Web Integration", "VR Compatible"],
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    completedDate: "2024-06",
  },
  {
    id: "3",
    slug: "gourmet-delights-restaurant",
    title: "Gourmet Delights Online Ordering",
    client: "Gourmet Delights Restaurant",
    industry: "Food & Beverage",
    category: "web-development",
    shortDescription: "Restaurant website with integrated online ordering system",
    fullDescription:
      "Full-featured restaurant website with menu management, online ordering, table reservations, and payment integration for Gourmet Delights.",
    challenge:
      "Gourmet Delights wanted to expand their business online with a seamless ordering experience that matched the quality of their in-restaurant service.",
    solution:
      "Built a beautiful, mobile-first website with an intuitive ordering system, real-time kitchen integration, and secure payment processing. Included admin dashboard for menu and order management.",
    results: [
      "Online orders tripled within 2 months",
      "Average order value increased by 35%",
      "4.8-star app store rating",
      "Reduced phone order load by 70%",
    ],
    technologies: ["React", "Node.js", "Stripe", "MongoDB", "Real-time Updates"],
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    completedDate: "2024-05",
  },
  {
    id: "4",
    slug: "wellness-spa-redesign",
    title: "Serenity Wellness Spa Redesign",
    client: "Serenity Wellness Spa",
    industry: "Health & Wellness",
    category: "web-design",
    shortDescription: "Elegant spa website with booking functionality",
    fullDescription:
      "Complete redesign of Serenity Wellness Spa's website with focus on creating a calming, luxurious user experience while streamlining their appointment booking process.",
    challenge:
      "The existing website didn't reflect the premium, tranquil experience of the spa, and appointment booking was clunky and resulted in lost bookings.",
    solution:
      "Designed a serene, minimalist interface with soothing colors and elegant typography. Integrated a smart booking system with calendar management, automated reminders, and payment processing.",
    results: [
      "Online bookings increased by 180%",
      "Missed appointments reduced by 65%",
      "Mobile traffic increased by 120%",
      "Customer satisfaction rating improved to 4.9/5",
    ],
    technologies: ["Figma", "Webflow", "Custom CSS", "Booking System API"],
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    completedDate: "2024-04",
  },
  {
    id: "5",
    slug: "edutech-learning-platform",
    title: "EduTech Learning Platform",
    client: "EduTech Academy",
    industry: "Education",
    category: "web-development",
    shortDescription: "Interactive e-learning platform with video courses",
    fullDescription:
      "Comprehensive online learning platform for EduTech Academy featuring video courses, quizzes, progress tracking, and student-teacher interaction.",
    challenge:
      "EduTech needed to transition from in-person classes to a robust online platform that could handle thousands of students while maintaining engagement and tracking progress.",
    solution:
      "Developed a scalable learning management system with video hosting, interactive quizzes, discussion forums, and detailed analytics dashboard for both students and instructors.",
    results: [
      "5,000+ active students onboarded",
      "98% video streaming uptime",
      "80% course completion rate",
      "Instructor workload reduced by 40%",
    ],
    technologies: ["Next.js", "PostgreSQL", "AWS", "Video Streaming API", "Socket.io"],
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
    completedDate: "2024-03",
  },
  {
    id: "6",
    slug: "fashion-boutique-ecommerce",
    title: "Chic Fashion E-commerce Store",
    client: "Chic Fashion Boutique",
    industry: "Fashion & Retail",
    category: "web-development",
    shortDescription: "Modern e-commerce store with inventory management",
    fullDescription:
      "Feature-rich e-commerce platform for Chic Fashion Boutique with product catalog, shopping cart, payment processing, and integrated inventory management.",
    challenge:
      "Chic Fashion wanted to expand beyond their physical store with an online shopping experience that reflected their brand's elegance while managing inventory across multiple channels.",
    solution:
      "Built a stunning e-commerce site with advanced filtering, wishlist functionality, secure checkout, and real-time inventory sync. Included admin dashboard for product and order management.",
    results: [
      "₹2 crore+ in online sales in first year",
      "3,500+ products listed",
      "Average cart value ₹4,500",
      "Customer retention rate 65%",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "Payment Gateway", "Inventory API"],
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    completedDate: "2024-02",
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string): PortfolioProject[] {
  if (category === "all") return portfolioProjects;
  return portfolioProjects.filter((project) => project.category === category);
}
