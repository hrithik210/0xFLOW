import type { MetadataRoute } from "next";
import { CASE_STUDIES, SITE } from "@/app/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, lastModified: new Date() },
    ...CASE_STUDIES.map((cs) => ({
      url: `${SITE.url}/work/${cs.slug}`,
      lastModified: new Date(),
    })),
  ];
}
