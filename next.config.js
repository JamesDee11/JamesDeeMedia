/* eslint-env node */

const nextConfig = {
  // Webpack customization
  webpack: (config) => {
    const oneOfRule = config.module.rules.find((rule) => rule.oneOf);

    if (oneOfRule && oneOfRule.oneOf) {
      const tsRules = oneOfRule.oneOf.filter((rule) =>
        rule.test?.toString().includes("tsx|ts")
      );

      // Ensure all TypeScript rules handle all TS/TSX files without restrictions
      tsRules.forEach((rule) => {
        rule.include = undefined;
      });
    }

    // Support custom assets (videos, fonts, etc.) but exclude images handled by `next/image`
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });

    return config;
  },

  // Enabling compression for optimized delivery
  compress: true,

  // Controlling cache behavior and ETag generation
  generateEtags: true,

  // Customizing file extensions for pages
  pageExtensions: ["tsx", "mdx", "ts"],

  // Disabling source maps in production for performance
  productionBrowserSourceMaps: false,

  // Enabling React Strict Mode
  reactStrictMode: true,

  // Maintaining clean URLs without trailing slashes
  trailingSlash: false,

  // Image handling and optimization
  images: {
    // Support for remote patterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
    ],
    // Image formats supported
    formats: ["image/avif", "image/webp"],
    // Minimum cache TTL for images
    minimumCacheTTL: 3600, // 1 hour
  },

  // Enabling experimental features
  experimental: {
    scrollRestoration: true,
  },

  // Internationalization settings
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },

  // ESLint configuration
  eslint: {
    dirs: ["src"], // Limit linting to specific directories
  },
};

module.exports = nextConfig;
