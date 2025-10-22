import React from 'react';

import Navbar from '../components/navbar';



import Footer from '../components/footer';
import WineGridPage from '../components/winegrid';



export default function Home() {
  return (
    <main>
     
      <Navbar />
      <WineGridPage />
      
      <Footer />
      
    </main>
  );
}