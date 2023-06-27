import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pixelup.co.in/",
      lastModified: new Date(),
    },
    {
      url: "https://pixelup.co.in/services",
      lastModified: new Date(),
    },
  ];
}
