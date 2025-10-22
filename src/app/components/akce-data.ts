// Interface pro akční produkt
export interface AkceProduct {
  id: string;
  name: string;
  category: 'white' | 'red' | 'rose' | 'sparkling';
  image: string;
  price: number;
  originalPrice: number;
  discount: number; // v procentech
  vintage: string;
  description: string;
  rating?: number;
  badge?: 'bestseller' | 'award' | 'new' | 'limited' | 'last-pieces';
  inStock: boolean;
  stockCount?: number;
  volume?: number;
  alcohol?: number;
  dryness?: 'suche' | 'polosuche' | 'polosladke' | 'sladke';
  quality?: 'kabinet' | 'pozdni-sber' | 'vyber-z-hroznu' | 'vyber-z-bobuli' | 'slama' | 'ledove';
  region?: string;
  servingTemp?: string;
  foodPairing?: string[];
  winemaker?: string;
  notes?: string;
  shopUrl: string;
  validUntil?: string; // datum ukončení akce
}

// MOMENTÁLNĚ ŽÁDNÉ AKCE
// Když budete chtít přidat akce, stačí naplnit toto pole produkty
export const akceWines: AkceProduct[] = [];

// PŘÍKLAD DAT PRO BUDOUCÍ AKCE (odkomentujte a upravte dle potřeby):
/*
export const akceWines: AkceProduct[] = [
  // BÍLÁ VÍNA - AKCE
  {
    id: 'akce-1',
    name: 'Rulandské bílé 2023',
    category: 'white',
    image: '/wines/rulandske-bile.jpg',
    price: 189,
    originalPrice: 249,
    discount: 24,
    vintage: '2023',
    description: 'Elegantní bílé víno s jemnými tóny citrusů a bílých květin. Ideální aperitiv s lehkou kyselinkou.',
    rating: 4.6,
    badge: 'bestseller',
    inStock: true,
    stockCount: 45,
    volume: 750,
    alcohol: 12.5,
    dryness: 'suche',
    quality: 'kabinet',
    region: 'Pálava',
    servingTemp: '8-10°C',
    foodPairing: ['Ryby', 'Drůbež', 'Sýry', 'Lehká předkrm'],
    winemaker: 'Vinařství MiQueen',
    notes: 'Skvělý poměr cena/výkon. Perfektní pro letní večery.',
    shopUrl: 'https://shop.miqueen.cz/rulandske-bile-2023',
    validUntil: '2025-12-31'
  },
  // ... další produkty
];
*/

// Helper funkce pro filtrování akčních vín
export const getAkceWinesByCategory = (category: string): AkceProduct[] => {
  if (category === 'all') return akceWines;
  return akceWines.filter(wine => wine.category === category);
};

export const getAkceWineCountByCategory = (category: string): number => {
  return getAkceWinesByCategory(category).length;
};

export const getAkceWineById = (id: string): AkceProduct | undefined => {
  return akceWines.find(wine => wine.id === id);
};

// Funkce pro získání největší slevy
export const getBiggestDiscount = (): number => {
  if (akceWines.length === 0) return 0;
  return Math.max(...akceWines.map(wine => wine.discount));
};

// Funkce pro získání vín, které končí brzy
export const getEndingSoonWines = (): AkceProduct[] => {
  if (akceWines.length === 0) return [];
  
  const today = new Date();
  const in30Days = new Date();
  in30Days.setDate(today.getDate() + 30);
  
  return akceWines.filter(wine => {
    if (!wine.validUntil) return false;
    const validDate = new Date(wine.validUntil);
    return validDate <= in30Days && validDate >= today;
  });
};

// Funkce pro kontrolu, zda jsou aktuálně nějaké akce
export const hasActivePromotions = (): boolean => {
  return akceWines.length > 0;
};

// Funkce pro získání počtu všech akčních vín
export const getTotalPromotionsCount = (): number => {
  return akceWines.length;
};