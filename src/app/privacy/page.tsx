'use client';

import { generateMetadata } from '@/utils/seo';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const metadata = generateMetadata(
  'Privacy Policy',
  'Privacy Policy for Promiads Media Agency.',
  '/privacy'
);

export default function Privacy() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-8 gradient-text">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-charcoal">Introduction</h2>
              <p>
                Promiads Media Agency ("we," "us," "our," or "Company") operates the promiads.com website and mobile application(s) (collectively, the "Services").
              </p>
              <p className="mt-4">
                This Privacy Policy explains our data practices, including what types of information we collect, how we use it, and the rights you have regarding your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-charcoal">Information We Collect</h2>
              <p className="mb-4">We collect various types of information in connection with the services we provide:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Business information (company name, industry, business goals)</li>
                <li>Technical data (IP address, browser type, device information)</li>
                <li>Usage data (pages visited, time spent, interactions)</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-charcoal">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide and improve our Services</li>
                <li>Communicate with you about our Services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze usage and trends</li>
                <li>Prevent fraudulent activities</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-charcoal">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-charcoal">Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-charcoal">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> promisdm29@gmail.com</p>
                <p><strong>WhatsApp:</strong> +91 7503129000</p>
                <p><strong>Location:</strong> Gurgaon, India</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-gold hover:text-brown transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
