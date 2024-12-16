/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This replaces the need for `next export`
  distDir: 'out',   // Output directory for static files
  images: { unoptimized: true }, // Required for static exports
  basePath: '/ShootersTremelo',  // Repo name for GitHub Pages
  assetPrefix: '/ShootersTremelo', // Prefix for static assets
};

export default nextConfig;
