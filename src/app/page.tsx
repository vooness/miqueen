"use client";
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LazySection from './components/LazySection'; // Import našeho nového wrapperu

// 1. KRITICKÉ KOMPONENTY (Above the fold)
// Tyto se importují staticky nebo dynamicky s vysokou prioritou
import Navbar from './components/navbar';
import PromoBar from './components/promobar';

// HeroSection musí být vidět hned, ale řešíme hydrataci přes dynamic
const HeroSection = dynamic(() => import('./components/hero'), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-gray-900" />, // Placeholder pro Hero
});

// 2. ODLOŽENÉ KOMPONENTY (Below the fold)
// Důležité: U dynamických importů níže už nepotřebujeme 'ssr: false',
// protože LazySection zajistí, že se na serveru stejně nevykreslí (nejsou vidět).
// Tím šetříme JS bundle.

const WineSeriesSection = dynamic(() => import('./components/WineSeriesSection-Enhanced'));
const WineShowcase = dynamic(() => import('./components/wine'));
const AboutWinerySection = dynamic(() => import('./components/vinartsvi'));
const AdoptujVinohrad = dynamic(() => import('./components/adoptuj'));
const Footer = dynamic(() => import('./components/footer'));

// Skeleton pro loading stavy (aby uživatel věděl, že se něco děje, kdyby scrolloval super rychle)
const SectionSkeleton = () => (
  <div className="w-full h-full flex items-center justify-center bg-[#fefbea]/50">
    <div className="animate-pulse text-[#ab8754] font-light">Načítání...</div>
  </div>
);

export default function Home() {
  return (
    <main className="relative bg-[#fefbea]">
      {/* Navbar a PromoBar jsou statické = okamžité */}
      <Navbar />
      <PromoBar />
      
      {/* Hero je kritický pro LCP (Largest Contentful Paint), načítáme ho hned */}
      <HeroSection />

      {/* --- ZDE ZAČÍNÁ LAZY LOADING --- */}
      {/* Každá sekce je obalena v LazySection s odhadovanou výškou */}

      {/* 1. Kolekce vín (cca 600px výška) */}
      <LazySection height={600}>
        <Suspense fallback={<SectionSkeleton />}>
          <WineSeriesSection />
        </Suspense>
      </LazySection>

      {/* 2. Výpis vín (cca 800px výška) */}
      <LazySection height={800}>
        <Suspense fallback={<SectionSkeleton />}>
          <WineShowcase />
        </Suspense>
      </LazySection>

      {/* 3. O vinařství (cca 700px výška) */}
      <LazySection height={700}>
        <Suspense fallback={<SectionSkeleton />}>
          <AboutWinerySection />
        </Suspense>
      </LazySection>

      {/* 4. Adoptuj vinohrad (cca 600px výška) */}
      <LazySection height={600}>
        <Suspense fallback={<SectionSkeleton />}>
          <AdoptujVinohrad />
        </Suspense>
      </LazySection>

      {/* 5. Footer (cca 400px výška) */}
      <LazySection height={400} rootMargin="200px"> 
        <Suspense fallback={<div className="h-[400px] bg-stone-950" />}>
          <Footer />
        </Suspense>
      </LazySection>
    </main>
  );
}