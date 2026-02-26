// ============================================
// UMÍSTĚNÍ: src/app/mapa-vin/page.tsx
// ============================================

import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MapaVinPage from "../components/mapa-vin";

// ========================================
// METADATA
// ========================================
export const metadata: Metadata = {
  title: "Kde koupit vína MiQueen | Mapa prodejen – Vinařství MiQueen",

  description:
    "Mapa prodejen vín MiQueen po celé ČR. E-shop s doručením, Rovensklípek Brno-Chrlice, vinařství Mikulov. Najděte nejbližší prodejnu.",

  alternates: {
    canonical: "https://miqueen.cz/mapa-vin",
    languages: {
      "cs-CZ": "https://miqueen.cz/mapa-vin",
      en: "https://miqueen.cz/en/wine-map",
      de: "https://miqueen.cz/de/wein-karte",
    },
  },

  keywords: [
    "kde koupit miqueen",
    "prodejna vín mikulov",
    "rovensklípek brno",
    "mapa prodejen vína",
    "víno z pálavy",
    "osobní odběr víno",
    "moravská vína prodej",
    "miqueen eshop",
  ],

  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://miqueen.cz/mapa-vin",
    siteName: "Vinařství MiQueen",
    title: "Mapa prodejen MiQueen | Kde koupit naše vína",
    description:
      "Najděte nejbližší prodejnu vín MiQueen. E-shop, Brno-Chrlice, Mikulov. Osobní odběr, degustace, poradenství.",
    images: [
      {
        url: "https://miqueen.cz/mapa-vin-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mapa prodejen Vinařství MiQueen",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vinarstvimiqueen",
    title: "Kde koupit vína MiQueen | Mapa prodejen",
    description:
      "Interaktivní mapa prodejních míst vín MiQueen po celé ČR.",
    images: ["https://miqueen.cz/mapa-vin-og.jpg"],
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
//
// DŮLEŽITÉ ZMĚNY:
// - Odstraněn duplicitní Winery schema (už je v layout.tsx)
// - Odstraněn duplicitní WebSite schema (už je v layout.tsx)
// - Odstraněno falešné aggregateRating: 4.8/234
// - Pole [] → @graph
// - Ponechán Store (Rovensklípek) — specifický pro tuto stránku
// - Organizace referencovány přes @id
// ========================================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // ─── WebPage ───
    {
      "@type": "WebPage",
      "@id": "https://miqueen.cz/mapa-vin/#webpage",
      url: "https://miqueen.cz/mapa-vin",
      name: "Kde koupit vína MiQueen – Mapa prodejen",
      description:
        "Mapa prodejních míst vín MiQueen. E-shop, Rovensklípek Brno-Chrlice, vinařství Mikulov.",
      isPartOf: { "@id": "https://miqueen.cz/#website" },
      about: { "@id": "https://miqueen.cz/#winery" },
      inLanguage: "cs-CZ",
    },

    // ─── Store (Rovensklípek) ───
    {
      "@type": "Store",
      "@id": "https://miqueen.cz/mapa-vin/#brno",
      name: "Rovensklípek Brno-Chrlice",
      description:
        "Prodejna vín MiQueen v Brně-Chrlicích. Osobní odběr, degustace, poradenství.",
      url: "https://miqueen.cz/mapa-vin",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Chrlické náměstí 1",
        addressLocality: "Brno-Chrlice",
        postalCode: "664 42",
        addressCountry: "CZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.1475,
        longitude: 16.6836,
      },
      telephone: "+420731610344",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "18:00",
      },
    },

    // ─── FAQPage ───
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kde můžu koupit vína MiQueen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vína MiQueen můžete koupit na e-shopu shop.miqueen.cz s doručením po celé ČR, osobně v Rovensklípku Brno-Chrlice, přímo ve vinařství v Mikulově, nebo ve vybraných prodejnách.",
          },
        },
        {
          "@type": "Question",
          name: "Kolik stojí doprava vín MiQueen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Doprava při online objednávce začíná od 69 Kč. Nabízíme doručení kurýrem, Českou poštou i osobní odběr zdarma v našich prodejnách.",
          },
        },
        {
          "@type": "Question",
          name: "Je možné ochutnat vína před koupí?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ano, ve vinařství v Mikulově a v Rovensklípku Brno-Chrlice nabízíme degustace. Doporučujeme předchozí rezervaci na info@miqueen.cz nebo telefonicky.",
          },
        },
        {
          "@type": "Question",
          name: "Můžu si vyzvednout objednávku osobně?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ano, osobní odběr je možný zdarma v Rovensklípku Brno-Chrlice nebo ve vinařství v Mikulově. Při online objednávce zvolte osobní odběr jako způsob doručení.",
          },
        },
      ],
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
          name: "Mapa prodejen",
          item: "https://miqueen.cz/mapa-vin",
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Navbar />
        <MapaVinPage />
        <Footer />
      </main>
    </>
  );
}