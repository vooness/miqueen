// wineData.ts - FINÁLNÍ KOMPLETNÍ DATABÁZE VŠECH 40 VÍN MiQueen
// Aktualizováno podle shop.miqueen.cz - říjen/listopad 2024
// 40 produktů se správnými odkazy a hodnotami zbytkového cukru
// ŘAZENÍ: OD NEJSUŠŠÍCH (nejméně sladkých) PO NEJSLADŠÍ

export interface WineProduct {
  id: number;
  name: string;
  variety: string;
  grapeVariety: string;
  vintage: number;
  price: number;
  rating?: number;
  description: string;
  category: 'white' | 'red' | 'rose' | 'sparkling' | 'special' | 'set';
  image: string;
  shopUrl: string;
  badge?: 'new' | 'bestseller' | 'award' | 'limited' | 'tip';
  quality?: 'kabinet' | 'pozdni-sber' | 'vyber-z-hroznu' | 'vyber-z-bobuli' | 'moravske-zemske';
  dryness?: 'suche' | 'polosuche' | 'polosladke' | 'sladke';
  alcohol?: number;
  volume?: number;
  region?: string;
  servingTemp?: string;
  foodPairing?: string[];
  winemaker?: string;
  notes?: string;
  sku?: string;
  residualSugar?: number | null; // g/l - pro řazení od nejsušších po nejsladší
}

