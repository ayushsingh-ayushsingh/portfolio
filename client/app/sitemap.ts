export const dynamic = "force-static";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://me.ayushpno.workers.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // {
    //   url: "https://me.ayushpno.workers.dev/about",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // {
    //   url: "https://me.ayushpno.workers.dev/blog",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.5,
    // },
  ];
}
