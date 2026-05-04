import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.funemoncalhas.com.br",
      lastModified: "2026-05-04",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
