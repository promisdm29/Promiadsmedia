import { Metadata } from 'next';

export const generateMetadata = (title: string, description: string, path: string = ''): Metadata => {
  const baseUrl = 'https://promiads.com';
  const url = `${baseUrl}${path}`;

  return {
    title: `${title} | Promiads Media Agency`,
    description,
    keywords: 'digital marketing, facebook ads, instagram ads, lead generation, website development',
    authors: [{ name: 'Promiads Media Agency' }],
    creator: 'Promiads Media Agency',
    publisher: 'Promiads Media Agency',
    formatDetection: {
      email: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      siteName: 'Promiads Media Agency',
      title: `${title} | Promiads Media Agency`,
      description,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Promiads Media Agency`,
      description,
      images: [`${baseUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
    },
  };
};
