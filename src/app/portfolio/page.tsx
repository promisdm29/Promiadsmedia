'use client';

import { generateMetadata } from '@/utils/seo';
import PortfolioHero from '@/components/sections/PortfolioHero';
import PortfolioGrid from '@/components/sections/PortfolioGrid';

export const metadata = generateMetadata(
  'Portfolio',
  'View our successful digital marketing campaigns and project case studies.',
  '/portfolio'
);

export default function Portfolio() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
    </>
  );
}
