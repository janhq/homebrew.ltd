const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  env: {
    GTM_ID: process.env.GTM_ID,
  },
  images: {
    formats: ["image/webp"],
    unoptimized: true,
  },
};

module.exports = withNextra(nextConfig);
