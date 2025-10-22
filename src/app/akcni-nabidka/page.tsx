import React from 'react';

import Navbar from '../components/navbar';



import Footer from '../components/footer';
import  WineGridAkce from '../components/winegrid-akce';



export default function Home() {
  return (
    <main>
     
      <Navbar />
      <WineGridAkce/>
      
      <Footer />
      
    </main>
  );
}