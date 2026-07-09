/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  poweredByHeader: false,
  compress: true,
  serverExternalPackages: ["katex"],
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
