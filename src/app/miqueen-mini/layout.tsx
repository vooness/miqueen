// app/miqueen-mini/layout.tsx
import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: {
    default: 'MiQueen Mini | Mini vína 187-200ml - Vinařství MiQueen',
    template: '%s | MiQueen Mini',
  },
  description: 'MiQueen Mini - prémiová vína v kabelkovém formátu 187-200ml. Ideální porce, dárkové sety, MIMOSA koktejl. Kvalitní moravská vína z vinařství MiQueen v Mikulově.',
  keywords: [
    'miqueen mini',
    'mini vína',
    'malé lahve vína',
    'mini lahvičky vína',
    'vína 187ml',
    'vína 200ml',
    'kabelkové víno',
    'mimosa mini',
    'degustační set',
    'víno na piknik',
    'moravská vína',
    'vinařství mikulov',
  ],
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://miqueen.cz/miqueen-mini',
    siteName: 'Vinařství MiQueen',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@miqueen_wines',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function MiQueenMiniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}