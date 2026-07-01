'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/utils/constants';
import { Container, Section, SectionHeading, SectionSubheading } from '@/components/common/Layout';

const FAQAccordion = () => {
  const [openId, setOpenId] = useState(FAQS[0].id);

  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading className="gradient-text">Frequently Asked Questions</SectionHeading>
        <SectionSubheading>
          Find answers to common questions about our services and process
        </SectionSubheading>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? '' : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/20 transition-colors text-left"
              >
                <span className="font-bold text-charcoal text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-gold" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openId === faq.id ? 'auto' : 0,
                  opacity: openId === faq.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-white/50 border-t border-gold/20 text-gray-600">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQAccordion;
