const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,

  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },

  modularizeImports: {
    /* Makes fontawesome icons tree-shakable */
    '@fortawesome/?(((\\w*)?/?)*)-icons': {
      transform: '@fortawesome/{{ matches.[1] }}-icons/{{member}}',
      preventFullImport: true,
    },
  },
};

module.exports = nextConfig;
