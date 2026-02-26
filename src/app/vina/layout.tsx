// src/app/vina/layout.tsx
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    siteName: 'Vinařství MiQueen',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function VinaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}