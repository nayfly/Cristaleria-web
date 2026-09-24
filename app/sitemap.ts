import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: business.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${business.siteUrl}/productos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${business.siteUrl}/tejidos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${business.siteUrl}/galeria`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${business.siteUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${business.siteUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...["aviso-legal", "privacidad", "cookies"].map((slug) => ({
      url: `${business.siteUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
