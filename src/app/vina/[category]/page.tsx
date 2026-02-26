// ============================================
// UMÍSTĚNÍ: src/app/vina/[category]/page.tsx
// ============================================

import WineGridPage from "@/app/components/winegrid";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { wines } from "@/app/components/wineData";

// ============================================
// KONFIGURACE KATEGORIÍ
// ============================================

interface CategoryConfig {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  h1: string;
  description: string;
  longDescription: string;
  keywords: string[];
  faqItems?: Array<{ question: string; answer: string }>;
}

const CATEGORIES: CategoryConfig[] = [
  {
    id: "all",
    slug: "vsechna-vina",
    title: "Všechna vína z vinařství MiQueen | Moravská vína z Mikulova",
    metaTitle: "Všechna vína | Vinařství MiQueen Mikulov",
    h1: "Všechna vína z vinařství MiQueen",
    description:
      "Kompletní nabídka prémiových moravských vín z vinařství MiQueen. Bílá, červená, růžová, perlivá vína a speciální edice z Mikulova.",
    longDescription:
      "Objevte kompletní sortiment prémiových moravských vín z vinařství MiQueen v Mikulově. Nabízíme bílá, červená, růžová a perlivá vína z oblastí Pálava a Znojmo.",
    keywords: [
      "moravská vína",
      "vinařství MiQueen",
      "vína z Mikulova",
      "kvalitní vína",
      "Pálava",
      "oceněná vína",
    ],
    faqItems: [
      {
        question: "Kde můžu ochutnat vína MiQueen?",
        answer:
          "Vína MiQueen můžete ochutnat přímo ve vinařství v Mikulově, na degustacích po celé České republice nebo si je objednat přes náš e-shop.",
      },
      {
        question: "Nabízíte dárkové balení vín?",
        answer:
          "Ano, nabízíme dárkové sety vín v různých cenových kategoriích, ideální pro firemní i soukromé dárky.",
      },
    ],
  },
  {
    id: "white",
    slug: "bila-vina",
    title: "Bílá vína MiQueen | Sauvignon, Ryzlink, Chardonnay z Pálavy",
    metaTitle: "Bílá vína | Vinařství MiQueen",
    h1: "Prémiová bílá vína z Pálavy",
    description:
      "Prémiová bílá vína z Pálavy – Sauvignon Blanc, Ryzlink rýnský, Chardonnay, Rulandské bílé z vinařství MiQueen v Mikulově.",
    longDescription:
      "Naše bílá vína pocházejí z nejlepších vinic v oblasti Pálava. Nabízíme širokou škálu od svěžích aromatických Sauvignonů přes minerální Ryzlinky až po plná Chardonnay.",
    keywords: [
      "bílá vína",
      "Sauvignon Blanc",
      "Ryzlink rýnský",
      "Chardonnay",
      "vína z Pálavy",
      "Rulandské bílé",
      "moravská bílá vína",
    ],
    faqItems: [
      {
        question: "Jaká bílá vína doporučujete k rybám?",
        answer:
          "K rybám doporučujeme naše Sauvignon Blanc nebo Ryzlink rýnský, které mají svěží kyselinu a citrusové tóny.",
      },
      {
        question: "Která bílá vína jsou suchá?",
        answer:
          "Většina našich bílých vín je suchých, zejména Sauvignon, Ryzlink a Chardonnay s obsahem zbytkového cukru do 9 g/l.",
      },
    ],
  },
  {
    id: "red",
    slug: "cervena-vina",
    title: "Červená vína MiQueen | André, Merlot, Cabernet z Mikulova",
    metaTitle: "Červená vína | Vinařství MiQueen",
    h1: "Červená vína z vinařství MiQueen",
    description:
      "Červená vína z vinařství MiQueen – André, Merlot, Cabernet Sauvignon, Zweigeltrebe a další červené odrůdy z Mikulova.",
    longDescription:
      "Naše červená vína kombinují tradiční vinařské postupy s moderními technologiemi. Díky pečlivému výběru hroznů a optimální délce zrání získávají plnost a harmonii.",
    keywords: [
      "červená vína",
      "André",
      "Merlot",
      "Cabernet Sauvignon",
      "moravská červená vína",
      "Zweigeltrebe",
      "Frankovka",
    ],
    faqItems: [
      {
        question: "Která červená vína doporučujete k masu?",
        answer:
          "K hovězímu doporučujeme Cabernet Sauvignon nebo Merlot, k vepřovému André nebo Zweigeltrebe.",
      },
      {
        question: "Jak dlouho vydrží otevřené červené víno?",
        answer:
          "Červené víno vydrží otevřené 3–5 dní, pokud ho uzavřete a uchováte v chladu.",
      },
    ],
  },
  {
    id: "rose",
    slug: "ruzova-vina",
    title: "Růžová vína MiQueen | Rosé vína z Mikulova",
    metaTitle: "Růžová vína | Vinařství MiQueen",
    h1: "Svěží růžová vína z Mikulova",
    description:
      "Růžová vína z vinařství MiQueen – svěží rosé vína z Mikulova ideální pro letní večery a oslavy. Elegantní moravská rosé.",
    longDescription:
      "Naše růžová vína jsou vyrobena metodou krátkého maceračního styku, která jim dodává krásnou barvu a svěží ovocnou chuť.",
    keywords: [
      "růžová vína",
      "rosé",
      "letní vína",
      "rosé Mikulov",
      "moravské rosé",
      "růžové víno",
    ],
    faqItems: [
      {
        question: "K čemu podávat růžové víno?",
        answer:
          "Růžové víno je univerzální – skvěle se hodí k salátům, lehkým předkrmům, grilovanému masu nebo jako osvěžující aperitiv.",
      },
    ],
  },
  {
    id: "sparkling",
    slug: "perliva-vina",
    title: "Perlivá vína MiQueen | Frizzante z tratě Za Cihelnou",
    metaTitle: "Perlivá vína Frizzante | Vinařství MiQueen",
    h1: "Perlivá vína Frizzante",
    description:
      "Perlivá vína Frizzante z tratě Za Cihelnou. Svěží a lehká vína s jemným přirozeným perláním ze srdce Pálavy.",
    longDescription:
      "Naše perlivá vína Frizzante vznikají přirozeným procesem druhotného kvašení. Jemné perlení a svěží chuť z nich dělají ideální společníka na oslavy.",
    keywords: [
      "perlivá vína",
      "Frizzante",
      "šumivá vína",
      "vína frizzante",
      "prosecco alternativa",
    ],
    faqItems: [
      {
        question: "Jaký je rozdíl mezi Frizzante a šumivým vínem?",
        answer:
          "Frizzante má nižší tlak než klasické šumivé víno (sekty), což mu dodává jemnější perlení a svěžejší charakter.",
      },
    ],
  },
  {
    id: "new",
    slug: "novinky",
    title: "Novinky vín MiQueen | Nové ročníky a limitované edice",
    metaTitle: "Novinky | Vinařství MiQueen",
    h1: "Nejnovější vína z vinařství MiQueen",
    description:
      "Nejnovější vína z vinařství MiQueen – čerstvé ročníky a limitované edice z Mikulova. Nové sklizně moravských vín.",
    longDescription:
      "Sledujte naše nejnovější přírůstky do sortimentu – nové ročníky oblíbených vín, limitované edice a experimentální cuvée.",
    keywords: [
      "nová vína",
      "novinky MiQueen",
      "nový ročník",
      "limitované edice",
      "nová sklizeň",
    ],
    faqItems: [
      {
        question: "Kdy vychází nové ročníky vín?",
        answer:
          "Bílá vína vydáváme obvykle v únoru–březnu po sklizni, červená vína po delším zrání, nejčastěji v létě.",
      },
    ],
  },
  {
    id: "special",
    slug: "mimosa-special",
    title: "MiQueen Mimosa | Vinný koktejl se Sauvignonem",
    metaTitle: "Mimosa | Vinařství MiQueen",
    h1: "MiQueen Mimosa – Vinný koktejl",
    description:
      "MiQueen Mimosa – svěží nápoj ze suchého Sauvignonu a 100% pomerančové šťávy ze Španělska. Ideální pro brunch a letní osvěžení.",
    longDescription:
      "MiQueen Mimosa je jedinečná kombinace našeho suchého Sauvignonu s pomerančovou šťávou nejvyšší kvality. Připravený k servírování.",
    keywords: [
      "Mimosa",
      "vinný koktejl",
      "pomerančová šťáva",
      "Sauvignon",
      "brunch",
      "ready to drink",
    ],
    faqItems: [
      {
        question: "Jak se Mimosa podává?",
        answer:
          "Mimosa podáváme dobře vychlazenou, ideálně 6–8 °C, nejlépe ve vysoké sklence s ledem a plátkem pomeranče.",
      },
    ],
  },
  {
    id: "set",
    slug: "darkove-sety",
    title: "Dárkové sety vín MiQueen | Vinné dárky z Moravy",
    metaTitle: "Dárkové sety | Vinařství MiQueen",
    h1: "Dárkové sety prémiových vín",
    description:
      "Dárkové sety prémiových vín z vinařství MiQueen. Ideální dárek pro milovníky kvalitních moravských vín. Firemní i soukromé dárky.",
    longDescription:
      "Pečlivě vybrané dárkové sety našich nejlepších vín. Elegantní balení, kvalitní obsah – perfektní dárek.",
    keywords: [
      "dárkové sety vín",
      "dárková balení",
      "vinné dárky",
      "firemní dárky víno",
      "vánoční dárky víno",
    ],
    faqItems: [
      {
        question: "Můžete připravit personalizovaný dárkový set?",
        answer:
          "Ano, na přání sestavíme dárkový set podle vašich požadavků. Kontaktujte nás pro více informací.",
      },
    ],
  },
  {
    id: "nealko",
    slug: "nealko-speciality",
    title:
      "Nealkoholické speciality MiQueen | Hroznové mošty a nealko nápoje",
    metaTitle: "Nealko speciality | Vinařství MiQueen",
    h1: "Nealkoholické speciality z vinice",
    description:
      "Nealkoholické speciality z vinařství MiQueen – hroznové mošty, nealko nápoje. Vhodné pro řidiče, sportovce a každého.",
    longDescription:
      "Dopřejte si jedinečný zážitek bez kapky alkoholu. Naše nealkoholické speciality přinášejí výběrové suroviny a autentickou chuť.",
    keywords: [
      "nealkoholické nápoje",
      "hroznový mošt",
      "nealko víno",
      "bez alkoholu",
      "pro řidiče",
      "zdravé nápoje",
    ],
    faqItems: [
      {
        question: "Obsahují vaše nealko produkty přidaný cukr?",
        answer:
          "Ne, naše nealkoholické speciality neobsahují žádný přidaný cukr. Pouze přírodní cukry z hroznů.",
      },
      {
        question: "Pro koho jsou nealko speciality vhodné?",
        answer:
          "Pro řidiče, sportovce, těhotné ženy a každého, kdo hledá kvalitní osvěžení bez alkoholu.",
      },
    ],
  },
];

