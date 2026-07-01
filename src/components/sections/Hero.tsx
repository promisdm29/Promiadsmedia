'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container, Section } from '@/components/common/Layout';
import Button from '@/components/common/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { BRAND } from '@/utils/constants';

const Hero = () => {
  return (
    <Section className="pt-32 pb-20 bg-gradient-to-br from-cream via-white to-cream min-h-screen flex items-center">
      <Container className="w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold">
                🚀 Welcome to Digital Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-charcoal mb-6 leading-tight"
            >
              {BRAND.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Transform your business with cutting-edge digital marketing strategies. From Facebook ads to website development, we deliver results that exceed expectations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              <div className="flex items-center gap-3 text-charcoal">
                <CheckCircle className="text-gold" size={24} />
                <span className="font-semibold">Results-Driven Campaigns</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal">
                <CheckCircle className="text-gold" size={24} />
                <span className="font-semibold">24/7 Support & Optimization</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal">
                <CheckCircle className="text-gold" size={24} />
                <span className="font-semibold">Transparent Reporting</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}`}
                variant="primary"
                size="lg"
              >
                {BRAND.whatsapp} <ArrowRight size={20} />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Call
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm text-gray-500 mt-6"
            >
              ✨ Get your Free Ads Audit today - Limited time offer!
            </motion.p>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-gold rounded-3xl opacity-10 blur-3xl"></div>
            <div className="relative">
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="glass-dark rounded-3xl p-8 backdrop-blur-xl"
              >
                <div className="bg-gradient-gold rounded-2xl aspect-video flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-5xl mb-4">📊</div>
                    <p className="font-bold text-xl">3000+</p>
                    <p className="text-sm">Happy Clients</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
