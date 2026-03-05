import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        `https://cdn.sanity.io/images/${process.env.PROJECTID}/production/***`,
      ),
    ],
  },
};

export default nextConfig;
