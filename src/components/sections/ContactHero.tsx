'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/common/Layout';

const ContactHero = () => {
  return (
    <Section className="pt-32 pb-20 bg-gradient-to-br from-cream via-white to-cream">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-charcoal mb-6">Get In Touch</h1>
          <p className="text-2xl text-gold font-semibold mb-6">We're Here to Help</p>
          <p className="text-xl text-gray-600 leading-relaxed">
            Have questions about our services? Want to discuss your project? Reach out to us today and let's start building your success story.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ContactHero;
