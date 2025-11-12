// app/lib/wineUtils.ts
import { WineProduct } from '../components/wineData';

export const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

export const categoryToSlug = (category: string): string => {
  const mapping: Record<string, string> = {
    'white': 'bila',
    'red': 'cervena',
    'rose': 'ruzova',
    'sparkling': 'perliva',
    'special': 'mimosa',
    'set': 'sety'
  };
  return mapping[category] || category;
};

export const slugToCategory = (slug: string): string => {
  const mapping: Record<string, string> = {
    'bila': 'white',
    'cervena': 'red',
    'ruzova': 'rose',
    'perliva': 'sparkling',
    'mimosa': 'special',
    'sety': 'set'
  };
  return mapping[slug] || slug;
};

export const getCategoryName = (category: string): string => {
  const mapping: Record<string, string> = {
    'white': 'Bílá',
    'red': 'Červená',
    'rose': 'Růžová',
    'sparkling': 'Perlivá',
    'special': 'Mimosa',
    'set': 'Sety'
  };
  return mapping[category] || category;
};

export const getWineUrl = (wine: WineProduct): string => {
  const categorySlug = categoryToSlug(wine.category);
  const nameSlug = createSlug(wine.name);
  return `/vina/${categorySlug}/${nameSlug}`;
};

export const getCategoryUrl = (category: string): string => {
  const categorySlug = categoryToSlug(category);
  return `/vina/${categorySlug}`;
};

export const generateWineStructuredData = (wine: WineProduct) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": wine.name,
    "image": wine.image,
    "description": wine.description,
    "brand": {
      "@type": "Brand",
      "name": "MiQueen Winery"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.miqueen.cz${getWineUrl(wine)}`,
      "priceCurrency": "CZK",
      "price": wine.price,
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": wine.rating ? {
      "@type": "AggregateRating",
      "ratingValue": wine.rating,
      "bestRating": "5"
    } : undefined
  };
};

export const generateWineMetadata = (wine: WineProduct) => {
  const title = `${wine.name} | MiQueen Winery`;
  const description = `${wine.description.substring(0, 155)}... Cena: ${wine.price} Kč.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.miqueen.cz${getWineUrl(wine)}`,
      images: [{ url: wine.image }]
    }
  };
};

export const generateBreadcrumbs = (wine: WineProduct) => {
  return [
    { name: 'Domů', url: '/' },
    { name: 'Naše vína', url: '/vina' },
    { name: getCategoryName(wine.category), url: getCategoryUrl(wine.category) },
    { name: wine.name, url: getWineUrl(wine) }
  ];
};