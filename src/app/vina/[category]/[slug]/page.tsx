"use client";
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { 
  Star, ShoppingCart, MapPin, Thermometer, ChefHat, User, 
  ArrowLeft, Share2, Heart 
} from 'lucide-react';
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { 
  wines,
  createSlug, 
  slugToCategory, 
  generateWineStructuredData} from '@/app/components/wineData';

const getDrynessLabel = (dryness?: string) => {
  const mapping: Record<string, string> = {
    'suche': 'Suché',
    'polosuche': 'Polosuché',
    'polosladke': 'Polosladké',
    'sladke': 'Sladké'
  };
  return mapping[dryness || ''] || 'N/A';
};

const getQualityLabel = (quality?: string) => {
  const mapping: Record<string, string> = {
    'kabinet': 'Kabinet',
    'pozdni-sber': 'Pozdní sběr',
    'vyber-z-hroznu': 'Výběr z hroznů',
    'vyber-z-bobuli': 'Výběr z bobulí',
    'moravske-zemske': 'Moravské zemské'
  };
  return mapping[quality || ''] || 'Standard';
};

const getBadgeStyle = (badge?: string) => {
  const styles: Record<string, { bg: string; text: string }> = {
    'bestseller': { bg: '#ab8754', text: 'Bestseller' },
    'award': { bg: '#ab8754', text: 'Oceněné' },
    'new': { bg: '#10B981', text: 'Novinka' },
    'limited': { bg: '#E11D48', text: 'Limitované' },
    'tip': { bg: '#F59E0B', text: 'Tip' }
  };
  return styles[badge || ''] || null;
};

// Funkce pro mapování kategorií na URL slugs
const getCategorySlug = (category: string): string => {
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

interface PageProps {
  params: Promise<{ category: string; slug: string }>
}

export default function WineDetailPage({ params }: PageProps) {
  // Next.js 15 - unwrap params promise
  const resolvedParams = use(params);
  
  const wine = wines.find(w => 
    slugToCategory(resolvedParams.category) === w.category && 
    createSlug(w.name) === resolvedParams.slug
  );

  if (!wine) {
    notFound();
  }

  const badge = getBadgeStyle(wine.badge);
  const structuredData = generateWineStructuredData(wine);

  const relatedWines = wines
    .filter(w => w.category === wine.category && w.id !== wine.id)
    .slice(0, 4);

  


  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <section className="min-h-screen py-20 lg:py-28 mt-12" style={{ backgroundColor: "#fefbea" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            

           <Link 
  href="/vina"
  className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ab8754] transition-colors mb-8"
>
  <ArrowLeft className="w-4 h-4" />
  Zpět na vína
</Link>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 p-8 lg:p-16">
                  <div className="relative aspect-square max-w-md mx-auto">
                    <Image
                      src={wine.image}
                      alt={wine.name}
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {badge && (
                    <div 
                      className="absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg"
                      style={{ backgroundColor: badge.bg }}
                    >
                      {badge.text}
                    </div>
                  )}

                  <div className="absolute top-6 right-6 flex gap-2">
                    <button 
                      className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                      aria-label="Sdílet"
                    >
                      <Share2 className="w-5 h-5 text-gray-700" />
                    </button>
                    <button 
                      className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                      aria-label="Oblíbené"
                    >
                      <Heart className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    {wine.name}
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    {wine.grapeVariety}
                  </p>

                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 ${
                            i < Math.floor(wine.rating || 0)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 font-medium text-lg">
                      ({wine.rating?.toFixed(1) || '4.5'})
                    </span>
                  </div>

                  <div className="bg-gradient-to-r from-[#ab875410] to-transparent p-6 rounded-2xl mb-8">
                    <p className="text-gray-600 mb-2 text-sm">Cena</p>
                    <p className="text-5xl font-bold text-gray-900">
                      {wine.price} <span className="text-3xl">Kč</span>
                    </p>
                    {wine.volume && (
                      <p className="text-gray-600 mt-2">
                        Objem: {wine.volume}ml
                      </p>
                    )}
                  </div>

                  <a
                    href={wine.shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-8 py-4 bg-[#ab8754] text-white rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-3 mb-8"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    Koupit na e-shopu
                  </a>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">O víně</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {wine.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-gray-500 text-sm mb-1">Ročník</p>
                      <p className="text-gray-900 font-semibold text-lg">{wine.vintage}</p>
                    </div>
                    
                    {wine.alcohol && (
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <p className="text-gray-500 text-sm mb-1">Alkohol</p>
                        <p className="text-gray-900 font-semibold text-lg">{wine.alcohol}%</p>
                      </div>
                    )}
                    
                    {wine.quality && (
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <p className="text-gray-500 text-sm mb-1">Kvalita</p>
                        <p className="text-gray-900 font-semibold text-lg">{getQualityLabel(wine.quality)}</p>
                      </div>
                    )}
                    
                    {wine.dryness && (
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <p className="text-gray-500 text-sm mb-1">Sladkost</p>
                        <p className="text-gray-900 font-semibold text-lg">{getDrynessLabel(wine.dryness)}</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    {wine.region && (
                      <div className="flex items-start gap-3">
                        <MapPin className="w-6 h-6 text-[#ab8754] mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-gray-500 text-sm">Region</p>
                          <p className="text-gray-900 font-medium">{wine.region}</p>
                        </div>
                      </div>
                    )}
                    
                    {wine.servingTemp && (
                      <div className="flex items-start gap-3">
                        <Thermometer className="w-6 h-6 text-[#ab8754] mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-gray-500 text-sm">Teplota servírování</p>
                          <p className="text-gray-900 font-medium">{wine.servingTemp}</p>
                        </div>
                      </div>
                    )}
                    
                    {wine.foodPairing && wine.foodPairing.length > 0 && (
                      <div className="flex items-start gap-3">
                        <ChefHat className="w-6 h-6 text-[#ab8754] mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-gray-500 text-sm mb-2">Doporučujeme k</p>
                          <div className="flex flex-wrap gap-2">
                            {wine.foodPairing.map((food, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-[#ab875410] text-[#ab8754] rounded-full text-sm font-medium"
                              >
                                {food}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {wine.winemaker && (
                      <div className="flex items-start gap-3">
                        <User className="w-6 h-6 text-[#ab8754] mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-gray-500 text-sm">Vinařství</p>
                          <p className="text-gray-900 font-medium">{wine.winemaker}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {wine.notes && (
                    <div className="bg-[#ab875410] p-6 rounded-xl mt-8">
                      <p className="text-[#ab8754] font-semibold mb-2">Poznámka vinaře</p>
                      <p className="text-gray-700">{wine.notes}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {relatedWines.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Podobná vína</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedWines.map((relatedWine) => (
                    <Link
                      key={relatedWine.id}
                      href={`/vina/${getCategorySlug(relatedWine.category)}/${createSlug(relatedWine.name)}`}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#ab8754]/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2"
                    >
                      <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-50">
                        <Image
                          src={relatedWine.image}
                          alt={relatedWine.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 640px) 50vw, 25vw"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-gray-900 font-semibold text-sm mb-2 line-clamp-2">
                          {relatedWine.name}
                        </h3>
                        <p className="text-gray-900 font-bold text-lg">
                          {relatedWine.price} Kč
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}