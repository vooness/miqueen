import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import MiQueenCorporatePage from '../components/pro-firmy-informace';

// ========================================
// MAXIMÁLNĚ OPTIMALIZOVANÁ SEO METADATA PRO FIREMNÍ SEKCI VINAŘSTVÍ MIQUEEN
// ========================================
export const metadata: Metadata = {
  // Title: 50-60 znaků optimální
  title: 'Firemní vína a akce | Vinařství Miqueen - B2B řešení pro firmy',
  
  // Description: 150-160 znaků
  description: 'Firemní vína s logem, teambuildingy a degustace v historických sklepích. ✓ Personalizace ✓ VIP balíčky ✓ Akce na klíč ✓ Brno-Chrlice a Čejkovice',
  
  // Aplikační metadata
  applicationName: 'Vinařství Miqueen - Firemní sekce',
  authors: [{ name: 'Vinařství Miqueen', url: 'https://miqueen.cz' }],
  creator: 'Vinařství Miqueen',
  publisher: 'Vinařství Miqueen',
  
  // Kategorizace
  category: 'Corporate Wine, B2B, Corporate Events, Wine Gifts',
  
  // Lokalizace
  alternates: {
    canonical: 'https://miqueen.cz/pro-firmy',
    languages: {
      'cs-CZ': 'https://miqueen.cz/pro-firmy',
      'en': 'https://miqueen.cz/en/corporate',
      'de': 'https://miqueen.cz/de/firmenkunden',
    },
  },
  
  // Komplexní keywords pro B2B segment (200+ keywords)
  keywords: [
    // === PRIMÁRNÍ B2B SLUŽBY ===
    'firemní vína', 'vína pro firmy', 'corporate wine', 'business wine',
    'firemní dárky', 'corporate gifts', 'dárky pro klienty', 'dárky pro partnery',
    'vína s logem', 'personalizované víno', 'branded wine', 'private label wine',
    'firemní etiketa', 'vlastní etiketa', 'custom wine label', 'logo na víně',
    
    // === FIREMNÍ AKCE A EVENTY ===
    'firemní akce', 'corporate events', 'firemní večírek', 'company party',
    'teambuilding', 'team building', 'firemní teambuilding', 'vinařský teambuilding',
    'degustace pro firmy', 'firemní degustace', 'corporate wine tasting',
    'wine tasting event', 'sommelier pro firmy', 'řízená degustace',
    'firemní meeting', 'business meeting', 'konference', 'firemní konference',
    'workshop', 'firemní workshop', 'školení', 'firemní školení',
    'vánoční večírek', 'christmas party', 'novoroční akce', 'výroční setkání',
    
    // === LOKACE PRO FIREMNÍ AKCE ===
    'brno chrlice', 'rovensklípek', 'historické sklepy brno', 'sklepy brno',
    'čejkovice', 'vinné sklepy čejkovice', 'moravské sklepy', 'vinařství čejkovice',
    'pronájem sklepa', 'pronájem prostor', 'venue rental', 'wine cellar rental',
    'akce v brně', 'teambuilding brno', 'firemní akce brno', 'degustace brno',
    'jižní morava akce', 'morava teambuilding', 'vinařství morava akce',
    
    // === TYPY FIREMNÍCH ZÁKAZNÍKŮ ===
    'b2b víno', 'b2b wine', 'velkoobchod víno', 'wholesale wine',
    'dodavatel vína', 'wine supplier', 'víno pro restaurace', 'restaurant wine',
    'víno pro hotely', 'hotel wine', 'horeca', 'gastronomie',
    'víno pro kavárny', 'víno pro bary', 'wine bar supplier',
    'korporátní klienti', 'corporate clients', 'business partners',
    
    // === PŘÍLEŽITOSTI A VYUŽITÍ ===
    'vánoční firemní dárky', 'christmas corporate gifts', 'vánoční balíčky',
    'novoroční dárky', 'new year gifts', 'velikonoční dárky', 'easter gifts',
    'dárky pro zaměstnance', 'employee gifts', 'ocenění zaměstnanců',
    'employee recognition', 'employee rewards', 'motivační dárky',
    'klientské dárky', 'client gifts', 'zákaznické dárky', 'customer gifts',
    'vip dárky', 'vip gifts', 'prémiové dárky', 'premium gifts',
    'luxusní firemní dárky', 'luxury corporate gifts', 'exkluzivní dárky',
    'obchodní dárky', 'business gifts', 'partnerské dárky', 'partner gifts',
    'propagační předměty', 'promotional items', 'reklamní dárky',
    'marketingové dárky', 'marketing gifts', 'promo vína',
    
    // === PERSONALIZACE A BRANDING ===
    'firemní branding', 'corporate branding', 'brand identity',
    'personalizace etikety', 'label personalization', 'custom labeling',
    'grafický návrh etikety', 'label design', 'design etikety',
    'firemní logo na víně', 'company logo wine', 'branded bottles',
    'gravírování', 'engraving', 'potisk lahví', 'bottle printing',
    'dárkové balení', 'gift packaging', 'luxusní balení', 'premium packaging',
    'dřevěná kazeta', 'wooden box', 'dárková kazeta', 'gift box',
    'certifikát pravosti', 'certificate of authenticity', 'osobní věnování',
    
    // === TEAMBUILDING AKTIVITY ===
    'vinařský teambuilding', 'wine teambuilding', 'degustační teambuilding',
    'wine tasting teambuilding', 'soutěže', 'team competitions',
    'vinařské hry', 'wine games', 'blind tasting', 'slepá degustace',
    'párování vína a jídla', 'wine food pairing', 'sommelier kurz',
    'wine education', 'vinařský workshop', 'wine workshop',
    'míchání vlastního vína', 'wine blending', 'create your wine',
    'sklizeň hroznů', 'grape harvest', 'vinobraní pro firmy',
    'outdoor teambuilding', 'indoor teambuilding', 'zážitkový teambuilding',
    
    // === CENOVÉ KATEGORIE B2B ===
    'velkoobchodní ceny', 'wholesale prices', 'množstevní slevy',
    'quantity discounts', 'firemní ceník', 'corporate pricing',
    'b2b ceník', 'business pricing', 'partnerské ceny', 'partner prices',
    'rámcová smlouva', 'framework agreement', 'dlouhodobá spolupráce',
    'roční kontrakt', 'annual contract', 'smluvní ceny',
    
    // === SLUŽBY A BENEFITY ===
    'doprava zdarma', 'free delivery', 'express doprava', 'express delivery',
    'instalace na akci', 'event setup', 'catering', 'wine catering',
    'sommelier na akci', 'sommelier service', 'obsluha', 'wine service',
    'zapůjčení sklenic', 'glass rental', 'inventář', 'equipment rental',
    'degustační sety', 'tasting sets', 'vzorky vín', 'wine samples',
    'konzultace', 'consultation', 'poradenství', 'wine consulting',
    
    // === SPECIFICKÉ FIREMNÍ ŘEŠENÍ ===
    'firemní vinice', 'corporate vineyard', 'adopce vinice', 'vineyard adoption',
    'patronát nad vínem', 'wine patronage', 'vlastní řada vín',
    'private wine collection', 'exkluzivní edice', 'exclusive edition',
    'limitovaná edice', 'limited edition', 'číslované lahve', 'numbered bottles',
    'archivní vína', 'archive wines', 'ročníková vína', 'vintage wines',
    'investiční vína', 'investment wines', 'sběratelské vína', 'collector wines',
    
    // === KONKURENČNÍ VÝHODY ===
    'rodinné vinařství', 'family winery', 'tradice', 'tradition',
    'ekologické víno', 'organic wine', 'bio víno', 'sustainable wine',
    'lokální producent', 'local producer', 'moravské víno', 'moravian wine',
    'ruční výroba', 'handmade', 'řemeslná výroba', 'craft wine',
    'malé šarže', 'small batches', 'prémiová kvalita', 'premium quality',
    'oceněná vína', 'awarded wines', 'medailová vína', 'medal wines',
    
    // === PRŮMYSLOVÁ ODVĚTVÍ ===
    'it firmy', 'technologické firmy', 'software companies', 'startupy',
    'výrobní firmy', 'manufacturing', 'automotive', 'automobilový průmysl',
    'finance', 'bankovnictví', 'banking', 'pojišťovnictví', 'insurance',
    'consulting', 'poradenství', 'právní kanceláře', 'law firms',
    'zdravotnictví', 'healthcare', 'farmacie', 'pharmaceutical',
    'stavebnictví', 'construction', 'development', 'reality', 'real estate',
    'marketing', 'reklamní agentury', 'advertising', 'pr agentury',
    'média', 'media companies', 'vydavatelství', 'publishing',
    
    // === REGIONY A DOSAH ===
    'brno', 'praha', 'ostrava', 'bratislava', 'vídeň', 'wien',
    'jihomoravský kraj', 'jižní morava', 'morava', 'čechy', 'slovensko',
    'celá čr', 'česká republika', 'central europe', 'střední evropa',
    'mezinárodní', 'international', 'export', 'eu', 'evropa',
    
    // === CERTIFIKACE A STANDARDY ===
    'iso certifikace', 'haccp', 'ifs', 'brc', 'organic certification',
    'carbon neutral', 'sustainability', 'csr', 'corporate social responsibility',
    'etický obchod', 'fair trade', 'responsible business',
    'transparentnost', 'transparency', 'sledovatelnost', 'traceability',
  ],
  
  // Open Graph - kompletní nastavení
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    alternateLocale: ['en_US', 'de_DE', 'sk_SK'],
    url: 'https://miqueen.cz/pro-firmy',
    siteName: 'Vinařství Miqueen',
    title: 'Firemní vína a akce - Vinařství Miqueen | B2B řešení na míru',
    description: 'Prémiová firemní vína s personalizací, teambuildingy a degustace v historických moravských sklepích. Kompletní B2B řešení pro vaši firmu.',
    images: [
      {
        url: 'https://miqueen.cz/fotky/IMG_6362.jpg',
        width: 1200,
        height: 630,
        alt: 'Firemní vína Miqueen - personalizované lahve s logem',
        type: 'image/jpeg',
      },
      {
        url: 'https://miqueen.cz/fotky/20240628024059866.jpeg',
        width: 1200,
        height: 630,
        alt: 'Firemní akce ve sklepích Miqueen',
      },
      {
        url: 'https://miqueen.cz/fotky/koutek1.png',
        width: 1200,
        height: 630,
        alt: 'Historické sklepy Brno-Chrlice',
      }
    ],
    countryName: 'Czech Republic',
    emails: ['firmy@miqueen.cz', 'b2b@miqueen.cz', 'info@miqueen.cz'],
    phoneNumbers: ['+420731610344'],
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    site: '@vinarstvimiqueen',
    creator: '@miqueen_corporate',
    title: 'Firemní vína a akce - Vinařství Miqueen',
    description: 'Personalizovaná vína s logem, teambuildingy a degustace pro firmy. Historické sklepy v Brno-Chrlice a Čejkovicích.',
    images: ['https://miqueen.cz/fotky/IMG_6362.jpg'],
  },
  
  // Robots - optimální nastavení
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
  
  // Rozšířené meta tagy pro B2B
  other: {
    // Geo lokalizace - kritické pro lokální B2B
    'geo.region': 'CZ-JM',
    'geo.placename': 'Brno-Chrlice, Čejkovice',
    'geo.position': '49.1522;16.6436',
    'ICBM': '49.1522, 16.6436',
    
    // Business B2B informace
    'business:contact_data:b2b_email': 'firmy@miqueen.cz',
    'business:contact_data:b2b_phone': '+420731610344',
    'business:contact_data:sales_person': 'Obchodní oddělení Miqueen',
    
    // B2B služby a ceny
    'business:service:corporate_wine': 'Firemní vína s personalizací 15000-50000 CZK',
    'business:service:corporate_events': 'Firemní akce a teambuildingy 25000-80000 CZK',
    'business:service:wine_tasting': 'Degustace pro firmy od 500 CZK/osoba',
    'business:service:venue_rental': 'Pronájem historických sklepů',
    'business:minimum_order': '12 lahví',
    'business:bulk_discount': '10% od 100 lahví, 15% od 500 lahví',
    'business:payment_terms': 'NET30, NET60 pro stálé klienty',
    'business:delivery': 'Celá ČR, SR, expresní doprava',
    
    // Lokace pro akce
    'venue:location:brno': 'Rovensklípek, Brno-Chrlice',
    'venue:location:cejkovice': 'Vinařství MiQueen, Čejkovice',
    'venue:capacity:brno': '20-80 osob',
    'venue:capacity:cejkovice': '30-100 osob',
    'venue:amenities': 'Catering, AV technika, WiFi, Parking',
    
    // SEO klasifikace B2B
    'classification': 'B2B wine supplier, corporate events, team building',
    'industry': 'Wine, Events, Corporate Gifts, B2B Services',
    'service_area': 'Czech Republic, Slovakia, Austria',
    'target_market': 'Corporations, SMEs, Startups, Government',
    
    // Hodnocení a reference
    'rating_value': '4.9',
    'rating_count': '89',
    'b2b_clients': '150+',
    'events_hosted': '200+',
    'corporate_references': 'Available upon request',
    
    // Obsah a jazyk
    'content-language': 'cs-CZ',
    'language': 'Czech',
    'page-topic': 'B2B Wine Services and Corporate Events',
    'page-type': 'B2B Service Page',
    
    // Dublin Core Metadata
    'DC.title': 'Firemní vína a akce - Vinařství Miqueen',
    'DC.creator': 'Vinařství Miqueen',
    'DC.subject': 'Corporate Wine, B2B, Team Building, Wine Events',
    'DC.description': 'B2B wine solutions, corporate gifts and events in historical wine cellars',
    
    // Speciální B2B metadata
    'b2b:service_types': 'Corporate Wine, Team Events, Wine Gifts, Venue Rental',
    'b2b:industries_served': 'IT, Finance, Manufacturing, Healthcare, Consulting',
    'b2b:customization': 'Full personalization available',
    'b2b:lead_time': '2-4 weeks for custom orders',
    'b2b:samples': 'Free samples available for orders over 50 bottles',
    'b2b:contract_types': 'One-time, Annual, Framework agreements',
    
    // Schema.org dodatky
    'schema:priceRange': '15000-80000 CZK',
    'schema:paymentAccepted': 'Invoice, Bank Transfer, Card',
    'schema:currenciesAccepted': 'CZK, EUR',
  },
};

