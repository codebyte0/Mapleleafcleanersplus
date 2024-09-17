/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true, // Disable TypeScript errors during build
    },
    eslint: {
      ignoreDuringBuilds: true, // Disable ESLint errors during build
    },
    // Add any other Next.js config options here
  };
  
  export default nextConfig;
  