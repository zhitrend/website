/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // Enable i18n
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja', 'ru', 'de', 'fr'],
  },
  // Disable image optimization
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    return config;
  },
  // Generate static pages for all locales
  exportPathMap: async function() {
    const locales = ['en', 'zh', 'ja', 'ru', 'de', 'fr'];
    const paths = {};
    
    // Add root path
    paths['/'] = { page: '/' };
    paths['/404'] = { page: '/404' };
    
    // Add localized paths
    locales.forEach(locale => {
      paths[`/${locale}`] = { page: '/', query: { locale } };
    });
    
    return paths;
  },
};

module.exports = nextConfig;
