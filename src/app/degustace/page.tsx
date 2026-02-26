// ============================================
// UMÍSTĚNÍ: src/app/degustace/page.tsx
// ============================================

import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import DegustaceSection from "../components/degustace-informace";

// ========================================
// METADATA
// ========================================
export const metadata: Metadata = {
  title: "Degustace vín | Vinařství MiQueen – Brno & Čejkovice",

  description:
    "Zážitkové degustace vín MiQueen v Brně-Chrlicích a Čejkovicích. Řízené degustace, firemní akce, degustace potmě. Ubytování ve sklepě pro 15 osob.",

  alternates: {
    canonical: "https://miqueen.cz/degustace",
    languages: {
      "cs-CZ": "https://miqueen.cz/degustace",
      en: "https://miqueen.cz/en/wine-tasting",
      de: "https://miqueen.cz/de/weinprobe",
    },
  },

  keywords: [
    "degustace vín brno",
    "degustace čejkovice",
    "řízená degustace vín",
    "degustace potmě",
    "firemní degustace",
    "teambuilding víno",
    "ubytování vinařství čejkovice",
    "vinárna brno chrlice",
  ],

  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://miqueen.cz/degustace",
    siteName: "Vinařství MiQueen",
    title: "Degustace vín MiQueen | Brno & Čejkovice",
    description:
      "Prožijte nezapomenutelnou degustaci vín ve sklepní vinárně v Brně nebo moravském sklípku v Čejkovicích.",
    images: [
      {
        url: "https://miqueen.cz/degustace-og.jpg",
        width: 1200,
        height: 630,
        alt: "Degustace vín MiQueen – Brno a Čejkovice",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vinarstvimiqueen",
    title: "Degustace vín MiQueen – Zážitkové ochutnávky",
    description:
      "Degustace vín ve sklepní vinárně Brno-Chrlice nebo moravském sklípku Čejkovice.",
    images: ["https://miqueen.cz/degustace-og.jpg"],
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
// - Odstraněno falešné aggregateRating (4.8/89 Brno, 4.9/67 Čejkovice)
// - BarOrPub → FoodEstablishment (přesnější pro vinárnu s degustacemi)
// - Event "Degustace potmě" — potřebuje startDate/endDate
//   → bez data je to spíš nabídka, tak převedeno na Service
// - Pole [] → @graph
// - Odstraněny business:*, service:*, price:*, rating_* z other
// ========================================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // ─── WebPage ───
    {
      "@type": "WebPage",
      "@id": "https://miqueen.cz/degustace/#webpage",
      url: "https://miqueen.cz/degustace",
      name: "Degustace vín – Vinařství MiQueen",
      description:
        "Zážitkové degustace vín v Brně-Chrlicích a Čejkovicích. Řízené degustace, firemní akce, degustace potmě.",
      isPartOf: { "@id": "https://miqueen.cz/#website" },
      about: { "@id": "https://miqueen.cz/#winery" },
      inLanguage: "cs-CZ",
    },

    // ─── Lokace Brno ───
    {
      "@type": "FoodEstablishment",
      "@id": "https://miqueen.cz/degustace/#brno",
      name: "Sklepní vinárna MiQueen Brno-Chrlice",
      description:
        "Stylová sklepní vinárna v historickém sklepě v Brně-Chrlicích. Degustace vín, firemní akce, oslavy. Kapacita až 50 osob.",
      url: "https://shop.miqueen.cz/degustace-brno/",
      telephone: "+420731610344",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Chrlické náměstí 1/4",
        addressLocality: "Brno-Chrlice",
        postalCode: "643 00",
        addressCountry: "CZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.1522,
        longitude: 16.5847,
      },
      priceRange: "$$",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Kapacita až 50 osob" },
        { "@type": "LocationFeatureSpecification", name: "Projektor a ozvučení" },
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi" },
        { "@type": "LocationFeatureSpecification", name: "Bar s obsluhou" },
      ],
    },

    // ─── Lokace Čejkovice ───
    {
      "@type": "LodgingBusiness",
      "@id": "https://miqueen.cz/degustace/#cejkovice",
      name: "Vinný sklep MiQueen Čejkovice",
      description:
        "Tradiční moravský sklípek v Čejkovicích. Degustace s ubytováním pro až 15 osob, zahrada s grilem.",
      url: "https://shop.miqueen.cz/degustace-cejkovice/",
      telephone: "+420731610344",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Za Valama 938",
        addressLocality: "Čejkovice",
        postalCode: "696 15",
        addressCountry: "CZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.9047,
        longitude: 16.9778,
      },
      priceRange: "$$",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Ubytování 15 lůžek" },
        { "@type": "LocationFeatureSpecification", name: "Zahrada s grilem" },
        { "@type": "LocationFeatureSpecification", name: "Kapacita degustace 20 osob" },
      ],
    },

    // ─── Service (Degustace potmě) ───
    // Poznámka: Pokud máte konkrétní datum akce, změňte na Event
    // s povinným startDate a endDate
    {
      "@type": "Service",
      name: "Degustace potmě",
      description:
        "Jedinečná degustace vín ve tmě. Zapojte smysly jinak a objevte nové dimenze chuti.",
      provider: { "@id": "https://miqueen.cz/#organization" },
      areaServed: {
        "@type": "Place",
        name: "Brno-Chrlice",
      },
      offers: {
        "@type": "Offer",
        price: "890",
        priceCurrency: "CZK",
        availability: "https://schema.org/InStock",
        url: "https://shop.miqueen.cz/degustace-potme-brno/",
      },
    },

    // ─── FAQPage ───
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kolik osob se vejde na degustaci?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "V Brně-Chrlicích pojmeme až 50 osob, v Čejkovicích až 20 osob na degustaci. V Čejkovicích navíc nabízíme ubytování pro 15 osob.",
          },
        },
        {
          "@type": "Question",
          name: "Je nutná rezervace předem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ano, degustace je nutné rezervovat předem na +420 731 610 344 nebo info@miqueen.cz.",
          },
        },
        {
          "@type": "Question",
          name: "Co obsahuje degustace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Řízená degustace obsahuje ochutnávku 8–10 vzorků vín s odborným výkladem, možnost dokoupení občerstvení a lahví vína za zvýhodněné ceny.",
          },
        },
        {
          "@type": "Question",
          name: "Co je degustace potmě?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Degustace potmě je jedinečný zážitek, kdy ochutnáváte vína v úplné tmě. Bez zrakového vjemu vnímáte víno intenzivněji.",
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
          name: "Degustace",
          item: "https://miqueen.cz/degustace",
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
        <DegustaceSection />
        <Footer />
      </main>
    </>
  );
}