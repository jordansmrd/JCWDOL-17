/** @format */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "www.kickavenue.com",
        protocol: "https",
        pathname: "/static/media/**",
      },
      {
        hostname: "d5ibtax54de3q.cloudfront.net",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
