'use client';

import { motion } from 'framer-motion';
import { Container, Section, SectionHeading, SectionSubheading } from '@/components/common/Layout';
import Card from '@/components/common/Card';
import { TrendingUp, Users, Target, Zap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Growth',
      category: 'Facebook Ads',
      image: '📈',
      results: '300% ROI Increase',
      description: 'Comprehensive Facebook ad campaign for e-commerce brand',
    },
    {
      id: 2,
      title: 'Lead Generation Success',
      category: 'Lead Generation',
      image: '👥',
      results: '5000+ Qualified Leads',
      description: 'Strategic lead generation campaign resulting in high-quality conversions',
    },
    {
      id: 3,
      title: 'Instagram Viral Campaign',
      category: 'Instagram Ads',
      image: '📱',
      results: '2M+ Impressions',
      description: 'Creative Instagram ad campaign reaching millions of targeted users',
    },
    {
      id: 4,
      title: 'Website Overhaul',
      category: 'Web Development',
      image: '🌐',
      results: '45% Conversion Boost',
      description: 'Complete website redesign and optimization for better conversions',
    },
    {
      id: 5,
      title: 'Landing Page Optimization',
      category: 'Landing Pages',
      image: '🎯',
      results: '60% Conversion Rate',
      description: 'High-converting landing pages for multiple client campaigns',
    },
    {
      id: 6,
      title: 'Integrated Campaign',
      category: 'Multi-Channel',
      image: '⚡',
      results: '500% Revenue Growth',
      description: 'Multi-channel campaign combining ads, landing pages, and optimization',
    },
  ];

  return (
    <Section>
      <Container>
        <SectionHeading className="gradient-text">Recent Projects</SectionHeading>
        <SectionSubheading>
          Showcase of our successful digital marketing campaigns and results
        </SectionSubheading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} delay={index * 0.1}>
              <div className="mb-4 text-5xl">{project.image}</div>
              <h3 className="text-2xl font-bold text-charcoal mb-2">{project.title}</h3>
              <p className="text-gold font-semibold mb-3">{project.category}</p>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-bold text-charcoal flex items-center gap-2">
                  <TrendingUp size={20} className="text-gold" />
                  {project.results}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Portfolio;
