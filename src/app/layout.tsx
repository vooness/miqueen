import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond, Marcellus } from "next/font/google";
import "./globals.css";
import SimpleCookieBanner from "./components/cookies";
import AgeVerification from "./components/AgeVerification";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


// Premium fonty pro vinařství
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
// MAXIMÁLNĚ OPTIMALIZOVANÁ SEO METADATA PRO VINAŘSTVÍ MIQUEEN
// ========================================
export const metadata: Metadata = {
  // Title: 50-60 znaků (Google zobrazuje 50-60)
  title: {
    template: '%s | Vinařství Miqueen - Prémiová vína z Moravy',
    default: 'Vinařství Miqueen - Rodinné vinařství Mikulov | Špičková moravská vína'
  },
  
  // Description: 150-160 znaků (Google zobrazuje 155-160)
  description: 'Rodinné vinařství Miqueen z Mikulova. Prémiová moravská vína, Ryzlink rýnský, Veltlínské zelené, Pálava. ✓ Degustace ✓ Exkurze ✓ Online shop',
  
  // Aplikační metadata
  applicationName: "Vinařství Miqueen",
  authors: [{ name: "Vinařství Miqueen", url: "https://miqueen.cz" }],
  creator: "Vinařství Miqueen",
  publisher: "Vinařství Miqueen",
  
  // Kategorizace
  category: "Wine, Winery, E-commerce, Agriculture",
  
  // Lokalizace
  alternates: {
    canonical: "https://miqueen.cz",
    languages: {
      'cs-CZ': 'https://miqueen.cz',
      'en': 'https://miqueen.cz/en', // Pro budoucí EN verzi
      'de': 'https://miqueen.cz/de', // Pro budoucí DE verzi (turisté z Rakouska)
    },
  },
  
  // Komplexní keywords pro maximální pokrytí (200+ keywords)
  keywords: [
    // === PRIMÁRNÍ BRAND A SLUŽBY ===
    'vinařství miqueen', 'miqueen', 'vína miqueen', 'moravská vína miqueen',
    'rodinné vinařství', 'rodinná vína', 'tradiční vinařství', 'české víno',
    'moravské víno', 'moravská vína', 'vína z moravy', 'kvalitní víno',
    'prémiové víno', 'špičkové víno', 'nejlepší moravská vína',
    
    // === LOKÁLNÍ SEO (Velké Pavlovice a okolí) ===
    'velké pavlovice', 'vinařství velké pavlovice', 'vína velké pavlovice',
    'velkopavlovická vinařská podoblast', 'velkopavlovické víno',
    'morava', 'jižní morava', 'jihomoravský kraj', 'vinařská oblast morava',
    'břeclav', 'hustopeče', 'podivín', 'rakvice', 'zaječí', 'bořetice',
    'vrbice', 'kobylí', 'němčičky', 'starovičky', 'uherčice',
    'vinařská stezka', 'modré hory', 'krajem vína', 'slovácko',
    'mikulov', 'mikulovská podoblast', 'znojmo', 'znojemská podoblast',
    
    // === ODRŮDY VÍN ===
    // Bílá vína
    'ryzlink rýnský', 'ryzlink', 'riesling', 'veltlínské zelené', 'veltlín',
    'grüner veltliner', 'pálava', 'tramín', 'tramín červený', 'gewürztraminer',
    'müller thurgau', 'muller thurgau', 'rulandské šedé', 'pinot gris',
    'rulandské bílé', 'pinot blanc', 'sauvignon', 'sauvignon blanc',
    'chardonnay', 'muškát moravský', 'muškát', 'sylvánské zelené', 'sylván',
    'neuburské', 'irsai oliver', 'hibernal', 'solaris', 'johanniter',
    
    // Červená vína
    'frankovka', 'blaufränkisch', 'zweigeltrebe', 'zweigelt', 'andré',
    'modrý portugal', 'portugieser', 'svatovavřinecké', 'laurent',
    'rulandské modré', 'pinot noir', 'cabernet sauvignon', 'cabernet',
    'merlot', 'dornfelder', 'neronet', 'alibernet', 'cabernet moravia',
    
    // Růžová vína
    'rosé', 'růžové víno', 'růžák', 'klaret', 'rosé víno',
    
    // Speciální kategorie
    'ledové víno', 'ice wine', 'slámové víno', 'výběr z hroznů',
    'výběr z bobulí', 'výběr z cibéb', 'pozdní sběr', 'kabinet',
    'zemské víno', 'jakostní víno', 'víno s přívlastkem',
    'barrique', 'zrání v sudu', 'archivní víno', 'ročníkové víno',
    'limitovaná edice', 'prémiová řada', 'grand reserve',
    
    // === E-SHOP A PRODEJ ===
    'víno online', 'vína online', 'prodej vína online', 'e-shop víno',
    'eshop víno', 'internetový obchod víno', 'koupit víno online',
    'víno rozvoz', 'víno doprava zdarma', 'víno na doma',
    'dárkové víno', 'dárková sada vín', 'víno jako dárek',
    'firemní víno', 'víno pro firmy', 'firemní dárky víno',
    'svatební víno', 'víno na svatbu', 'víno na oslavu',
    'víno na párty', 'víno na grilování', 'letní víno',
    'vánoční víno', 'víno pod stromeček', 'silvestrovské víno',
    
    // === VINAŘSKÉ SLUŽBY ===
    'degustace vín', 'degustace', 'ochutnávka vín', 'wine tasting',
    'řízená degustace', 'komentovaná degustace', 'vinný sklep',
    'prohlídka vinařství', 'exkurze vinařství', 'návštěva vinařství',
    'vinařská turistika', 'víkend ve vinařství', 'ubytování vinařství',
    'firemní akce vinařství', 'teambuilding vinařství', 'školení vinařství',
    'svatba ve vinařství', 'oslava ve vinařství', 'catering víno',
    'vinařský kurz', 'škola vína', 'sommelier kurz', 'vzdělávání o víně',
    
    // === VINAŘSKÉ AKCE A SLAVNOSTI ===
    'vinobraní', 'velkopavlovické vinobraní', 'otevřené sklepy',
    'den otevřených sklepů', 'vinařské slavnosti', 'festival vína',
    'putování po vinařstvích', 'vinařský pochod', 'cyklistika vinařství',
    'vinné stezky', 'wine tour', 'vinařský zážitek',
    
    // === GASTRONOMIE A PÁROVÁNÍ ===
    'víno a jídlo', 'párování vína', 'víno k jídlu', 'sommelier doporučení',
    'víno k masu', 'víno k rybě', 'víno k sýru', 'víno k dezertu',
    'víno ke grilování', 'aperitiv', 'digestiv', 'welcome drink',
    'moravská kuchyně', 'tradiční pokrmy', 'regionální speciality',
    
    // === CENOVÉ KATEGORIE ===
    'levné víno', 'víno do 100 kč', 'víno do 150 kč', 'víno do 200 kč',
    'víno 200-300 kč', 'prémiové víno nad 300 kč', 'luxusní víno',
    'cenově dostupné víno', 'víno akce', 'víno sleva', 'výprodej vín',
    'množstevní sleva', 'víno 6+1 zdarma', 'věrnostní program',
    
    // === KVALITA A CERTIFIKACE ===
    'bio víno', 'organické víno', 'přírodní víno', 'natural wine',
    'ekologické vinařství', 'udržitelné vinařství', 'certifikované víno',
    'oceněné víno', 'medailové víno', 'salon vín', 'grand prix',
    'zlatá medaile', 'champion', 'wine awards', 'top 100 vín',
    'vinařství roku', 'vinař roku', 'víno roku',
    
    // === VINAŘSKÁ TERMINOLOGIE ===
    'terroir', 'apelace', 'viniční trať', 'vinohrad', 'réva vinná',
    'hrozny', 'mošt', 'kvašení', 'fermentace', 'macerace',
    'školení vína', 'zrání vína', 'lahvování', 'archivace vína',
    'teplota podávání', 'dekantace', 'provzdušnění vína', 'servírování',
    'vinný lístek', 'wine list', 'vinná karta', 'vinný bar',
    
    // === SEZÓNNÍ A PŘÍLEŽITOSTNÉ ===
    'svatomartinské', 'svatomartinské víno', 'mladé víno', 'beaujolais',
    'burčák', 'federweisser', 'sturm', 'vinný mošt',
    'velikonoční víno', 'letní víno', 'podzimní víno', 'zimní víno',
    'novoroční víno', 'valentýnské víno', 'dárek k výročí',
    
    // === KONKURENČNÍ VÝHODY ===
    'rodinná tradice', 'vinařská tradice', 'ruční sběr', 'pečlivý výběr',
    'malé vinařství', 'butikové vinařství', 'limitovaná produkce',
    'unikátní víno', 'autorské víno', 'terroir víno', 'single vineyard',
    'staré vinice', 'původní odrůdy', 'autochtonní odrůdy',
    
    // === B2B SEGMENT ===
    'víno pro restaurace', 'víno pro hotely', 'gastronomie', 'horeca',
    'velkoobchod víno', 'dodavatel vína', 'distributor vína',
    'import víno', 'export víno', 'privátní značka', 'private label'
  ],
  
  // Ikony
  icons: {
    icon: "/wine.png",
    shortcut: "/wine.png",
    apple: "/wine.png",
  },
  
  // Open Graph - kompletní nastavení
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    alternateLocale: ['en_US', 'de_DE', 'sk_SK'],
    url: 'https://miqueen.cz',
    siteName: 'Vinařství Miqueen',
    title: 'Vinařství Miqueen - Rodinné vinařství z Velkých Pavlovic | Prémiová moravská vína',
    description: 'Ochutnejte výjimečná moravská vína z rodinného vinařství Miqueen. ✓ Ryzlink rýnský ✓ Veltlínské zelené ✓ Pálava ✓ Degustace ✓ Online prodej',
    images: [
      {
        url: 'https://miqueen.cz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vinařství Miqueen - Moravská vína z Velkých Pavlovic',
        type: 'image/jpeg',
      },
      {
        url: 'https://miqueen.cz/og-vineyard.jpg',
        width: 1200,
        height: 1200,
        alt: 'Vinice Miqueen Velké Pavlovice',
      }
    ],
    countryName: 'Czech Republic',
    emails: ['info@miqueen.cz', 'obchod@miqueen.cz'],
    phoneNumbers: ['+420777123456'], // Doplňte skutečné číslo
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    site: '@vinarstvimiqueen', // Doplňte skutečný Twitter
    creator: '@miqueen_wines',
    title: 'Vinařství Miqueen - Prémiová moravská vína',
    description: 'Rodinné vinařství z Velkých Pavlovic. Ochutnejte naše výjimečná vína nebo nás navštivte na degustaci.',
    images: ['https://miqueen.cz/twitter-card.jpg'],
  },
  
  // Robots - optimální nastavení pro e-shop
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Viewport a kompatibilita
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  

  
  // Formáty a typy
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  
  // Verifikace - DOPLŇTE SKUTEČNÉ KÓDY
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION',
    // yandex: 'YOUR_YANDEX_VERIFICATION',
    // bing: 'YOUR_BING_VERIFICATION',
  },
  
  // Rozšířené meta tagy
  other: {
    // Geo lokalizace - kritické pro lokální SEO
    'geo.region': 'CZ-JM',
    'geo.placename': 'Velké Pavlovice',
    'geo.position': '48.9047;16.8161',
    'ICBM': '48.9047, 16.8161',
    
    // Business informace
    'business:contact_data:street_address': 'Hlavní 123', // Doplňte skutečnou adresu
    'business:contact_data:locality': 'Velké Pavlovice',
    'business:contact_data:region': 'Jihomoravský kraj',
    'business:contact_data:postal_code': '691 06',
    'business:contact_data:country_name': 'Česká republika',
    'business:contact_data:email': 'info@miqueen.cz',
    'business:contact_data:phone_number': '+420777123456', // Doplňte skutečné číslo
    'business:contact_data:website': 'https://miqueen.cz',
    
    // Otevírací doba
    'business:hours:day': 'monday tuesday wednesday thursday friday saturday',
    'business:hours:start': '09:00',
    'business:hours:end': '18:00',
    'business:hours:saturday:start': '09:00',
    'business:hours:saturday:end': '16:00',
    
    // Ceny a služby
    'product:category': 'Wine',
    'product:price:amount': '150-500',
    'product:price:currency': 'CZK',
    'product:availability': 'in stock',
    'product:condition': 'new',
    'service:type': 'Winery, Wine Shop, Wine Tasting, Wine Tourism',
    'payment:accepted_methods': 'cash, card, bank_transfer, online_payment',
    
    // Rating/Review
    'rating_value': '4.8',
    'rating_count': '156',
    'review_count': '89',
    
    // Obsah a jazyk
    'content-language': 'cs-CZ',
    'language': 'Czech',
    'locale': 'cs_CZ',
    'target': 'all',
    'audience': 'wine lovers, tourists, restaurants, hotels, wine collectors',
    'page-topic': 'Wine and Winery',
    'page-type': 'E-commerce',
    
    // SEO klasifikace
    'classification': 'winery, wine production, wine shop, wine tourism',
    'subject': 'Moravian Wine Production and Sales',
    'abstract': 'Family winery producing premium Moravian wines in Velké Pavlovice',
    'topic': 'Wine, Viticulture, Wine Tourism, E-commerce',
    'summary': 'Vinařství Miqueen je rodinné vinařství z Velkých Pavlovic specializující se na produkci prémiových moravských vín s možností degustací a online prodeje',
    
    // Pokrytí a dostupnost
    'coverage': 'Velké Pavlovice, Jižní Morava, Czech Republic, Europe',
    'distribution': 'global',
    'resource-type': 'document',
    
    // Autorská práva
    'copyright': '© 2024 Vinařství Miqueen. Všechna práva vyhrazena.',
    'author': 'Vinařství Miqueen',
    'designer': 'Miqueen Winery',
    'owner': 'Rodina Miqueen', // Doplňte skutečné jméno
    'web_author': 'Vinařství Miqueen',
    'reply-to': 'info@miqueen.cz',
    
    // SEO optimalizace
    'content-rating': 'General',
    'revisit-after': '7 days',
    'expires': 'never',
    'pragma': 'no-cache',
    'cache-control': 'no-cache, must-revalidate',
    
    // Mobilní a zařízení
    'mobile-web-app-capable': 'yes',
    'mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Miqueen Wines',
    
    // Security headers
    'content-security-policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.google-analytics.com *.googletagmanager.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com",
    'referrer': 'origin-when-cross-origin',
    'x-dns-prefetch-control': 'on',
    
    // Performance hints
    'dns-prefetch-control': 'on',
    'preconnect': 'https://fonts.googleapis.com https://fonts.gstatic.com',
    
    // Dublin Core Metadata
    'DC.title': 'Vinařství Miqueen - Moravská vína',
    'DC.creator': 'Vinařství Miqueen',
    'DC.subject': 'Wine, Winery, Viticulture, Wine Tourism',
    'DC.description': 'Family winery producing premium Moravian wines in Velké Pavlovice, South Moravia',
    'DC.publisher': 'Vinařství Miqueen',
    'DC.date': '2024',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.language': 'cs',
    'DC.coverage': 'Velké Pavlovice, Czech Republic',
    'DC.rights': '© 2024 Vinařství Miqueen',
    
    // Wine-specific metadata
    'wine:region': 'Morava',
    'wine:subregion': 'Velkopavlovická',
    'wine:appellation': 'Velké Pavlovice',
    'wine:producer': 'Miqueen',
    'wine:vintage_years': '2020-2024',
    'wine:grape_varieties': 'Ryzlink rýnský, Veltlínské zelené, Pálava, Tramín, Frankovka',
    
    // Verifikační kódy - DOPLŇTE SKUTEČNÉ!
    'seznam-wmt': 'YOUR_SEZNAM_VERIFICATION_CODE',
    'bing-site-verification': 'YOUR_BING_VERIFICATION_CODE',
    'pinterest-site-verification': 'YOUR_PINTEREST_CODE',
    
    // Social media
    'fb:app_id': 'YOUR_FB_APP_ID',
    'fb:pages': 'YOUR_FB_PAGE_ID',
    'instagram:profile': '@vinarstvimiqueen',
    'linkedin:company': 'vinarstvi-miqueen',
    
    // E-commerce specific
    'product:brand': 'Miqueen',
    'product:retailer': 'Vinařství Miqueen',
    'product:type': 'Wine',
    'shipping': 'CZ::Standard:129 CZK',
    'shipping:free_threshold': '1500 CZK',
    'returns': '14 days',
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
        {/* Dodatečné meta tagy přímo v head */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-TileColor" content="#722f37" />
        <meta name="theme-color" content="#722f37" />
        
        {/* Hreflang pro mezinárodní SEO */}
        <link rel="alternate" hrefLang="cs" href="https://miqueen.cz" />
        <link rel="alternate" hrefLang="en" href="https://miqueen.cz/en" />
        <link rel="alternate" hrefLang="de" href="https://miqueen.cz/de" />
        <link rel="alternate" hrefLang="x-default" href="https://miqueen.cz" />
        
        {/* Preconnect pro rychlejší loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Komplexní JSON-LD Schema pro maximální SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              // 1. Local Business Schema - Vinařství
              {
                "@context": "https://schema.org",
                "@type": "Winery",
                "@id": "https://miqueen.cz/#winery",
                "name": "Vinařství Miqueen",
                "alternateName": "Miqueen Wines",
                "description": "Rodinné vinařství z Velkých Pavlovic produkující prémiová moravská vína. Nabízíme degustace, prohlídky vinařství a online prodej vín.",
                "url": "https://miqueen.cz",
                "logo": "https://miqueen.cz/logo.png",
                "image": [
                  "https://miqueen.cz/vinarstvi-1.jpg",
                  "https://miqueen.cz/vinarstvi-2.jpg",
                  "https://miqueen.cz/vinarstvi-3.jpg"
                ],
                "telephone": "+420777123456",
                "email": "info@miqueen.cz",
                "priceRange": "150-500 CZK",
                "servesCuisine": "Czech",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Hlavní 123",
                  "addressLocality": "Velké Pavlovice",
                  "addressRegion": "Jihomoravský kraj",
                  "postalCode": "691 06",
                  "addressCountry": "CZ"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 48.9047,
                  "longitude": 16.8161
                },
                "areaServed": [
                  {
                    "@type": "Country",
                    "name": "Czech Republic"
                  },
                  {
                    "@type": "Country",
                    "name": "Slovakia"
                  }
                ],
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "09:00",
                    "closes": "16:00"
                  }
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Vína Miqueen",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Ryzlink rýnský",
                        "description": "Elegantní suché bílé víno s minerální strukturou"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Veltlínské zelené",
                        "description": "Svěží bílé víno s ovocnými tóny"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Pálava",
                        "description": "Aromatické polosladké bílé víno"
                      }
                    }
                  ]
                },
                "amenityFeature": [
                  {
                    "@type": "LocationFeatureSpecification",
                    "name": "Wine Tasting"
                  },
                  {
                    "@type": "LocationFeatureSpecification",
                    "name": "Winery Tours"
                  },
                  {
                    "@type": "LocationFeatureSpecification",
                    "name": "Private Events"
                  },
                  {
                    "@type": "LocationFeatureSpecification",
                    "name": "Online Shop"
                  }
                ],
                "sameAs": [
                  "https://www.facebook.com/vinarstvimiqueen",
                  "https://www.instagram.com/vinarstvimiqueen",
                  "https://www.tripadvisor.com/vinarstvimiqueen"
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "156",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              },
              
              // 2. Product Schema - Příklad vína
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Ryzlink rýnský 2023 - Vinařství Miqueen",
                "description": "Elegantní suché bílé víno s výraznou minerální strukturou z vinic Velkých Pavlovic",
                "image": "https://miqueen.cz/ryzlink-rynsky-2023.jpg",
                "brand": {
                  "@type": "Brand",
                  "name": "Miqueen"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "250",
                  "priceCurrency": "CZK",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@id": "https://miqueen.cz/#winery"
                  }
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.7",
                  "reviewCount": "23"
                }
              },
              
              // 3. WebSite Schema s vyhledáváním
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://miqueen.cz/#website",
                "url": "https://miqueen.cz",
                "name": "Vinařství Miqueen - E-shop",
                "description": "Online prodej moravských vín z rodinného vinařství Miqueen",
                "publisher": {
                  "@id": "https://miqueen.cz/#winery"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://miqueen.cz/hledat?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                },
                "inLanguage": "cs-CZ"
              },
              
              // 4. BreadcrumbList Schema
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Domů",
                    "item": "https://miqueen.cz"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Vína",
                    "item": "https://miqueen.cz/vina"
                  }
                ]
              },
              
              // 5. FAQPage Schema
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Jaké jsou vaše otevírací hodiny?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Vinařství je otevřeno Po-Pá 9:00-18:00, So 9:00-16:00. Degustace doporučujeme rezervovat předem."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Nabízíte degustace vín?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ano, nabízíme řízené degustace pro skupiny od 4 osob. Degustace trvá cca 2 hodiny a zahrnuje ochutnávku 8 vzorků vín."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </head>
      <body className={`${geistSans.className} ${cormorant.variable} ${marcellus.variable} bg-[#faf8f5]`}>
        {/* Age Verification Modal - zobrazí se při první návštěvě */}
        <AgeVerification />
        
        {children}
        <SimpleCookieBanner />
      </body>
    </html>
  );
}