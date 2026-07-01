'use client';

import { motion } from 'framer-motion';
import { Container, Section, SectionHeading, SectionSubheading } from '@/components/common/Layout';
import Card from '@/components/common/Card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'Tech Startup',
      text: 'Promiads Media completely transformed our digital presence. The results were beyond our expectations!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Singh',
      company: 'E-Commerce Brand',
      text: 'Their team is professional, responsive, and delivers exactly what they promise. Highly recommended!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Amit Patel',
      company: 'Real Estate',
      text: 'The lead generation campaigns have been incredible. Our sales team has more quality leads than ever before.',
      rating: 5,
    },
  ];

  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading className="gradient-text">Client Testimonials</SectionHeading>
        <SectionSubheading>
          Real feedback from our satisfied clients
        </SectionSubheading>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-charcoal">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
