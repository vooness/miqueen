"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Grape, Tag, Sparkles, Wine, Droplets, Gift, Citrus, Ticket } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// --- DATA PRO BANNERY (KARUSEL) ---
const slides = [
  {
    id: 1,
    src: "/vinice_ostra3_master_shopet.webp",
    alt: "Jarní ochutnávka vín",
    title: "Jarní ochutnávka",
    subtitle: "Objevte svěží novinky ročníku 2024",
    href: "/vina/novinky",
  },
  {
    id: 2,
    src: "/fotky/fotka1.jpg", 
    alt: "Adoptuj vinohrad",
    title: "Staňte se vinařem",
    subtitle: "Adoptujte si svůj řádek na Pálavě",
    href: "/adoptuj-vinohrad",
  },
  {
    id: 3,
    src: "/fotky/fotka3.jpg", 
    alt: "Dárkové sety",
    title: "Řekněte to vínem",
    subtitle: "Luxusní dárkové balení pro každou příležitost",
    href: "/vina/darkove-sety",
  },
];

// --- DATA PRO KATEGORIE - 2x2 grid ---
const categories = [
  { label: 'Všechna vína', href: '/vina/vsechna-vina', icon: Grape },
  { label: 'Akční nabídka', href: '/akcni-nabidka', icon: Tag, highlight: true },
  { label: 'Novinky', href: '/vina/novinky', icon: Sparkles },
  { label: 'Bílá vína', href: '/vina/bila-vina', icon: Wine },
  { label: 'Červená vína', href: '/vina/cervena-vina', icon: Wine },
  { label: 'Růžová vína', href: '/vina/ruzova-vina', icon: Wine },
  { label: 'Perlivá vína', href: '/vina/perliva-vina', icon: Droplets },
  { label: 'Mimosa', href: '/vina/mimosa-special', icon: Citrus },
  { label: 'Dárkové sety', href: '/vina/darkove-sety', icon: Gift },
  { label: 'Poukazy', href: '/poukazy', icon: Ticket },
   { label: 'Degustace', href: '/degustace', icon: Wine },
  { label: 'Mini Queen', href: '/miqueen-mini', icon: Wine },
];

const HeroMobile = () => {
  return (
    <section className="bg-white">
      
      {/* 1. BANNER KARUSEL */}
      <div className="relative w-full mt-14">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "!opacity-100",
          }}
          className="w-full aspect-[16/10] sm:aspect-[2/1] "
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative">
              <Link href={slide.href} className="block w-full h-full relative">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                  sizes="100vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Text na banneru */}
<div className="absolute bottom-0 left-0 right-0 p-5 text-white ">
  <h2 className="text-2xl sm:text-3xl font-bold mb-1 drop-shadow-lg">
    {slide.title}
  </h2>
  <p className="text-sm sm:text-base opacity-95 drop-shadow-md mb-3">
    {slide.subtitle}
  </p>

  <button
    className="px-4 py-2 bg-[#ab8754] text-[10px] text-white font-semibold rounded-md  hover:bg-gray-200 transition"
  >
    Zjistit více
  </button>
</div>

              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. PAGINACE POD BANNEREM */}
      <div className="bg-[#fefbea] py-3 flex justify-center">
        <style jsx global>{`
          .swiper-pagination {
            position: static !important;
            display: flex;
            justify-content: center;
            gap: 8px;
          }
          .swiper-pagination-bullet {
            background: #d1d5db !important;
            opacity: 1 !important;
            width: 8px !important;
            height: 8px !important;
            margin: 0 !important;
          }
          .swiper-pagination-bullet-active {
            background: #000000 !important;
          }
        `}</style>
      </div>

      {/* 3. KATEGORIE - 2x2 grid, kompaktní obdélníky */}
      <div className="bg-[#fefbea] pb-4">
        <div className="px-3">
          <div className="grid grid-cols-2 gap-2.5">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={index}
                  href={cat.href}
                  className={`
                    relative flex items-center gap-3 px-3 py-2.5 rounded-lg
                    bg-white transition-all duration-200 touch-manipulation
                    active:scale-95 active:bg-gray-50
                    ${cat.highlight 
                      ? 'shadow-lg border-2 border-[#ab8754] ring-1 ring-[#ab8754]/20' 
                      : 'shadow-md border border-gray-300 hover:shadow-lg hover:border-[#ab8754]/40'
                    }
                  `}
                >
                  {/* Highlight badge pro akční nabídku */}
                  {cat.highlight && (
                    <div className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                      AKCE
                    </div>
                  )}
                  
                  {/* Ikona - jednotná barva */}
                  <div className="text-[#ab8754] flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Název kategorie */}
                  <span className={`text-xs font-semibold ${cat.highlight ? 'text-[#ab8754]' : 'text-gray-800'}`}>
                    {cat.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* 4. ADOPTUJ VINOHRAD TLAČÍTKO */}
        <div className="px-3 mt-5">
          <Link
            href="/adoptuj-vinohrad"
            className="
              relative overflow-hidden w-full flex items-center justify-between p-3.5 rounded-lg
              bg-gradient-to-r from-[#ab8754] to-[#8b6f44] shadow-xl
              group active:scale-[0.98] transition-all
            "
          >
            {/* Dekorativní pattern v pozadí */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Cpath d='M0 0h20L10 10z'/%3E%3Cpath d='M0 10h10l10 10H0z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center shadow-lg text-white">
                <Gift className="w-6 h-6" />
              </div>
              <div className="text-left text-white">
                <h3 className="text-base font-bold">Adoptuj Vinohrad</h3>
                <p className="text-xs opacity-90">
                  Tip na originální dárek
                </p>
              </div>
            </div>
            
            {/* Animovaná šipka */}
            <div className="relative z-10 text-white">
              <svg 
                className="w-5 h-5 animate-pulse" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default HeroMobile;