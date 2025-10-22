import React from 'react';

import Navbar from '../components/navbar';



import Footer from '../components/footer';
import MiQueenMiniPage from '../components/mini-queen';



export default function Home() {
  return (
    <main>
     
      <Navbar />
      <MiQueenMiniPage />
      
      <Footer />
      
    </main>
  );
}