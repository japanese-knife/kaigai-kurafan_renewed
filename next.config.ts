import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // APIルートを使用するため無効化
  // trailingSlash: true,
  images: {
    unoptimized: true, // 画像最適化は無効のまま
  },

  /**
   * Custom Webpack configuration
   * - Enable deterministic chunking for better long-term caching
   * - Configure granular code splitting
   */
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }

    return config;
  },

  /**
   * HTTP headers
   * - Cache control for static assets
   */
  // headers: async () => {
  //   return [
  //     {
  //       source: '/_next/static/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //   ];
  // },

  /**
   * Development-only entry management
   */
  onDemandEntries: {
    maxInactiveAge: 25 * 1000, // 25 seconds in memory
    pagesBufferLength: 2,
  },
};

export default nextConfig;