export const wines: WineProduct[] = [
  // ========== MINI VÍNA (187ml a 200ml) - 10 produktů ==========
  
  // ID 1: Cuvée Hrdý Dudek 2024 mini
  {
    id: 1,
    name: "Cuvée Hrdý Dudek 2024 mini",
    variety: "Cuvée",
    grapeVariety: "Ryzlink vlašský 50%, Ryzlink rýnský 50%",
    vintage: 2024,
    price: 69,
    description: "Cuvée dudek je mužná kombinace dvou ryzlinkových odrůd, ryzlinku vlašského a ryzlinku rýnského.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/201_navrh-bez-nazvu--97.png?68fa77f5',
    shopUrl: 'https://shop.miqueen.cz/cuvee-hrdy-dudek-2024-mini-pozdni-sber-suche/',
    badge: 'new',
    quality: 'pozdni-sber',
    dryness: 'suche',
    alcohol: 13.5,
    volume: 187,
    region: 'Mikulovská podoblast, Mikulov',
    servingTemp: '10-12°C',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ036',
    residualSugar: 3.0
  },
  
  // ID 2: Cuvée Slastná Dudková 2024 mini
  {
    id: 2,
    name: "Cuvée Slastná Dudková 2024 mini",
    variety: "Cuvée",
    grapeVariety: "Ryzlink vlašský 70%, Tramín červený 30%",
    vintage: 2024,
    price: 69,
    description: "Cuvée odrůd ryzlink vlašský a tramín červený. Víno je polosladké, na hranici s polosuchým. Lahodné a zkrátka něžné.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/204_navrh-bez-nazvu--99.png?68fa7a33',
    shopUrl: 'https://shop.miqueen.cz/cuvee-slastna-dudkova-2024-mini-pozdni-sber-polosladke/',
    badge: 'new',
    quality: 'pozdni-sber',
    dryness: 'polosladke',
    alcohol: 13.5,
    volume: 187,
    region: 'Mikulovská podoblast, Mikulov',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ037',
    residualSugar: 15.8
  },
  
  // ID 3: Frankovka 2024 mini
  {
    id: 3,
    name: "Frankovka 2024 mini",
    variety: "Frankovka",
    grapeVariety: "Frankovka",
    vintage: 2024,
    price: 69,
    description: "Ušlechtilé červené víno s rubínově červenou barvou a typickou vůní po peckovém ovoci. V chuti je plné, jemně kořenité, s příjemnými tříslovinami.",
    category: 'red',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/207_navrh-bez-nazvu--98.png?68fa7c5e',
    shopUrl: 'https://shop.miqueen.cz/frankovka-2024-mini-pozdni-sber-suche/',
    badge: 'new',
    quality: 'pozdni-sber',
    dryness: 'suche',
    alcohol: 13,
    volume: 187,
    region: 'Mikulovská podoblast, Mikulov',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ038',
    residualSugar: 0.4
  },
  
  // ID 4: Frankovka Rosé 2024 mini
  {
    id: 4,
    name: "Frankovka Rosé 2024 mini",
    variety: "Frankovka Rosé",
    grapeVariety: "Frankovka",
    vintage: 2024,
    price: 69,
    description: "Jemné a svěží víno s krásnou růžovou barvou a ovocnou vůní po jahodách, malinách a květinových tónech. Chuť je harmonická, příjemně nasládlá.",
    category: 'rose',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/210_navrh-bez-nazvu--100.png?68fa7f81',
    shopUrl: 'https://shop.miqueen.cz/frankovka-rose---mini-pozdni-sber---polosladke-2024/',
    badge: 'new',
    quality: 'pozdni-sber',
    dryness: 'polosladke',
    alcohol: 11.5,
    volume: 187,
    region: 'Mikulovská podoblast, Mikulov',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ039',
    residualSugar: 23.7
  },
  
  // ID 5: Pinot Noir 2022 mini
  {
    id: 5,
    name: "Pinot Noir 2022 mini",
    variety: "Pinot Noir",
    grapeVariety: "Pinot Noir",
    vintage: 2022,
    price: 69,
    rating: 4.8,
    description: "Nádherné víno cihlovo-rubínové barvy. Ve vůni nalezneme marmeládové a borůvkové tóny. Chuť je výrazně mnohovrstvá s tóny lesního ovoce, sušených brusinek, hořké čokolády s nekončícím závěrem.",
    category: 'red',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/120_pn22-mini.png',
    shopUrl: 'https://shop.miqueen.cz/pinot-noir-2022-mini--vyber-z-hroznu---suche-1-ks/',
    quality: 'vyber-z-hroznu',
    dryness: 'suche',
    alcohol: 15.5,
    volume: 187,
    region: 'Mikulovská podoblast, Perná',
    winemaker: 'MiQueen Winery',
    notes: 'Balení po 24ks',
    sku: 'VMQ016',
    residualSugar: 0.9
  },
  
  // ID 6: Rulandské šedé 2023 mini
  {
    id: 6,
    name: "Rulandské šedé 2023 mini",
    variety: "Rulandské šedé",
    grapeVariety: "Rulandské šedé",
    vintage: 2023,
    price: 69,
    rating: 4.5,
    description: "Nádherné víno jemně narůžovělé barvy. Vůně je svěží s jemným chlebovinkovým aroma. Chuť je plná, harmonická s příjemnými minerálními tóny v závěru. Převládají zde tóny gdoulí a zralých meruněk.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/87_rs23-mini.png',
    shopUrl: 'https://shop.miqueen.cz/rulandske-sede-2023-2/',
    quality: 'vyber-z-hroznu',
    dryness: 'polosladke',
    alcohol: 13.5,
    volume: 187,
    region: 'Mikulovská podoblast, Mikulov',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ017',
    residualSugar: 31.7
  },
  
  // ID 7: Ryzlink vlašský 2023 mini
  {
    id: 7,
    name: "Ryzlink vlašský 2023 mini",
    variety: "Ryzlink vlašský",
    grapeVariety: "Ryzlink vlašský",
    vintage: 2023,
    price: 69,
    rating: 4.5,
    description: "Nádherné víno žluto-zlatavé barvy vás zaujme příjemnou vůní červeného grepu a sušených bylinek. Chuť je výrazně minerální s velmi dlouhou a plnou dochutí.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/81_rv23-mini.png',
    shopUrl: 'https://shop.miqueen.cz/ryzlink-vlassky-2023-2/',
    quality: 'pozdni-sber',
    dryness: 'suche',
    alcohol: 12.5,
    volume: 187,
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ018',
    residualSugar: 5.2
  },
  
  // ID 8: Frizzante Frankovka Rosé 2024 mini
  {
    id: 8,
    name: "Frizzante Frankovka Rosé 2024 mini",
    variety: "Frankovka Rosé",
    grapeVariety: "Frankovka",
    vintage: 2024,
    price: 79,
    description: "Lehké a osvěžující perlivé víno s nádhernou růžovou barvou a svůdnou vůní po jahodách, malinách a květových tónech. V chuti je harmonické, šťavnaté a příjemně nasládlé.",
    category: 'sparkling',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/213_navrh-bez-nazvu-2025-10-23t212525-731.png?68fa812e',
    shopUrl: 'https://shop.miqueen.cz/frizzante-frankovka-rose-2024---mini-moravske-zemske--polosladke/',
    badge: 'new',
    quality: 'moravske-zemske',
    dryness: 'polosladke',
    alcohol: 11.5,
    volume: 187,
    region: 'Mikulovská podoblast, Mikulov',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ040',
    residualSugar: 23.7
  },
  
  // ID 9: Frizzante Ryzlink vlašský 2023 mini
  {
    id: 9,
    name: "Frizzante Ryzlink vlašský 2023 mini",
    variety: "Ryzlink vlašský",
    grapeVariety: "Ryzlink vlašský",
    vintage: 2023,
    price: 79,
    rating: 4.5,
    description: "Nádherné víno žluto-zlatavé barvy vás zaujme příjemnou vůní červeného grepu a sušených bylinek. Chuť je výrazně minerální s velmi dlouhou, plnou dochutí a lehounkou hořkostí v závěru.",
    category: 'sparkling',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/102_navrh-bez-nazvu--89.png?68fa71dc',
    shopUrl: 'https://shop.miqueen.cz/frizzante-ryzlink-vlassky-2023-mini-moravske-zemske-polosuche-1-ks/',
    quality: 'moravske-zemske',
    dryness: 'polosuche',
    alcohol: 11,
    volume: 187,
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ019',
    residualSugar: 6.5
  },
  
  // ID 10: MIMOSA mini
  {
    id: 10,
    name: "MIMOSA mini",
    variety: "Sauvignon Frizzante + 100% pomerančová šťáva",
    grapeVariety: "Sauvignon",
    vintage: 2024,
    price: 89,
    rating: 4.5,
    description: "MIMOSA v kombinaci suchého Sauvignonu Frizzante a 100% pomerančové šťávy má svěží, lehce citrusovou chuť s výraznou kyselinkou. Vínová složka dodává suchý, minerální charakter.",
    category: 'special',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/159_navrh-bez-nazvu--43.png',
    shopUrl: 'https://shop.miqueen.cz/mimosa-mini/',
    alcohol: 8,
    volume: 200,
    badge: 'tip',
    servingTemp: '4-6°C',
    winemaker: 'MiQueen Winery',
    residualSugar: null
  },

  // ========== FRIZZANTE (750ml) - 5 produktů ==========
  
 
  
  // ID 12: Frizzante Ryzlink vlašský 2023
  {
    id: 12,
    name: "Frizzante Ryzlink vlašský 2023",
    variety: "Ryzlink vlašský",
    grapeVariety: "Ryzlink vlašský",
    vintage: 2023,
    price: 189,
    rating: 4.6,
    description: "Nádherné jemně perlivé víno žluto-zlatavé barvy. Vůně je svěží s jemným ovocným aroma a lehkou kořenitostí. Chuť je mohutná s velmi jemným zbytkovým cukrem, harmonická s příjemnými tóny červeného grepu a sušených bylinek.",
    category: 'sparkling',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/123_navrh-bez-nazvu--10.png',
    shopUrl: 'https://shop.miqueen.cz/frizzante-ryzlink-vlassky-2023-moravske-zemske--polosuche/',
    quality: 'moravske-zemske',
    dryness: 'polosuche',
    alcohol: 12.5,
    volume: 750,
    badge: 'new',
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ020',
    residualSugar: 6.5
  },
  
  // ID 13: Frankovka Klaret 2023
  {
    id: 13,
    name: "Frankovka Klaret 2023",
    variety: "Frankovka",
    grapeVariety: "Frankovka",
    vintage: 2023,
    price: 199,
    rating: 4.6,
    description: "Vinařství MiQueen, FRANKOVKA KLARET 2023 - Nádherný jemně narůžovělý klaret vznikl okamžitým lisováním, tedy jako u bílého vína. Svěžost lesního ovoce s tóny bílého rybízu.",
    category: 'rose',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/54_fk23-fake.png',
    shopUrl: 'https://shop.miqueen.cz/frankovka-klaret-2023/',
    quality: 'pozdni-sber',
    dryness: 'suche',
    alcohol: 11,
    volume: 750,
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    residualSugar: 7.6
  },
  
  // ID 14: Frizzante Frankovka Rosé 2023
  {
    id: 14,
    name: "Frizzante Frankovka Rosé 2023",
    variety: "Frankovka",
    grapeVariety: "Frankovka",
    vintage: 2023,
    price: 199,
    rating: 4.8,
    description: "Nádherné perlivé víno jemně růžové barvy. Ve vůni nalezneme tóny malin, jahod či ostružin. Chuť vína je svěží, plná lesního ovoce. Příjemný zbytkový cukr je zde dokonale sladěn.",
    category: 'sparkling',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/60-1_ffr23-2.png',
    shopUrl: 'https://shop.miqueen.cz/frizzante-frankovka-rose-2023/',
    quality: 'moravske-zemske',
    dryness: 'polosuche',
    alcohol: 11,
    volume: 750,
    badge: 'tip',
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ008',
    residualSugar: 9.2
  },
  
  // ID 15: Frizzante Frankovka Rosé 2024
  {
    id: 15,
    name: "Frizzante Frankovka Rosé 2024",
    variety: "Frankovka Rosé",
    grapeVariety: "Frankovka",
    vintage: 2024,
    price: 199,
    description: "Lehké a osvěžující perlivé víno s nádhernou růžovou barvou a svůdnou vůní po jahodách, malinách a květových tónech. V chuti je harmonické, šťavnaté a příjemně nasládlé, s dokonalým perlením.",
    category: 'sparkling',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/195_navrh-bez-nazvu--84.png?68fa6b03',
    shopUrl: 'https://shop.miqueen.cz/frizzante-frankovka-rose-2024---moravske-zemske--polosladke/',
    badge: 'new',
    quality: 'moravske-zemske',
    dryness: 'polosladke',
    alcohol: 11.5,
    volume: 750,
    region: 'Mikulovská podoblast, Mikulov',
    winemaker: 'MiQueen Winery',
    residualSugar: 23.7
  },

  // ========== BÍLÁ VÍNA (750ml) - 14 produktů ==========
  
  // ID 16: Chardonnay 2023
  {
    id: 16,
    name: "Chardonnay 2023",
    variety: "Chardonnay",
    grapeVariety: "Chardonnay",
    vintage: 2023,
    price: 199,
    rating: 4.8,
    description: "Víno zlatavé barvy vás zaujme čistými tóny sušeného banánu, manga a máslové hrušky. V chuti převládá žlutý meloun s tóny litchi. Závěr vína je mohutný plný pálavské minerality.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/1-1_ch23-zostreno-ocenena.png',
    shopUrl: 'https://shop.miqueen.cz/chardonnay-2023/',
    quality: 'pozdni-sber',
    dryness: 'suche',
    alcohol: 13.5,
    volume: 750,
    badge: 'award',
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    residualSugar: 1.4
  },
  
  // ID 17: Frankovka 2023 (červené)
  {
    id: 17,
    name: "Frankovka 2023",
    variety: "Frankovka",
    grapeVariety: "Frankovka",
    vintage: 2023,
    price: 229,
    rating: 4.5,
    description: "Víno nádherné barvy s rubínovými odlesky. Svěží ovocná vůně s třešňovými tóny je v harmonickém souladu s chutí umocněnou tříslovinou. V chuti dominují přezrálé višně a ostružiny.",
    category: 'red',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/114_fr-png.png',
    shopUrl: 'https://shop.miqueen.cz/frankovka-2023-vyber-z-hroznu-suche/',
    quality: 'vyber-z-hroznu',
    dryness: 'suche',
    alcohol: 13,
    volume: 750,
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ021',
    residualSugar: 0.4
  },
  
  // ID 18: Frankovka Rosé 2024 (750ml)
  {
    id: 18,
    name: "Frankovka Rosé 2024",
    variety: "Frankovka Rosé",
    grapeVariety: "Frankovka",
    vintage: 2024,
    price: 249,
    description: "Jemné a svěží víno s krásnou růžovou barvou a ovocnou vůní po jahodách, malinách a květinových tónech. Chuť je harmonická, příjemně nasládlá, s lahodnou kyselinkou.",
    category: 'rose',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/192_navrh-bez-nazvu--81.png?68fa67b9',
    shopUrl: 'https://shop.miqueen.cz/frankovka-rose---pozdni-sber---polosladke-2024/',
    badge: 'new',
    quality: 'pozdni-sber',
    dryness: 'polosladke',
    alcohol: 12,
    volume: 750,
    region: 'Mikulovská podoblast, Mikulov',
    winemaker: 'MiQueen Winery',
    residualSugar: 23.7
  },
  
  // ID 19: Ryzlink vlašský 2023 - polosuchý
  {
    id: 19,
    name: "Ryzlink vlašský 2023 - polosuchý",
    variety: "Ryzlink vlašský",
    grapeVariety: "Ryzlink vlašský",
    vintage: 2023,
    price: 229,
    rating: 4.6,
    description: "Nádherné víno žluto-zlatavé barvy vás zaujme příjemnou vůní červeného grepu a sušených bylinek. Chuť je výrazně minerální s velmi dlouhou, plnou dochutí a lehounkou hořkostí v závěru.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/49_rv23-1-suchy-zostreno-ocenena.png',
    shopUrl: 'https://shop.miqueen.cz/ryzlink-vlassky/',
    quality: 'pozdni-sber',
    dryness: 'polosuche',
    alcohol: 12.5,
    volume: 750,
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ012',
    residualSugar: 6.5
  },
  
  // ID 20: Ryzlink vlašský 2023
  {
    id: 20,
    name: "Ryzlink vlašský 2023",
    variety: "Ryzlink vlašský",
    grapeVariety: "Ryzlink vlašský",
    vintage: 2023,
    price: 229,
    rating: 4.7,
    description: "Nádherné víno žluto-zlatavé barvy vás zaujme příjemnou vůní červeného grepu a sušených bylinek. Chuť je výrazně minerální s velmi dlouhou a plnou dochutí.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/75-1_rv23-1-suchy-zostreno-ocenena.png',
    shopUrl: 'https://shop.miqueen.cz/ryzlink-vlassky-2023/',
    quality: 'pozdni-sber',
    dryness: 'suche',
    alcohol: 12,
    volume: 750,
    badge: 'award',
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ014',
    residualSugar: 5.2
  },
  
  // ID 21: Sauvignon 2023
  {
    id: 21,
    name: "Sauvignon 2023",
    variety: "Sauvignon",
    grapeVariety: "Sauvignon",
    vintage: 2023,
    price: 229,
    rating: 4.7,
    description: "Svěží víno zlato-zelenkavé barvy vás zaujme příjemnou vůní čerstvých meruněk, grepu a černého rybízu. Chuť je středně minerální s velmi dlouhou a plnou dochutí.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/11_scg231-suchy-zostreno-ocenena.png',
    shopUrl: 'https://shop.miqueen.cz/sauvignon-2023/',
    quality: 'pozdni-sber',
    dryness: 'suche',
    alcohol: 13.5,
    volume: 750,
    badge: 'award',
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ011',
    residualSugar: 4.6
  },
  
  // ID 22: Sauvignon 2023 - výběr z hroznů
  {
    id: 22,
    name: "Sauvignon 2023 - výběr z hroznů",
    variety: "Sauvignon",
    grapeVariety: "Sauvignon",
    vintage: 2023,
    price: 229,
    rating: 4.6,
    description: "Nádherné víno světle-zelenkavé barvy vás zaujme nevtíravou vůní bezu, grepu a černého rybízu. Dokonalé prokvašení na téměř nulu dodává vínu osobitý styl a výrazná mineralita.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/84-1_sv23-zostreno.png',
    shopUrl: 'https://shop.miqueen.cz/sauvignon-2023-2/',
    quality: 'vyber-z-hroznu',
    dryness: 'suche',
    alcohol: 13.5,
    volume: 750,
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    residualSugar: 0.3
  },
  
  // ID 23: Frankovka Rosé 2023
  {
    id: 23,
    name: "Frankovka Rosé 2023",
    variety: "Frankovka",
    grapeVariety: "Frankovka",
    vintage: 2023,
    price: 249,
    rating: 4.7,
    description: "Nádherné víno jemně růžové barvy. Ve vůni nalezneme tóny malin, jahod či borůvek. Chuť vína je svěží, plná bobulového a lesního ovoce. Příjemný zbytkový cukr je zde dokonale vyvážen.",
    category: 'rose',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/43-1_fr23-zostreno-ocenena.png',
    shopUrl: 'https://shop.miqueen.cz/frankovka-rose-2023/',
    quality: 'pozdni-sber',
    dryness: 'polosuche',
    alcohol: 12,
    volume: 750,
    badge: 'tip',
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ010',
    residualSugar: 9.2
  },
  
  // ID 24: Rulandské bílé 2024
  {
    id: 24,
    name: "Rulandské bílé 2024",
    variety: "Rulandské bílé",
    grapeVariety: "Rulandské bílé",
    vintage: 2024,
    price: 299,
    description: "Krásné víno zlatavo-zelenkavé barvy s jemnou vůní vyzrálé limetky doplněnou o medově nasládlý tón. Víno je krásně minerální se svěží kyselinkou má citrusový závěr připomínající žlutý grep.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/198_navrh-bez-nazvu--88.png?68fa7101',
    shopUrl: 'https://shop.miqueen.cz/rulandske-bile-2024---pozdni-sber---suche/',
    badge: 'new',
    quality: 'pozdni-sber',
    dryness: 'suche',
    alcohol: 12.5,
    volume: 750,
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    residualSugar: 3.5
  },
  
  // ID 25: Rulandské šedé 2023
  {
    id: 25,
    name: "Rulandské šedé 2023",
    variety: "Rulandské šedé",
    grapeVariety: "Rulandské šedé",
    vintage: 2023,
    price: 249,
    rating: 4.6,
    description: "Nádherné víno jemně narůžovělé barvy. Vůně je svěží s jemným chlebovinkovým aroma. Chuť je plná, harmonická s příjemnými minerálními tóny v závěru. Převládají zde tóny gdoulí a zralých meruněk.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/72_rs23-1-zostreno-ocenena.png',
    shopUrl: 'https://shop.miqueen.cz/rulandske-sede-2023/',
    quality: 'vyber-z-hroznu',
    dryness: 'polosladke',
    alcohol: 13.5,
    volume: 750,
    badge: 'award',
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ013',
    residualSugar: 31.7
  },
  
  // ID 26: Rulandské šedé 2024
  {
    id: 26,
    name: "Rulandské šedé 2024",
    variety: "Rulandské šedé",
    grapeVariety: "Rulandské šedé",
    vintage: 2024,
    price: 249,
    description: "Víno jemně narůžovělé barvy s elegantní vůní zralých meruněk a jemným chlebovinkovým aroma. Chuť je plná, harmonická s minerálním závěrem.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/186_navrh-bez-nazvu--86.png?68fa5e32',
    shopUrl: 'https://shop.miqueen.cz/rulandske-sede-2024---vyber-z-hroznu---polosladke/',
    badge: 'new',
    quality: 'vyber-z-hroznu',
    dryness: 'polosladke',
    alcohol: 13.5,
    volume: 750,
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    residualSugar: 32.1
  },
  
  // ID 27: Ryzlink rýnský 2023 - polosuchý
  {
    id: 27,
    name: "Ryzlink rýnský 2023 - polosuchý",
    variety: "Ryzlink rýnský",
    grapeVariety: "Ryzlink rýnský",
    vintage: 2023,
    price: 249,
    rating: 4.8,
    description: "Nádherné víno zlatavé barvy. Vůně je svěží s jemným ovocným aroma a lehkou kořenitostí. Chuť je mohutná s velmi jemným zbytkovým cukrem, harmonická s příjemnými tóny mandarinek.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/51-1_rr23-1-polosuchy-zostreno-ocenena.png',
    shopUrl: 'https://shop.miqueen.cz/ryzlink-rynsky-2023-2/',
    quality: 'pozdni-sber',
    dryness: 'polosuche',
    alcohol: 12,
    volume: 750,
    badge: 'tip',
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ006',
    residualSugar: 14.5
  },
  
  // ID 28: Ryzlink rýnský 2024
  {
    id: 28,
    name: "Ryzlink rýnský 2024",
    variety: "Ryzlink rýnský",
    grapeVariety: "Ryzlink rýnský",
    vintage: 2024,
    price: 249,
    description: "Víno se světlou zlatavě zelenkavou barvou s výraznou vůní lipového květu, citrusů a zralých broskví. V chuti je plné, svěží a minerální, s typickou jiskřivou kyselinkou.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/180_navrh-bez-nazvu--81.png?68fa54f4',
    shopUrl: 'https://shop.miqueen.cz/ryzlink-rynsky-2024---pozdni-sber---suche/',
    badge: 'new',
    quality: 'pozdni-sber',
    dryness: 'suche',
    alcohol: 13.5,
    volume: 750,
    region: 'Mikulovská podoblast, Mikulov',
    winemaker: 'MiQueen Winery',
    residualSugar: 2.2
  },
  
  // ID 29: Ryzlink vlašský 2024
  {
    id: 29,
    name: "Ryzlink vlašský 2024",
    variety: "Ryzlink vlašský",
    grapeVariety: "Ryzlink vlašský",
    vintage: 2024,
    price: 189,
    description: "Víno čisté a svěží, se světle žlutou barvou se zelenkavými odlesky. Vůně je jemná, minerální, s tóny citrusů a lučních květů. Chuť je lehká, živá, vyvážená.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/183_navrh-bez-nazvu--84.png?68fa58e2',
    shopUrl: 'https://shop.miqueen.cz/ryzlink-vlassky-2024---pozdni-sber---suche/',
    badge: 'new',
    quality: 'pozdni-sber',
    dryness: 'suche',
    alcohol: 13.5,
    volume: 750,
    region: 'Mikulovská podoblast, Mikulov',
    winemaker: 'MiQueen Winery',
    residualSugar: 4.6
  },

  // ID 30: Sauvignon 2024
  {
    id: 30,
    name: "Sauvignon 2024",
    variety: "Sauvignon",
    grapeVariety: "Sauvignon",
    vintage: 2024,
    price: 229,
    description: "Svěží a aromatické víno s jiskřivě světle žlutou barvou a výraznou vůní po angreštu, černém bezu, broskvích a čerstvě posečené trávě. V chuti je živé, šťavnaté a harmonické.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/177_navrh-bez-nazvu--88.png?68fa4ff4',
    shopUrl: 'https://shop.miqueen.cz/sauvignon-2024---pozdni-sber---suche/',
    badge: 'new',
    quality: 'pozdni-sber',
    dryness: 'suche',
    alcohol: 14,
    volume: 750,
    region: 'Mikulovská podoblast, Mikulov',
    winemaker: 'MiQueen Winery',
    residualSugar: 4.9
  },
  
  // ID 31: Tramín červený 2023
  {
    id: 31,
    name: "Tramín červený 2023",
    variety: "Tramín červený",
    grapeVariety: "Tramín červený",
    vintage: 2023,
    price: 249,
    rating: 4.9,
    description: "Barva vína je zelenožlutá se slámovými odlesky. Víno má výraznou kořenitou květinovou vůni s tóny čajové růže. Chuť je komplexní, plná zakončená svěží hravou kyselinkou.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/57-1_tc23-zostreno-ocenena.png',
    shopUrl: 'https://shop.miqueen.cz/tramin-cerveny-2023/',
    quality: 'vyber-z-hroznu',
    dryness: 'polosladke',
    alcohol: 13,
    volume: 750,
    badge: 'tip',
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ005',
    residualSugar: 41.5
  },
  
  // ID 32: Tramín červený 2024
  {
    id: 32,
    name: "Tramín červený 2024",
    variety: "Tramín červený",
    grapeVariety: "Tramín červený",
    vintage: 2024,
    price: 249,
    description: "Ušlechtilé aromatické víno se zlatavě žlutou barvou a výraznou vůní růží, koření a exotického ovoce. V chuti je plné, sametové a harmonické.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/189_navrh-bez-nazvu--86.png?68fa6e4b',
    shopUrl: 'https://shop.miqueen.cz/tramin-cerveny-2024---vyber-z-hroznu---polosladke/',
    badge: 'new',
    quality: 'vyber-z-hroznu',
    dryness: 'polosladke',
    alcohol: 13,
    volume: 750,
    region: 'Mikulovská podoblast, Mikulov',
    winemaker: 'MiQueen Winery',
    residualSugar: 28.1
  },

  // ID 33: Cuvée Hrdý Dudek 2024
  {
    id: 33,
    name: "Cuvée Hrdý Dudek 2024",
    variety: "Cuvée",
    grapeVariety: "Ryzlink vlašský 50%, Ryzlink rýnský 50%",
    vintage: 2024,
    price: 249,
    description: "Cuvée dudek je mužná kombinace dvou ryzlinkových odrůd, ryzlinku vlašského a ryzlinku rýnského.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/162_navrh-bez-nazvu--84.png?68fa4c6a',
    shopUrl: 'https://shop.miqueen.cz/cuvee-hrdy-dudek-bile-2024/',
    badge: 'new',
    quality: 'pozdni-sber',
    dryness: 'suche',
    alcohol: 13.5,
    volume: 750,
    region: 'Mikulovská podoblast, Mikulov',
    winemaker: 'MiQueen Winery',
    residualSugar: 3.0
  },
  
  // ID 34: Cuvée Slastná Dudková 2024
  {
    id: 34,
    name: "Cuvée Slastná Dudková 2024",
    variety: "Cuvée",
    grapeVariety: "Ryzlink vlašský 70%, Tramín červený 30%",
    vintage: 2024,
    price: 249,
    description: "Cuvée odrůd ryzlink vlašský a tramín červený. Víno je polosladké, na hranici s polosuchým. Lahodné a zkrátka něžné.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/174_navrh-bez-nazvu--86.png?68fa4d15',
    shopUrl: 'https://shop.miqueen.cz/cuvee-slastna-dudkova-2024-pozdni-sber-polosladke/',
    badge: 'new',
    quality: 'pozdni-sber',
    dryness: 'polosladke',
    alcohol: 13.5,
    volume: 750,
    region: 'Mikulovská podoblast, Mikulov',
    winemaker: 'MiQueen Winery',
    residualSugar: 15.8
  },

  // ID 35: MIMOSA 750ml
  {
    id: 35,
    name: "MIMOSA",
    variety: "Sauvignon Frizzante + 100% pomerančová šťáva",
    grapeVariety: "Sauvignon",
    vintage: 2024,
    price: 289,
    rating: 4.5,
    description: "MIMOSA v kombinaci suchého Sauvignonu Frizzante a 100% pomerančové šťávy má svěží, lehce citrusovou chuť s výraznou kyselinkou. Vínová složka dodává suchý, minerální charakter, který krásně vyvažuje sladkost a plnost čerstvé pomerančové šťávy.",
    category: 'special',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/159_navrh-bez-nazvu--43.png',
    shopUrl: 'https://shop.miqueen.cz/mimosa/',
    alcohol: 8,
    volume: 750,
    badge: 'new',
    servingTemp: '4-6°C',
    winemaker: 'MiQueen Winery',
    notes: 'Obsahuje přírodní sedlinu. Netřepat, jen otočit na pár vteřin.',
    residualSugar: null
  },

  // ID 36: Rulandské bílé 2023
  {
    id: 36,
    name: "Rulandské bílé 2023",
    variety: "Rulandské bílé",
    grapeVariety: "Rulandské bílé",
    vintage: 2023,
    price: 299,
    rating: 4.5,
    description: "Krásné víno zlatavo-zelenkavé barvy s jemnou vůní vyzrálé limetky doplněnou o medově nasládlý tón. Víno je krásně minerální se svěží kyselinkou má citrusový závěr připomínající žlutý grep.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/18_rb23-1-suchy-zostreno-ocenena.png',
    shopUrl: 'https://shop.miqueen.cz/rulandske-bile-2023/',
    quality: 'pozdni-sber',
    dryness: 'suche',
    alcohol: 12,
    volume: 750,
    badge: 'tip',
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    sku: 'VMQ004',
    residualSugar: 6.9
  },
  
  // ID 37: Ryzlink rýnský 2023
  {
    id: 37,
    name: "Ryzlink rýnský 2023",
    variety: "Ryzlink rýnský",
    grapeVariety: "Ryzlink rýnský",
    vintage: 2023,
    price: 299,
    rating: 4.7,
    description: "Nádherné víno zlatavé barvy. Vůně je svěží s jemným ovocným aroma a lehkou kořenitostí. Chuť je mohutná, harmonická s příjemnými tóny pomeranče a lipového květu.",
    category: 'white',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/detail/69_rr23-zostreno---obnoveny-ocenena.png',
    shopUrl: 'https://shop.miqueen.cz/ryzlink-rynsky-2023/',
    quality: 'pozdni-sber',
    dryness: 'suche',
    alcohol: 12.5,
    volume: 750,
    badge: 'tip',
    region: 'Mikulovská podoblast',
    winemaker: 'MiQueen Winery',
    residualSugar: 7.3
  },

  // ID 38: Set 4x mini - klasika
  {
    id: 38,
    name: "Set 4x mini - klasika",
    variety: "Mix",
    grapeVariety: "Ryzlink vlašský, Rulandské šedé, Frankovka rosé, Pinot noir",
    vintage: 2024,
    price: 309,
    description: "Mini set vín MiQueen – kouzlo malých lahviček, velkých zážitků. Obsahuje: Ryzlink vlašský PS 2023 suché (0,187 l), Rulandské šedé VH 2023 polosladké (0,187 l), Frankovka rosé PS 2024 polosladké (0,187 l), Pinot Noir VH 2022 suché (0,187 l).",
    category: 'set',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/219_navrh-bez-nazvu--86.png?68fb1b71',
    shopUrl: 'https://shop.miqueen.cz/set-4x-mini-ryzlink-vlassky--rulandske-sede--frankovka-rose--pinot-noir/',
    badge: 'tip',
    volume: 187,
    servingTemp: '8-16°C',
    winemaker: 'MiQueen Winery',
    notes: 'Stylový dárek, který potěší i reprezentuje',
    sku: 'VMQ042',
    residualSugar: null
  },
  
  // ID 39: Set 4x mini - premium
  {
    id: 39,
    name: "Set 4x mini - premium",
    variety: "Mix",
    grapeVariety: "Mimóza, Frizzanté Ryzlink vlašský, Ryzlink vlašský, Pinot noir",
    vintage: 2024,
    price: 339,
    description: "Mini set vín MiQueen – kouzlo malých lahviček, velkých zážitků. Obsahuje: Mimóza 2024 (0,2 l), Frizzanté Ryzlink vlašský 2023 (0,2 l), Ryzlink vlašský PS 2023 suché (0,187 l), Pinot Noir VH 2022 suché (0,187 l).",
    category: 'set',
    image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/216_navrh-bez-nazvu--89.png?68fb1d90',
    shopUrl: 'https://shop.miqueen.cz/set-4x-mini-mimoza--frizzante-ryzlink-vlassky--ryzlink-vlassky--pinot-noir/',
    badge: 'tip',
    volume: 187,
    servingTemp: '6-16°C',
    winemaker: 'MiQueen Winery',
    notes: 'Stylový dárek, který potěší i reprezentuje',
    sku: 'VMQ041',
    residualSugar: null
  },

  


{
  id: 41,
  name: "Dárkový set Ryzlink vlašský PS 2023 a Frankovka VH 2023",
  variety: "Mix",
  grapeVariety: "Ryzlink vlašský, Frankovka",
  vintage: 2023,
  price: 410,
  description: "Elegantní dárek pro milovníky moravského vína. Dárkový set vín z vinařství MiQueen – Mikulovská královna vín spojuje to nejlepší z naší produkce: svěží Ryzlink vlašský 2023 a charakterní Frankovku 2023. Obě vína pocházejí z vinic, kde klademe důraz na šetrné hospodaření, zdravou půdu a biodiverzitu. Součástí balení je stylový dárkový karton na dvě lahve – ideální pro firemní dary, poděkování klientům nebo sváteční příležitosti.",
  category: 'set',
  image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/222_navrh-bez-nazvu-2025-11-13t113942-342.png?6915b580',
  shopUrl: 'https://shop.miqueen.cz/darkovy-set-ryzlink-vlassky-frankovka-2023/',
  badge: 'new',
  volume: 750,
  servingTemp: '10-18°C',
  winemaker: 'MiQueen Winery',
  region: 'Mikulov, Pálava',
  notes: 'Stylový dárkový karton, ideální pro firemní dary a poděkování',
  foodPairing: ['Ryby', 'Kuřecí maso', 'Grilované maso', 'Sýry'],
  sku: 'VMQ222',
  residualSugar: null,
  rating: 4.5
},
{
  id: 42,
  name: "Hvězdná medailová šestka",
  variety: "Dárkový set",
  grapeVariety: "Ryzlink vlašský, Ryzlink rýnský, Sauvignon, Chardonnay, Tramín červený, Rulandské bílé",
  vintage: 2023,
  price: 1490,
  description: "Hvězdná medailová šestka je kolekce šesti oceněných vín z vinařství MiQueen, která získala zlaté a stříbrné medaile na prestižních vinařských soutěžích. Set obsahuje: Ryzlink vlašský 2023 (zlatá medaile), Ryzlink rýnský 2023 (zlatá medaile), Sauvignon 2023 (zlatá medaile), Chardonnay 2023 (zlatá medaile), Tramín červený 2023 (stříbrná medaile), Rulandské bílé 2023 (stříbrná medaile). Elegantní dárkové balení je ideální pro firemní dary, výročí nebo jako exkluzivní pozornost pro milovníky kvalitních moravských vín.",
  category: 'set',
  image: 'https://cdn.myshoptet.com/usr/shop.miqueen.cz/user/shop/big/225_hvezdna-sestka--1.jpg?69178948',
  shopUrl: 'https://shop.miqueen.cz/hvezdna-medailova-sestka',
  badge: 'award',
  quality: 'pozdni-sber',
  dryness: 'suche',
  alcohol: 12.5,
  volume: 750,
  servingTemp: '8-12°C',
  winemaker: 'MiQueen Winery',
  region: 'Mikulovská podoblast, Pálava',
  notes: 'Exkluzivní dárkový set obsahující 6 oceněných vín (4x zlatá medaile, 2x stříbrná medaile). Baleno v prémiové dárkové krabici.',
  foodPairing: ['Předkrmy', 'Ryby', 'Drůbež', 'Měkké sýry', 'Dezerty'],
  sku: 'VMQ225',
  residualSugar: null,
  rating: 5.0
}
];

