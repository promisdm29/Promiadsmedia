'use client';

import { generateMetadata } from '@/utils/seo';
import ServicesHero from '@/components/sections/ServicesHero';
import ServicesList from '@/components/sections/ServicesList';
import ServiceProcess from '@/components/sections/ServiceProcess';
import ServicePricing from '@/components/sections/ServicePricing';

export const metadata = generateMetadata(
  'Services',
  'Explore our comprehensive digital marketing services - Facebook Ads, Instagram Ads, Lead Generation, Landing Pages, and Website Development.',
  '/services'
);

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <ServicePricing />
    </>
  );
}
