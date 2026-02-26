import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond, Marcellus } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SimpleCookieBanner from "./components/cookies";
import AgeVerification from "./components/AgeVerification";

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

// ========================================
// VIEWPORT — separátní export (Next.js 14+)
// ========================================
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#722f37",
};

// ========================================
// METADATA — vyčištěná verze
// ========================================
export const metadata: Metadata = {
  title: {
    template: "%s | Vinařství Miqueen",
    default:
      "Vinařství Miqueen – Rodinné vinařství Mikulov | Prémiová moravská vína",
  },

  description:
    "Rodinné vinařství Miqueen z Mikulova. Prémiová moravská vína – Ryzlink rýnský, Veltlínské zelené, Pálava. Degustace, exkurze a online prodej vín.",

  applicationName: "Vinařství Miqueen",
  authors: [{ name: "Vinařství Miqueen", url: "https://miqueen.cz" }],
  creator: "Vinařství Miqueen",
  publisher: "Vinařství Miqueen",

  alternates: {
    canonical: "https://miqueen.cz",
    languages: {
      "cs-CZ": "https://miqueen.cz",
      en: "https://miqueen.cz/en",
      de: "https://miqueen.cz/de",
    },
  },

  keywords: [
    "vinařství miqueen",
    "miqueen",
    "moravská vína",
    "rodinné vinařství mikulov",
    "víno online",
    "degustace vín mikulov",
    "ryzlink rýnský",
    "veltlínské zelené",
    "pálava víno",
    "e-shop víno",
    "jižní morava víno",
    "prémiové moravské víno",
    "dárkové sady vín",
    "adopce vinice",
  ],

  icons: {
    icon: "/wine.png",
    shortcut: "/wine.png",
    apple: "/wine.png",
  },

  openGraph: {
    type: "website",
    locale: "cs_CZ",
    alternateLocale: ["en_US", "de_DE", "sk_SK"],
    url: "https://miqueen.cz",
    siteName: "Vinařství Miqueen",
    title:
      "Vinařství Miqueen – Rodinné vinařství z Mikulova | Prémiová moravská vína",
    description:
      "Ochutnejte výjimečná moravská vína z rodinného vinařství Miqueen. Ryzlink rýnský, Veltlínské zelené, Pálava. Degustace a online prodej.",
    images: [
      {
        url: "https://miqueen.cz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vinařství Miqueen – Moravská vína z Mikulova",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vinarstvimiqueen",
    creator: "@miqueen_wines",
    title: "Vinařství Miqueen – Prémiová moravská vína",
    description:
      "Rodinné vinařství z Mikulova. Ochutnejte naše vína nebo nás navštivte na degustaci.",
    images: ["https://miqueen.cz/og-image.jpg"],
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

  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: false,
    url: false,
  },

  verification: {
    google: "YOUR_GOOGLE_VERIFICATION",
  },

  other: {
    "geo.region": "CZ-JM",
    "geo.placename": "Mikulov",
    "geo.position": "48.8056;16.6378",
    ICBM: "48.8056, 16.6378",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Miqueen Wines",
    "seznam-wmt": "YOUR_SEZNAM_VERIFICATION_CODE",
    "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${cormorant.variable} ${marcellus.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MJXFWMRS');`,
          }}
        />

        <meta name="msapplication-TileColor" content="#722f37" />

        <link rel="alternate" hrefLang="cs" href="https://miqueen.cz" />
        <link rel="alternate" hrefLang="en" href="https://miqueen.cz/en" />
        <link rel="alternate" hrefLang="de" href="https://miqueen.cz/de" />
        <link rel="alternate" hrefLang="x-default" href="https://miqueen.cz" />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />

        {/* ============================================
            JSON-LD STRUCTURED DATA — OPRAVENÁ VERZE
            ============================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                // ─── 1. Organization ───
                {
                  "@type": "Organization",
                  "@id": "https://miqueen.cz/#organization",
                  name: "Vinařství Miqueen",
                  alternateName: "Miqueen Wines",
                  url: "https://miqueen.cz",
                  logo: {
                    "@type": "ImageObject",
                    "@id": "https://miqueen.cz/#logo",
                    url: "https://miqueen.cz/logo.png",
                    contentUrl: "https://miqueen.cz/logo.png",
                    caption: "Vinařství Miqueen logo",
                  },
                  sameAs: [
                    "https://www.facebook.com/vinarstvimiqueen",
                    "https://www.instagram.com/vinarstvimiqueen",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+420777123456",
                    email: "info@miqueen.cz",
                    contactType: "customer service",
                    availableLanguage: ["Czech", "English", "German"],
                  },
                },

                // ─── 2. Winery (LocalBusiness) ───
                {
                  "@type": "Winery",
                  "@id": "https://miqueen.cz/#winery",
                  name: "Vinařství Miqueen",
                  description:
                    "Rodinné vinařství z Mikulova produkující prémiová moravská vína. Nabízíme degustace, prohlídky vinařství a online prodej vín.",
                  url: "https://miqueen.cz",
                  telephone: "+420777123456",
                  email: "info@miqueen.cz",
                  priceRange: "$$",
                  image: "https://miqueen.cz/og-image.jpg",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Hlavní 123",
                    addressLocality: "Mikulov",
                    addressRegion: "Jihomoravský kraj",
                    postalCode: "692 01",
                    addressCountry: "CZ",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 48.8056,
                    longitude: 16.6378,
                  },
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
                  // ✅ REÁLNÉ údaje z Google: 5.0 / 15 recenzí
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5.0",
                    bestRating: "5",
                    worstRating: "1",
                    reviewCount: "15",
                    ratingCount: "15",
                  },
                  // ✅ Vzorkové reálné recenze z Google
                  review: [
                    {
                      "@type": "Review",
                      author: { "@type": "Person", name: "Michael Motal" },
                      datePublished: "2026-01-16",
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: "5",
                        bestRating: "5",
                      },
                      reviewBody:
                        "Michalova vína jsem objevil už v roce 2009 a jsem od té doby absolutně spokojený. Vynikající vína, skvělý přístup. Na ochutnávku s Michalem se vždy těším.",
                    },
                    {
                      "@type": "Review",
                      author: {
                        "@type": "Person",
                        name: "Petra Zádrapová",
                      },
                      datePublished: "2026-01-12",
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: "5",
                        bestRating: "5",
                      },
                      reviewBody:
                        "Ve Vinařství MiQueen jsme měli firemní degustační večírek ve tmě a bylo to skvělé. S panem Michalem a Jirkou to byl vážně úžasný zážitek.",
                    },
                    {
                      "@type": "Review",
                      author: { "@type": "Person", name: "Milan Brodský" },
                      datePublished: "2025-12-09",
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: "5",
                        bestRating: "5",
                      },
                      reviewBody:
                        "Stal jsem se hrdým adoptivním rodičem a příznivcem produktů MiQueen. Není to jen o láhvi skvělého vína je to o filozofii, kterou toto vinařství zvolilo.",
                    },
                    {
                      "@type": "Review",
                      author: {
                        "@type": "Person",
                        name: "Hana Hrdlickova",
                      },
                      datePublished: "2026-01-12",
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: "5",
                        bestRating: "5",
                      },
                      reviewBody:
                        "Úžasná degustace ve tmě, výborné víno a sympatický majitel.",
                    },
                    {
                      "@type": "Review",
                      author: { "@type": "Person", name: "Craig Smith" },
                      datePublished: "2026-01-19",
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: "5",
                        bestRating: "5",
                      },
                      reviewBody: "Dělají skvělé víno.",
                    },
                  ],
                },

                // ─── 3. WebSite ───
                {
                  "@type": "WebSite",
                  "@id": "https://miqueen.cz/#website",
                  url: "https://miqueen.cz",
                  name: "Vinařství Miqueen",
                  description:
                    "Online prodej moravských vín z rodinného vinařství Miqueen v Mikulově",
                  publisher: {
                    "@id": "https://miqueen.cz/#organization",
                  },
                  inLanguage: "cs-CZ",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://miqueen.cz/hledat?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },

                // ─── 4. WebPage (Homepage) ───
                {
                  "@type": "WebPage",
                  "@id": "https://miqueen.cz/#webpage",
                  url: "https://miqueen.cz",
                  name: "Vinařství Miqueen – Rodinné vinařství Mikulov",
                  description:
                    "Rodinné vinařství Miqueen z Mikulova. Prémiová moravská vína, degustace a online prodej.",
                  isPartOf: { "@id": "https://miqueen.cz/#website" },
                  about: { "@id": "https://miqueen.cz/#winery" },
                  inLanguage: "cs-CZ",
                },

                // ─── 5. BreadcrumbList ───
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Domů",
                      item: "https://miqueen.cz",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.className} ${cormorant.variable} ${marcellus.variable} bg-[#faf8f5]`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MJXFWMRS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <AgeVerification />
        {children}
        <SimpleCookieBanner />
      </body>
    </html>
  );
}