// Helper funkce
export const getWinesByCategory = (category: string): WineProduct[] => {
  if (category === 'all') return wines;
  return wines.filter(wine => wine.category === category);
};

// Vrací vína podle kategorie seřazená od nejsušších (nejméně sladkých) po nejsladší
export const getWinesByCategorySortedBySweetness = (category: string): WineProduct[] => {
  const categoryWines = getWinesByCategory(category);
  
  return [...categoryWines].sort((a, b) => {
    // Vína bez residualSugar (null nebo undefined) dáme na konec
    const aHasSugar = a.residualSugar !== null && a.residualSugar !== undefined;
    const bHasSugar = b.residualSugar !== null && b.residualSugar !== undefined;
    
    if (!aHasSugar && !bHasSugar) return 0;
    if (!aHasSugar) return 1;
    if (!bHasSugar) return -1;
    
    // Řadíme od nejnižšího (nejsušší) po nejvyšší (nejsladší) - VZESTUPNĚ
    return a.residualSugar! - b.residualSugar!;
  });
};

export const getWineCountByCategory = (category: string): number => {
  if (category === 'all') return wines.length;
  return wines.filter(wine => wine.category === category).length;
};

export const getWineById = (id: number): WineProduct | undefined => {
  return wines.find(wine => wine.id === id);
};

