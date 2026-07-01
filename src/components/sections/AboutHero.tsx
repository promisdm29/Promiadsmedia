'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/common/Layout';
import Button from '@/components/common/Button';
import { BRAND } from '@/utils/constants';

const AboutHero = () => {
  return (
    <Section className="pt-32 pb-20 bg-gradient-to-br from-cream via-white to-cream">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-charcoal mb-6">About {BRAND.name}</h1>
          <p className="text-2xl text-gold font-semibold mb-6">{BRAND.tagline}</p>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We are a full-service digital marketing agency dedicated to helping businesses thrive in the digital landscape.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};

export default AboutHero;
