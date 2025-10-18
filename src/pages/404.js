import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import Layout from '../components/Layout';

export default function Custom404() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <FiArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
