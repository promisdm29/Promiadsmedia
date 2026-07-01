'use client';

import { motion } from 'framer-motion';
import { Container, Section, SectionHeading, SectionSubheading } from '@/components/common/Layout';
import Card from '@/components/common/Card';
import { ExternalLink, TrendingUp } from 'lucide-react';

const PortfolioGrid = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Sales Explosion',
      category: 'Facebook Ads',
      image: '📈',
      results: '300% ROI Increase',
      budget: '$5,000',
      description: 'Comprehensive Facebook ad campaign for an e-commerce fashion brand',
      metrics: ['ROAS: 3.0x', 'CPC: ₹15', 'Conversions: 850+'],
    },
    {
      id: 2,
      title: 'High-Quality Lead Generation',
      category: 'Lead Generation',
      image: '👥',
      results: '5,000+ Qualified Leads',
      budget: '$8,000',
      description: 'Strategic lead generation for B2B SaaS company',
      metrics: ['Cost/Lead: ₹50', 'Conversion Rate: 12%', 'Quality Score: 9.5/10'],
    },
    {
      id: 3,
      title: 'Instagram Viral Campaign',
      category: 'Instagram Ads',
      image: '📱',
      results: '2M+ Impressions',
      budget: '$3,500',
      description: 'Creative Instagram campaign reaching millions of targeted users',
      metrics: ['Engagement: 8.2%', 'CPM: ₹8', 'Shares: 5,000+'],
    },
    {
      id: 4,
      title: 'Website Conversion Boost',
      category: 'Web Development',
      image: '🌐',
      results: '45% Conversion Increase',
      budget: '$12,000',
      description: 'Complete website redesign and optimization',
      metrics: ['Bounce Rate: ↓35%', 'Avg Session: +2min', 'Revenue: +₹50L'],
    },
    {
      id: 5,
      title: 'High-Converting Landing Page',
      category: 'Landing Page',
      image: '🎯',
      results: '60% Conversion Rate',
      budget: '$2,000',
      description: 'Custom landing page for product launch',
      metrics: ['CTR: 12%', 'Form Submissions: 2,400', 'Cost/Lead: ₹25'],
    },
    {
      id: 6,
      title: 'Integrated Marketing Success',
      category: 'Multi-Channel',
      image: '⚡',
      results: '500% Revenue Growth',
      budget: '$25,000',
      description: 'Comprehensive multi-channel marketing campaign',
      metrics: ['Total Revenue: ₹1.25Cr', 'ROI: 5.0x', 'Customer LTV: +200%'],
    },
  ];

  return (
    <Section>
      <Container>
        <SectionHeading className="gradient-text mb-4">Featured Projects</SectionHeading>
        <SectionSubheading className="mb-16">
          Real results from real clients across various industries
        </SectionSubheading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <div className="mb-4 text-6xl">{project.image}</div>
                <h3 className="text-xl font-bold text-charcoal mb-2 flex-grow">{project.title}</h3>
                <p className="text-gold font-semibold text-sm mb-3">{project.category}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Main Result:</span>
                    <span className="font-bold text-gold text-sm">{project.results}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Budget:</span>
                    <span className="font-bold text-charcoal text-sm">{project.budget}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs font-semibold text-charcoal mb-2">Key Metrics:</p>
                    <div className="space-y-1">
                      {project.metrics.map((metric, i) => (
                        <p key={i} className="text-xs text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                          {metric}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default PortfolioGrid;
