'use client';

import { motion } from 'framer-motion';
import { Container, Section, SectionHeading } from '@/components/common/Layout';
import Card from '@/components/common/Card';
import { BRAND } from '@/utils/constants';

const Founder = () => {
  return (
    <Section>
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-80 h-80 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-2xl">
              <div className="text-9xl">👩‍💼</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionHeading className="text-left gradient-text mb-6">Meet Our Founder</SectionHeading>

            <Card className="glass-dark border-gold/30">
              <h3 className="text-3xl font-bold text-charcoal mb-2">{BRAND.founder}</h3>
              <p className="text-gold font-semibold mb-6 text-lg">Founder & CEO</p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                With years of experience in digital marketing and a passion for results, {BRAND.founder} founded Promiads Media Agency with a vision to help businesses grow through innovative digital strategies.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Her commitment to excellence and customer success has made Promiads a trusted partner for hundreds of businesses seeking to amplify their digital presence.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gold/20">
                <div>
                  <p className="text-2xl font-bold text-gold">500+</p>
                  <p className="text-sm text-gray-600">Successful Campaigns</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold">15+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Founder;
