/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export
  distDir: 'out',
  images: { unoptimized: true },
  basePath: '/ShootersTremelo', // Your repo name
  assetPrefix: '/ShootersTremelo', // Prefix for all assets
};

export default nextConfig;
