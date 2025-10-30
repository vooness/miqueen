import type { Metadata } from "next";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import MiQueenContactPage from '../components/kontakty';

// ========================================
// OPTIMALIZOVANÁ SEO METADATA PRO KONTAKTY
// ========================================
export const metadata: Metadata = {
  // Title: 50-60 znaků
  title: 'Kontakt | Vinařství MiQueen - Mikulov & Brno',
  
  // Description: 150-160 znaků
  description: 'Kontaktujte Vinařství MiQueen. ✓ Mikulov - sídlo vinařství ✓ Brno - degustační vinárna ✓ Čejkovice - sklep ☎ +420 731 610 344 ✉ info@miqueen.cz',
  
  // Keywords optimalizované pro kontaktní stránku
  keywords: [
    // Primární kontaktní klíčová slova
    'kontakt vinařství miqueen', 'miqueen kontakt', 'vinařství kontakt',
    'kontakt moravské víno', 'kontaktní údaje miqueen',
    
    // Lokalizace - Mikulov
    'vinařství mikulov kontakt', 'miqueen mikulov', 'víno mikulov kontakt',
    'mikulovská vinařská podoblast', 'vinařství jižní morava kontakt',
    'mikulov víno adresa', 'vinařství mikulov telefon',
    
    // Lokalizace - Brno
    'vinárna brno kontakt', 'miqueen brno', 'degustace brno kontakt',
    'brno chrlice vinárna', 'sklepní vinárna brno kontakt',
    'chrlické náměstí vinárna', 'víno brno adresa',
    
    // Lokalizace - Čejkovice
    'vinný sklep čejkovice kontakt', 'miqueen čejkovice',
    'ubytování čejkovice kontakt', 'sklep čejkovice adresa',
    'za valama čejkovice', 'vinařství čejkovice telefon',
    
    // Kontaktní informace
    'telefon vinařství', 'email vinařství', 'adresa vinařství',
    'otevírací doba vinařství', 'pracovní doba vinárna',
    'rezervace degustace', 'objednávka vína', 'nákup vína kontakt',
    
    // Služby a dotazy
    'rezervace degustace víno', 'objednávka vín online',
    'firemní akce víno kontakt', 'svatba ve vinařství kontakt',
    'teambuilding víno rezervace', 'degustace pro skupiny kontakt',
    'adoptuj vinohrad kontakt', 'vinařský zážitek rezervace',
    
    // Navigační a přístupové informace
    'jak se dostat vinařství', 'mapa vinařství', 'navigace vinařství',
    'parkování vinařství', 'dostupnost mhd', 'přístup vinařství',
    'gps souřadnice vinařství', 'směr vinařství',
    
    // Business kontakty
    'fakturační údaje vinařství', 'ičo vinařství', 'dič vinařství',
    'velkoobchod víno kontakt', 'b2b víno kontakt',
    'firemní prodej víno', 'distributor vína kontakt',
    
    // Sociální sítě
    'facebook vinařství miqueen', 'instagram miqueen',
    'social media vinařství', 'sledujte nás víno',
    
    // Formuláře a komunikace
    'kontaktní formulář', 'napište nám', 'zeptejte se',
    'zpětná vazba vinařství', 'reklamace víno', 'dotazy víno',
    'informace o víně', 'poradenství víno'
  ],
  
  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://miqueen.cz/kontakt',
    siteName: 'Vinařství MiQueen',
    title: 'Kontakt - Vinařství MiQueen | Mikulov, Brno, Čejkovice',
    description: 'Kontaktní informace Vinařství MiQueen. Sídlo v Mikulově, degustační vinárna v Brně-Chrlicích, vinný sklep v Čejkovicích. Tel: +420 731 610 344',
    images: [
      {
        url: 'https://miqueen.cz/kontakt-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Vinařství MiQueen - Kontakty',
        type: 'image/jpeg',
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary',
    site: '@miqueen_wines',
    title: 'Kontakt - Vinařství MiQueen',
    description: 'Spojte se s námi. Vinařství MiQueen - Mikulov, Brno, Čejkovice. Tel: +420 731 610 344, Email: info@miqueen.cz',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
    },
  },
  
  // Alternativy
  alternates: {
    canonical: 'https://miqueen.cz/kontakt',
    languages: {
      'cs-CZ': 'https://miqueen.cz/kontakt',
      'en': 'https://miqueen.cz/en/contact',
      'de': 'https://miqueen.cz/de/kontakt',
    },
  },
  
  // Další metadata
  other: {
    // Hlavní sídlo - Mikulov
    'geo.region': 'CZ-JM',
    'geo.placename': 'Mikulov',
    'geo.position': '48.8059;16.6378',
    'ICBM': '48.8059, 16.6378',
    
    // Business informace
    'business:contact_data:locality': 'Mikulov',
    'business:contact_data:region': 'Jihomoravský kraj',
    'business:contact_data:postal_code': '692 01',
    'business:contact_data:country_name': 'Česká republika',
    'business:contact_data:email': 'info@miqueen.cz',
    'business:contact_data:phone_number': '+420 731 610 344',
    'business:contact_data:website': 'https://miqueen.cz',
    
    // Fakturační údaje
    'business:legal_name': 'Vinařství MiQueen s.r.o.',
    'business:tax_id': 'CZ12345678', // Doplňte skutečné IČO
    'business:vat_id': 'CZ12345678', // Doplňte skutečné DIČ
    
    // Provozovny
    'business:locations': '3',
    'business:location_1': 'Mikulov - Sídlo vinařství',
    'business:location_2': 'Brno-Chrlice - Degustační vinárna',
    'business:location_3': 'Čejkovice - Vinný sklep s ubytováním',
    
    // Sociální sítě
    'social:facebook': 'https://www.facebook.com/vinarstvi.miqueen',
    'social:instagram': 'https://www.instagram.com/vinarstvi.miqueen',
    
    // Kontaktní hodiny
    'business:hours': 'Po-Pá 9:00-18:00, So 9:00-16:00',
    'business:phone_hours': 'Po-Ne 8:00-20:00',
    'business:email_response': '24-48 hodin',
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
            // Organization Schema s kontakty
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://miqueen.cz/#organization",
              "name": "Vinařství MiQueen",
              "legalName": "Vinařství MiQueen s.r.o.",
              "url": "https://miqueen.cz",
              "logo": "https://miqueen.cz/logo.png",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+420-731-610-344",
                  "contactType": "customer service",
                  "areaServed": "CZ",
                  "availableLanguage": ["Czech", "English", "German"],
                  "contactOption": "TollFree",
                  "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": "08:00",
                    "closes": "20:00"
                  }
                },
                {
                  "@type": "ContactPoint",
                  "email": "info@miqueen.cz",
                  "contactType": "customer service",
                  "areaServed": "CZ",
                  "availableLanguage": ["Czech", "English"]
                }
              ],
              "address": [
                {
                  "@type": "PostalAddress",
                  "name": "Vinařství MiQueen - Sídlo",
                  "streetAddress": "Mikulovská 123",
                  "addressLocality": "Mikulov",
                  "postalCode": "692 01",
                  "addressRegion": "Jihomoravský kraj",
                  "addressCountry": "CZ"
                }
              ],
              "location": [
                {
                  "@type": "Place",
                  "name": "Vinařství MiQueen - Mikulov",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Mikulov",
                    "postalCode": "692 01",
                    "addressCountry": "CZ"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 48.8059,
                    "longitude": 16.6378
                  },
                  "hasMap": "https://maps.google.com/?q=48.8059,16.6378"
                },
                {
                  "@type": "Place",
                  "name": "Degustační vinárna Brno-Chrlice",
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
                  "hasMap": "https://maps.google.com/?q=49.1522,16.5847"
                },
                {
                  "@type": "Place",
                  "name": "Vinný sklep Čejkovice",
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
                  "hasMap": "https://maps.google.com/?q=48.9047,16.9778"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/vinarstvi.miqueen",
                "https://www.instagram.com/vinarstvi.miqueen"
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
                  "name": "Kontakt",
                  "item": "https://miqueen.cz/kontakt"
                }
              ]
            }
          ])
        }}
      />
      
      <main>
        <Navbar />
        <MiQueenContactPage />
        <Footer />
      </main>
    </>
  );
}