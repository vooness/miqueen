import type { Metadata } from "next";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import DegustaceSection from '../components/degustace-informace';

// ========================================
// OPTIMALIZOVANÁ SEO METADATA PRO DEGUSTACE
// ========================================
export const metadata: Metadata = {
  // Title: 50-60 znaků
  title: 'Degustace vín | Vinařství MiQueen Brno & Čejkovice',
  
  // Description: 150-160 znaků
  description: 'Zážitkové degustace vín MiQueen v Brně-Chrlicích a Čejkovicích. ✓ Řízené degustace ✓ Firemní akce ✓ Degustace potmě ✓ Ubytování ve sklepě',
  
  // Keywords optimalizované pro degustace
  keywords: [
    // Primární klíčová slova
    'degustace vín', 'degustace vína', 'ochutnávka vín', 'wine tasting',
    'degustace brno', 'degustace čejkovice', 'degustace jižní morava',
    
    // Lokální SEO - Brno
    'degustace vín brno', 'vinárna brno', 'vinný sklep brno',
    'degustace brno chrlice', 'sklepní vinárna brno', 'wine bar brno',
    'vinárna pod radnicí brno', 'vinotéka brno', 'víno brno',
    
    // Lokální SEO - Čejkovice
    'degustace čejkovice', 'vinný sklep čejkovice', 'ubytování čejkovice',
    'vinařství čejkovice', 'moravský sklípek čejkovice', 'víno čejkovice',
    
    // Speciální degustace
    'degustace potmě', 'degustace ve tmě', 'blind tasting',
    'slepá degustace', 'degustace poslepu', 'dark tasting',
    'zážitková degustace', 'netradiční degustace',
    
    // Typy akcí
    'firemní degustace', 'teambuilding víno', 'firemní akce víno',
    'narozeninová oslava víno', 'rozlučka se svobodou víno',
    'soukromá degustace', 'uzavřená společnost', 'privátní degustace',
    
    // Služby a vybavení
    'řízená degustace', 'komentovaná degustace', 'sommelier',
    'degustace s výkladem', 'degustační menu', 'párování vína a jídla',
    'pronájem vinárny', 'pronájem sklepa', 'catering víno',
    
    // Ubytování
    'ubytování vinařství', 'ubytování ve sklepě', 'vinařský penzion',
    'ubytování čejkovice', 'ubytování s degustací', 'wine hotel',
    'víkendový pobyt víno', 'vinařský víkend', 'wine weekend',
    
    // Kapacita a skupiny
    'degustace pro skupiny', 'degustace 50 osob', 'degustace 20 osob',
    'velká degustace', 'malá degustace', 'rodinná degustace',
    'degustace pro dva', 'romantická degustace', 'párová degustace',
    
    // Vybavení prostor
    'projektor degustace', 'ozvučení degustace', 'wifi vinárna',
    'bar s obsluhou', 'stylový sklep', 'historický sklep',
    'klimatizovaný sklep', 'bezbariérový přístup', 'parkování',
    
    // Sortiment vín
    'moravská vína degustace', 'ekologická vína', 'bio vína',
    'oceněná vína', 'AWC Vienna', 'archivní vína', 'výběrová vína',
    'bílá vína', 'červená vína', 'růžová vína', 'frizzante',
    
    // Okolní atrakce
    'turistika jižní morava', 'cyklostezky morava', 'vinné stezky',
    'TG Masaryk muzeum', 'Sonnentor čejkovice', 'bylinkové stezky'
  ],
  
  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://miqueen.cz/degustace',
    siteName: 'Vinařství MiQueen',
    title: 'Degustace vín MiQueen | Brno & Čejkovice | Zážitkové ochutnávky',
    description: 'Prožijte nezapomenutelnou degustaci vín ve sklepní vinárně v Brně nebo tradičním moravském sklípku v Čejkovicích. Řízené degustace, firemní akce, degustace potmě.',
    images: [
      {
        url: 'https://miqueen.cz/degustace-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Degustace vín MiQueen - Brno a Čejkovice',
        type: 'image/jpeg',
      },
      {
        url: 'https://miqueen.cz/sklep-brno.jpg',
        width: 800,
        height: 600,
        alt: 'Sklepní vinárna Brno-Chrlice',
      },
      {
        url: 'https://miqueen.cz/sklep-cejkovice.jpg',
        width: 800,
        height: 600,
        alt: 'Vinný sklep Čejkovice',
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@miqueen_wines',
    title: 'Degustace vín MiQueen - Zážitkové ochutnávky',
    description: 'Degustace vín ve sklepní vinárně Brno-Chrlice nebo moravském sklípku Čejkovice. Firemní akce, oslavy, degustace potmě.',
    images: ['https://miqueen.cz/degustace-twitter.jpg'],
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
    canonical: 'https://miqueen.cz/degustace',
    languages: {
      'cs-CZ': 'https://miqueen.cz/degustace',
      'en': 'https://miqueen.cz/en/wine-tasting',
      'de': 'https://miqueen.cz/de/weinprobe',
    },
  },
  
  // Další metadata
  other: {
    // Lokalizace - Brno
    'geo.region': 'CZ-JM',
    'geo.placename': 'Brno-Chrlice',
    'geo.position': '49.1522;16.5847',
    'ICBM': '49.1522, 16.5847',
    
    // Business informace
    'business:contact_data:locality_1': 'Brno-Chrlice',
    'business:contact_data:street_address_1': 'Chrlické náměstí 1/4',
    'business:contact_data:postal_code_1': '643 00',
    
    'business:contact_data:locality_2': 'Čejkovice', 
    'business:contact_data:street_address_2': 'Za Valama 938',
    'business:contact_data:postal_code_2': '696 15',
    
    'business:contact_data:email': 'info@miqueen.cz',
    'business:contact_data:phone_number': '+420 731 610 344',
    
    // Služby
    'service:type': 'Wine Tasting, Wine Tourism, Event Venue',
    'service:capacity': 'Brno: 50 osob, Čejkovice: 20 osob + 15 lůžek',
    'service:features': 'Řízené degustace, Degustace potmě, Firemní akce, Ubytování',
    
    // Ceny
    'price:range': '500-2000 CZK',
    'price:group_discount': 'Ano',
    'reservation': 'Required',
    
    // Hodnocení
    'rating_value': '4.9',
    'rating_count': '234',
    'review_count': '156',
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
            // LocalBusiness Schema - Brno
            {
              "@context": "https://schema.org",
              "@type": "BarOrPub",
              "@id": "https://miqueen.cz/degustace#brno",
              "name": "Degustace MiQueen Brno - Sklepní vinárna pod radnicí",
              "description": "Stylová sklepní vinárna v historickém sklepě pod radnicí v Brně-Chrlicích. Degustace vín, firemní akce, oslavy.",
              "image": "https://miqueen.cz/vinarna-brno.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Chrlické náměstí 1/4",
                "addressLocality": "Brno-Chrlice",
                "postalCode": "643 00",
                "addressCountry": "CZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 49.1522,
                "longitude": 16.5847
              },
              "url": "https://shop.miqueen.cz/degustace-brno/",
              "telephone": "+420731610344",
              "priceRange": "$$",
              "servesCuisine": "Czech",
              "amenityFeature": [
                {"@type": "LocationFeatureSpecification", "name": "Kapacita až 50 osob"},
                {"@type": "LocationFeatureSpecification", "name": "Projektor a ozvučení"},
                {"@type": "LocationFeatureSpecification", "name": "Wi-Fi"},
                {"@type": "LocationFeatureSpecification", "name": "Bar s obsluhou"}
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "89"
              }
            },
            
            // LocalBusiness Schema - Čejkovice
            {
              "@context": "https://schema.org",
              "@type": "Winery",
              "@id": "https://miqueen.cz/degustace#cejkovice",
              "name": "Degustace MiQueen Čejkovice - Vinný sklep s ubytováním",
              "description": "Tradiční moravský sklípek v srdci vinařské obce Čejkovice. Degustace s ubytováním pro až 15 osob.",
              "image": "https://miqueen.cz/sklep-cejkovice.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Za Valama 938",
                "addressLocality": "Čejkovice",
                "postalCode": "696 15",
                "addressCountry": "CZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.9047,
                "longitude": 16.9778
              },
              "url": "https://shop.miqueen.cz/degustace-cejkovice/",
              "telephone": "+420731610344",
              "priceRange": "$$",
              "amenityFeature": [
                {"@type": "LocationFeatureSpecification", "name": "Ubytování 15 lůžek"},
                {"@type": "LocationFeatureSpecification", "name": "Zahrada s grilem"},
                {"@type": "LocationFeatureSpecification", "name": "Kapacita degustace 20 osob"},
                {"@type": "LocationFeatureSpecification", "name": "Archivní vína"}
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "67"
              }
            },
            
            // Event Schema - Degustace potmě
            {
              "@context": "https://schema.org",
              "@type": "Event",
              "@id": "https://miqueen.cz/degustace#potme",
              "name": "Degustace potmě Brno",
              "description": "Jedinečná degustace vín ve tmě. Zapojte smysly jinak a objevte nové dimenze chuti.",
              "image": "https://miqueen.cz/degustace-potme.jpg",
              "location": {
                "@id": "https://miqueen.cz/degustace#brno"
              },
              "organizer": {
                "@type": "Organization",
                "name": "Vinařství MiQueen"
              },
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "offers": {
                "@type": "Offer",
                "price": "890",
                "priceCurrency": "CZK",
                "availability": "https://schema.org/InStock",
                "url": "https://shop.miqueen.cz/degustace-potme-brno/"
              }
            },
            
            // FAQPage Schema
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Kolik osob se vejde na degustaci?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "V Brně-Chrlicích pojmeme až 50 osob, v Čejkovicích až 20 osob na degustaci. V Čejkovicích navíc nabízíme ubytování pro 15 osob."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Je nutná rezervace předem?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ano, degustace je nutné rezervovat předem telefonicky na +420 731 610 344 nebo emailem na info@miqueen.cz."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co obsahuje degustace?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Řízená degustace obsahuje ochutnávku 8-10 vzorků vín s odborným výkladem, možnost dokoupení občerstvení a lahví vína za zvýhodněné ceny."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Pořádáte firemní akce?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ano, specializujeme se na firemní akce, teambuildingy, vánoční večírky a obchodní setkání. Připravíme program na míru."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co je degustace potmě?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Degustace potmě je jedinečný zážitek, kdy ochutnáváte vína v úplné tmě. Bez zrakového vjemu vnímáte víno intenzivněji a každý doušek se stává dobrodružstvím."
                  }
                }
              ]
            }
          ])
        }}
      />
      
      <main>
        <Navbar />
        <DegustaceSection />
        <Footer />
      </main>
    </>
  );
}