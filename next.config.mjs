/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      // Ignore TypeScript errors during production build
      ignoreBuildErrors: true,
    },
    eslint: {
      // Ignore ESLint errors during production build
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
  