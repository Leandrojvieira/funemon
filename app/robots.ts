import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://funemon.com.br/sitemap.xml",
    host: "https://funemon.com.br",
  };
}
