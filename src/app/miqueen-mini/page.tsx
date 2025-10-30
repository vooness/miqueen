import type { Metadata } from "next";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import MiQueenMiniPage from '../components/mini-queen';

// ========================================
// OPTIMALIZOVANÁ SEO METADATA PRO MIQUEEN MINI
// ========================================
export const metadata: Metadata = {
  // Title: 50-60 znaků
  title: 'MiQueen Mini | Mini vína 187-200ml - Vinařství MiQueen',
  
  // Description: 150-160 znaků
  description: 'MiQueen Mini - prémiová vína v kabelkovém formátu 187-200ml. ✓ Ideální porce ✓ Dárkové sety ✓ MIMOSA koktejl ✓ Frizzante mini ✓ Doprava od 69 Kč',
  
  // Keywords optimalizované pro mini vína
  keywords: [
    // Primární klíčová slova
    'miqueen mini', 'mini vína', 'malé lahve vína', 'mini lahvičky vína',
    'vína 187ml', 'vína 200ml', 'piccolo vína', 'kabelkové víno',
    'single serve wine', 'jednoporční víno', 'malé víno',
    
    // Produktové varianty
    'mini prosecco', 'mini frizzante', 'mini růžové víno', 'mini červené víno',
    'mini bílé víno', 'mini sekt', 'mini šumivé víno', 'perlivé víno mini',
    'pinot noir mini', 'ryzlink mini', 'frankovka mini', 'rulandské mini',
    
    // Speciální produkty
    'mimosa mini', 'mimosa koktejl', 'mimosa víno', 'víno s džusem',
    'frizzante mimosa', 'pomerančové víno', 'mandarinkové víno',
    'vinný koktejl', 'ready to drink víno', 'rtd víno',
    
    // Dárkové sety
    'dárkový set mini vín', 'degustační set mini', 'set 4 mini vína',
    'vánoční set mini vín', 'firemní dárek mini víno', 'mini víno dárek',
    'dárková sada mini vín', 'ochutnávkový set', 'vzorky vín',
    
    // Použití a příležitosti
    'víno na piknik', 'víno na výlet', 'víno na cestu', 'víno do kabelky',
    'víno na festival', 'víno na koncert', 'víno na párty', 'víno na oslavu',
    'svatební víno mini', 'víno na svatbu', 'welcome drink mini',
    
    // Velikostní kategorie
    'čtvrtka vína', 'čtvrtlitr vína', '0,187l víno', '0,2l víno',
    'dvoudecové víno', 'jednodecové víno', 'malá láhev vína',
    'cestovní balení víno', 'pocket wine', 'travel size wine',
    
    // Výhody produktu
    'víno pro jednoho', 'víno na jednu sklenku', 'porce vína',
    'víno bez zbytku', 'čerstvé víno', 'víno bez oxidace',
    'praktické balení vína', 'skladné víno', 'víno na skladování',
    
    // Cílové skupiny
    'víno pro ženy', 'dámské víno', 'víno do kabelky', 'handbag wine',
    'víno pro mladé', 'studentské víno', 'víno na koleje',
    'víno pro singles', 'víno pro jedince', 'víno pro cestovatele',
    
    // Místa prodeje
    'mini víno eshop', 'koupit mini víno', 'mini víno online',
    'mini víno brno', 'mini víno mikulov', 'mini víno morava',
    'mini víno česko', 'mini víno cena', 'levné mini víno',
    
    // Konkurenční výhody
    'kvalitní mini víno', 'prémiové mini víno', 'moravské mini víno',
    'ekologické mini víno', 'bio mini víno', 'přírodní mini víno',
    'oceněné mini víno', 'vinařství roku mini', 'nejlepší mini víno',
    
    // Balení a logistika
    'balení po 24ks', 'karton mini vín', 'hromadná objednávka mini',
    'velkoobchod mini víno', 'mini víno pro restaurace', 'mini víno pro hotely',
    'mini víno catering', 'mini víno pro akce', 'mini víno pro firmy'
  ],
  
  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://miqueen.cz/mini',
    siteName: 'Vinařství MiQueen',
    title: 'MiQueen Mini - Prémiová vína v kabelkovém formátu | 187-200ml',
    description: 'Objevte MiQueen Mini - kvalitní moravská vína v praktickém balení 187-200ml. Ideální na cesty, piknik nebo jako originální dárek. Od 69 Kč.',
    images: [
      {
        url: 'https://miqueen.cz/miqueen-mini-og.jpg',
        width: 1200,
        height: 630,
        alt: 'MiQueen Mini - Mini vína 187-200ml',
        type: 'image/jpeg',
      },
      {
        url: 'https://miqueen.cz/mini-set.jpg',
        width: 800,
        height: 800,
        alt: 'Degustační set MiQueen Mini',
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@miqueen_wines',
    title: 'MiQueen Mini - Kvalitní víno v kabelkovém formátu',
    description: 'Prémiová moravská vína v praktických lahvičkách 187-200ml. Ideální porce, žádný zbytek. Od 69 Kč.',
    images: ['https://miqueen.cz/miqueen-mini-twitter.jpg'],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Alternativy
  alternates: {
    canonical: 'https://miqueen.cz/mini',
    languages: {
      'cs-CZ': 'https://miqueen.cz/mini',
      'en': 'https://miqueen.cz/en/mini-wines',
      'de': 'https://miqueen.cz/de/mini-weine',
    },
  },
  
  // Další metadata
  other: {
    // Produktové informace
    'product:category': 'Mini Wines',
    'product:price:amount': '69-339',
    'product:price:currency': 'CZK',
    'product:availability': 'in stock',
    'product:condition': 'new',
    
    // Specifikace balení
    'product:volume': '187ml, 200ml',
    'product:package': '24 bottles per case',
    'product:variants': '10 products',
    
    // Hodnocení
    'rating_value': '4.7',
    'rating_count': '167',
    'review_count': '98',
  },
};

export default function Page() {
  return (
    <>
      {/* Strukturovaná data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            // ProductCollection Schema
            {
              "@context": "https://schema.org",
              "@type": "ProductCollection",
              "@id": "https://miqueen.cz/mini#collection",
              "name": "MiQueen Mini - Kolekce mini vín",
              "description": "Prémiová moravská vína v praktickém kabelkovém formátu 187-200ml. Ideální porce pro jednu osobu.",
              "url": "https://miqueen.cz/mini",
              "numberOfItems": 10,
              "hasPart": [
                {
                  "@type": "Product",
                  "name": "Pinot Noir 2022 mini",
                  "description": "Nádherné víno cihlovo-rubínové barvy s tóny lesního ovoce.",
                  "image": "https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/120_pn22-mini.png",
                  "offers": {
                    "@type": "Offer",
                    "price": "69",
                    "priceCurrency": "CZK",
                    "availability": "https://schema.org/InStock"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "23"
                  }
                },
                {
                  "@type": "Product",
                  "name": "MIMOSA mini",
                  "description": "Sauvignon Frizzante s 100% pomerančovou šťávou. Osvěžující koktejl.",
                  "image": "https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/159_navrh-bez-nazvu--43.png",
                  "offers": {
                    "@type": "Offer",
                    "price": "89",
                    "priceCurrency": "CZK",
                    "availability": "https://schema.org/InStock"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.7",
                    "reviewCount": "45"
                  }
                },
                {
                  "@type": "Product",
                  "name": "Set 4x mini - klasika",
                  "description": "Degustační set 4 mini lahviček našich nejoblíbenějších vín.",
                  "image": "https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/set4-klasika.png",
                  "offers": {
                    "@type": "Offer",
                    "price": "309",
                    "priceCurrency": "CZK",
                    "availability": "https://schema.org/InStock"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "67"
                  }
                }
              ]
            },
            
            // FAQPage Schema
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Jaká je velikost MiQueen Mini lahviček?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MiQueen Mini vína jsou dostupná ve dvou velikostech: 187ml (klasická mini láhev) a 200ml (speciální produkty jako MIMOSA). To odpovídá přibližně jedné až jedné a půl skleničce vína."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kolik stojí MiQueen Mini vína?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ceny MiQueen Mini vín začínají na 69 Kč za klasická vína (187ml), speciální produkty jako MIMOSA stojí 89 Kč (200ml) a degustační sety 4 lahviček od 309 Kč."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Lze koupit MiQueen Mini jednotlivě nebo jen po kartonech?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MiQueen Mini vína lze koupit jak jednotlivě, tak v kartonech po 24 kusech pro lepší cenu. Speciální produkty jako MIMOSA se prodávají po 12 kusech."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Na jaké příležitosti jsou MiQueen Mini vína vhodná?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MiQueen Mini jsou ideální na pikniky, výlety, festivaly, párty, jako welcome drink na svatbách, firemní dárky, nebo když chcete ochutnat víno bez nutnosti otevírat celou láhev."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co je MIMOSA mini?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MIMOSA mini je inovativní vinný koktejl kombinující kvalitní Sauvignon Frizzante se 100% přírodní pomerančovou šťávou. Obsahuje 8% alkoholu a je dodáván v 200ml lahvičkách."
                  }
                }
              ]
            },
            
            // BreadcrumbList Schema
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
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "MiQueen Mini",
                  "item": "https://miqueen.cz/mini"
                }
              ]
            }
          ])
        }}
      />
      
      <main>
        <Navbar />
        <MiQueenMiniPage />
        <Footer />
      </main>
    </>
  );
}