import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://ethernode.tech/",
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}