import type { Metadata } from "next";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import AdoptujVinohradPage from '../components/adoptuj-vinohrad';

// ========================================
// OPTIMALIZOVANÁ SEO METADATA PRO ADOPTUJ VINOHRAD
// ========================================
export const metadata: Metadata = {
  // Title: 50-60 znaků
  title: 'Adoptuj Vinohrad | Zážitkový program Vinařství MiQueen',
  
  // Description: 150-160 znaků
  description: 'Adoptujte vinohrad u MiQueen a získejte 12-36 lahví s vlastní etiketou ročně. ✓ Sledujte život vinice ✓ Exkluzivní degustace ✓ Certifikát adopce',
  
  // Keywords optimalizované pro adopci vinohradu
  keywords: [
    // Primární klíčová slova
    'adoptuj vinohrad', 'adopce vinohradu', 'adoptovat vinohrad', 'adoptuj vinici',
    'pronájem vinohradu', 'vlastní vinohrad', 'patronát nad vinicí',
    
    // Zážitkové programy
    'vinařský zážitek', 'zážitek ve vinohradu', 'dárkový zážitek víno',
    'firemní adopce vinohradu', 'teambuilding vinohrad', 'CSR program vinařství',
    'wine experience', 'vineyard adoption', 'adopt a vine',
    
    // Benefity programu
    'vlastní etiketa na víně', 'personalizované víno', 'víno s vlastní etiketou',
    'exkluzivní víno', 'limitovaná edice vína', 'privátní značka vína',
    'sledování vinice online', 'virtuální prohlídka vinohradu',
    'certifikát adopce', 'adopční certifikát', 'jmenovka na vinici',
    
    // Dárkové varianty
    'originální dárek', 'luxusní dárek', 'firemní dárek',
    'dárek pro milovníky vína', 'dárek k výročí', 'svatební dar',
    'vánoční dárek zážitek', 'narozeninový dárek', 'dárek pro muže',
    'dárek pro ženu', 'dárek pro páry', 'romantický dárek',
  ],
  
  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://miqueen.cz/adoptuj-vinohrad',
    siteName: 'Vinařství MiQueen',
    title: 'Adoptuj Vinohrad - Jedinečný vinařský zážitek | MiQueen',
    description: 'Staňte se patronem vinice a získejte 12-36 lahví ročně s vlastní etiketou. Sledujte život své vinice, účastněte se exkluzivních degustací a sklizně.',
    images: [
      {
        url: 'https://miqueen.cz/adoptuj-vinohrad-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Adoptuj Vinohrad - Program Vinařství MiQueen',
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@miqueen_wines',
    title: 'Adoptuj Vinohrad - Staňte se patronem vinice',
    description: 'Jedinečný program adopce vinohradu. Získejte vlastní víno s personalizovanou etiketou a sledujte život své vinice po celý rok.',
    images: ['https://miqueen.cz/adoptuj-vinohrad-twitter.jpg'],
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
    canonical: 'https://miqueen.cz/adoptuj-vinohrad',
    languages: {
      'cs-CZ': 'https://miqueen.cz/adoptuj-vinohrad',
      'en': 'https://miqueen.cz/en/adopt-vineyard',
      'de': 'https://miqueen.cz/de/weinberg-adoptieren',
    },
  },
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <AdoptujVinohradPage />
      <Footer />
    </main>
  );
}