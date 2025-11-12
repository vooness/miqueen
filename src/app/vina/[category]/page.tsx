// src/app/vina/[category]/page.tsx
import WineGridPage from '@/app/components/winegrid';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { wines } from '@/app/components/wineData';

// ============================================
// KONFIGURACE KATEGORIÍ - vše na jednom místě
// ============================================

interface CategoryConfig {
  id: string;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  metaTitle: string;
  longDescription: string;
  faqItems?: Array<{ question: string; answer: string }>;
}

const CATEGORIES: CategoryConfig[] = [
  {
    id: 'all',
    slug: 'vsechna-vina',
    title: 'Všechna vína z vinařství MiQueen | Moravská vína z Mikulova',
    metaTitle: 'Všechna vína | Vinařství MiQueen Mikulov',
    h1: 'Všechna vína z vinařství MiQueen',
    description: 'Kompletní nabídka prémiových moravských vín z vinařství MiQueen. Bílá, červená, růžová, perlivá vína a speciální edice z Mikulova. Oceněná vína z oblasti Pálava.',
    longDescription: 'Objevte kompletní sortiment prémiových moravských vín z vinařství MiQueen v Mikulově. Nabízíme bílá, červená, růžová a perlivá vína z oblastí Pálava a Znojmo. Naše vína pravidelně získávají ocenění na prestižních soutěžích.',
    keywords: ['moravská vína', 'vinařství MiQueen', 'vína z Mikulova', 'kvalitní vína', 'bio vína', 'Pálava', 'oceněná vína'],
    faqItems: [
      {
        question: 'Kde můžu ochutnat vína MiQueen?',
        answer: 'Vína MiQueen můžete ochutnat přímo ve vinařství v Mikulově, na degustacích po celé České republice nebo si je objednat přes náš e-shop.'
      },
      {
        question: 'Nabízíte dárkové balení vín?',
        answer: 'Ano, nabízíme dárkové sety vín v různých cenových kategoriích, ideální pro firemní i soukromé dárky.'
      }
    ]
  },
  {
    id: 'white',
    slug: 'bila-vina',
    title: 'Bílá vína MiQueen | Sauvignon, Ryzlink, Chardonnay z Pálavy',
    metaTitle: 'Bílá vína | Vinařství MiQueen',
    h1: 'Prémiová bílá vína z Pálavy',
    description: 'Prémiová bílá vína z Pálavy - Sauvignon Blanc, Ryzlink rýnský, Chardonnay, Rulandské bílé a další odrůdy z vinařství MiQueen v Mikulově. Oceněná moravská bílá vína.',
    longDescription: 'Naše bílá vína pocházejí z nejlepších vinic v oblasti Pálava. Nabízíme širokou škálu od svěžích aromatických Sauvignonů přes minerální Ryzlinky až po plná Chardonnay. Každé víno je pečlivě vinifikováno s důrazem na kvalitu a typičnost odrůdy.',
    keywords: ['bílá vína', 'Sauvignon Blanc', 'Ryzlink', 'Chardonnay', 'vína z Pálavy', 'Rulandské bílé', 'moravská bílá vína', 'Müller Thurgau'],
    faqItems: [
      {
        question: 'Jaká bílá vína doporučujete k rybám?',
        answer: 'K rybám doporučujeme naše Sauvignon Blanc nebo Ryzlink rýnský, které mají svěží kyselinu a citrusové tóny.'
      },
      {
        question: 'Která bílá vína jsou suchá?',
        answer: 'Většina našich bílých vín je suchých, zejména Sauvignon, Ryzlink a Chardonnay s obsahem zbytkového cukru do 9 g/l.'
      }
    ]
  },
  {
    id: 'red',
    slug: 'cervena-vina',
    title: 'Červená vína MiQueen | André, Merlot, Cabernet z Mikulova',
    metaTitle: 'Červená vína | Vinařství MiQueen',
    h1: 'Červená vína z vinařství MiQueen',
    description: 'Červená vína z vinařství MiQueen - André, Merlot, Cabernet Sauvignon, Zweigeltrebe a další červené odrůdy z Mikulova. Plná, harmonická moravská červená vína.',
    longDescription: 'Naše červená vína kombinují tradiční vinařské postupy s moderními technologiemi. Díky pečlivému výběru hroznů a optimální délce zrání získávají naše červené víno plnost, hloubku a harmonii.',
    keywords: ['červená vína', 'André', 'Merlot', 'Cabernet Sauvignon', 'moravská červená vína', 'Zweigeltrebe', 'Frankovka', 'Svatovavřinecké'],
    faqItems: [
      {
        question: 'Která červená vína doporučujete k masu?',
        answer: 'K hovězímu doporučujeme Cabernet Sauvignon nebo Merlot, k vepřovému André nebo Zweigeltrebe.'
      },
      {
        question: 'Jak dlouho vydrží otevřené červené víno?',
        answer: 'Červené víno vydrží otevřené 3-5 dní, pokud ho uzavřete a uchováte v chladu.'
      }
    ]
  },
  {
    id: 'rose',
    slug: 'ruzova-vina',
    title: 'Růžová vína MiQueen | Rosé vína z Mikulova',
    metaTitle: 'Růžová vína | Vinařství MiQueen',
    h1: 'Svěží růžová vína z Mikulova',
    description: 'Růžová vína z vinařství MiQueen - svěží rosé vína z Mikulova ideální pro letní večery a oslavy. Elegantní moravská rosé s ovocnými tóny.',
    longDescription: 'Naše růžová vína jsou vyrobena metodou krátkého maceračního styku, která jim dodává krásnou barvu a svěží ovocnou chuť. Ideální jako aperitiv nebo k lehkým pokrmům.',
    keywords: ['růžová vína', 'rosé', 'letní vína', 'vína z Mikulova', 'rosé Mikulov', 'moravské rosé', 'růžové víno'],
    faqItems: [
      {
        question: 'K čemu podávat růžové víno?',
        answer: 'Růžové víno je univerzální - skvěle se hodí k saláům, lehkým předkrmům, grilovanému masu nebo jako osvěžující aperitiv.'
      }
    ]
  },
  {
    id: 'sparkling',
    slug: 'perliva-vina',
    title: 'Perlivá vína MiQueen | Frizzante z tratě Za Cihelnou',
    metaTitle: 'Perlivá vína Frizzante | Vinařství MiQueen',
    h1: 'Perlivá vína Frizzante',
    description: 'Perlivá vína Frizzante z tratě Za Cihelnou. Svěží a lehká vína s jemným přirozeným perláním ze srdce Pálavy. Ideální pro oslavy a speciální příležitosti.',
    longDescription: 'Naše perlivá vína Frizzante vznikají přirozeným procesem druhotného kvašení. Jemné perlení a svěží chuť z nich dělají ideální společníka na oslavy, piknik nebo jen tak pro potěšení.',
    keywords: ['perlivá vína', 'Frizzante', 'šumivá vína', 'perlení', 'vína frizzante', 'sekty', 'prosecco'],
    faqItems: [
      {
        question: 'Jaký je rozdíl mezi Frizzante a šumivým vínem?',
        answer: 'Frizzante má nižší tlak než klasické šumivé víno (sekty), což mu dodává jemnější perlení a svěžejší charakter.'
      }
    ]
  },
  {
    id: 'new',
    slug: 'novinky',
    title: 'Novinky vín MiQueen | Nové ročníky a limitované edice',
    metaTitle: 'Novinky | Vinařství MiQueen',
    h1: 'Nejnovější vína z vinařství MiQueen',
    description: 'Nejnovější vína z vinařství MiQueen - objevte čerstvé ročníky a limitované edice z Mikulova. Nové sklizně moravských vín.',
    longDescription: 'Sledujte naše nejnovější přírůstky do sortimentu - nové ročníky oblíbených vín, limitované edice a experimentální cuvée. Vždy jako první ochutnejte to nejlepší z naší produkce.',
    keywords: ['nová vína', 'novinky', 'nový ročník', 'limitované edice', 'nová sklizeň', '2024', '2025'],
    faqItems: [
      {
        question: 'Kdy vychází nové ročníky vín?',
        answer: 'Bílá vína vydáváme obvykle v únoru-březnu po sklizni, červená vína po delším zrání, nejčastěji v létě.'
      }
    ]
  },
  {
    id: 'special',
    slug: 'mimosa-special',
    title: 'MiQueen Mimosa | Vinný koktejl se Sauvignonem',
    metaTitle: 'Mimosa | Vinařství MiQueen',
    h1: 'MiQueen Mimosa - Vinný koktejl',
    description: 'MiQueen Mimosa - svěží nápoj ze suchého Sauvignonu a 100% pomerančové šťávy ze Španělska. Ideální pro brunch, piknik a letní osvěžení.',
    longDescription: 'MiQueen Mimosa je jedinečná kombinace našeho suchého Sauvignonu s pomerančovou šťávou nejvyšší kvality. Připravený k servírování, ideální na brunch, zahradní party nebo jako osvěžující nápoj během horkých letních dnů.',
    keywords: ['Mimosa', 'vinný koktejl', 'pomerančová šťáva', 'Sauvignon', 'brunch', 'ready to drink', 'koktejl'],
    faqItems: [
      {
        question: 'Jak se Mimosa podává?',
        answer: 'Mimosa podáváme dobře vychlazenou, ideálně 6-8°C, nejlépe ve vysoké sklence s ledem a plátkem pomeranče.'
      }
    ]
  },
  {
    id: 'set',
    slug: 'darkove-sety',
    title: 'Dárkové sety vín MiQueen | Vinné dárky z Moravy',
    metaTitle: 'Dárkové sety | Vinařství MiQueen',
    h1: 'Dárkové sety prémiových vín',
    description: 'Dárkové sety prémiových vín z vinařství MiQueen. Ideální dárek pro milovníky kvalitních moravských vín. Firemní i soukromé dárky.',
    longDescription: 'Připravili jsme pro vás pečlivě vybrané dárkové sety našich nejlepších vín. Elegantní balení, kvalitní obsah - perfektní dárek pro firemní partnery, rodinné oslavy nebo jako poděkování.',
    keywords: ['dárkové sety', 'dárková balení', 'vinné dárky', 'sety vín', 'dárky pro muže', 'firemní dárky', 'vánoční dárky'],
    faqItems: [
      {
        question: 'Můžete připravit personalizovaný dárkový set?',
        answer: 'Ano, na přání sestavíme dárkový set podle vašich požadavků. Kontaktujte nás pro více informací.'
      }
    ]
  },
];

