import React from 'react';

import Navbar from '../components/navbar';



import Footer from '../components/footer';
import MiQueenVouchersPage from '../components/poukazy';



export default function Home() {
  return (
    <main>
     
      <Navbar />
      <MiQueenVouchersPage />
      
      <Footer />
      
    </main>
  );
}