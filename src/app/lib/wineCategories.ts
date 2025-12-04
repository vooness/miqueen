// Definice kategorií vín s SEO informacemi
export interface WineCategory {
  id: string;
  slug: string;
  name: string;
  title: string;
  description: string;
  metaDescription: string;
  icon: string;
  color?: string;
}

export const wineCategories: WineCategory[] = [
  {
    id: 'all',
    slug: '',
    name: 'Všechna vína',
    title: 'Všechna vína MiQueen',
    description: 'Kompletní nabídka vín z rodinného vinařství MiQueen v Mikulově. Vína seřazená od nejsušších po nejsladší.',
    metaDescription: 'Objevte kompletní nabídku moravských vín z vinařství MiQueen. Bílá, červená, růžová a perlivá vína nejvyšší kvality z Mikulova.',
    icon: 'Sparkles',
    color: '#ab8754'
  },
  {
    id: 'white',
    slug: 'bila-vina',
    name: 'Bílá vína',
    title: 'Bílá vína MiQueen',
    description: 'Výběr nejlepších bílých vín z našeho vinařství. Od suchých až po sladká vína nejvyšší kvality.',
    metaDescription: 'Bílá vína z Mikulova - Ryzlink vlašský, Veltlínské zelené, Müller Thurgau a další odrůdy. Suchá i polosladká vína z vinařství MiQueen.',
    icon: 'Droplets',
    color: '#ab8754'
  },
  {
    id: 'red',
    slug: 'cervena-vina',
    name: 'Červená vína',
    title: 'Červená vína MiQueen',
    description: 'Kolekce červených vín s plnou chutí a charakterem moravského terroir.',
    metaDescription: 'Červená vína z Moravy - Frankovka, Zweigeltrebe, Svatovavřinecké. Kvalitní červená vína z rodinného vinařství MiQueen Mikulov.',
    icon: 'Cherry',
    color: '#ab8754'
  },
  {
    id: 'rose',
    slug: 'ruzova-vina',
    name: 'Růžová vína',
    title: 'Růžová vína MiQueen',
    description: 'Svěží růžová vína ideální pro letní dny a slavnostní příležitosti.',
    metaDescription: 'Růžová vína z Mikulova - svěží rosé vína z vinařství MiQueen. Ideální pro letní dny a slavnostní příležitosti.',
    icon: 'Grape',
    color: '#ab8754'
  },
  {
    id: 'sparkling',
    slug: 'perliva-vina',
    name: 'Perlivá vína',
    title: 'Perlivá vína MiQueen',
    description: 'Šumivá a perlivá vína vyrobená tradiční metodou pro výjimečné okamžiky.',
    metaDescription: 'Perlivá a šumivá vína z Moravy. Sekt a frizzante z vinařství MiQueen Mikulov vyrobené tradiční metodou.',
    icon: 'Wine',
    color: '#ab8754'
  },
  {
    id: 'special',
    slug: 'mimosa-specialni',
    name: 'Mimosa speciální',
    title: 'Mimosa a speciální vína',
    description: 'Unikátní řada vín Mimosa a další speciální edice našeho vinařství.',
    metaDescription: 'Mimosa vína a speciální edice vinařství MiQueen. Limitované série a unikátní cuvée z Mikulova.',
    icon: 'Package',
    color: '#ab8754'
  },
  {
    id: 'set',
    slug: 'darkove-sety',
    name: 'Dárkové sety',
    title: 'Dárkové sety vín',
    description: 'Elegantní dárkové sety vín pro každou příležitost. Ideální dárek pro milovníky vína.',
    metaDescription: 'Dárkové sety moravských vín z vinařství MiQueen Mikulov. Elegantní balení, degustační sety a limitované edice.',
    icon: 'Gift',
    color: '#ab8754'
  },
  {
    id: 'nealko',
    slug: 'nealko-speciality',
    name: 'Nealko speciality',
    title: 'Nealkoholické speciality MiQueen',
    description: 'Nealkoholické nápoje z vinice. Hroznové mošty a speciální nealko nápoje pro každého.',
    metaDescription: 'Nealkoholické speciality z vinařství MiQueen - hroznové mošty, nealko nápoje s matcha. Vhodné pro řidiče a sportovce.',
    icon: 'Leaf',
    color: '#22C55E'
  },
  {
    id: 'new',
    slug: 'novinky',
    name: 'Novinky',
    title: 'Nová vína MiQueen',
    description: 'Nejnovější přírůstky do naší nabídky. Objevte nové ročníky a limitované edice.',
    metaDescription: 'Novinky z vinařství MiQueen - nové ročníky, limitované edice a speciální série moravských vín z Mikulova.',
    icon: 'Sparkles',
    color: '#10B981'
  }
];

export function getCategoryBySlug(slug: string): WineCategory | undefined {
  if (!slug || slug === '') {
    return wineCategories.find(c => c.id === 'all');
  }
  return wineCategories.find(c => c.slug === slug);
}

export function getCategoryById(id: string): WineCategory | undefined {
  return wineCategories.find(c => c.id === id);
}