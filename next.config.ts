import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["www.exemplo.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
