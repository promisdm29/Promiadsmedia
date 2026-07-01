'use client';

import { motion } from 'framer-motion';
import { Container, Section, SectionHeading, SectionSubheading } from '@/components/common/Layout';
import Card from '@/components/common/Card';

const Team = () => {
  const team = [
    {
      name: 'Pramila',
      role: 'Founder & CEO',
      bio: 'Digital marketing expert with 15+ years of experience in driving business growth.',
      emoji: '👩‍💼',
    },
    {
      name: 'Team Member',
      role: 'Strategy Lead',
      bio: 'Specialized in creating data-driven marketing strategies that deliver results.',
      emoji: '👨‍💻',
    },
    {
      name: 'Team Member',
      role: 'Creative Director',
      bio: 'Expert in crafting compelling creative content that resonates with audiences.',
      emoji: '👩‍🎨',
    },
    {
      name: 'Team Member',
      role: 'Analytics Specialist',
      bio: 'Master of data analysis and performance optimization across all channels.',
      emoji: '📊',
    },
  ];

  return (
    <Section>
      <Container>
        <SectionHeading className="gradient-text">Our Expert Team</SectionHeading>
        <SectionSubheading>
          Passionate professionals dedicated to your digital success
        </SectionSubheading>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-bold text-charcoal mb-1">{member.name}</h3>
                <p className="text-gold font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Team;
