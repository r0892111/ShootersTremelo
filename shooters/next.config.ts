/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  distDir: 'out',   // Specifies output directory
  images: { unoptimized: true }, // Required for static export
  basePath: '/ShootersTremelo',  // Matches your GitHub Pages repo name
  assetPrefix: '/ShootersTremelo', // Prefix for static assets
};

export default nextConfig;
