import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  // Keep Next.js rooted in wisest-maths-content even if a stray lockfile exists above.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
