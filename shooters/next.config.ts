/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
  },
  basePath: '/ShootersTremelo',
  assetPrefix: '/ShootersTremelo',
};

export default nextConfig;
