"use client";

import React, { Suspense, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import LazySection from "./LazySection";

// ─── Hero — BEZ ssr: false! Google uvidí obsah ───
const HeroDesktop = dynamic(() => import("./hero"), {
  loading: () => <div className="min-h-screen" />,
});

const HeroMobile = dynamic(() => import("./hero-mobil"), {
  loading: () => <div className="min-h-screen" />,
});

const CategoryGridDesktop = dynamic(() => import("./CategoryGridDesktop"), {
  loading: () => <div className="h-64" />,
});

const WineSeriesSection = dynamic(
  () => import("./WineSeriesSection-Enhanced")
);
const AboutWinerySection = dynamic(() => import("./vinartsvi"));
const ProductSlider1 = dynamic(() => import("./ProductSlider1"));
const ProductSlider2 = dynamic(() => import("./ProductSlider2"));

const SectionSkeleton = () => (
  <div className="w-full h-full flex items-center justify-center bg-[#fefbea]/50">
    <div className="animate-pulse text-[#ab8754] font-light">Načítání...</div>
  </div>
);

export default function HomeClient() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 1024);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  if (isMobile === null) {
    return <div className="min-h-screen bg-[#fefbea]" />;
  }

  return (
    <>
      {isMobile ? <HeroMobile /> : <HeroDesktop />}

      {!isMobile && (
        <LazySection height={400}>
          <Suspense fallback={<SectionSkeleton />}>
            <CategoryGridDesktop />
          </Suspense>
        </LazySection>
      )}

      <LazySection height={500}>
        <Suspense fallback={<SectionSkeleton />}>
          <ProductSlider1 />
        </Suspense>
      </LazySection>

      <LazySection height={500}>
        <Suspense fallback={<SectionSkeleton />}>
          <ProductSlider2 />
        </Suspense>
      </LazySection>

      <LazySection height={600}>
        <Suspense fallback={<SectionSkeleton />}>
          <WineSeriesSection />
        </Suspense>
      </LazySection>

      <LazySection height={700}>
        <Suspense fallback={<SectionSkeleton />}>
          <AboutWinerySection />
        </Suspense>
      </LazySection>
    </>
  );
}