"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { 
  Star, ShoppingCart, MapPin, Thermometer, ChefHat, User, 
  ArrowLeft, Check, Droplets, Activity, X, ZoomIn, Truck
} from 'lucide-react';
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { 
  wines,
  createSlug, 
  slugToCategory, 
  generateWineStructuredData,
  WineProduct 
} from '@/app/components/wineData';

// --- HELPERY ---
const getDrynessLabel = (dryness?: string) => {
  const mapping: Record<string, string> = {
    'suche': 'Suché', 'polosuche': 'Polosuché', 'polosladke': 'Polosladké', 'sladke': 'Sladké'
  };
  return mapping[dryness || ''] || '-';
};

const getQualityLabel = (quality?: string) => {
  const mapping: Record<string, string> = {
    'kabinet': 'Kabinet', 'pozdni-sber': 'Pozdní sběr', 'vyber-z-hroznu': 'Výběr z hroznů',
    'vyber-z-bobuli': 'Výběr z bobulí', 'moravske-zemske': 'Moravské zemské'
  };
  return mapping[quality || ''] || 'Standard';
};

const getHighResImageUrl = (url: string) => {
  if (!url) return '';
  if (!url.includes('cdn.myshoptet.com')) return url;
  return url.replace(/\/big\/|\/detail\/|\/carousel\//g, '/orig/'); 
};

const getCategorySlug = (category: string): string => {
  const mapping: Record<string, string> = {
    'white': 'bila-vina', 'red': 'cervena-vina', 'rose': 'ruzova-vina',
    'sparkling': 'perliva-vina', 'special': 'mimosa-specialni', 'set': 'darkove-sety'
  };
  return mapping[category] || category;
};

// --- KOMPONENTA OBRÁZKU ---
const ProductImage = ({ src, alt, onOpenModal, isMobile = false }: { src: string, alt: string, onOpenModal: () => void, isMobile?: boolean }) => {
  const [zoomParams, setZoomParams] = useState({ x: 0, y: 0, show: false });
  const imgRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current || isMobile || window.matchMedia('(hover: none)').matches) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomParams({ x, y, show: true });
  };

  return (
    <div 
      className={`relative w-full bg-white rounded-xl overflow-hidden border border-gray-100 ${isMobile ? '' : 'h-full cursor-zoom-in'}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setZoomParams(prev => ({ ...prev, show: false }))}
      onClick={onOpenModal}
      ref={imgRef}
      style={isMobile ? { height: '300px' } : {}} 
    >
      <div className="relative w-full h-full p-4 flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain transition-opacity duration-200"
          style={{ opacity: zoomParams.show ? 0 : 1 }}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {zoomParams.show && !isMobile && (
        <div 
          className="absolute inset-0 pointer-events-none bg-white z-10 hidden md:block"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `${zoomParams.x}% ${zoomParams.y}%`,
            backgroundSize: '200%',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
      
      {isMobile && (
        <button className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full shadow-sm text-gray-500 pointer-events-none">
          <ZoomIn className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

// --- MODAL ---
const ImageModal = ({ src, alt, isOpen, onClose }: { src: string, alt: string, isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm touch-none" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-50">
        <X className="w-8 h-8" />
      </button>
      <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
        <Image src={src} alt={alt} fill className="object-contain" quality={100} priority />
      </div>
    </div>
  );
};

// --- HLAVNÍ STRÁNKA ---
interface PageProps {
  params: Promise<{ category: string; slug: string }>
}

export default function WineDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  
  const mainButtonRef = useRef<HTMLAnchorElement>(null);
  
  const wine = wines.find(w => 
    slugToCategory(resolvedParams.category) === w.category && 
    createSlug(w.name) === resolvedParams.slug
  );

  useEffect(() => {
    const handleScroll = () => {
      if (mainButtonRef.current) {
        const buttonRect = mainButtonRef.current.getBoundingClientRect();
        setShowStickyBar(buttonRect.bottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!wine) notFound();

  const structuredData = generateWineStructuredData(wine);
  const highResImage = getHighResImageUrl(wine.image); 
  
  const relatedWines = wines
    .filter(w => w.category === wine.category && w.id !== wine.id)
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} src={highResImage} alt={wine.name} />

      <main className="bg-[#fefbea] min-h-screen pt-24 lg:pt-36 pb-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6 lg:mb-8 pt-4">
            <Link href="/vina" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#ab8754] transition-colors font-medium bg-white/50 px-3 py-1.5 rounded-lg">
              <ArrowLeft className="w-4 h-4" />
              Zpět na výběr vín
            </Link>
          </div>

          <div className="bg-white rounded-xl lg:rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* OBRÁZEK (Desktop) */}
              <div className="hidden lg:block lg:col-span-5 xl:col-span-5 border-r border-gray-100 bg-white p-6">
                <div className="sticky top-32 h-[600px]">
                   <ProductImage src={highResImage} alt={wine.name} onOpenModal={() => setIsModalOpen(true)} isMobile={false} />
                   {wine.badge && (
                      <div className="absolute top-6 left-6 z-20 pointer-events-none">
                        <span className="px-3 py-1.5 bg-[#ab8754] text-white text-xs font-bold uppercase tracking-wide rounded shadow-md">
                          {wine.badge === 'new' ? 'Novinka' : wine.badge}
                        </span>
                      </div>
                    )}
                </div>
              </div>

              {/* OBSAH */}
              <div className="lg:col-span-7 xl:col-span-7 p-5 lg:p-10 xl:p-12 flex flex-col">
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-[#ab8754] text-xs lg:text-sm font-bold uppercase tracking-wider mb-2">
                    <span>{wine.vintage}</span>
                    <span className="text-gray-300">•</span>
                    <span>{wine.variety}</span>
                  </div>
                  
                  {/* ZDE JE ÚPRAVA: !text-2xl pro mobil a !text-4xl pro desktop přebije globální H1 styl */}
                  <h1 className="!text-2xl lg:!text-4xl font-serif font-bold text-gray-900 mb-3 leading-tight">
                    {wine.name}
                  </h1>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(wine.rating || 0) ? 'fill-current' : 'text-gray-200'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 underline decoration-gray-300 underline-offset-2">Hodnocení zákazníků</span>
                  </div>

                  <div className="prose prose-sm max-w-none mt-4 text-gray-600 leading-relaxed border-b border-gray-100 pb-6">
                    <p>{wine.description}</p>
                  </div>
                </div>

                {/* OBRÁZEK (Mobil) */}
                <div className="lg:hidden mb-6 relative">
                   <ProductImage src={highResImage} alt={wine.name} onOpenModal={() => setIsModalOpen(true)} isMobile={true} />
                   {wine.badge && (
                      <div className="absolute top-3 left-3 z-20 pointer-events-none">
                        <span className="px-3 py-1 bg-[#ab8754] text-white text-xs font-bold uppercase tracking-wide rounded shadow-md">
                          {wine.badge === 'new' ? 'Novinka' : wine.badge}
                        </span>
                      </div>
                    )}
                </div>

                {/* CENA A NÁKUP */}
                <div className="mb-8">
                   <div className="flex flex-col sm:flex-row gap-4 justify-between p-5 bg-[#f9f9f9] rounded-xl border border-gray-100">
                      <div className="flex flex-col">
                         <p className="text-xs text-gray-500 mb-1">Cena s DPH</p>
                         <div className="text-3xl font-bold text-gray-900 mb-2">{wine.price} Kč</div>
                         
                         <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-green-700 text-xs font-medium">
                               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                               Skladem &gt; 5 ks
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-xs">
                               <Truck className="w-4 h-4 text-[#ab8754]" />
                               Ihned k odeslání
                            </div>
                         </div>
                      </div>

                      <a 
                        ref={mainButtonRef}
                        href={wine.shopUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-[#ab8754] hover:bg-[#9a7848] text-white h-12 px-8 rounded-lg font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 sm:self-center mt-4 sm:mt-0"
                      >
                        <ShoppingCart className="w-5 h-5" /> Koupit na e-shopu
                      </a>
                   </div>
                </div>
                
                {/* PARAMETRY (MOBIL: 1 sloupec, DESKTOP: 2 sloupce) */}
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 border-t border-gray-100 pt-6 mb-8">
                     <DetailRow label="Sladkost" value={getDrynessLabel(wine.dryness)} icon={Droplets} />
                     <DetailRow label="Alkohol" value={wine.alcohol ? `${wine.alcohol}%` : '-'} icon={Activity} />
                     <DetailRow label="Kvalita" value={getQualityLabel(wine.quality)} icon={Check} />
                     <DetailRow label="Teplota" value={wine.servingTemp || '10-12°C'} icon={Thermometer} />
                     <DetailRow label="Objem" value={`${wine.volume || 750} ml`} icon={Check} />
                     <DetailRow label="Oblast" value="Morava" icon={MapPin} />
                  </div>

                  {(wine.notes || wine.foodPairing) && (
                    <div className="grid sm:grid-cols-2 gap-6">
                      {wine.notes && (
                        <div className="bg-[#fefbea] p-5 rounded-xl border border-[#ab8754]/20">
                          <h3 className="text-[#ab8754] font-bold text-sm uppercase mb-2 flex items-center gap-2"><User className="w-4 h-4" /> Slovo vinaře</h3>
                          <p className="text-gray-800 italic text-sm">&quot;{wine.notes}&quot;</p>
                        </div>
                      )}
                      {wine.foodPairing && wine.foodPairing.length > 0 && (
                         <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                            <h3 className="text-gray-900 font-bold text-sm uppercase mb-3 flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#ab8754]" /> K čemu se hodí</h3>
                            <div className="flex flex-wrap gap-2">
                               {wine.foodPairing.map((food, i) => (
                                  <span key={i} className="px-2.5 py-1 bg-white text-gray-600 text-xs rounded-md font-medium border border-gray-200 shadow-sm">{food}</span>
                               ))}
                            </div>
                         </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {relatedWines.length > 0 && (
            <div className="mt-16 mb-12">
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-2xl font-serif font-bold text-gray-900">Mohlo by se vám líbit</h2>
                 <Link href="/vina" className="text-[#ab8754] text-sm font-medium hover:underline hidden sm:block">Zobrazit všechna vína</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedWines.map(w => <RelatedWineCard key={w.id} wine={w} />)}
              </div>
            </div>
          )}
        </div>

        {/* --- STICKY MOBILE BAR --- */}
        <div 
          className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 lg:hidden z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] safe-area-pb transition-transform duration-300 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <div className="max-w-lg mx-auto">
            <div className="text-[10px] text-gray-500 font-medium truncate mb-1.5 text-center">
              {wine.name}
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex flex-col min-w-[80px]">
                <span className="text-[10px] text-gray-400 uppercase tracking-wide font-bold">Cena</span>
                <span className="text-xl font-bold text-gray-900 leading-none">{wine.price} Kč</span>
              </div>
              <a
                href={wine.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-10 bg-[#ab8754] hover:bg-[#9a7848] text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-md"
              >
                <ShoppingCart className="w-4 h-4" />
                Koupit
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style jsx global>{`
        .safe-area-pb {
          padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
        }
      `}</style>
    </>
  );
}

// --- UI HELPERY ---
const DetailRow = ({ label, value, icon: Icon }: { label: string, value: string, icon?: React.ElementType }) => (
   <div className="flex justify-between items-center py-2.5 border-b border-gray-50 last:border-0">
      <div className="flex items-center gap-2.5 text-gray-500">
        {Icon && <Icon className="w-4 h-4 text-[#ab8754]" />}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className="font-bold text-gray-900 text-sm">{value}</span>
   </div>
);

const RelatedWineCard = ({ wine }: { wine: WineProduct }) => {
  const imageUrl = getHighResImageUrl(wine.image);
  return (
    <Link href={`/vina/${getCategorySlug(wine.category)}/${createSlug(wine.name)}`} className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[4/5] bg-white p-4">
        <Image src={imageUrl} alt={wine.name} fill className="object-contain p-2 group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
        {wine.badge && <span className="absolute top-2 left-2 px-2 py-1 bg-[#ab8754] text-[10px] font-bold uppercase tracking-wider text-white rounded shadow-sm">{wine.badge}</span>}
      </div>
      <div className="p-4 border-t border-gray-100">
        <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-[#ab8754] transition-colors line-clamp-1">{wine.name}</h3>
        <p className="text-xs text-gray-500 mb-3">{wine.variety}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900">{wine.price} Kč</span>
          <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#ab8754] group-hover:text-white transition-colors"><ShoppingCart className="w-4 h-4" /></span>
        </div>
      </div>
    </Link>
  );
};