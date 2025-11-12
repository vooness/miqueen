

import React from "react";
import { notFound } from 'next/navigation';
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CategoryWineGrid from "@/app/components/CategoryWineGrid";
import { use } from 'react';

// Mapování URL slug na interní category key
const SLUG_TO_CATEGORY: Record<string, string> = {
  'bila-vina': 'white',
  'cervena-vina': 'red',
  'ruzova-vina': 'rose',
  'perliva-vina': 'sparkling',
  'mimosa-specialni': 'special',
  'darkove-sety': 'set',
  'all': 'all',
  'novinky': 'new'
};

const CATEGORY_NAMES: Record<string, string> = {
  'bila-vina': 'Bílá vína',
  'cervena-vina': 'Červená vína',
  'ruzova-vina': 'Růžová vína',
  'perliva-vina': 'Perlivá vína',
  'mimosa-specialni': 'MIMOSA speciální edice',
  'darkove-sety': 'Dárkové sety',
  'all': 'Všechna vína',
  'novinky': 'Novinky'
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'bila-vina': 'Objevte naši kolekci výjimečných bílých vín z Mikulovské podoblasti, seřazených od nejsušších po nejsladší.',
  'cervena-vina': 'Prémiová červená vína plná charakteru z našich vinic v Mikulově a Perné.',
  'ruzova-vina': 'Svěží a elegantní růžová vína ideální pro letní dny i slavnostní příležitosti.',
  'perliva-vina': 'Jemně perlivá vína Frizzante pro radostné okamžiky.',
  'mimosa-specialni': 'Unikátní vinný koktejl MIMOSA - kombinace suchého Sauvignonu Frizzante a 100% pomerančové šťávy.',
  'darkove-sety': 'Elegantní dárkové sety mini vín - ideální dárek pro milovníky vína.',
  'all': 'Kompletní nabídka našich vín seřazená od nejsušších po nejsladší.',
  'novinky': 'Nejnovější přírůstky do naší vinařské kolekce.'
};

interface PageProps {
  params: Promise<{ category: string }>
}

export default function CategoryPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;
  const categoryKey = SLUG_TO_CATEGORY[categorySlug];
  const categoryName = CATEGORY_NAMES[categorySlug];
  const categoryDescription = CATEGORY_DESCRIPTIONS[categorySlug];
  
  if (!categoryKey || !categoryName) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <CategoryWineGrid 
          category={categoryKey}
          categoryName={categoryName}
          categoryDescription={categoryDescription}
        />
      </main>
      <Footer />
    </>
  );
}

// Generování statických cest pro všechny kategorie
export async function generateStaticParams() {
  return Object.keys(SLUG_TO_CATEGORY).map((category) => ({
    category: category,
  }));
}