// Helper funkce pro mapování
const CATEGORY_MAP = new Map(CATEGORIES.map(cat => [cat.slug, cat]));
const SLUG_TO_ID = new Map(CATEGORIES.map(cat => [cat.slug, cat.id]));

// ============================================
// STATIC GENERATION - Pro SEO a rychlost
// ============================================

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

// ============================================
// DYNAMIC METADATA - Pro SEO
// ============================================

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = CATEGORY_MAP.get(categorySlug);

  if (!category) {
    return {
      title: 'Stránka nenalezena | MiQueen',
    };
  }

  // Získej vína pro tuto kategorii pro robots
  const categoryWines = wines.filter(w => {
    if (category.id === 'all') return true;
    if (category.id === 'new') return w.badge === 'new';
    return w.category === category.id;
  });

  const wineCount = categoryWines.length;

  return {
    title: category.metaTitle,
    description: category.description,
    keywords: category.keywords,
    authors: [{ name: 'Vinařství MiQueen' }],
    creator: 'Vinařství MiQueen',
    publisher: 'Vinařství MiQueen',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: category.title,
      description: category.description,
      url: `https://miqueen.cz/vina/${category.slug}`,
      siteName: 'Vinařství MiQueen',
      locale: 'cs_CZ',
      type: 'website',
      images: [
        {
          url: 'https://miqueen.cz/images/og-vina.jpg',
          width: 1200,
          height: 630,
          alt: category.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: category.title,
      description: category.description,
      images: ['https://miqueen.cz/images/og-vina.jpg'],
    },
    alternates: {
      canonical: `https://miqueen.cz/vina/${category.slug}`,
      languages: {
        'cs-CZ': `https://miqueen.cz/vina/${category.slug}`,
      },
    },
    other: {
      'wine-count': wineCount.toString(),
      'wine-region': 'Morava',
      'wine-origin': 'Mikulov',
    },
  };
}

