// ============================================
// UMÍSTĚNÍ: src/app/poukazy/page.tsx
// ============================================

import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MiQueenVouchersPage from "../components/poukazy";

// ========================================
// METADATA
// ========================================
export const metadata: Metadata = {
  title: "Dárkové poukazy | Vinařství MiQueen – 1 000–5 000 Kč",

  description:
    "Dárkové poukazy MiQueen na nákup vín 1 000–5 000 Kč. Elektronický PDF na e-mail, okamžité doručení. Ideální dárek pro milovníky vína.",

  alternates: {
    canonical: "https://miqueen.cz/poukazy",
    languages: {
      "cs-CZ": "https://miqueen.cz/poukazy",
      en: "https://miqueen.cz/en/gift-vouchers",
      de: "https://miqueen.cz/de/geschenkgutscheine",
    },
  },

  keywords: [
    "dárkový poukaz víno",
    "voucher víno",
    "poukaz na víno",
    "dárkový certifikát víno",
    "elektronický poukaz víno",
    "dárek pro milovníky vína",
    "firemní poukazy víno",
    "miqueen poukaz",
  ],

  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://miqueen.cz/poukazy",
    siteName: "Vinařství MiQueen",
    title: "Dárkové poukazy na víno | MiQueen 1 000–5 000 Kč",
    description:
      "Darujte zážitek z oceňovaných moravských vín. Elektronické poukazy s okamžitým doručením na e-mail.",
    images: [
      {
        url: "https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/96_voucher-na-nakup-vin.jpg",
        width: 1200,
        height: 630,
        alt: "Dárkový poukaz Vinařství MiQueen",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vinarstvimiqueen",
    title: "Dárkové poukazy MiQueen – Perfektní dárek",
    description:
      "Elektronické poukazy 1 000–5 000 Kč na nákup prémiových moravských vín. Okamžité doručení.",
    images: [
      "https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/96_voucher-na-nakup-vin.jpg",
    ],
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
// DŮLEŽITÉ ZMĚNY oproti originálu:
//
// 1. Product schema — přidáno povinné `sku` a `offers.url`
//    (bez nich GSC hlásí chyby "Záznamy obchodníka")
//
// 2. Odstraněno falešné aggregateRating (5.0/89 recenzí)
//    a falešná review od "Martin K." — Google to penalizuje
//
// 3. Změněno z JSON pole [] na @graph objekt
//    (pole funguje, ale @graph je čistší a umožňuje entity linking)
//
// 4. Každý Offer má vlastní url (odkaz na konkrétní produkt v eshopu)
//
// 5. validThrough aktualizovat ručně když se změní platnost
// ========================================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // ─── Product (Dárkový poukaz) ───
    {
      "@type": "Product",
      "@id": "https://miqueen.cz/poukazy/#product",
      name: "Dárkový poukaz na nákup vín MiQueen",
      description:
        "Elektronický dárkový poukaz na nákup vín Vinařství MiQueen. Po zaplacení obdržíte PDF s unikátním kódem na e-mail.",
      image:
        "https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/96_voucher-na-nakup-vin.jpg",
      sku: "MQ-VOUCHER",
      brand: {
        "@type": "Brand",
        name: "MiQueen",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Poukaz 1 000 Kč",
          url: "https://shop.miqueen.cz/darkovy-poukaz-1000",
          price: "1000",
          priceCurrency: "CZK",
          availability: "https://schema.org/InStock",
          validThrough: "2025-06-30",
          seller: { "@id": "https://miqueen.cz/#organization" },
        },
        {
          "@type": "Offer",
          name: "Poukaz 2 000 Kč",
          url: "https://shop.miqueen.cz/darkovy-poukaz-2000",
          price: "2000",
          priceCurrency: "CZK",
          availability: "https://schema.org/InStock",
          validThrough: "2025-06-30",
          seller: { "@id": "https://miqueen.cz/#organization" },
        },
        {
          "@type": "Offer",
          name: "Poukaz 5 000 Kč",
          url: "https://shop.miqueen.cz/darkovy-poukaz-5000",
          price: "5000",
          priceCurrency: "CZK",
          availability: "https://schema.org/InStock",
          validThrough: "2025-06-30",
          seller: { "@id": "https://miqueen.cz/#organization" },
        },
      ],
    },

    // ─── FAQPage ───
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Jak funguje platba za dárkový poukaz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Elektronické poukazy lze zaplatit pouze platební kartou nebo zrychlenou online platbou. Po zaplacení obdržíte poukaz na e-mail.",
          },
        },
        {
          "@type": "Question",
          name: "Jak rychle obdržím poukaz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Po zaplacení vám na e-mail dorazí soubor ve formátu PDF s unikátním kódem ihned, obvykle do několika minut.",
          },
        },
        {
          "@type": "Question",
          name: "Kde mohu poukaz uplatnit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dárkový poukaz lze uplatnit na e-shopu shop.miqueen.cz nebo osobně v Rovensklípek Brno-Chrlice po předchozí domluvě.",
          },
        },
        {
          "@type": "Question",
          name: "Jak dlouho je poukaz platný?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aktuální poukazy jsou platné do 30. června 2025.",
          },
        },
        {
          "@type": "Question",
          name: "Lze poukaz vrátit nebo vyměnit za peníze?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Elektronický dárkový poukaz nelze vrátit ani vyměnit za peníze. Hodnota poukazu musí být vyčerpána najednou.",
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
          name: "Dárkové poukazy",
          item: "https://miqueen.cz/poukazy",
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
        <MiQueenVouchersPage />
        <Footer />
      </main>
    </>
  );
}