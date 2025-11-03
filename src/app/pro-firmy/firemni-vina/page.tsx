"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CorporateWinesPage from "@/app/components/firemni-vina";

export default function FiremniVinaPage() {
  return (
    <>
      <Navbar />
      <main>
        <CorporateWinesPage />
      </main>
      <Footer />
    </>
  );
}