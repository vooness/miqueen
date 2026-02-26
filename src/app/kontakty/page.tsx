// ============================================
// UMÍSTĚNÍ: src/app/kontakt/page.tsx
// ============================================

import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MiQueenContactPage from "../components/kontakty";

// ========================================
// METADATA
// ========================================
export const metadata: Metadata = {
  title: "Kontakt | Vinařství MiQueen – Mikulov, Brno, Čejkovice",

  description:
    "Kontaktujte Vinařství MiQueen. Mikulov – sídlo vinařství, Brno-Chrlice – degustační vinárna, Čejkovice – sklep. ☎ +420 731 610 344 ✉ info@miqueen.cz",

  alternates: {
    canonical: "https://miqueen.cz/kontakt",
    languages: {
      "cs-CZ": "https://miqueen.cz/kontakt",
      en: "https://miqueen.cz/en/contact",
      de: "https://miqueen.cz/de/kontakt",
    },
  },

  keywords: [
    "kontakt vinařství miqueen",
    "vinařství mikulov kontakt",
    "miqueen brno",
    "rovensklípek chrlice",
    "degustace brno kontakt",
    "vinný sklep čejkovice",
    "rezervace degustace",
  ],

  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://miqueen.cz/kontakt",
    siteName: "Vinařství MiQueen",
    title: "Kontakt – Vinařství MiQueen | Mikulov, Brno, Čejkovice",
    description:
      "Kontaktní informace Vinařství MiQueen. Sídlo v Mikulově, degustační vinárna v Brně-Chrlicích, vinný sklep v Čejkovicích.",
    images: [
      {
        url: "https://miqueen.cz/kontakt-og.jpg",
        width: 1200,
        height: 630,
        alt: "Vinařství MiQueen – Kontakty",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary",
    site: "@vinarstvimiqueen",
    title: "Kontakt – Vinařství MiQueen",
    description:
      "Vinařství MiQueen – Mikulov, Brno, Čejkovice. Tel: +420 731 610 344, info@miqueen.cz",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
    },
  },
};

// ========================================
// JSON-LD
//
// DŮLEŽITÉ ZMĚNY:
// - Organization schema zjednodušena (hlavní definice je v layout.tsx)
//   → zde jen ContactPoint a lokace (specifické pro kontaktní stránku)
// - Odstraněny `business:*`, `social:*`, Dublin Core z other
// - Pole [] → @graph
// - Placeholder "Mikulovská 123" ponechán — DOPLŇ reálnou adresu
// ========================================
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // ─── ContactPage ───
    {
      "@type": "ContactPage",
      "@id": "https://miqueen.cz/kontakt/#webpage",
      url: "https://miqueen.cz/kontakt",
      name: "Kontakt – Vinařství MiQueen",
      description:
        "Kontaktní informace a provozovny Vinařství MiQueen.",
      isPartOf: { "@id": "https://miqueen.cz/#website" },
      about: { "@id": "https://miqueen.cz/#organization" },
      inLanguage: "cs-CZ",
    },

    // ─── Organization s kontakty a lokacemi ───
    {
      "@type": "Organization",
      "@id": "https://miqueen.cz/#organization",
      name: "Vinařství MiQueen",
      legalName: "Vinařství MiQueen s.r.o.",
      url: "https://miqueen.cz",
      logo: "https://miqueen.cz/logo.png",
      telephone: "+420731610344",
      email: "info@miqueen.cz",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+420731610344",
          contactType: "customer service",
          areaServed: "CZ",
          availableLanguage: ["Czech", "English", "German"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mikulov",
        postalCode: "692 01",
        addressRegion: "Jihomoravský kraj",
        addressCountry: "CZ",
      },
      location: [
        {
          "@type": "Place",
          name: "Vinařství MiQueen – Mikulov",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mikulov",
            postalCode: "692 01",
            addressCountry: "CZ",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 48.8059,
            longitude: 16.6378,
          },
        },
        {
          "@type": "Place",
          name: "Degustační vinárna Brno-Chrlice",
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
        },
        {
          "@type": "Place",
          name: "Vinný sklep Čejkovice",
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
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "16:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/vinarstvi.miqueen",
        "https://www.instagram.com/vinarstvi.miqueen",
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
          name: "Kontakt",
          item: "https://miqueen.cz/kontakt",
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
        <MiQueenContactPage />
        <Footer />
      </main>
    </>
  );
}