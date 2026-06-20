import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://roota.ktgs.llc/sitemap.xml",
    host: "https://roota.ktgs.llc",
  };
}
