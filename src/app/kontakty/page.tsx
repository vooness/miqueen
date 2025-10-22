import React from 'react';

import Navbar from '../components/navbar';



import Footer from '../components/footer';
import MiQueenContactPage from '../components/kontakty';



export default function Home() {
  return (
    <main>
     
      <Navbar />
      <MiQueenContactPage />
      
      <Footer />
      
    </main>
  );
}