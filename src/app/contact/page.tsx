'use client';

import { generateMetadata } from '@/utils/seo';
import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';

export const metadata = generateMetadata(
  'Contact Us',
  'Get in touch with Promiads Media Agency. Available 24/7 for your digital marketing needs.',
  '/contact'
);

export default function Contact() {
  return (
    <>
      <ContactHero />
      <div className="grid md:grid-cols-2 gap-12 items-start py-20 px-4 max-w-7xl mx-auto">
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  );
}
