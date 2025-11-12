"use client";

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
  'darkove-sety': 'set'
};

const CATEGORY_NAMES: Record<string, string> = {
  'bila-vina': 'Bílá vína',
  'cervena-vina': 'Červená vína',
  'ruzova-vina': 'Růžová vína',
  'perliva-vina': 'Perlivá vína',
  'mimosa-specialni': 'MIMOSA speciální edice',
  'darkove-sety': 'Dárkové sety'
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'bila-vina': 'Objevte naši kolekci výjimečných bílých vín z Mikulovské podoblasti, seřazených od nejsušších po nejsladší.',
  'cervena-vina': 'Prémiová červená vína plná charakteru z našich vinic v Mikulově a Perné.',
  'ruzova-vina': 'Svěží a elegantní růžová vína ideální pro letní dny i slavnostní příležitosti.',
  'perliva-vina': 'Jemně perlivá vína Frizzante pro radostné okamžiky.',
  'mimosa-specialni': 'Unikátní vinný koktejl MIMOSA - kombinace suchého Sauvignonu Frizzante a 100% pomerančové šťávy.',
  'darkove-sety': 'Elegantní dárkové sety mini vín - ideální dárek pro milovníky vína.'
};

interface PageProps {
  params: Promise<{ category: string }>
}

export default function CategoryPage({ params }: PageProps) {
  // Použij React.use() pro unwrap Promise
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;
  const categoryKey = SLUG_TO_CATEGORY[categorySlug];
  const categoryName = CATEGORY_NAMES[categorySlug];
  const categoryDescription = CATEGORY_DESCRIPTIONS[categorySlug];
  
  // Pokud kategorie neexistuje, zobraz 404
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