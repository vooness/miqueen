// ============================================
// UMÍSTĚNÍ: src/app/adoptuj-vinohrad/page.tsx
//
// POZNÁMKA: Originál neměl žádné JSON-LD structured data.
// ============================================

import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AdoptujVinohradPage from "../components/adoptuj-vinohrad";

// ========================================
// METADATA
// ========================================
export const metadata: Metadata = {
  title: "Adoptuj Vinohrad | Zážitkový program – Vinařství MiQueen",

  description:
    "Adoptujte vinohrad u MiQueen a získejte 12–36 lahví s vlastní etiketou ročně. Sledujte život vinice, účastněte se exkluzivních degustací a sklizně.",

  alternates: {
    canonical: "https://miqueen.cz/adoptuj-vinohrad",
    languages: {
      "cs-CZ": "https://miqueen.cz/adoptuj-vinohrad",
      en: "https://miqueen.cz/en/adopt-vineyard",
      de: "https://miqueen.cz/de/weinberg-adoptieren",
    },
  },

  keywords: [
    "adoptuj vinohrad",
    "adopce vinohradu",
    "vlastní vinohrad",
    "víno s vlastní etiketou",
    "vinařský zážitek",
    "dárkový zážitek víno",
    "patronát nad vinicí",
    "originální dárek víno",
  ],

  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://miqueen.cz/adoptuj-vinohrad",
    siteName: "Vinařství MiQueen",
    title: "Adoptuj Vinohrad – Jedinečný vinařský zážitek | MiQueen",
    description:
      "Staňte se patronem vinice a získejte 12–36 lahví ročně s vlastní etiketou. Sledujte život své vinice po celý rok.",
    images: [
      {
        url: "https://miqueen.cz/adoptuj-vinohrad-og.jpg",
        width: 1200,
        height: 630,
        alt: "Adoptuj Vinohrad – Program Vinařství MiQueen",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vinarstvimiqueen",
    title: "Adoptuj Vinohrad – Staňte se patronem vinice",
    description:
      "Jedinečný program adopce vinohradu. Vlastní víno s personalizovanou etiketou.",
    images: ["https://miqueen.cz/adoptuj-vinohrad-og.jpg"],
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
    // ─── WebPage ───
    {
      "@type": "WebPage",
      "@id": "https://miqueen.cz/adoptuj-vinohrad/#webpage",
      url: "https://miqueen.cz/adoptuj-vinohrad",
      name: "Adoptuj Vinohrad – Vinařství MiQueen",
      description:
        "Zážitkový program adopce vinohradu. Získejte 12–36 lahví vlastního vína s personalizovanou etiketou ročně.",
      isPartOf: { "@id": "https://miqueen.cz/#website" },
      about: { "@id": "https://miqueen.cz/#winery" },
      inLanguage: "cs-CZ",
    },

    // ─── Service (Adopce vinohradu) ───
    {
      "@type": "Service",
      name: "Adoptuj Vinohrad",
      description:
        "Program adopce vinohradu – staňte se patronem vinice na Pálavě. Získejte 12–36 lahví vlastního vína s personalizovanou etiketou, účastněte se exkluzivních degustací a sklizně.",
      provider: { "@id": "https://miqueen.cz/#organization" },
      serviceType: "Vineyard Adoption Program",
      areaServed: {
        "@type": "Country",
        name: "Czech Republic",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CZK",
        availability: "https://schema.org/InStock",
        url: "https://miqueen.cz/adoptuj-vinohrad",
      },
    },

    // ─── FAQPage ───
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Co je program Adoptuj Vinohrad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Program Adoptuj Vinohrad vám umožní stát se patronem vinice na Pálavě. Získáte 12–36 lahví vína ročně s vlastní etiketou, certifikát adopce a přístup k exkluzivním degustacím.",
          },
        },
        {
          "@type": "Question",
          name: "Kolik lahví vína ročně získám?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Podle zvoleného balíčku získáte 12, 24 nebo 36 lahví vína ročně s personalizovanou etiketou.",
          },
        },
        {
          "@type": "Question",
          name: "Je adopce vinohradu vhodná jako dárek?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ano, adopce vinohradu je originální dárek pro milovníky vína, k narozeninám, výročí nebo jako firemní dárek. Obdržíte certifikát adopce.",
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
          name: "Adoptuj Vinohrad",
          item: "https://miqueen.cz/adoptuj-vinohrad",
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
        <AdoptujVinohradPage />
        <Footer />
      </main>
    </>
  );
}