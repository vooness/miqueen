"use client";
import React from "react";
import Link from "next/link";
import { 
  Grape, Tag, Sparkles, Wine, Droplets, Gift, 
  Citrus, Ticket} from "lucide-react";

// Oddělíme běžné kategorie od Adopce
const categories = [
  { label: 'Všechna vína', href: '/vina/vsechna-vina', icon: Grape },
  { label: 'Akční nabídka', href: '/akcni-nabidka', icon: Tag, hot: true },
  { label: 'Novinky', href: '/vina/novinky', icon: Sparkles },
  { label: 'Bílá vína', href: '/vina/bila-vina', icon: Wine },
  { label: 'Červená vína', href: '/vina/cervena-vina', icon: Wine },
  { label: 'Růžová vína', href: '/vina/ruzova-vina', icon: Wine },
  { label: 'Perlivá vína', href: '/vina/perliva-vina', icon: Droplets },
  { label: 'Mimosa', href: '/vina/mimosa-special', icon: Citrus },
  { label: 'Dárkové sety', href: '/vina/darkove-sety', icon: Gift },
  { label: 'Poukazy', href: '/poukazy', icon: Ticket },
  { label: 'Adoptuj Vinohrad', href: '/adoptuj-vinohrad', icon: Ticket },
  { label: 'Degustace', href: '/degustace', icon: Wine },
  { label: 'Mini Queen', href: '/mini-queen', icon: Wine },
];

const accentColor = "#ab8754";

const CategoryGridDesktop = () => {
  return (
    <section className="py-16 w-full bg-[#fefbea]">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Vylepšený nadpis sekce */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-gray-800 mb-4 md:mb-6">
            Objevte naše <span className="font-normal" style={{ color: accentColor }}>vína</span>
          </h2>
          <p className="text-gray-600">
            Vyberte si z široké nabídky moravských vín z Pálavy
          </p>
        </div>
        
        {/* Kategorie - Čisté, elegantní pilulky */}
        <div className="flex flex-wrap gap-3 justify-center ">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Link
                key={index}
                href={cat.href}
                className={`
                  group flex items-center gap-2 px-5 py-3 rounded-lg
                  bg-white border transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-md 
                  ${cat.hot 
                    ? 'border-red-200 shadow-red-100 hover:border-red-300' 
                    : 'border-gray-300 hover:border-[#ab8754] '
                  }
                `}
              >
                <Icon className={`w-4 h-4 transition-colors ${cat.hot ? 'text-red-500' : 'text-[#ab8754] group-hover:text-[#ab8754]'}`} />
                
                <span className={`text-md font-medium ${cat.hot ? 'text-red-600' : 'text-gray-700'}`}>
                  {cat.label}
                </span>
                
                {cat.hot && (
                  <span className="ml-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Adoptuj Vinohrad - Speciální karta (místo obyčejného tlačítka) */}
        

      </div>
    </section>
  );
};

export default CategoryGridDesktop;