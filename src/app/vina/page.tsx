import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import WineGridPage from '../components/winegrid';

// ========================================
// MAXIMÁLNĚ OPTIMALIZOVANÁ SEO METADATA PRO E-SHOP VÍN MIQUEEN
// ========================================
export const metadata: Metadata = {
  // Title: Optimalizováno pro e-shop s 40 produkty
  title: 'Vína MiQueen - 40 prémiových moravských vín | E-shop vinařství',
  
  // Description: Zahrnuje klíčové produkty a USP
  description: 'Objevte 40 výjimečných vín z Mikulova. ✓ Mini vína 187ml ✓ Frizzante ✓ Ryzlink ✓ Tramín ✓ Pinot Noir ✓ Doprava zdarma od 1500 Kč ✓ Ocenění Salon vín',
  
  // Aplikační metadata
  applicationName: 'MiQueen Wine Shop',
  authors: [{ name: 'Vinařství Miqueen', url: 'https://miqueen.cz' }],
  creator: 'Vinařství Miqueen',
  publisher: 'Vinařství Miqueen',
  
  // Kategorizace
  category: 'Wine, E-commerce, Online Shop, Beverages',
  
  // Lokalizace
  alternates: {
    canonical: 'https://miqueen.cz/vina',
    languages: {
      'cs-CZ': 'https://miqueen.cz/vina',
      'en': 'https://miqueen.cz/en/wines',
      'de': 'https://miqueen.cz/de/weine',
      'sk': 'https://miqueen.cz/sk/vina',
    },
  },
  
  // Komplexní keywords pro všech 40 vín (300+ keywords)
  keywords: [
    // === HLAVNÍ PRODUKTOVÉ ŘADY ===
    'mini vína', 'mini lahve vína', 'vína 187ml', 'vína 200ml', 'malé lahve vína',
    'dárkové mini vína', 'ochutnávkové vína', 'vína na cestu', 'single serve wine',
    'frizzante', 'perlivá vína', 'šumivá vína', 'sparkling wine', 'prosecco alternative',
    'mimosa', 'míchané nápoje', 'wine cocktails', 'brunch vína', 'aperitiv',
    
    // === VŠECHNY ODRŮDY V PORTFOLIU ===
    // Bílé odrůdy
    'ryzlink rýnský', 'riesling', 'ryzlink rýnský 2023', 'ryzlink rýnský 2024',
    'ryzlink vlašský', 'welschriesling', 'ryzlink vlašský 2023', 'ryzlink vlašský 2024',
    'sauvignon', 'sauvignon blanc', 'sauvignon 2023', 'sauvignon 2024',
    'tramín červený', 'gewürztraminer', 'tramín 2023', 'tramín 2024',
    'rulandské šedé', 'pinot gris', 'rulandské šedé 2023',
    'rulandské bílé', 'pinot blanc', 'rulandské bílé 2023',
    'chardonnay', 'chardonnay 2023',
    
    // Červené odrůdy
    'frankovka', 'blaufränkisch', 'frankovka 2023', 'frankovka 2024',
    'pinot noir', 'rulandské modré', 'pinot noir 2022',
    
    // Růžové
    'frankovka rosé', 'frankovka klaret', 'růžové víno', 'rosé wine',
    'frankovka rosé 2023', 'frankovka rosé 2024',
    
    // Cuvée
    'cuvée hrdý dudek', 'cuvée slastná dudková', 'cuvée 2024',
    'ryzlinkové cuvée', 'autorské cuvée', 'blend',
    
    // === PRODUKTOVÉ KATEGORIE ===
    'bílá vína', 'white wines', 'červená vína', 'red wines',
    'růžová vína', 'rosé wines', 'perlivá vína', 'frizzante wines',
    'sety vín', 'wine sets', 'dárkové sety', 'gift sets',
    
    // === KVALITATIVNÍ STUPNĚ ===
    'kabinet', 'kabinetní víno', 'pozdní sběr', 'late harvest',
    'výběr z hroznů', 'grape selection', 'výběr z bobulí',
    'moravské zemské víno', 'moravian wine',
    
    // === CHARAKTERISTIKY ===
    'suché víno', 'dry wine', 'polosuché víno', 'semi-dry wine',
    'polosladké víno', 'semi-sweet wine', 'sladké víno', 'sweet wine',
    'minerální víno', 'ovocné víno', 'aromatické víno', 'svěží víno',
    
    // === CENOVÉ KATEGORIE ===
    'víno 69 kč', 'víno 79 kč', 'víno 89 kč', 'levné víno',
    'víno do 100 kč', 'víno 100-200 kč', 'víno 200-300 kč',
    'víno 300-400 kč', 'prémiové víno', 'luxusní víno',
    
    // === PŘÍLEŽITOSTI ===
    'víno na párty', 'party wine', 'víno na oslavu', 'celebration wine',
    'víno na svatbu', 'wedding wine', 'víno na grilování', 'bbq wine',
    'letní víno', 'summer wine', 'zimní víno', 'winter wine',
    'vánoční víno', 'christmas wine', 'silvestrovské víno', 'new year wine',
    'valentýnské víno', 'valentine wine', 'velikonoční víno', 'easter wine',
    
    // === PÁROVÁNÍ S JÍDLEM ===
    'víno k rybám', 'wine for fish', 'víno k masu', 'wine for meat',
    'víno k sýrům', 'wine for cheese', 'víno k dezertu', 'dessert wine',
    'víno k předkrmům', 'appetizer wine', 'víno k těstovinám', 'pasta wine',
    'víno k asijské kuchyni', 'asian food wine', 'víno k sushi', 'sushi wine',
    
    // === SPECIÁLNÍ EDICE A NOVINKY ===
    'nová vína 2024', 'new wines 2024', 'novinky', 'new arrivals',
    'limitovaná edice', 'limited edition', 'exkluzivní vína', 'exclusive wines',
    'oceněná vína', 'awarded wines', 'medailová vína', 'medal wines',
    'bestsellery', 'bestsellers', 'nejprodávanější vína', 'top wines',
    
    // === FORMÁTY A BALENÍ ===
    'láhev 0,75l', '750ml bottle', 'láhev 0,187l', '187ml bottle',
    'láhev 0,2l', '200ml bottle', 'piccolo', 'quarter bottle',
    'set 4 lahví', '4 bottle set', 'dárkové balení', 'gift packaging',
    'firemní balení', 'corporate packaging',
    
    // === SLUŽBY A BENEFITY ===
    'doprava zdarma', 'free shipping', 'rychlá doprava', 'fast delivery',
    'online objednávka', 'order online', 'e-shop vína', 'wine e-shop',
    'rozvoz vína', 'wine delivery', 'dodání do 48 hodin', '48h delivery',
    
    // === REGION A TERROIR ===
    'mikulovská podoblast', 'mikulov wine region', 'pálava', 'pavlov',
    'perná', 'mikulov', 'moravské víno', 'moravian wine',
    'jihomoravské víno', 'south moravian wine', 'české víno', 'czech wine',
    
    // === VINAŘSTVÍ A TRADICE ===
    'vinařství miqueen', 'miqueen winery', 'rodinné vinařství', 'family winery',
    'mikulovská královna vín', 'wine queen mikulov', 'tradiční výroba',
    'moderní technologie', 'ekologické vinařství', 'bio víno',
    
    // === SPECIFICKÉ PRODUKTY (TOP 10) ===
    'pinot noir 2022 mini', 'rulandské šedé 2023 mini', 'ryzlink vlašský 2023 mini',
    'frizzante ryzlink vlašský', 'mimosa mini', 'frankovka rosé frizzante',
    'ryzlink rýnský 2023', 'tramín červený 2023', 'chardonnay 2023',
    'pinot noir 2022 výběr z hroznů',
    
    // === VYHLEDÁVACÍ FRÁZE ===
    'koupit víno online', 'buy wine online', 'víno s rozvozem', 'wine with delivery',
    'moravská vína online', 'vína z mikulova', 'kvalitní víno online',
    'víno přímo od vinaře', 'wine direct from winery', 'vinař mikulov',
    
    // === SEZÓNNÍ VYHLEDÁVÁNÍ ===
    'letní vína 2024', 'summer wines 2024', 'svatomartinské', 'beaujolais',
    'burčák', 'federweisser', 'mladé víno', 'young wine',
    'archivní víno', 'archive wine', 'ročníkové víno', 'vintage wine',
    
    // === B2C SEGMENT ===
    'víno pro začátečníky', 'wine for beginners', 'víno pro znalce', 'wine for connoisseurs',
    'dámské víno', 'ladies wine', 'pánské víno', 'mens wine',
    'víno pro mladé', 'wine for young', 'víno pro seniory', 'wine for seniors',
    'první víno', 'first wine', 'denní víno', 'daily wine',
    
    // === KONKURENČNÍ VÝHODY ===
    'nejlepší poměr cena výkon', 'best value wine', 'cenově dostupné víno',
    'kvalita za dobrou cenu', 'affordable quality', 'rodinná tradice',
    'ruční sběr', 'hand picked', 'malé šarže', 'small batches',
    'unikátní vína', 'unique wines', 'autentická vína', 'authentic wines'
  ],
  
  // Open Graph - kompletní nastavení
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    alternateLocale: ['en_US', 'de_DE', 'sk_SK'],
    url: 'https://miqueen.cz/vina',
    siteName: 'Vinařství Miqueen',
    title: 'E-shop Vinařství Miqueen - 40 prémiových moravských vín',
    description: 'Objevte kompletní nabídku 40 výjimečných vín z Mikulova. Mini vína, Frizzante, oceněná vína. Doprava zdarma od 1500 Kč.',
    images: [
      {
        url: 'https://miqueen.cz/og-wine-shop.jpg',
        width: 1200,
        height: 630,
        alt: 'MiQueen Wine Shop - 40 prémiových vín',
        type: 'image/jpeg',
      },
      {
        url: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/66_pn22-zostreno.png',
        width: 800,
        height: 800,
        alt: 'Pinot Noir 2022 - Prémiové víno',
      },
      {
        url: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/159_navrh-bez-nazvu--43.png',
        width: 800,
        height: 800,
        alt: 'MIMOSA - Jedinečný vinný koktejl',
      }
    ],
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    site: '@vinarstvimiqueen',
    title: '40 prémiových vín - Vinařství Miqueen',
    description: 'Mini vína 187ml, Frizzante, oceněná vína z Mikulova. Doprava zdarma od 1500 Kč.',
    images: ['https://miqueen.cz/twitter-wine-shop.jpg'],
  },
  
  // Robots
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
  
  // Rozšířené meta tagy pro e-shop
  other: {
    // E-commerce specific
    'product:count': '40',
    'product:category': 'Wine',
    'product:price:min': '69',
    'product:price:max': '399',
    'product:price:currency': 'CZK',
    'product:availability': 'in stock',
    'product:condition': 'new',
    'product:brand': 'MiQueen',
    
    // Shipping info
    'shipping:free_threshold': '1500 CZK',
    'shipping:price': '129 CZK',
    'shipping:methods': 'PPL, Zásilkovna, Balíkovna, osobní odběr',
    'shipping:time': '1-3 pracovní dny',
    
    // Product categories breakdown
    'products:white_wines': '16',
    'products:red_wines': '3',
    'products:rose_wines': '2',
    'products:sparkling_wines': '4',
    'products:special': '1',
    'products:mini_wines': '14',
    'products:wine_sets': '2',
    
    // Top products
    'product:featured:1': 'Pinot Noir 2022 - 399 Kč',
    'product:featured:2': 'MIMOSA - 289 Kč',
    'product:featured:3': 'Frizzante Frankovka Rosé - 199 Kč',
    'product:featured:4': 'Mini vína set 4x - 309 Kč',
    
    // Wine specifics
    'wine:vintages': '2022, 2023, 2024',
    'wine:volumes': '187ml, 200ml, 750ml',
    'wine:grape_varieties': '12+ odrůd',
    'wine:quality_levels': 'Kabinet, Pozdní sběr, Výběr z hroznů',
    
    // SEO
    'content-language': 'cs-CZ',
    'rating_value': '4.8',
    'rating_count': '324',
    'review_count': '156',
    
    // Business info
    'business:type': 'Wine E-commerce',
    'business:established': '2020',
    'payment:accepted': 'Card, Bank Transfer, Cash on Delivery, PayPal',
    'returns:period': '14 days',
    'customer:support': 'info@miqueen.cz, +420731610344',
  },
};

// JSON-LD Schema pro produktový katalog
const productCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ProductCollection",
  "@id": "https://miqueen.cz/vina",
  "name": "Kompletní nabídka vín MiQueen",
  "description": "40 prémiových moravských vín včetně mini lahví, frizzante a speciálních edicí",
  "url": "https://miqueen.cz/vina",
  "numberOfItems": 40,
  "itemListElement": [
    {
      "@type": "Product",
      "name": "Pinot Noir 2022",
      "offers": {
        "@type": "Offer",
        "price": "399",
        "priceCurrency": "CZK",
        "availability": "InStock"
      }
    },
    {
      "@type": "Product",
      "name": "MIMOSA",
      "offers": {
        "@type": "Offer",
        "price": "289",
        "priceCurrency": "CZK",
        "availability": "InStock"
      }
    },
    // Další produkty...
  ],
  "provider": {
    "@type": "Winery",
    "name": "Vinařství Miqueen",
    "url": "https://miqueen.cz"
  }
};

export default function WinesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productCatalogSchema) }}
      />
      <main>
        <Navbar />
        <WineGridPage />
        <Footer />
      </main>
    </>
  );
}