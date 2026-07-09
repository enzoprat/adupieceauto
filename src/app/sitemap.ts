import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1 },
    { path: "/catalogue", priority: 0.8 },
    { path: "/contact", priority: 0.9 },
    { path: "/mentions-legales", priority: 0.3 },
    { path: "/politique-confidentialite", priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${site.url}${route.path === "/" ? "" : route.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
