import type { Metadata } from "next";
import { DEFAULT_SEO } from "./constants";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [...DEFAULT_SEO.keywords],
  ogImage = "/images/og-image.jpg",
  noIndex = false,
  canonical,
}: SEOProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${DEFAULT_SEO.siteName}`
    : DEFAULT_SEO.defaultTitle;
  const pageDescription = description || DEFAULT_SEO.defaultDescription;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords.join(", "),
    authors: [{ name: DEFAULT_SEO.siteName }],
    creator: DEFAULT_SEO.siteName,
    publisher: DEFAULT_SEO.siteName,
    robots: noIndex ? "noindex,nofollow" : "index,follow",
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: canonical || DEFAULT_SEO.siteUrl,
      siteName: DEFAULT_SEO.siteName,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: DEFAULT_SEO.twitterHandle,
      creator: DEFAULT_SEO.twitterHandle,
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    alternates: canonical
      ? {
          canonical,
        }
      : undefined,
  };
}

// Organization Schema for Homepage
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Edone Solutions",
    url: DEFAULT_SEO.siteUrl,
    logo: `${DEFAULT_SEO.siteUrl}/images/logo.png`,
    description: DEFAULT_SEO.defaultDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9494720878",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.facebook.com/Edonesolution/",
      "https://www.instagram.com/edonesolutions/?hl=en",
      "https://in.linkedin.com/company/edone-solutions",
      "https://www.youtube.com/channel/UCcmcsvZI0aZ-PSvpiXuJ3pw",
      "https://x.com/edonesolutions",
    ],
  };
}

// Local Business Schema for Contact Page
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Edone Solutions",
    image: `${DEFAULT_SEO.siteUrl}/images/logo.png`,
    "@id": DEFAULT_SEO.siteUrl,
    url: DEFAULT_SEO.siteUrl,
    telephone: "+91-9494720878",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.385044,
      longitude: 78.486671,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/Edonesolution/",
      "https://www.instagram.com/edonesolutions/?hl=en",
      "https://in.linkedin.com/company/edone-solutions",
      "https://www.youtube.com/channel/UCcmcsvZI0aZ-PSvpiXuJ3pw",
      "https://x.com/edonesolutions",
    ],
  };
}

// Service Schema
export function generateServiceSchema(serviceName: string, serviceDescription: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@type": "Organization",
      name: "Edone Solutions",
      url: DEFAULT_SEO.siteUrl,
    },
    description: serviceDescription,
    areaServed: {
      "@type": "Place",
      name: "Hyderabad, Telangana, India",
    },
  };
}

// Breadcrumb Schema
export function generateBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${DEFAULT_SEO.siteUrl}${item.url}`,
    })),
  };
}

// Article Schema for Blog Posts
export function generateArticleSchema(article: {
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate?: string;
  authorName: string;
  imageUrl: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.imageUrl,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    author: {
      "@type": "Person",
      name: article.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Edone Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${DEFAULT_SEO.siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}
