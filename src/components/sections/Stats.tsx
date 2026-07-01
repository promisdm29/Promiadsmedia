'use client';

import { Container, Section } from '@/components/common/Layout';
import Counter from '@/components/common/Counter';

const Stats = () => {
  return (
    <Section className="bg-charcoal text-white py-20">
      <Container>
        <div className="grid md:grid-cols-4 gap-8">
          <Counter end={500} label="Active Campaigns" suffix="+" />
          <Counter end={3000} label="Happy Clients" suffix="+" />
          <Counter end={15} label="Years Experience" suffix="+" />
          <Counter end={98} label="Success Rate" suffix="%" />
        </div>
      </Container>
    </Section>
  );
};

export default Stats;
