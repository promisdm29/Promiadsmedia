import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Promiads Media Agency - Digital Marketing Solutions',
  description: 'Promise Beyond Marketing. Professional digital marketing services including Facebook Ads, Instagram Ads, Lead Generation, and Website Development.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  authors: [{ name: 'Promiads Media Agency', url: 'https://promiads.com' }],
  keywords: 'digital marketing, facebook ads, instagram ads, lead generation, landing page, website development, gurgaon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#D4AF37" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-charcoal font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
