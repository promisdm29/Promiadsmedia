'use client';

import { motion } from 'framer-motion';
import { Container, Section, SectionHeading, SectionSubheading } from '@/components/common/Layout';
import Card from '@/components/common/Card';
import { CheckCircle } from 'lucide-react';

const ServiceProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business, goals, and target audience to develop a winning strategy.',
    },
    {
      number: '02',
      title: 'Planning & Execution',
      description: 'Detailed campaign planning followed by expert execution across all channels.',
    },
    {
      number: '03',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and real-time optimization to maximize performance.',
    },
    {
      number: '04',
      title: 'Reporting & Growth',
      description: 'Transparent reporting with insights and recommendations for continuous growth.',
    },
  ];

  return (
    <Section>
      <Container>
        <SectionHeading className="gradient-text">Our Process</SectionHeading>
        <SectionSubheading>
          A proven methodology for successful digital marketing campaigns
        </SectionSubheading>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-gold to-transparent"></div>
              )}
              <Card className="relative z-10">
                <div className="text-5xl font-bold text-gold mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ServiceProcess;
