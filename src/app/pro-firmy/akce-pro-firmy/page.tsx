"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CorporateEventsPage from "@/app/components/akce-pro-firmy";

export default function AkceProFirmyPage() {
  return (
    <>
      <Navbar />
      <main>
        <CorporateEventsPage />
      </main>
      <Footer />
    </>
  );
}