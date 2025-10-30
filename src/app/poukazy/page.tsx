import type { Metadata } from "next";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import MiQueenVouchersPage from '../components/poukazy';

// ========================================
// OPTIMALIZOVANÁ SEO METADATA PRO DÁRKOVÉ POUKAZY
// ========================================
export const metadata: Metadata = {
  // Title: 50-60 znaků
  title: 'Dárkové poukazy | Vinařství MiQueen - 1000-5000 Kč',
  
  // Description: 150-160 znaků
  description: 'Dárkové poukazy MiQueen na nákup vín 1000-5000 Kč. ✓ Elektronický PDF na e-mail ✓ Platnost do 30.6.2025 ✓ Ideální dárek ✓ Okamžité doručení',
  
  // Keywords optimalizované pro dárkové poukazy
  keywords: [
    // Primární klíčová slova
    'dárkový poukaz víno', 'dárkové poukazy víno', 'voucher víno',
    'poukaz na víno', 'dárkový certifikát víno', 'gift voucher wine',
    'elektronický poukaz', 'e-voucher víno', 'pdf poukaz',
    
    // Cenové varianty
    'poukaz 1000 kč', 'poukaz 2000 kč', 'poukaz 5000 kč',
    'dárkový poukaz 1000', 'voucher 2000', 'certifikát 5000',
    'hodnota poukazu', 'kredit na víno', 'wine credit',
    
    // Příležitosti
    'vánoční dárek víno', 'vánoční poukaz', 'dárek pod stromeček víno',
    'narozeninový dárek víno', 'dárek k narozeninám víno',
    'svatební dar víno', 'dárek k výročí víno', 'valentýn víno',
    'dárek pro muže víno', 'dárek pro ženu víno', 'dárek pro páry',
    
    // Firemní segment
    'firemní dárek víno', 'firemní poukazy', 'business gift wine',
    'dárek pro zaměstnance', 'dárek pro klienty', 'vánoční bonus',
    'employee benefit', 'client gift', 'corporate voucher',
    
    // Typ a forma
    'elektronický dárkový poukaz', 'digitální poukaz', 'online poukaz',
    'pdf poukaz víno', 'tisknutelný poukaz', 'poukaz na email',
    'okamžité doručení', 'instant delivery', 'ihned na email',
    
    // Použití
    'uplatnění poukazu', 'jak použít poukaz', 'platba poukazem',
    'eshop poukaz', 'online nákup poukazem', 'poukaz na degustaci',
    'poukaz do vinárny', 'poukaz brno chrlice', 'rovensklípek',
    
    // Výhody
    'originální dárek', 'praktický dárek', 'univerzální dárek',
    'dárek pro milovníky vína', 'dárek pro vinaře', 'wine lover gift',
    'last minute dárek', 'rychlý dárek', 'dárek na poslední chvíli',
    
    // Lokální SEO
    'dárkový poukaz víno brno', 'poukaz víno mikulov',
    'voucher víno morava', 'dárkový certifikát jižní morava',
    'vinařství poukaz česko', 'moravské víno poukaz',
    
    // Specifika MiQueen
    'miqueen poukaz', 'miqueen voucher', 'miqueen dárkový certifikát',
    'ekologické víno poukaz', 'bio víno voucher', 'oceněné víno poukaz',
    
    // Platnost a podmínky
    'platnost poukazu', 'validity voucher', 'platnost do 2025',
    'podmínky poukazu', 'terms and conditions', 'pravidla uplatnění'
  ],
  
  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://miqueen.cz/poukazy',
    siteName: 'Vinařství MiQueen',
    title: 'Dárkové poukazy na víno | MiQueen 1000-5000 Kč',
    description: 'Darujte zážitek z oceňovaných moravských vín. Elektronické poukazy 1000-5000 Kč s okamžitým doručením na e-mail. Platnost do 30.6.2025.',
    images: [
      {
        url: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/96_voucher-na-nakup-vin.jpg?67334076',
        width: 1200,
        height: 630,
        alt: 'Dárkový poukaz Vinařství MiQueen',
        type: 'image/jpeg',
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@miqueen_wines',
    title: 'Dárkové poukazy MiQueen - Perfektní dárek pro milovníky vína',
    description: 'Elektronické poukazy 1000-5000 Kč na nákup prémiových moravských vín. Okamžité doručení, platnost do 30.6.2025.',
    images: ['https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/96_voucher-na-nakup-vin.jpg'],
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
    canonical: 'https://miqueen.cz/poukazy',
    languages: {
      'cs-CZ': 'https://miqueen.cz/poukazy',
      'en': 'https://miqueen.cz/en/gift-vouchers',
      'de': 'https://miqueen.cz/de/geschenkgutscheine',
    },
  },
  
  // Další metadata
  other: {
    // Produktové informace
    'product:type': 'Gift Voucher',
    'product:price:amount': '1000, 2000, 5000',
    'product:price:currency': 'CZK',
    'product:availability': 'in stock',
    'product:delivery': 'Instant email delivery',
    
    // Platnost
    'voucher:validity': '2025-06-30',
    'voucher:format': 'PDF',
    'voucher:delivery_method': 'Email',
    'voucher:payment_method': 'Credit card, Online payment',
    
    // Použití
    'voucher:redemption': 'Online eshop, Physical store',
    'voucher:locations': 'shop.miqueen.cz, Rovensklípek Brno-Chrlice',
    
    // Hodnocení
    'rating_value': '5.0',
    'rating_count': '89',
    'review_count': '67',
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
            // Product Schema pro poukazy
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "@id": "https://miqueen.cz/poukazy#product",
              "name": "Dárkový poukaz na nákup vín MiQueen",
              "description": "Elektronický dárkový poukaz na nákup vín Vinařství MiQueen. Po zaplacení obdržíte PDF s unikátním kódem na e-mail. Platnost do 30.6.2025.",
              "image": "https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/96_voucher-na-nakup-vin.jpg",
              "brand": {
                "@type": "Brand",
                "name": "MiQueen"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Poukaz 1000 Kč",
                  "price": "1000",
                  "priceCurrency": "CZK",
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2024-01-01",
                  "validThrough": "2025-06-30",
                  "deliveryLeadTime": {
                    "@type": "QuantitativeValue",
                    "value": "0",
                    "unitText": "DAY"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Poukaz 2000 Kč",
                  "price": "2000",
                  "priceCurrency": "CZK",
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2024-01-01",
                  "validThrough": "2025-06-30"
                },
                {
                  "@type": "Offer",
                  "name": "Poukaz 5000 Kč",
                  "price": "5000",
                  "priceCurrency": "CZK",
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2024-01-01",
                  "validThrough": "2025-06-30"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "89",
                "bestRating": "5"
              },
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Martin K."
                },
                "reviewBody": "Perfektní dárek pro tchána. Poukaz přišel okamžitě na email, vytiskl jsem a dal do obálky. Super!"
              },
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Format",
                  "value": "PDF"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Doručení",
                  "value": "E-mail"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Platnost",
                  "value": "Do 30.6.2025"
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
                  "name": "Jak funguje platba za dárkový poukaz?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Elektronické poukazy lze zaplatit pouze platební kartou nebo zrychlenou online platbou. Po zaplacení obdržíte poukaz na e-mail."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jak rychle obdržím poukaz?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Po zaplacení vám na e-mail dorazí soubor ve formátu PDF s unikátním kódem ihned, obvykle do několika minut."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kde mohu poukaz uplatnit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dárkový poukaz lze uplatnit na e-shopu shop.miqueen.cz nebo osobně v Rovensklípek Brno-Chrlice, Chrlické náměstí 1, po předchozí domluvě."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jak dlouho je poukaz platný?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Poukazy zakoupené v roce 2024 jsou platné až do 30. června 2025."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Lze poukaz vrátit nebo vyměnit za peníze?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Elektronický dárkový poukaz nelze vrátit ani vyměnit za peníze. Hodnota poukazu musí být vyčerpána najednou."
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
                  "name": "Dárkové poukazy",
                  "item": "https://miqueen.cz/poukazy"
                }
              ]
            }
          ])
        }}
      />
      
      <main>
        <Navbar />
        <MiQueenVouchersPage />
        <Footer />
      </main>
    </>
  );
}