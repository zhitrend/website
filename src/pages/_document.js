import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // Default language is 'en', will be updated client-side
  const lang = 'en';
  const dir = 'ltr';

  return (
    <Html lang={lang} dir={dir}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta httpEquiv="content-language" content={lang} />
      </Head>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
