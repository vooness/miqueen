import type { Metadata } from "next";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import MapaVinPage from '../components/mapa-vin';

// ========================================
// OPTIMALIZOVANÁ SEO METADATA PRO MAPU VÍN
// ========================================
export const metadata: Metadata = {
  // Title: 50-60 znaků
  title: 'Kde koupit vína MiQueen | Mapa prodejen - Vinařství MiQueen',
  
  // Description: 150-160 znaků
  description: 'Mapa prodejen vín MiQueen po celé ČR. ✓ E-shop s doručením ✓ Brno-Chrlice ✓ Mikulov ✓ Rovensklípek ✓ Degustace na místě ✓ Najděte nejbližší prodejnu',
  
  // Keywords optimalizované pro prodejní místa
  keywords: [
    // Primární klíčová slova - lokace
    'miqueen prodejna', 'kde koupit miqueen', 'prodej miqueen vín', 'miqueen vinařství',
    'miqueen brno', 'miqueen mikulov', 'miqueen morava', 'miqueen jižní morava',
    'kde koupit víno miqueen', 'obchod s vínem miqueen', 'prodejna vín mikulov',
    
    // E-shop a online prodej
    'miqueen eshop', 'miqueen online', 'koupit víno miqueen online', 'objednat víno miqueen',
    'shop.miqueen.cz', 'miqueen e-shop', 'miqueen webshop', 'miqueen internetový obchod',
    'nákup vína online', 'víno s doručením', 'víno na dobírku', 'víno kurýrem',
    
    // Konkrétní prodejny
    'rovensklípek brno', 'rovensklípek chrlice', 'chrlické náměstí víno',
    'brno chrlice víno', 'prodejna vín brno', 'vinařství brno', 'vinotéka brno',
    'mikulov vinařství', 'vinice mikulov', 'sklep mikulov', 'vinný sklep mikulov',
    
    // Pálava a region
    'víno z pálavy', 'pálava vinařství', 'moravské víno', 'jižní morava víno',
    'mikulovská vinařská podoblast', 'pálavské víno', 'znojemská vinařská oblast',
    'moravská vína prodej', 'bio víno morava', 'ekologické víno morava',
    
    // Mapa a navigace
    'mapa prodejen vína', 'kde koupit víno', 'prodejna vín v okolí', 'vinotéka v okolí',
    'vinařství poblíž', 'kde koupit moravské víno', 'prodejna moravských vín',
    'distributoři miqueen', 'prodejní místa miqueen', 'síť prodejen víno',
    
    // Typy nákupu
    'osobní odběr víno', 'koupit víno na místě', 'degustace a nákup', 'nákup ve sklep ě',
    'víno přímo od vinaře', 'víno od výrobce', 'víno bez marže', 'víno za výrobní cenu',
    'velkoobchod víno', 'maloobchod víno', 'hromadný nákup vína', 'nákup vína pro restauraci',
    
    // Služby v prodejnách
    'degustace vín brno', 'degustace vín mikulov', 'ochutnávka vín', 'vinařský program',
    'exkurze vinařství', 'prohlídka vinařství', 'vinařské akce', 'vinařské večery',
    'sommelier poradenství', 'výběr vína s odborníkem', 'konzultace výběr vína',
    
    // Doprava a dodání
    'doručení vína brno', 'doručení vína morava', 'dovoz vína domů', 'rozvoz vína',
    'doprava zdarma víno', 'levná doprava víno', 'doprava od 99 kč', 'kurýr víno',
    'zásilkovna víno', 'česká pošta víno', 'ppl víno', 'gls víno',
    
    // Druhy prodejen
    'vinařství s prodejem', 'vinný sklep s prodejem', 'vinotéka', 'vinárna',
    'Wine bar', 'wine shop', 'obchod s vínem', 'specializovaná prodejna vín',
    'bio prodejna víno', 'farmářský trh víno', 'tržnice víno',
    
    // Platba a podmínky
    'platba kartou víno', 'platba online víno', 'dobírka víno', 'faktura víno',
    'rychlá platba víno', 'bezpečná platba víno', 'paypal víno', 'mastercard víno',
    
    // Regiony ČR
    'víno brno', 'víno praha', 'víno ostrava', 'víno olomouc', 'víno plzeň',
    'víno české budějovice', 'víno liberec', 'víno hradec králové', 'víno pardubice',
    'víno jižní morava', 'víno střední morava', 'víno znojmo', 'víno břeclav',
    
    // Konkrétní hledání
    'nejbližší prodejna vín', 'víno v mém okolí', 'kde najdu víno', 'kde se prodává víno',
    'prodejny vín poblíž', 'otevřené vinařství', 'otevírací doba vinařství',
    'kontakt na vinařství', 'telefon vinařství', 'adresa vinařství',
    
    // Speciální příležitosti
    'víno na svatbu kde koupit', 'víno pro firmu kde koupit', 'dárkové balení víno prodejna',
    'velký nákup vína', 'víno pro akci', 'víno na oslavu', 'víno na večírek',
    'firemní dárky víno kde koupit', 'víno pro restauraci kde koupit',
    
    // Značka a kvalita
    'oceněné víno kde koupit', '4 hvězdičky víno', 'awc vienna víno kde koupit',
    'bio víno kde koupit', 'ekologické víno prodejna', 'přírodní víno kde koupit',
    'kvalitní víno morava', 'prémiové víno kde koupit', 'nejlepší víno morava',
    
    // Long-tail keywords
    'kde koupit víno miqueen v brně', 'kde koupit moravské víno v praze',
    'prodejna bio vín jižní morava', 'vinařství s degustací mikulov',
    'kde ochutnat a koupit víno pálava', 'nejlepší vinotéka brno',
    'kde koupit víno přímo od vinaře', 'vinařství s e-shopem morava'
  ],
  
  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://miqueen.cz/mapa-vin',
    siteName: 'Vinařství MiQueen',
    title: 'Mapa prodejen MiQueen | Kde koupit naše vína',
    description: 'Najděte nejbližší prodejnu vín MiQueen. E-shop, Brno-Chrlice, Mikulov. Osobní odběr, degustace, poradenství. Mapa všech prodejních míst.',
    images: [
      {
        url: 'https://miqueen.cz/mapa-vin-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Mapa prodejen Vinařství MiQueen',
        type: 'image/jpeg',
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@miqueen_wines',
    title: 'Kde koupit vína MiQueen | Mapa prodejen',
    description: 'Interaktivní mapa všech prodejních míst vín MiQueen po celé ČR. E-shop, osobní odběr, degustace.',
    images: ['https://miqueen.cz/mapa-vin-twitter.jpg'],
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
    canonical: 'https://miqueen.cz/mapa-vin',
    languages: {
      'cs-CZ': 'https://miqueen.cz/mapa-vin',
      'en': 'https://miqueen.cz/en/wine-map',
      'de': 'https://miqueen.cz/de/wein-karte',
    },
  },
  
  // Další metadata
  other: {
    // Lokační informace
    'geo.region': 'CZ-JM',
    'geo.placename': 'Mikulov, Brno',
    'geo.position': '48.8061;16.6362',
    'ICBM': '48.8061, 16.6362',
    
    // Kontaktní informace
    'contact.email': 'info@miqueen.cz',
    'contact.phone': '+420XXXXXXXXX',
    
    // Další informace
    'availability': 'online and in-store',
    'delivery_area': 'Czech Republic',
    'service_type': 'Winery, Wine Shop, E-commerce',
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
            // LocalBusiness Schema - Hlavní vinařství
            {
              "@context": "https://schema.org",
              "@type": "Winery",
              "@id": "https://miqueen.cz#winery",
              "name": "Vinařství MiQueen",
              "alternateName": "MiQueen - Mikulovská královna vín",
              "description": "Rodinné ekologické vinařství na Pálavě s 32 hektary vinic. Čtyřhvězdičkové vinařství AWC Vienna 2025.",
              "url": "https://miqueen.cz",
              "logo": "https://miqueen.cz/logo.png",
              "image": [
                "https://miqueen.cz/vinice.jpg",
                "https://miqueen.cz/sklep.jpg",
                "https://miqueen.cz/degustace.jpg"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mikulov",
                "addressLocality": "Mikulov",
                "addressRegion": "Jihomoravský kraj",
                "postalCode": "693 01",
                "addressCountry": "CZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "48.8061",
                "longitude": "16.6362"
              },
              "telephone": "+420XXXXXXXXX",
              "email": "info@miqueen.cz",
              "priceRange": "69-990 Kč",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "234",
                "bestRating": "5"
              },
              "sameAs": [
                "https://www.facebook.com/miqueen",
                "https://www.instagram.com/miqueen_wines",
                "https://shop.miqueen.cz"
              ]
            },
            
            // LocalBusiness Schema - Rovensklípek Brno
            {
              "@context": "https://schema.org",
              "@type": "Store",
              "@id": "https://miqueen.cz/mapa-vin#brno",
              "name": "Rovensklípek Brno-Chrlice",
              "description": "Prodejna vín MiQueen v Brně-Chrlicích. Osobní odběr, degustace, poradenství.",
              "url": "https://miqueen.cz/mapa-vin",
              "image": "https://miqueen.cz/rovensklipek-brno.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Chrlické náměstí 1",
                "addressLocality": "Brno-Chrlice",
                "addressRegion": "Jihomoravský kraj",
                "postalCode": "664 42",
                "addressCountry": "CZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "49.1475",
                "longitude": "16.6836"
              },
              "telephone": "+420XXXXXXXXX",
              "email": "info@miqueen.cz",
              "priceRange": "69-990 Kč",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "10:00",
                "closes": "18:00"
              }
            },
            
            // WebSite Schema s Search Action
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://miqueen.cz#website",
              "url": "https://miqueen.cz",
              "name": "Vinařství MiQueen",
              "description": "Ekologické vinařství z Mikulova na Pálavě",
              "publisher": {
                "@id": "https://miqueen.cz#winery"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://shop.miqueen.cz/hledat/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            
            // FAQPage Schema
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Kde můžu koupit vína MiQueen?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vína MiQueen můžete koupit na e-shopu shop.miqueen.cz s doručením po celé ČR, osobně v Rovensklípku Brno-Chrlice (Chrlické náměstí 1), přímo ve vinařství v Mikulově, nebo ve vybraných prodejnách po celé České republice. Všechna místa najdete v naší interaktivní mapě."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kolik stojí doprava vín MiQueen?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Doprava při online objednávce začíná již od 69 Kč. Nabízíme doručení kurýrem, Českou poštou i osobní odběr zdarma v našich prodejnách. Při vyšší hodnotě objednávky je doprava zdarma."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Je možné ochutnat vína před koupí?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ano, ve vinařství v Mikulově a v Rovensklípku Brno-Chrlice nabízíme degustace našich vín. Doporučujeme předchozí objednání degustace na info@miqueen.cz nebo telefonicky. Nabízíme také privátní degustační programy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Prodáváte vína i velkoodběratelům?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ano, spolupracujeme s restauracemi, hotely, vinotékami a dalšími obchodními partnery. Pro individuální cenovou nabídku a podmínky velkoodběru nás prosím kontaktujte na info@miqueen.cz."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Můžu si vyzvednout objednávku osobně?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ano, osobní odběr je možný zdarma v Rovensklípku Brno-Chrlice po předchozí domluvě, nebo přímo ve vinařství v Mikulově. Při online objednávce můžete zvolit osobní odběr jako způsob doručení."
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
                  "name": "Mapa prodejen",
                  "item": "https://miqueen.cz/mapa-vin"
                }
              ]
            }
          ])
        }}
      />
      
      <main>
        <Navbar />
        <MapaVinPage />
        <Footer />
      </main>
    </>
  );
}