// Řazení vín podle zbytkového cukru (od nejsušších po nejsladší)
export const getWinesSortedBySweetness = (): WineProduct[] => {
  return [...wines].sort((a, b) => {
    // Vína bez residualSugar (null nebo undefined) dáme na konec
    const aHasSugar = a.residualSugar !== null && a.residualSugar !== undefined;
    const bHasSugar = b.residualSugar !== null && b.residualSugar !== undefined;
    
    if (!aHasSugar && !bHasSugar) return 0;
    if (!aHasSugar) return 1;
    if (!bHasSugar) return -1;
    
    // Řadíme od nejnižšího (nejsušší) po nejvyšší (nejsladší) - VZESTUPNĚ
    return a.residualSugar! - b.residualSugar!;
  });
};

// Kontrolní statistiky
export const getStatistics = () => {
  const categories = {
    white: wines.filter(w => w.category === 'white').length,
    red: wines.filter(w => w.category === 'red').length,
    rose: wines.filter(w => w.category === 'rose').length,
    sparkling: wines.filter(w => w.category === 'sparkling').length,
    special: wines.filter(w => w.category === 'special').length,
    set: wines.filter(w => w.category === 'set').length
  };

  const volumes = {
    mini: wines.filter(w => w.volume && w.volume < 250).length,
    standard: wines.filter(w => w.volume === 750).length
  };

  const vintages = {
    2022: wines.filter(w => w.vintage === 2022).length,
    2023: wines.filter(w => w.vintage === 2023).length,
    2024: wines.filter(w => w.vintage === 2024).length
  };

  const newWines2024 = wines.filter(w => w.badge === 'new' || w.vintage === 2024);
  
  const sugarStats = {
    withSugar: wines.filter(w => w.residualSugar !== null && w.residualSugar !== undefined).length,
    withoutSugar: wines.filter(w => w.residualSugar === null || w.residualSugar === undefined).length
  };

  return {
    total: wines.length,
    categories,
    volumes,
    vintages,
    newWines2024: newWines2024.length,
    sugarStats,
    status: wines.length === 40,
  };
};

