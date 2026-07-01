'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/common/Layout';
import Button from '@/components/common/Button';
import { ArrowRight, Zap } from 'lucide-react';
import { BRAND } from '@/utils/constants';

const CTA = () => {
  return (
    <Section className="bg-gradient-to-r from-charcoal to-brown text-white py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div className="flex justify-center mb-6">
            <Zap size={48} className="text-gold" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get your free ads audit today and discover how we can help you achieve your digital marketing goals. No commitment, just valuable insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}`}
              variant="primary"
              size="lg"
            >
              WhatsApp: {BRAND.whatsapp} <ArrowRight size={20} />
            </Button>
            <Button
              href={`mailto:${BRAND.email}`}
              variant="outline"
              size="lg"
            >
              Email Us
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            📍 Based in {BRAND.location} | 🕐 Available 24/7
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};

export default CTA;
