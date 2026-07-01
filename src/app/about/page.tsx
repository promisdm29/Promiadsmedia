'use client';

import { generateMetadata } from '@/utils/seo';
import AboutHero from '@/components/sections/AboutHero';
import AboutContent from '@/components/sections/AboutContent';
import Team from '@/components/sections/Team';
import Values from '@/components/sections/Values';

export const metadata = generateMetadata(
  'About Us',
  'Learn about Promiads Media Agency - Our mission, vision, and the team behind your digital success.',
  '/about'
);

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <Values />
      <Team />
    </>
  );
}
