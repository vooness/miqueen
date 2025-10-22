import React from 'react';

import Navbar from './components/navbar';
import HeroSection from './components/hero';
import AboutWinerySection from './components/vinartsvi';
import WineShowcase from './components/wine';
import AdoptujVinohrad from './components/adoptuj';
import Footer from './components/footer';
import PromoBar from './components/promobar';



export default function Home() {
  return (
    <main>
     
      <Navbar />
      <PromoBar />
      <HeroSection />
      <WineShowcase />
      <AboutWinerySection />
      
      <AdoptujVinohrad />
     
      <Footer />
      
    </main>
  );
}