import { MetadataRoute } from "next";
import { 
  VIRTUAL_TOUR_CATEGORIES, 
  DESIGN_INDUSTRIES, 
  DEVELOPMENT_INDUSTRIES, 
  GOOGLE_ADS_CAMPAIGNS 
} from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://edonesolutions.com";
  const currentDate = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/360`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/design`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/development`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/google-ads`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  // 360 Virtual Tour category routes
  const virtualTourRoutes: MetadataRoute.Sitemap = VIRTUAL_TOUR_CATEGORIES.map(
    (category) => ({
      url: `${baseUrl}/services/360/${category.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // Website Design industry routes
  const designRoutes: MetadataRoute.Sitemap = DESIGN_INDUSTRIES.map(
    (industry) => ({
      url: `${baseUrl}/services/design/${industry.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // Website Development industry routes
  const developmentRoutes: MetadataRoute.Sitemap = DEVELOPMENT_INDUSTRIES.map(
    (industry) => ({
      url: `${baseUrl}/services/development/${industry.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // Google Ads campaign routes
  const googleAdsRoutes: MetadataRoute.Sitemap = GOOGLE_ADS_CAMPAIGNS.map(
    (campaign) => ({
      url: `${baseUrl}/services/google-ads/${campaign.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  return [
    ...staticRoutes,
    ...virtualTourRoutes,
    ...designRoutes,
    ...developmentRoutes,
    ...googleAdsRoutes,
  ];
}

