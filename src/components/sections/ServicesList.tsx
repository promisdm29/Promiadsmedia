'use client';

import { motion } from 'framer-motion';
import { Container, Section, SectionHeading, SectionSubheading } from '@/components/common/Layout';
import Card from '@/components/common/Card';
import { SERVICES } from '@/utils/constants';
import * as Icons from 'lucide-react';

const ServicesList = () => {
  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading className="gradient-text">What We Offer</SectionHeading>
        <SectionSubheading>
          Detailed overview of our comprehensive service offerings
        </SectionSubheading>

        <div className="space-y-8">
          {SERVICES.map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as any;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
              >
                <div className={`flex items-center justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-gold rounded-3xl opacity-10 blur-3xl"></div>
                    <div className="relative bg-gradient-gold rounded-2xl p-12 w-64 h-64 flex items-center justify-center">
                      {IconComponent && (
                        <IconComponent size={128} className="text-white opacity-50" />
                      )}
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="text-3xl font-bold text-charcoal mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 text-charcoal">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      Expert strategy and planning
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      Data-driven optimization
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      24/7 monitoring and support
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      Transparent reporting
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default ServicesList;
