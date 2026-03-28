import type { MetadataRoute } from "next";
import { newsletterIssues } from "@/lib/newsletters-data";
import { products } from "@/lib/product-data";

const BASE = "https://vibevisuals.art";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                   lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/why-us`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/newsletters`,  lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/contact`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const newsletterRoutes: MetadataRoute.Sitemap = newsletterIssues.map((issue) => ({
    url: `${BASE}/newsletters/${issue.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE}/products/${product.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...newsletterRoutes, ...productRoutes];
}