// ============================================
// PAGE COMPONENT
// ============================================

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  
  // Validace kategorie
  if (!CATEGORY_MAP.has(categorySlug)) {
    notFound();
  }
  
  // Převod slug na ID
  const categoryId = SLUG_TO_ID.get(categorySlug)!;
  const category = CATEGORY_MAP.get(categorySlug)!;
  
  // Získej vína pro tuto kategorii
  const categoryWines = wines.filter(w => {
    if (categoryId === 'all') return true;
    if (categoryId === 'new') return w.badge === 'new';
    return w.category === categoryId;
  });

  // Připrav produkty pro Schema.org
  const products = categoryWines.slice(0, 10).map(wine => ({
    '@type': 'Product',
    name: wine.name,
    description: wine.description,
    image: `https://miqueen.cz${wine.image}`,
    offers: {
      '@type': 'Offer',
      price: wine.price,
      priceCurrency: 'CZK',
      availability: 'https://schema.org/InStock',
      url: wine.shopUrl,
    },
    brand: {
      '@type': 'Brand',
      name: 'MiQueen',
    },
    aggregateRating: wine.rating ? {
      '@type': 'AggregateRating',
      ratingValue: wine.rating,
      bestRating: 5,
      worstRating: 1,
    } : undefined,
  }));

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Domů',
        item: 'https://miqueen.cz',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Vína',
        item: 'https://miqueen.cz/vina',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.h1,
        item: `https://miqueen.cz/vina/${categorySlug}`,
      },
    ],
  };

  // Collection page schema
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.title,
    description: category.description,
    url: `https://miqueen.cz/vina/${categorySlug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: categoryWines.length,
      itemListElement: products,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'Vinařství MiQueen',
      url: 'https://miqueen.cz',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vinařství MiQueen',
      url: 'https://miqueen.cz',
      logo: {
        '@type': 'ImageObject',
        url: 'https://miqueen.cz/logo.png',
      },
    },
  };

  // FAQ Schema (pokud existují)
  const faqSchema = category.faqItems ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: category.faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      {/* Collection Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      {/* FAQ Schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
      
      <WineGridPage initialCategory={categoryId} />
    </>
  );
}

// ============================================
// EXPORT CONFIG - Důležité pro Next.js
// ============================================

export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = 3600; // Revalidace každou hodinu