// JSON-LD Schema pro B2B
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "WineMerchant", "EventVenue"],
  "@id": "https://miqueen.cz/pro-firmy",
  "name": "Vinařství Miqueen - Firemní sekce",
  "description": "Kompletní B2B vinařské řešení - firemní vína, teambuildingy, degustace",
  "url": "https://miqueen.cz/pro-firmy",
  "telephone": "+420731610344",
  "email": "firmy@miqueen.cz",
  "address": [
    {
      "@type": "PostalAddress",
      "name": "Rovensklípek",
      "streetAddress": "Rebešovická 23",
      "addressLocality": "Brno-Chrlice",
      "postalCode": "643 00",
      "addressCountry": "CZ"
    },
    {
      "@type": "PostalAddress",
      "name": "Vinařství MiQueen",
      "addressLocality": "Čejkovice",
      "postalCode": "696 15",
      "addressCountry": "CZ"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "B2B Služby",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Firemní vína s personalizací",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "15000",
          "maxPrice": "50000",
          "priceCurrency": "CZK"
        }
      },
      {
        "@type": "Offer",
        "name": "Firemní teambuilding",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "25000",
          "maxPrice": "80000",
          "priceCurrency": "CZK"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "89"
  }
};

export default function ProFirmyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <main>
        <Navbar />
        <MiQueenCorporatePage />
        <Footer />
      </main>
    </>
  );
}