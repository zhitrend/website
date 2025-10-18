import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // Get the current language from the URL or default to 'en'
  const currentLocale = router.locale || 'en';
  
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const languageNames = {
    en: 'English',
    zh: '中文',
    ja: '日本語',
    ru: 'Русский',
    de: 'Deutsch',
    fr: 'Français'
  };

  const changeLanguage = (e) => {
    const newLocale = e.target.value;
    const { pathname, asPath, query } = router;
    
    // Update the URL with the new locale
    router.push({ pathname, query }, asPath, { locale: newLocale });
    
    // Also update i18n language
    if (i18n) {
      i18n.changeLanguage(newLocale);
    }
  };

  return (
    <div className="relative">
      <select
        value={currentLocale}
        onChange={changeLanguage}
        className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-1 px-3 pr-8 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        aria-label="Select language"
      >
        {Object.entries(languageNames).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
