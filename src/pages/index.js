import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';
import { FiDownload, FiCode, FiZap, FiShield } from 'react-icons/fi';
import { FiGitBranch, FiBarChart2, FiCommand } from 'react-icons/fi';

const getFeatures = (t) => [
  {
    icon: <FiZap className="w-8 h-8 text-primary" />,
    title: t('features.items.0.title'),
    description: t('features.items.0.description'),
  },
  {
    icon: <FiShield className="w-8 h-8 text-primary" />,
    title: t('features.items.1.title'),
    description: t('features.items.1.description'),
  },
  {
    icon: <FiGitBranch className="w-8 h-8 text-primary" />,
    title: t('features.items.2.title'),
    description: t('features.items.2.description'),
  },
  {
    icon: <FiBarChart2 className="w-8 h-8 text-primary" />,
    title: t('features.items.3.title'),
    description: t('features.items.3.description'),
  },
  {
    icon: <FiCommand className="w-8 h-8 text-primary" />,
    title: t('features.items.4.title'),
    description: t('features.items.4.description'),
  },
  {
    icon: <FiCode className="w-8 h-8 text-primary" />,
    title: t('features.items.5.title'),
    description: t('features.items.5.description'),
  },
];

const getSteps = (t) => [
  {
    number: '01',
    title: t('howItWorks.steps.0'),
    description: t('howItWorks.steps.1'),
  },
  {
    number: '02',
    title: t('howItWorks.steps.1'),
    description: t('howItWorks.steps.2'),
  },
  {
    number: '03',
    title: t('howItWorks.steps.2'),
    description: t('howItWorks.steps.3'),
  },
];

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description, isLast }) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`flex ${!isLast ? 'mb-12' : ''} md:mb-0`}
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary text-lg font-bold">
          {number}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mx-auto mt-2"></div>
        )}
      </div>
      <div className="ml-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { t } = useTranslation('common');
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const features = getFeatures(t);
  const steps = getSteps(t);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10"></div>
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
{t('hero.title', { 
                highlight: t('hero.highlight')
              }).split(t('hero.highlight')).map((part, index, array) => (
                index === array.length - 1 ? part : (
                  <React.Fragment key={index}>
                    {part}
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {t('hero.highlight')}
                    </span>
                  </React.Fragment>
                )
              ))}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a
                href="https://pan.baidu.com/s/1fQ3jd2Pg8LiWV1wPcjYLKw?pwd=BSCo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-8 py-4 text-lg flex items-center justify-center"
              >
                <FiDownload className="mr-2" /> {t('hero.cta')}
              </a>
              <a
                href="https://t.me/+su415fGE-7JlZWRl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-8 py-4 text-lg bg-transparent text-primary border border-primary hover:bg-primary/10 dark:hover:bg-primary/20 flex items-center justify-center"
              >
                <div className="mr-2" /> 成为代理
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-gray-50 dark:bg-dark">
        <div className="container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">{t('features.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('features.description')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">{t('howItWorks.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('howItWorks.description')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                {...step}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('download.title')}</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {t('download.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://pan.baidu.com/s/1fQ3jd2Pg8LiWV1wPcjYLKw?pwd=BSCo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md text-lg font-semibold transition-colors duration-200"
            >
              <FiDownload className="mr-2" /> Download for Windows
            </a>
            <a
              href="#"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md text-lg font-semibold transition-colors duration-200"
            >
              View Documentation
            </a>
          </div>
          <p className="text-white/70 mt-4 text-sm">
            Windows 10/11 64-bit | Version 1.0.0
          </p>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
