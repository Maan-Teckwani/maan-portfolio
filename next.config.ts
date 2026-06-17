import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the tracing root to this project so Next doesn't infer a parent
  // directory as the workspace root when other lockfiles exist nearby.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
