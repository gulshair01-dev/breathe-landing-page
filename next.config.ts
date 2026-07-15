import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.blackincae.com",
        pathname: "/breathe-ugc/**",
      },
    ],
  },
};

export default nextConfig;