// ========== UTILITY FUNKCE PRO URL A NAVIGACI ==========

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

// Mapování kategorií na URL slugy - SJEDNOCENO!
export const categoryToSlug = (category: string): string => {
  const mapping: Record<string, string> = {
    'white': 'bila-vina',
    'red': 'cervena-vina',
    'rose': 'ruzova-vina',
    'sparkling': 'perliva-vina',
    'special': 'mimosa-specialni',
    'set': 'darkove-sety'
  };
  return mapping[category] || category;
};

export const slugToCategory = (slug: string): string => {
  const mapping: Record<string, string> = {
    'bila-vina': 'white',
    'cervena-vina': 'red',
    'ruzova-vina': 'rose',
    'perliva-vina': 'sparkling',
    'mimosa-specialni': 'special',
    'darkove-sety': 'set'
  };
  return mapping[slug] || slug;
};

export const getCategoryName = (category: string): string => {
  const mapping: Record<string, string> = {
    'white': 'Bílá vína',
    'red': 'Červená vína',
    'rose': 'Růžová vína',
    'sparkling': 'Perlivá vína',
    'special': 'Mimosa speciální',
    'set': 'Dárkové sety'
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

export const generateBreadcrumbs = (wine: WineProduct) => {
  return [
    { name: 'Domů', url: '/' },
    { name: 'Naše vína', url: '/vina' },
    { name: getCategoryName(wine.category), url: getCategoryUrl(wine.category) },
    { name: wine.name, url: getWineUrl(wine) }
  ];
};