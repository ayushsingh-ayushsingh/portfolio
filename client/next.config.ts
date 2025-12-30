import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export", // this was used in last cloudflare deployment
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
