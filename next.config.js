// Webpack 5 config
module.exports = {
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US',
  },
  future: { webpack5: true },
  webpack: config => {
    config.resolve.fallback = { fs: false, module: false };

    return config;
  },
};
