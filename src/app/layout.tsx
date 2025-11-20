"use client";

import { useEffect } from "react"; 
import { initFPSMeter } from "@/app/components/FPSMeter";  // ✅ FPS meter import

import { Geist } from "next/font/google";
import { Cormorant_Garamond, Marcellus } from "next/font/google";
import "./globals.css";
import SimpleCookieBanner from "./components/cookies";
import AgeVerification from "./components/AgeVerification";
import TopBar from "./components/TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // ============================================
  // 🔥 FPS METER – pouze v development módu
  // ============================================
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      initFPSMeter();
    }
  }, []);

  return (
    <html lang="cs" className={`${cormorant.variable} ${marcellus.variable}`}>
      <head>
        {/* tvé meta tagy beze změny */}
      </head>

      <body className={`${geistSans.className} ${cormorant.variable} ${marcellus.variable} bg-[#faf8f5]`}>
        
        <AgeVerification />
        <TopBar />

        {children}

        <SimpleCookieBanner />
      </body>
    </html>
  );
}