// Helper mapy
const CATEGORY_MAP = new Map(CATEGORIES.map((cat) => [cat.slug, cat]));
const SLUG_TO_ID = new Map(CATEGORIES.map((cat) => [cat.slug, cat.id]));

// ============================================
// STATIC GENERATION
// ============================================

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

// ============================================
// METADATA
// ============================================

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = CATEGORY_MAP.get(categorySlug);

  if (!category) {
    return { title: "Stránka nenalezena | MiQueen" };
  }

  return {
    title: category.metaTitle,
    description: category.description,
    keywords: category.keywords,

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      title: category.title,
      description: category.description,
      url: `https://miqueen.cz/vina/${category.slug}`,
      siteName: "Vinařství MiQueen",
      locale: "cs_CZ",
      type: "website",
      images: [
        {
          url: "https://miqueen.cz/og-wine-shop.jpg",
          width: 1200,
          height: 630,
          alt: category.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: category.title,
      description: category.description,
      images: ["https://miqueen.cz/og-wine-shop.jpg"],
    },

    alternates: {
      canonical: `https://miqueen.cz/vina/${category.slug}`,
    },
  };
}

// ============================================
// PAGE COMPONENT
// ============================================

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;

  if (!CATEGORY_MAP.has(categorySlug)) {
    notFound();
  }

  const categoryId = SLUG_TO_ID.get(categorySlug)!;
  const category = CATEGORY_MAP.get(categorySlug)!;

  // Získej vína pro tuto kategorii
  const categoryWines = wines.filter((w) => {
    if (categoryId === "all") return true;
    if (categoryId === "new") return w.badge === "new";
    return w.category === categoryId;
  });

  // ────────────────────────────────────────
  // JSON-LD — jeden @graph blok
  // ────────────────────────────────────────
  //
  // DŮLEŽITÉ ZMĚNY oproti originálu:
  //
  // 1. Product objekty v ItemList mají POUZE základní pole.
  //    Kompletní Product schema (s sku, aggregateRating + reviewCount,
  //    detailním offers.url) patří na DETAIL stránku produktu.
  //    Neúplné Product schema na listing stránce = GSC chyby.
  //
  // 2. ItemList používá správný ListItem wrapper s position.
  //
  // 3. Jeden @graph místo 3 separátních <script> bloků.
  //
  // 4. FAQPage je OK na kategorii (dedikovaný obsah), ale pouze
  //    pokud jsou faqItems definované.

  const itemListElements = categoryWines.slice(0, 12).map((wine, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: wine.shopUrl,
    name: wine.name,
  }));

  const graph: Record<string, unknown>[] = [
    // ─── CollectionPage ───
    {
      "@type": "CollectionPage",
      "@id": `https://miqueen.cz/vina/${categorySlug}/#webpage`,
      url: `https://miqueen.cz/vina/${categorySlug}`,
      name: category.title,
      description: category.description,
      isPartOf: { "@id": "https://miqueen.cz/#website" },
      about: { "@id": "https://miqueen.cz/#winery" },
      inLanguage: "cs-CZ",
    },

    // ─── ItemList (seznam vín bez neúplných Product schémat) ───
    {
      "@type": "ItemList",
      name: category.h1,
      numberOfItems: categoryWines.length,
      itemListElement: itemListElements,
    },

    // ─── BreadcrumbList ───
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Domů",
          item: "https://miqueen.cz",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Vína",
          item: "https://miqueen.cz/vina",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: category.h1,
          item: `https://miqueen.cz/vina/${categorySlug}`,
        },
      ],
    },
  ];

  // ─── FAQPage (pouze pokud má kategorie FAQ) ───
  if (category.faqItems && category.faqItems.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: category.faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <WineGridPage initialCategory={categoryId} />
    </>
  );
}

// ============================================
// CONFIG
// ============================================

export const dynamicParams = false;