'use client';

import { motion } from 'framer-motion';
import { Container, Section, SectionHeading, SectionSubheading } from '@/components/common/Layout';
import Card from '@/components/common/Card';

const AboutContent = () => {
  return (
    <Section>
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Founded with a vision to revolutionize digital marketing, Promiads Media Agency started as a small team of passionate marketers. Today, we've grown into a trusted partner for hundreds of businesses across India and beyond.
            </p>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Our journey has been driven by one simple principle: delivering results that matter. We don't just run campaigns; we build partnerships with our clients, understanding their goals deeply and crafting strategies that drive real business growth.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              With over 15 years of combined experience in digital marketing, our team brings expertise, creativity, and a commitment to excellence to every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <Card>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-charcoal mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm">To empower businesses through innovative digital marketing solutions that drive growth and success.</p>
            </Card>
            <Card>
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="font-bold text-charcoal mb-2">Our Vision</h3>
              <p className="text-gray-600 text-sm">To be the most trusted digital marketing partner, known for excellence and client success.</p>
            </Card>
            <Card>
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-bold text-charcoal mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">We stay ahead of trends, constantly learning and adapting to serve our clients better.</p>
            </Card>
            <Card>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-charcoal mb-2">Partnership</h3>
              <p className="text-gray-600 text-sm">Your success is our success. We're committed to your growth every step of the way.</p>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutContent;
