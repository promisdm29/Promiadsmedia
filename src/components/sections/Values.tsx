'use client';

import { motion } from 'framer-motion';
import { Container, Section, SectionHeading } from '@/components/common/Layout';
import Card from '@/components/common/Card';
import { Heart, Target, Zap, Users } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy is designed with measurable outcomes in mind. We focus on metrics that matter to your business.',
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our priority. We listen, understand, and deliver solutions tailored to your unique needs.',
    },
    {
      icon: Zap,
      title: 'Innovative',
      description: 'We embrace cutting-edge technologies and creative approaches to stay ahead in the digital landscape.',
    },
    {
      icon: Users,
      title: 'Transparent',
      description: 'Open communication and honest reporting. You always know what we are doing and why.',
    },
  ];

  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading className="gradient-text mb-12">Our Core Values</SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <Icon size={48} className="text-gold mb-4" />
                  <h3 className="text-xl font-bold text-charcoal mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Values;
