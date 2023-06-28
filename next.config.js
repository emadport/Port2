/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/restaurant",
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer, dev }) => {
    // Fixes npm packages that depend on `fs` module

    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true

    config.module.rules.push({
      test: /\.graphql?$/,
      loader: "webpack-graphql-loader",
    });

    return config;
  },
  images: { domains: ["res.cloudinary.com"] },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    SERVER_LINK: process.env.SERVER_LINK,
    SERVER_LINK_DEVELOPMENT: process.env.SERVER_LINK_DEVELOPMENT,
    SERVER_LINK_PRODUCTION: process.env.SERVER_LINK_PRODUCTION,
    MONGODB_URI: process.env.MONGODB_URI,
    : process.env.,
    SECRET: process.env.SECRET,
    STRIPE_KEY: process.env.STRIPE_KEY,
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    CLOUDINARY_API: process.env.CLOUDINARY_API,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    REALM_PUBLIC_KEY: process.env.REALM_PUBLIC_KEY,
    REALM_PRIVATE_KEY: process.env.REALM_PRIVATE_KEY,
    REALM_APP_ID: process.env.REALM_APP_ID,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    DISABLE_ESLINT_PLUGIN: process.env.DISABLE_ESLINT_PLUGIN,
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

module.exports = withBundleAnalyzer(withPWA(nextConfig));
