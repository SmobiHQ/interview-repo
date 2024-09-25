const path = require("path");
const { env } = require("process");

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias["~"] = path.resolve(__dirname, "src");
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
