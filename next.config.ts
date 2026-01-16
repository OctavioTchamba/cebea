import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Note: NEXT_PUBLIC_ variables are automatically exposed to the client
  // No need to manually configure them in env
  experimental:{
    globalNotFound: true,
  }
};

export default nextConfig;
