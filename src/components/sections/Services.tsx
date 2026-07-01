'use client';

import { motion } from 'framer-motion';
import { Container, Section, SectionHeading, SectionSubheading } from '@/components/common/Layout';
import { SERVICES } from '@/utils/constants';
import Card from '@/components/common/Card';
import * as Icons from 'lucide-react';

const Services = () => {
  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading className="gradient-text">Our Services</SectionHeading>
        <SectionSubheading>
          Comprehensive digital marketing solutions tailored to your business needs
        </SectionSubheading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as any;
            return (
              <Card key={service.id} delay={index * 0.1}>
                <div className="mb-4">
                  {IconComponent && (
                    <div className="w-16 h-16 rounded-lg bg-gradient-gold flex items-center justify-center">
                      <IconComponent size={32} className="text-white" />
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Services;
