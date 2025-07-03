import React from 'react';

import Navbar from './components/navbar';
import HeroSection from './components/hero';
import AboutWinerySection from './components/vinartsvi';
import WineShowcase from './components/wine';
import AdoptujVinohrad from './components/adoptuj';
import Footer from './components/footer';

export default function Home() {
  return (
    <main>
     
      <Navbar />
      <HeroSection />
      <AboutWinerySection />
      <WineShowcase />
      <AdoptujVinohrad />
      <Footer />
    </main>
  );
}