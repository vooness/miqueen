import React from 'react';

import Navbar from '../components/navbar';



import Footer from '../components/footer';
import AdoptujVinohradPage from '../components/adoptuj-vinohrad';



export default function Home() {
  return (
    <main>
     
      <Navbar />
      <AdoptujVinohradPage />
      
      <Footer />
      
    </main>
  );
}