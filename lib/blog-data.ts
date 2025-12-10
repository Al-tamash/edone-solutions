export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  category: string;
  tags: string[];
  imageUrl: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "importance-of-responsive-web-design",
    title: "The Importance of Responsive Web Design in 2024",
    excerpt:
      "Learn why responsive design is crucial for your business success and how it impacts user experience, SEO, and conversion rates.",
    content: `
      <p>In today's digital landscape, responsive web design is no longer optional—it's essential. With mobile devices accounting for over 60% of web traffic, your website must provide an excellent experience across all screen sizes.</p>
      
      <h2>What is Responsive Design?</h2>
      <p>Responsive web design is an approach that ensures your website adapts seamlessly to different screen sizes and devices. This means your site will look and function beautifully whether viewed on a smartphone, tablet, or desktop computer.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li><strong>Improved User Experience:</strong> Users can easily navigate and interact with your site regardless of their device.</li>
        <li><strong>Better SEO:</strong> Google prioritizes mobile-friendly websites in search rankings.</li>
        <li><strong>Increased Conversions:</strong> A smooth mobile experience leads to higher conversion rates.</li>
        <li><strong>Cost-Effective:</strong> One responsive site is more economical than maintaining separate desktop and mobile versions.</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>To create an effective responsive design:</p>
      <ol>
        <li>Start with a mobile-first approach</li>
        <li>Use flexible grid layouts</li>
        <li>Optimize images for different screen sizes</li>
        <li>Test on real devices, not just emulators</li>
        <li>Prioritize page speed on mobile connections</li>
      </ol>
      
      <p>At Edone Solutions, we specialize in creating responsive websites that not only look stunning but also drive results. Contact us today to learn how we can transform your online presence.</p>
    `,
    author: "Edone Solutions Team",
    publishedDate: "2024-11-15",
    category: "Web Design",
    tags: ["Responsive Design", "Mobile-First", "UX", "SEO"],
    imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read",
  },
  {
    id: "2",
    slug: "virtual-tours-real-estate-game-changer",
    title: "How 360 Virtual Tours Are Revolutionizing Real Estate",
    excerpt:
      "Discover how immersive virtual tours are transforming the real estate industry and helping properties sell faster.",
    content: `
      <p>The real estate industry has undergone a dramatic transformation with the introduction of 360° virtual tours. This technology has become a game-changer, especially in a post-pandemic world where remote viewing is increasingly important.</p>
      
      <h2>What Are 360 Virtual Tours?</h2>
      <p>360 virtual tours are interactive, panoramic views of a property that allow potential buyers to explore spaces as if they were physically present. Users can navigate through rooms, zoom in on details, and get a genuine feel for the property—all from the comfort of their homes.</p>
      
      <h2>Benefits for Real Estate</h2>
      <ul>
        <li><strong>Wider Reach:</strong> Attract international and out-of-state buyers who can't visit in person.</li>
        <li><strong>Time Efficiency:</strong> Reduce unnecessary physical viewings by pre-qualifying interested buyers.</li>
        <li><strong>Competitive Edge:</strong> Stand out in listings with immersive, high-quality presentations.</li>
        <li><strong>Faster Sales:</strong> Properties with virtual tours sell 31% faster on average.</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>For effective virtual tours:</p>
      <ul>
        <li>Ensure professional photography with proper lighting</li>
        <li>Include interactive hotspots for additional information</li>
        <li>Make tours accessible on both desktop and mobile</li>
        <li>Include floor plans and measurements</li>
        <li>Keep tours updated with current property status</li>
      </ul>
      
      <p>Ready to enhance your property listings? Edone Solutions offers professional 360 virtual tour services that will make your properties shine. Get in touch to learn more.</p>
    `,
    author: "Edone Solutions Team",
    publishedDate: "2024-11-01",
    category: "Virtual Tours",
    tags: ["360 Tours", "Real Estate", "Technology", "Marketing"],
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    readTime: "4 min read",
  },
  {
    id: "3",
    slug: "web-development-trends-2024",
    title: "Top Web Development Trends to Watch in 2024",
    excerpt:
      "Stay ahead of the curve with these emerging web development trends that are shaping the future of the internet.",
    content: `
      <p>The web development landscape is constantly evolving. Here are the key trends that are defining 2024 and beyond.</p>
      
      <h2>1. AI-Powered Development</h2>
      <p>Artificial intelligence is transforming how we build websites, from code generation to automated testing and personalized user experiences.</p>
      
      <h2>2. Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to bridge the gap between web and native apps, offering offline functionality, push notifications, and app-like experiences.</p>
      
      <h2>3. Serverless Architecture</h2>
      <p>Serverless computing is gaining traction, allowing developers to build and run applications without managing infrastructure.</p>
      
      <h2>4. Advanced JavaScript Frameworks</h2>
      <p>Next.js, React 19, and other modern frameworks are making development faster and more efficient with features like server components and improved performance.</p>
      
      <h2>5. Enhanced Cybersecurity</h2>
      <p>With increasing cyber threats, security-first development approaches are becoming standard practice.</p>
      
      <h2>6. Motion UI</h2>
      <p>Subtle animations and micro-interactions are enhancing user engagement and providing better feedback.</p>
      
      <p>At Edone Solutions, we stay at the forefront of these trends to deliver cutting-edge web solutions. Let's build something amazing together!</p>
    `,
    author: "Edone Solutions Team",
    publishedDate: "2024-10-20",
    category: "Web Development",
    tags: ["Trends", "JavaScript", "AI", "PWA", "Security"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    readTime: "6 min read",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "all") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}
