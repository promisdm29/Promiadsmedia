'use client';

import { Container, Section, SectionHeading } from '@/components/common/Layout';
import Card from '@/components/common/Card';

const ServicePricing = () => {
  const packages = [
    {
      name: 'Starter',
      price: 'Custom',
      description: 'Perfect for small businesses just starting out',
      features: [
        'Single platform ads (Facebook or Instagram)',
        'Basic campaign setup and management',
        'Monthly reporting',
        'Email support',
      ],
    },
    {
      name: 'Growth',
      price: 'Custom',
      description: 'Ideal for growing businesses',
      features: [
        'Multi-platform advertising',
        'Advanced campaign optimization',
        'Weekly reporting',
        'Priority support',
        'Landing page development',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For established businesses wanting maximum growth',
      features: [
        'Full-service digital marketing',
        'Dedicated account manager',
        'Custom website development',
        'Real-time analytics dashboard',
        '24/7 support',
        'Quarterly strategy reviews',
      ],
    },
  ];

  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading className="gradient-text mb-12">Flexible Pricing Plans</SectionHeading>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative ${pkg.highlighted ? 'ring-2 ring-gold transform md:scale-105' : ''}`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-charcoal px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-charcoal mb-2">{pkg.name}</h3>
              <p className="text-gold font-bold text-3xl mb-2">{pkg.price}</p>
              <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-charcoal">
                    <span className="text-gold mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-gold text-charcoal hover:bg-brown hover:text-white'
                    : 'border-2 border-gold text-gold hover:bg-gold hover:text-charcoal'
                }`}
              >
                Get Started
              </button>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-white rounded-xl text-center">
          <p className="text-gray-600 text-lg mb-4">
            💬 <strong>Custom packages available for specific needs</strong>
          </p>
          <p className="text-gray-600">
            Get your free ads audit and personalized quote. Contact us to discuss your requirements.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default ServicePricing;
