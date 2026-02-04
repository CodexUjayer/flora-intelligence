import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://floraintelligence.ai";
  const lastModified = new Date();

  const routes = [
    "",
    "/services",
    "/case-studies",
    "/about",
    "/careers",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly" as any,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
