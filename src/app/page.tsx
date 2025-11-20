"use client"
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Kritické komponenty - načtou se okamžitě
import Navbar from './components/navbar';
import PromoBar from './components/promobar';

// ✅ FIX: HeroSection musí být dynamická BEZ SSR aby se vyřešila hydratace!
const HeroSection = dynamic(
  () => import('./components/hero'),
  {
    ssr: false, // ← KRITICKÉ! Vypne SSR a vyřeší hydration problém
    loading: () => (
      <div className="relative min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          
          
        </div>
      </div>
    ),
  }
);

// Lazy loaded komponenty s custom loading states
const WineSeriesSection = dynamic(
  () => import('./components/WineSeriesSection-Enhanced'),
  {
    loading: () => (
      <div className="min-h-[400px] bg-[#fefbea] flex items-center justify-center">
        <div className="animate-pulse text-[#ab8754]">Načítání...</div>
      </div>
    ),
    ssr: true,
  }
);

const WineShowcase = dynamic(
  () => import('./components/wine'),
  {
    loading: () => (
      <div className="min-h-[500px] bg-white flex items-center justify-center">
        <div className="animate-pulse text-[#ab8754]">Načítání vín...</div>
      </div>
    ),
    ssr: true,
  }
);

const AboutWinerySection = dynamic(
  () => import('./components/vinartsvi'),
  {
    loading: () => (
      <div className="min-h-[400px] bg-[#fefbea] flex items-center justify-center">
        <div className="animate-pulse text-[#ab8754]">Načítání...</div>
      </div>
    ),
    ssr: true,
  }
);

const AdoptujVinohrad = dynamic(
  () => import('./components/adoptuj'),
  {
    loading: () => (
      <div className="min-h-[400px] bg-white flex items-center justify-center">
        <div className="animate-pulse text-[#ab8754]">Načítání...</div>
      </div>
    ),
    ssr: true,
  }
);

const Footer = dynamic(
  () => import('./components/footer'),
  {
    loading: () => (
      <div className="min-h-[300px] bg-stone-950 flex items-center justify-center">
        <div className="animate-pulse text-[#ab8754]">Načítání...</div>
      </div>
    ),
    ssr: true,
  }
);



export default function Home() {
  return (
    <main className="relative">
      {/* Kritické komponenty - načtou se okamžitě */}
      <Navbar />
      <PromoBar />
      
      {/* ✅ HeroSection je teď dynamická bez SSR */}
      <HeroSection />

      {/* Lazy loaded komponenty se Suspense */}
      <Suspense
        fallback={
          <div className="min-h-[400px] bg-[#fefbea] flex items-center justify-center">
            <div className="animate-pulse text-[#ab8754] text-lg">Načítání obsahu...</div>
          </div>
        }
      >
        <WineSeriesSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="min-h-[500px] bg-white flex items-center justify-center">
            <div className="animate-pulse text-[#ab8754] text-lg">Načítání vín...</div>
          </div>
        }
      >
        <WineShowcase />
      </Suspense>

      <Suspense
        fallback={
          <div className="min-h-[400px] bg-[#fefbea] flex items-center justify-center">
            <div className="animate-pulse text-[#ab8754] text-lg">Načítání...</div>
          </div>
        }
      >
        <AboutWinerySection />
      </Suspense>

      <Suspense
        fallback={
          <div className="min-h-[400px] bg-white flex items-center justify-center">
            <div className="animate-pulse text-[#ab8754] text-lg">Načítání...</div>
          </div>
        }
      >
        <AdoptujVinohrad />
      </Suspense>

      <Suspense
        fallback={
          <div className="min-h-[300px] bg-stone-950 flex items-center justify-center">
            <div className="animate-pulse text-[#ab8754] text-lg">Načítání...</div>
          </div>
        }
      >
        <Footer />
      </Suspense>
    </main>
  );
}