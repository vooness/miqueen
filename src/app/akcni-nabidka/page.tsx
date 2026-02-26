// ============================================
// UMÍSTĚNÍ: src/app/akce/page.tsx
//
// POZNÁMKA: Originál neměl ŽÁDNOU metadata ani JSON-LD.
// Google viděl stránku bez title, description a structured data.
// ============================================

import React from "react";
import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WineGridAkce from "../components/winegrid-akce";

// ========================================
// METADATA
// ========================================
export const metadata: Metadata = {
  title: "Akční nabídky vín | Vinařství MiQueen – Slevy a výhodné sety",

  description:
    "Akční nabídky a zvýhodněné sety vín z Vinařství MiQueen. Sezónní slevy, výprodeje a limitované akce na prémiová moravská vína z Mikulova.",

  alternates: {
    canonical: "https://miqueen.cz/akce",
  },

  keywords: [
    "akce vína miqueen",
    "slevy víno",
    "výhodné sety vín",
    "akční nabídka víno",
    "zvýhodněné víno mikulov",
    "výprodej vín",
  ],

  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://miqueen.cz/akce",
    siteName: "Vinařství MiQueen",
    title: "Akční nabídky vín | Vinařství MiQueen",
    description:
      "Akční nabídky a zvýhodněné sety vín z Vinařství MiQueen. Sezónní slevy na prémiová moravská vína.",
    images: [
      {
        url: "https://miqueen.cz/og-wine-shop.jpg",
        width: 1200,
        height: 630,
        alt: "Akční nabídky – Vinařství MiQueen",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vinarstvimiqueen",
    title: "Akční nabídky vín | MiQueen",
    description:
      "Zvýhodněné sety a sezónní slevy na prémiová moravská vína z Mikulova.",
    images: ["https://miqueen.cz/og-wine-shop.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ========================================
// JSON-LD
// ========================================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // ─── CollectionPage ───
    {
      "@type": "CollectionPage",
      "@id": "https://miqueen.cz/akce/#webpage",
      url: "https://miqueen.cz/akce",
      name: "Akční nabídky vín – Vinařství MiQueen",
      description:
        "Akční nabídky, zvýhodněné sety a sezónní slevy na prémiová moravská vína.",
      isPartOf: { "@id": "https://miqueen.cz/#website" },
      about: { "@id": "https://miqueen.cz/#winery" },
      inLanguage: "cs-CZ",
    },

    // ─── BreadcrumbList ───
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Domů",
          item: "https://miqueen.cz",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Akce",
          item: "https://miqueen.cz/akce",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Navbar />
        <WineGridAkce />
        <Footer />
      </main>
    </>
  );
}