import React from 'react';

import Navbar from '../components/navbar';



import Footer from '../components/footer';
import  MiQueenCorporatePage from '../components/pro-firmy-informace';



export default function Home() {
  return (
    <main>
     
      <Navbar />
      <MiQueenCorporatePage/>
      
      <Footer />
      
    </main>
  );
}