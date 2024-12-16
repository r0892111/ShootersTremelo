/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export mode
  distDir: 'out',   // Export directory
  images: { unoptimized: true }, // Needed for static exports
  basePath: '/ShootersTremelo',  // Repo name for GitHub Pages
  assetPrefix: '/ShootersTremelo', // Prefix for static assets
};

export default nextConfig;
