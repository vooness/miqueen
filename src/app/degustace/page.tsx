import React from 'react';

import Navbar from '../components/navbar';



import Footer from '../components/footer';
import MiQueenTastingsPage from '../components/degustace-informace';



export default function Home() {
  return (
    <main>
     
      <Navbar />
      <MiQueenTastingsPage />
      
      <Footer />
      
    </main>
  );
}