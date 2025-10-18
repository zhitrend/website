import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
    // Check for dark mode preference
    if (typeof window !== 'undefined') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, []);

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${mounted ? 'visible' : 'invisible'}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tank Helper - WOTBot Assistant</title>
        <meta name="description" content="Enhance your World of Tanks experience with Tank Helper - The ultimate WOTBot assistant" />
      </Head>
      <Component {...pageProps} key={router.asPath} />
    </div>
  );
}

export default appWithTranslation(App);
