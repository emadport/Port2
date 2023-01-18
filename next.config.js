/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
      {
        source: "/admin/setting/:path*",
        destination: "/blog/:path*",
        permanent: false,
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
  },
};

module.exports = nextConfig;
