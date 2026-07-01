'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/common/Layout';

const ServicesHero = () => {
  return (
    <Section className="pt-32 pb-20 bg-gradient-to-br from-cream via-white to-cream">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-charcoal mb-6">Our Services</h1>
          <p className="text-2xl text-gold font-semibold mb-6">Comprehensive Digital Marketing Solutions</p>
          <p className="text-xl text-gray-600 leading-relaxed">
            From social media advertising to website development, we offer a complete range of services to help your business succeed online.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ServicesHero;
