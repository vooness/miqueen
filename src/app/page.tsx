"use client";
import React, { Suspense, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import LazySection from "./components/LazySection";

// 1. KRITICKÉ KOMPONENTY (Above the fold)
import Navbar from "./components/navbar";

// HeroSection – rozdílné komponenty pro desktop a mobil/tablet
const HeroDesktop = dynamic(() => import("./components/hero"), {
  ssr: false,
  loading: () => <div className="min-h-screen " />,
});

const HeroMobile = dynamic(() => import("./components/hero-mobil"), {
  ssr: false,
  loading: () => <div className="min-h-screen " />,
});

// CategoryGridDesktop - pouze pro desktop
const CategoryGridDesktop = dynamic(
  () => import("./components/CategoryGridDesktop"),
  {
    ssr: false,
    loading: () => <div className="h-64" />,
  }
);

// 2. ODLOŽENÉ KOMPONENTY (Below the fold)
const WineSeriesSection = dynamic(
  () => import("./components/WineSeriesSection-Enhanced")
);

const AboutWinerySection = dynamic(() => import("./components/vinartsvi"));

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Kontrola velikosti obrazovky při načtení a resize
    const checkDevice = () => {
      // Pro mobil a tablet používáme breakpoint 1024px (lg v Tailwindu)
      setIsMobile(window.innerWidth < 1024);
    };

    // Počáteční kontrola
    checkDevice();

    // Listener pro resize události
    window.addEventListener("resize", checkDevice);

    // Cleanup
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <main className="relative bg-[#fefbea]">
      {/* Navbar a PromoBar jsou statické = okamžité */}
      <Navbar />
      
      {/* Hero – podmíněné načítání podle zařízení */}
      {isMobile ? <HeroMobile /> : <HeroDesktop />}

      {/* CategoryGridDesktop - pouze na desktopu */}
      {!isMobile && (
        <LazySection height={400}>
          <Suspense fallback={<SectionSkeleton />}>
            <CategoryGridDesktop />
          </Suspense>
        </LazySection>
      )}

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

      

      {/* 3. O vinařství (cca 700px výška) */}
      <LazySection height={700}>
        <Suspense fallback={<SectionSkeleton />}>
          <AboutWinerySection />
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