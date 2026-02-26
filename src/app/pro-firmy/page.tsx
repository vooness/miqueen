// ============================================
// UMÍSTĚNÍ: src/app/pro-firmy/page.tsx
// ============================================

import React from "react";
import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MiQueenCorporatePage from "../components/pro-firmy-informace";

// ========================================
// METADATA
// ========================================
export const metadata: Metadata = {
  title: "Firemní vína a akce | Vinařství Miqueen – B2B řešení",

  description:
    "Firemní vína s personalizací, teambuildingy a degustace v historických sklepích. Vína s logem, VIP balíčky, akce na klíč v Brně-Chrlicích a Čejkovicích.",

  alternates: {
    canonical: "https://miqueen.cz/pro-firmy",
    languages: {
      "cs-CZ": "https://miqueen.cz/pro-firmy",
      en: "https://miqueen.cz/en/corporate",
      de: "https://miqueen.cz/de/firmenkunden",
    },
  },

  keywords: [
    "firemní vína",
    "vína s logem",
    "corporate wine",
    "firemní dárky víno",
    "teambuilding vinařství",
    "degustace pro firmy",
    "firemní akce brno",
    "personalizované víno",
    "b2b víno",
    "rovensklípek brno",
  ],

  openGraph: {
    type: "website",
    locale: "cs_CZ",
    alternateLocale: ["en_US", "de_DE"],
    url: "https://miqueen.cz/pro-firmy",
    siteName: "Vinařství Miqueen",
    title: "Firemní vína a akce – Vinařství Miqueen | B2B řešení na míru",
    description:
      "Prémiová firemní vína s personalizací, teambuildingy a degustace v historických moravských sklepích.",
    images: [
      {
        url: "https://miqueen.cz/fotky/IMG_6362.jpg",
        width: 1200,
        height: 630,
        alt: "Firemní vína Miqueen – personalizované lahve s logem",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vinarstvimiqueen",
    title: "Firemní vína a akce – Vinařství Miqueen",
    description:
      "Personalizovaná vína s logem, teambuildingy a degustace pro firmy.",
    images: ["https://miqueen.cz/fotky/IMG_6362.jpg"],
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
    // ─── WebPage ───
    {
      "@type": "WebPage",
      "@id": "https://miqueen.cz/pro-firmy/#webpage",
      url: "https://miqueen.cz/pro-firmy",
      name: "Firemní vína a akce – Vinařství Miqueen",
      description:
        "Kompletní B2B vinařské řešení – firemní vína s personalizací, teambuildingy, degustace v historických sklepích.",
      isPartOf: { "@id": "https://miqueen.cz/#website" },
      about: { "@id": "https://miqueen.cz/#winery" },
      inLanguage: "cs-CZ",
    },

    // ─── Service ───
    {
      "@type": "Service",
      name: "Firemní vinařské služby MiQueen",
      description:
        "Firemní vína s personalizací etikety, teambuildingy, řízené degustace a pronájem historických sklepů.",
      provider: { "@id": "https://miqueen.cz/#organization" },
      areaServed: {
        "@type": "Country",
        name: "Czech Republic",
      },
      serviceType: [
        "Firemní vína s personalizací",
        "Teambuilding",
        "Řízená degustace",
        "Pronájem prostor",
      ],
    },

    // ─── EventVenue (Rovensklípek) ───
    {
      "@type": "EventVenue",
      name: "Rovensklípek",
      description: "Historický vinný sklep pro firemní akce a degustace",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rebešovická 23",
        addressLocality: "Brno-Chrlice",
        postalCode: "643 00",
        addressCountry: "CZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.1522,
        longitude: 16.6436,
      },
      maximumAttendeeCapacity: 80,
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
          name: "Pro firmy",
          item: "https://miqueen.cz/pro-firmy",
        },
      ],
    },

    // ─── FAQPage ───
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Jaké je minimální množství pro firemní objednávku?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Minimální objednávka firemních vín je 12 lahví. Pro personalizaci etikety s logem firmy je minimum 24 lahví.",
          },
        },
        {
          "@type": "Question",
          name: "Jak dlouho trvá příprava vín s vlastní etiketou?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Příprava firemních vín s personalizovanou etiketou trvá 2–4 týdny podle rozsahu objednávky.",
          },
        },
        {
          "@type": "Question",
          name: "Kde se konají firemní akce a degustace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Firemní akce pořádáme v historickém Rovensklípku v Brně-Chrlicích (kapacita 20–80 osob) a ve vinařství v Čejkovicích (30–100 osob).",
          },
        },
      ],
    },
  ],
};

export default function ProFirmyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Navbar />
        <MiQueenCorporatePage />
        <Footer />
      </main>
    </>
  );
}