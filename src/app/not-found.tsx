'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-cream via-white to-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
        </motion.div>

        <h2 className="text-4xl font-bold text-charcoal mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gold text-charcoal px-8 py-4 rounded-lg font-semibold hover:bg-brown hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
