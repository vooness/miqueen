// app/sitemap.ts
import { MetadataRoute } from 'next';
import { wines } from '@/app/components/wineData';
import { createSlug } from '@/app/lib/wineUtils';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://miqueen.cz';
  const currentDate = new Date().toISOString();
  
  // ============================================
  // HLAVNÍ STRÁNKY
  // ============================================
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/adoptuj-vinohrad`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/miqueen-mini`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/poukazy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pro-firmy`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/degustace`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakty`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // ============================================
  // KATEGORIE VÍN
  // ============================================
  const wineCategories = [
    { slug: 'vsechna-vina', priority: 0.9 },
    { slug: 'novinky', priority: 0.9 },
    { slug: 'bila-vina', priority: 0.85 },
    { slug: 'cervena-vina', priority: 0.85 },
    { slug: 'ruzova-vina', priority: 0.85 },
    { slug: 'perliva-vina', priority: 0.85 },
    { slug: 'mimosa-special', priority: 0.8 },
    { slug: 'darkove-sety', priority: 0.8 },
  ];

  const categoryPages: MetadataRoute.Sitemap = wineCategories.map((category) => ({
    url: `${baseUrl}/vina/${category.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: category.priority,
  }));

  // ============================================
  // JEDNOTLIVÁ VÍNA (PRODUKTY)
  // ============================================
  
  // Mapování kategorie na URL slug
  const getCategorySlug = (category: string): string => {
    const mapping: Record<string, string> = {
      'white': 'bila-vina',
      'red': 'cervena-vina',
      'rose': 'ruzova-vina',
      'sparkling': 'perliva-vina',
      'special': 'mimosa-special',
      'set': 'darkove-sety',
    };
    return mapping[category] || 'vsechna-vina';
  };

  const winePages: MetadataRoute.Sitemap = wines.map((wine) => {
    const categorySlug = getCategorySlug(wine.category);
    const wineSlug = createSlug(wine.name);
    
    // Vyšší priorita pro oceněná a bestseller vína
    let priority = 0.6;
    if (wine.badge === 'bestseller') priority = 0.8;
    if (wine.badge === 'award') priority = 0.75;
    if (wine.badge === 'new') priority = 0.7;
    
    return {
      url: `${baseUrl}/vina/${categorySlug}/${wineSlug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: priority,
    };
  });

  // ============================================
  // MIQUEEN MINI PRODUKTY
  // ============================================
  
  // Získej všechny mini produkty
  const getMiniWines = () => {
    return wines.filter(wine => {
      const isMiniVolume = wine.volume && wine.volume < 250;
      const isMiniName = wine.name.toLowerCase().includes('mini');
      const isSet = wine.category === 'set' || wine.id === 38 || wine.id === 39;
      return isMiniVolume || isMiniName || isSet;
    });
  };

  const miniWinePages: MetadataRoute.Sitemap = getMiniWines().map((wine) => {
    const wineSlug = createSlug(wine.name);
    
    // Vyšší priorita pro sety a novinky
    let priority = 0.65;
    if (wine.category === 'set') priority = 0.75;
    if (wine.badge === 'new') priority = 0.7;
    if (wine.badge === 'bestseller') priority = 0.8;
    
    return {
      url: `${baseUrl}/miqueen-mini/${wineSlug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: priority,
    };
  });

  // ============================================
  // SPOJENÍ VŠECH STRÁNEK
  // ============================================
  return [
    ...mainPages,
    ...categoryPages,
    ...winePages,
    ...miniWinePages, // ← PŘIDÁNO
  ];
}