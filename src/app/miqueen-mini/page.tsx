// ============================================
// UMÍSTĚNÍ: src/app/miqueen-mini/page.tsx
// ============================================

import type { Metadata } from "next";
import MiQueenMiniPage from "../components/mini-queen";

// ========================================
// METADATA
// ========================================
export const metadata: Metadata = {
  title: "MiQueen Mini | Mini vína 187–200ml – Vinařství MiQueen",

  description:
    "MiQueen Mini – prémiová vína v kabelkovém formátu 187–200ml. Ideální porce pro jednu osobu, dárkové sety, MIMOSA koktejl, Frizzante mini. Od 69 Kč.",

  alternates: {
    canonical: "https://miqueen.cz/miqueen-mini",
  },

  keywords: [
    "miqueen mini",
    "mini vína",
    "malé lahve vína",
    "vína 187ml",
    "piccolo vína",
    "kabelkové víno",
    "mini frizzante",
    "mimosa mini",
    "degustační set mini vín",
    "moravská vína miniatura",
  ],

  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://miqueen.cz/miqueen-mini",
    siteName: "Vinařství MiQueen",
    title: "MiQueen Mini – Prémiová vína v kabelkovém formátu | 187–200ml",
    description:
      "Kvalitní moravská vína v praktickém balení 187–200ml. Ideální na cesty, piknik nebo jako originální dárek. Od 69 Kč.",
    images: [
      {
        url: "https://miqueen.cz/miqueen-mini-og.jpg",
        width: 1200,
        height: 630,
        alt: "MiQueen Mini – Mini vína 187–200ml",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vinarstvimiqueen",
    title: "MiQueen Mini – Kvalitní víno v kabelkovém formátu",
    description:
      "Prémiová moravská vína v lahvičkách 187–200ml. Ideální porce, žádný zbytek. Od 69 Kč.",
    images: ["https://miqueen.cz/miqueen-mini-og.jpg"],
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
// - ProductCollection nahrazena CollectionPage + OfferCatalog
//   (ProductCollection s neúplnými produkty = GSC chyby)
// - Jeden @graph místo JSON pole []
// - Falešné rating_value/rating_count odstraněny z other
// ========================================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // ─── CollectionPage ───
    {
      "@type": "CollectionPage",
      "@id": "https://miqueen.cz/miqueen-mini/#webpage",
      url: "https://miqueen.cz/miqueen-mini",
      name: "MiQueen Mini – Kolekce mini vín",
      description:
        "Prémiová moravská vína v praktickém kabelkovém formátu 187–200ml. Ideální porce pro jednu osobu.",
      isPartOf: { "@id": "https://miqueen.cz/#website" },
      about: { "@id": "https://miqueen.cz/#winery" },
      inLanguage: "cs-CZ",
      mainEntity: {
        "@type": "OfferCatalog",
        name: "MiQueen Mini vína",
        description:
          "Mini vína 187–200ml, degustační sety a MIMOSA vinný koktejl",
        numberOfItems: 10,
      },
    },

    // ─── FAQPage ───
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Jaká je velikost MiQueen Mini lahviček?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MiQueen Mini vína jsou dostupná ve dvou velikostech: 187ml (klasická mini láhev) a 200ml (speciální produkty jako MIMOSA). To odpovídá přibližně jedné až jedné a půl skleničce vína.",
          },
        },
        {
          "@type": "Question",
          name: "Kolik stojí MiQueen Mini vína?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ceny MiQueen Mini vín začínají na 69 Kč za klasická vína (187ml), speciální produkty jako MIMOSA stojí 89 Kč (200ml) a degustační sety 4 lahviček od 309 Kč.",
          },
        },
        {
          "@type": "Question",
          name: "Lze koupit MiQueen Mini jednotlivě nebo jen po kartonech?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MiQueen Mini vína lze koupit jak jednotlivě, tak v kartonech po 24 kusech pro lepší cenu.",
          },
        },
        {
          "@type": "Question",
          name: "Na jaké příležitosti jsou MiQueen Mini vína vhodná?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MiQueen Mini jsou ideální na pikniky, výlety, festivaly, párty, jako welcome drink na svatbách, firemní dárky, nebo když chcete ochutnat víno bez nutnosti otevírat celou láhev.",
          },
        },
        {
          "@type": "Question",
          name: "Co je MIMOSA mini?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MIMOSA mini je inovativní vinný koktejl kombinující kvalitní Sauvignon Frizzante se 100% přírodní pomerančovou šťávou. Obsahuje 8% alkoholu a je dodáván v 200ml lahvičkách.",
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
          name: "Vína",
          item: "https://miqueen.cz/vina",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "MiQueen Mini",
          item: "https://miqueen.cz/miqueen-mini",
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
      <MiQueenMiniPage />
    </>
  );
}