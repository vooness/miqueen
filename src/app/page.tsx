"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import LazySection from "./components/LazySection";

// 1. KRITICKÉ KOMPONENTY (Above the fold)
import Navbar from "./components/navbar";
import PromoBar from "./components/promobar";

// HeroSection – kritický obsah
const HeroSection = dynamic(() => import("./components/hero"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-gray-900" />,
});

// 2. ODLOŽENÉ KOMPONENTY (Below the fold)
const WineSeriesSection = dynamic(
  () => import("./components/WineSeriesSection-Enhanced")
);
const WineShowcase = dynamic(() => import("./components/wine"));
const AboutWinerySection = dynamic(() => import("./components/vinartsvi"));
const AdoptujVinohrad = dynamic(() => import("./components/adoptuj"));
const Footer = dynamic(() => import("./components/footer"));

// ✅ ProductSlider1 – dárkové sety
const ProductSlider1 = dynamic(
  () => import("./components/ProductSlider1")
);

// ✅ ProductSlider2 – nejoblíbenější vína
const ProductSlider2 = dynamic(
  () => import("./components/ProductSlider2")
);

// Skeleton pro loading stavy
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

      {/* Hero – hlavní hero sekce */}
      <HeroSection />

      {/* 🔽 HNED POD HERO: SLIDER DÁRKOVÝCH SETŮ */}
      <LazySection height={500}>
        <Suspense fallback={<SectionSkeleton />}>
          <ProductSlider1 />
        </Suspense>
      </LazySection>

      {/* 🔽 POD PRODUCTSLIDER1: SLIDER NEJOBLÍBENĚJŠÍCH VÍN */}
      <LazySection height={500}>
        <Suspense fallback={<SectionSkeleton />}>
          <ProductSlider2 />
        </Suspense>
      </LazySection>

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
