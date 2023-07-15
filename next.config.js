/** @type {import('next').NextConfig} */

const i18n = require('./i18n.config.js');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
  i18n: { ...i18n, localeDetection: false },
};

module.exports = nextConfig;
