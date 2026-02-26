// ============================================
// UMÍSTĚNÍ: src/app/vina/page.tsx
// ============================================

import React from "react";
import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WineGridPage from "../components/winegrid";

// ========================================
// METADATA
// ========================================
export const metadata: Metadata = {
  title: "Vína MiQueen – Prémiová moravská vína | E-shop vinařství Mikulov",

  description:
    "Kompletní nabídka vín z Vinařství Miqueen. Mini vína 187ml, Frizzante, Ryzlink rýnský, Tramín, Pinot Noir. Doprava zdarma od 1 500 Kč.",

  alternates: {
    canonical: "https://miqueen.cz/vina",
    languages: {
      "cs-CZ": "https://miqueen.cz/vina",
      en: "https://miqueen.cz/en/wines",
      de: "https://miqueen.cz/de/weine",
    },
  },

  keywords: [
    "vína miqueen",
    "moravská vína online",
    "mini vína 187ml",
    "frizzante",
    "ryzlink rýnský",
    "tramín červený",
    "pinot noir",
    "e-shop víno mikulov",
    "víno online",
    "doprava zdarma víno",
    "dárkové sety vín",
    "rosé víno",
  ],

  openGraph: {
    type: "website",
    locale: "cs_CZ",
    alternateLocale: ["en_US", "de_DE", "sk_SK"],
    url: "https://miqueen.cz/vina",
    siteName: "Vinařství Miqueen",
    title: "Vína MiQueen – Prémiová moravská vína z Mikulova",
    description:
      "Kompletní nabídka vín z Vinařství Miqueen. Mini vína, Frizzante, oceněná vína. Doprava zdarma od 1 500 Kč.",
    images: [
      {
        url: "https://miqueen.cz/og-wine-shop.jpg",
        width: 1200,
        height: 630,
        alt: "E-shop Vinařství Miqueen – prémiová moravská vína",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vinarstvimiqueen",
    title: "Vína MiQueen – Prémiová moravská vína",
    description:
      "Mini vína, Frizzante, oceněná vína z Mikulova. Doprava zdarma od 1 500 Kč.",
    images: ["https://miqueen.cz/og-wine-shop.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
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
    {
      "@type": "CollectionPage",
      "@id": "https://miqueen.cz/vina/#webpage",
      url: "https://miqueen.cz/vina",
      name: "Vína MiQueen – Prémiová moravská vína",
      description:
        "Kompletní nabídka vín z Vinařství Miqueen. Mini vína 187ml, Frizzante, bílá, červená i růžová vína z Mikulova.",
      isPartOf: { "@id": "https://miqueen.cz/#website" },
      about: { "@id": "https://miqueen.cz/#winery" },
      inLanguage: "cs-CZ",
      mainEntity: {
        "@type": "OfferCatalog",
        name: "Vína Vinařství Miqueen",
        description:
          "Prémiová moravská vína z Mikulova – bílá, červená, růžová, frizzante a mini vína",
        numberOfItems: 40,
      },
    },
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
          name: "Vína",
          item: "https://miqueen.cz/vina",
        },
      ],
    },
  ],
};

export default function WinesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Navbar />
        <WineGridPage />
        <Footer />
      </main>
    </>
  );
}