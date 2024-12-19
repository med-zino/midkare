/** @type {import('next').NextConfig} */
const nextConfig = {
    // Increase build timeout
    staticPageGenerationTimeout: 180, // Increase timeout to 3 minutes
  
    // Webpack optimizations
    webpack: (config, { isServer }) => {
      // Increase memory limit for webpack
      config.experiments = { 
        ...config.experiments, 
        topLevelAwait: true 
      };
  
      // Server-side specific optimizations
      if (isServer) {
        config.optimization = {
          ...config.optimization,
          minimize: true,
        };
      }
  
      return config;
    },
  
    // Optimize build performance
    productionBrowserSourceMaps: false,
  
    // Adjust page loading
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
    // Customize build ID generation
    generateBuildId: async () => {
      return 'build-' + new Date().getTime();
    },
  
    // Images configuration
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
  };
  
  export default nextConfig;
  