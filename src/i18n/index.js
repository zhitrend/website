import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// List of supported languages
const languages = ['en', 'zh', 'ja', 'ru', 'de', 'fr'];

// Default namespace
const defaultNS = 'common';

// Function to initialize i18n
async function initializeI18n() {
  await i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      // Default language
      fallbackLng: 'en',
      // Debug only in development
      debug: process.env.NODE_ENV === 'development',
      // Supported languages
      supportedLngs: languages,
      // Default namespace
      defaultNS,
      // Don't use a key separator (we use dots in keys)
      keySeparator: '.',
      // Don't escape values that include HTML
      interpolation: {
        escapeValue: false,
      },
      // Language detection settings
      detection: {
        order: ['path', 'cookie', 'htmlTag', 'navigator'],
        caches: ['cookie'],
        lookupFromPathIndex: 0,
        checkWhitelist: true,
      },
      // Backend settings
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      // React i18next options
      react: {
        useSuspense: true,
      },
    });

  return i18n;
}

// Initialize i18n
const i18nInstance = initializeI18n();

export default i18nInstance;
