import type { MetadataRoute } from "next";
import { artists, articles } from "@/data/content";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://saptasur.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "/music", "/artists", "/reviews", "/interviews", "/stories", "/archive", "/map", "/events", "/podcast", "/search"];
  return [
    ...fixed.map((p) => ({ url: `${site}${p}` })),
    ...artists.map((a) => ({ url: `${site}/artists/${a.slug}` })),
    ...articles.map((a) => ({ url: `${site}/articles/${a.slug}` })),
  ];
}
