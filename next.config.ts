import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    dangerouslyAllowSVG: true,
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    qualities: [55, 70, 75, 85],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      { protocol: "https", hostname: "www.google.com" },
      { protocol: "https", hostname: "komarev.com" },
      { protocol: "https", hostname: "img.shields.io" },
      { protocol: "https", hostname: "cdn.simpleicons.org"},
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "github-readme-stats.vercel.app" },
      { protocol: "https", hostname: "github-readme-streak-stats.herokuapp.com" },
      { protocol: "https", hostname: "github-profile-trophy.vercel.app" },
      { protocol: "https", hostname: "github-readme-stats-eight-theta.vercel.app" },
      { protocol: "https", hostname: "github-readme-activity-graph.vercel.app" },
      { protocol: "https", hostname: "github-profile-trophy-mu.vercel.app" },
    ],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
