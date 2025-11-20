"use client"
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronRight, ChevronDown, ShoppingBag, Facebook, Instagram, Mail, Home, Menu } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
  isHome?: boolean;
  isLast?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string; }[];
}

// Data mimo komponentu pro lepší performance
const NAV_ITEMS: NavItem[] = [
  { label: 'Adoptuj vinohrad', href: '/adoptuj-vinohrad' },
  { 
    label: 'Všechna vína', 
    href: '/vina/vsechna-vina',
    subItems: [
      { label: 'Všechna vína', href: '/vina/vsechna-vina' },
      { label: 'Akční nabídka', href: '/akcni-nabidka' },
      { label: 'Novinky', href: '/vina/novinky' },
      { label: 'Bílá vína', href: '/vina/bila-vina' },
      { label: 'Červená vína', href: '/vina/cervena-vina' },
      { label: 'Růžová vína', href: '/vina/ruzova-vina' },
      { label: 'Perlivá vína', href: '/vina/perliva-vina' },
      { label: 'Mimosa', href: '/vina/mimosa-special' },
      { label: 'Dárkové sety', href: '/vina/darkove-sety' }
    ]
  },
  { label: 'Blog', href: '/blog' },
  { label: 'MiQueen mini', href: '/miqueen-mini' },
  { label: 'Poukazy', href: '/poukazy' },
  { label: 'Pro firmy', href: '/pro-firmy' },
  { label: 'Degustace', href: '/degustace' },
  { label: 'Kontakty', href: '/kontakty' }
];

const BREADCRUMB_MAP: Record<string, string> = {
  'adoptuj-vinohrad': 'Adoptuj vinohrad',
  'akcni-nabidka': 'Akční nabídka',
  'vina': 'Vína',
  'vsechna-vina': 'Všechna vína',
  'novinky': 'Novinky',
  'bila-vina': 'Bílá vína',
  'cervena-vina': 'Červená vína',
  'ruzova-vina': 'Růžová vína',
  'perliva-vina': 'Perlivá vína',
  'mimosa-special': 'Mimosa',
  'darkove-sety': 'Dárkové sety',
  'blog': 'Blog',
  'miqueen-mini': 'MiQueen mini',
  'poukazy': 'Poukazy',
  'pro-firmy': 'Pro firmy',
  'degustace': 'Degustace',
  'kontakty': 'Kontakty',
  'eshop': 'E-shop'
};

const BRAND_COLOR = '#ab8754';
const GOLD_COLOR = '#d4a574';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Zamezení scrollování při otevřeném menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Prevence "overscroll" efektu na iOS
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setTimeout(() => setOpenMobileSubmenu(null), 300);
  }, []);

  const breadcrumbs = useMemo((): BreadcrumbItem[] | null => {
    if (pathname === '/') return null;

    const pathSegments = pathname.split('/').filter(segment => segment);
    const breadcrumbItems: BreadcrumbItem[] = [
      { name: 'Domů', href: '/', isHome: true }
    ];

    let accumulatedPath = '';
    pathSegments.forEach((segment, index) => {
      accumulatedPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      breadcrumbItems.push({
        name: BREADCRUMB_MAP[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
        href: accumulatedPath,
        isLast
      });
    });

    return breadcrumbItems;
  }, [pathname]);

  return (
    <>
      {/* STICKY NAVBAR */}
      <nav 
        // OPTIMALIZACE: Na mobilu vypneme backdrop-blur (žere výkon GPU) a použijeme plnou barvu
        // LG (Desktop): backdrop-blur-md pro hezký efekt
        className="fixed top-0 left-0 right-0 z-50 bg-stone-950 lg:bg-stone-950/90 lg:backdrop-blur-md shadow-xl will-change-transform"
        style={{ transform: 'translateZ(0)' }} // Vynucení GPU vrstvy
      >
        <div className="h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group cursor-pointer touch-manipulation z-50"
              onClick={closeMobileMenu}
            >
              <Image 
                src="/logo-white.png" 
                alt="MiQueen Logo" 
                width={120}
                height={48}
                className="h-8 lg:h-12 w-auto hover:opacity-80 transition-opacity duration-300"
                style={{ objectFit: 'contain' }}
                priority
                quality={90}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center gap-1 xl:gap-2">
                {NAV_ITEMS.map((item) => (
                  <div 
                    key={item.href}
                    className="relative group/dropdown"
                    onMouseEnter={() => item.subItems && setOpenDropdown(item.href)}
                    onMouseLeave={() => item.subItems && setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="relative px-3 xl:px-4 py-2 text-stone-400 hover:text-stone-200 transition-all duration-300 font-medium text-sm xl:text-base tracking-wide group touch-manipulation block"
                    >
                      <span className="relative flex items-center gap-1">
                        {item.label}
                        {item.subItems && (
                          <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:translate-y-0.5" />
                        )}
                        <span 
                          className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                          style={{ backgroundColor: BRAND_COLOR }}
                        />
                      </span>
                      
                      {pathname === item.href && (
                        <span 
                          className="absolute -bottom-1 left-0 right-0 h-0.5"
                          style={{ backgroundColor: BRAND_COLOR }}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {item.subItems && openDropdown === item.href && (
                      <div className="absolute top-full left-0 pt-1 w-56 z-50">
                        <div
                          className="bg-stone-900/98 backdrop-blur-md rounded-xl shadow-2xl border border-stone-800/50 overflow-hidden animate-in slide-in-from-top-2 duration-200"
                        >
                          <div className="py-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-4 py-3 text-stone-400 hover:text-stone-200 hover:bg-stone-800/50 transition-all duration-200 font-medium text-sm relative group/item"
                              >
                                <span className="flex items-center justify-between">
                                  <span>{subItem.label}</span>
                                  <ChevronRight 
                                    className="h-4 w-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" 
                                    style={{ color: BRAND_COLOR }}
                                  />
                                </span>
                                <span 
                                  className="absolute left-0 top-0 bottom-0 w-0 group-hover/item:w-1 transition-all duration-200"
                                  style={{ backgroundColor: BRAND_COLOR }}
                                />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* E-shop button - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <Link 
                href="https://shop.miqueen.cz"
                className="group touch-manipulation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div 
                  className="px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm tracking-wide flex items-center gap-2"
                  style={{ 
                    background: `linear-gradient(135deg, ${BRAND_COLOR}, #c49a5e)`,
                    color: 'white'
                  }}
                >
                  <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                  <span>E-shop</span>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 -mr-2 rounded-lg text-stone-400 hover:text-stone-200 transition-all duration-200 touch-manipulation active:scale-95"
              aria-label="Otevřít menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div 
          className="h-[2px]" 
          style={{ 
            background: `linear-gradient(to right, transparent, ${BRAND_COLOR}80, ${BRAND_COLOR}, ${BRAND_COLOR}80, transparent)` 
          }} 
        />
      </nav>

      {/* BREADCRUMBS */}
      {breadcrumbs && (
        <div className="fixed left-0 right-0 z-40 bg-stone-950 lg:bg-stone-950/95 lg:backdrop-blur-sm top-[64px] lg:top-[80px]">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="py-3">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs lg:text-sm">
                {breadcrumbs.map((item, index) => (
                  <React.Fragment key={item.href}>
                    {index > 0 && (
                      <ChevronRight className="h-3.5 w-3.5 text-stone-600" aria-hidden="true" />
                    )}
                    
                    {item.isLast ? (
                      <span 
                        className="font-medium flex items-center gap-1.5" 
                        style={{ color: GOLD_COLOR }}
                        aria-current="page"
                      >
                        {item.isHome && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                        <span>{item.name}</span>
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-stone-500 hover:text-stone-300 transition-colors duration-200 flex items-center gap-1.5 group touch-manipulation"
                      >
                        {item.isHome && (
                          <Home className="h-3.5 w-3.5 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                        )}
                        <span className="relative">
                          {item.name}
                          <span 
                            className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" 
                            style={{ backgroundColor: BRAND_COLOR }}
                          />
                        </span>
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-stone-800/30 to-transparent" />
        </div>
      )}

      {/* MOBILE MENU */}
      {/* Backdrop - BEZ BLURU PRO VÝKON */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/90 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
        style={{ willChange: 'opacity' }}
      />

      {/* Sliding Panel - OPTIMALIZOVÁNO */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:max-w-sm z-[61] shadow-2xl transform transition-transform duration-300 ease-out lg:hidden flex flex-col bg-stone-950 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ willChange: 'transform' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-stone-800 flex-shrink-0">
          <Link 
            href="/" 
            className="flex items-center" 
            onClick={closeMobileMenu}
          >
            <Image 
              src="/logo-white.png" 
              alt="MiQueen Logo" 
              width={100}
              height={40}
              className="h-8 w-auto"
              style={{ objectFit: 'contain' }}
            />
          </Link>
          
          <button 
            onClick={closeMobileMenu}
            className="text-stone-400 hover:text-stone-200 p-2 -mr-2 rounded-lg hover:bg-stone-800/50 touch-manipulation"
            aria-label="Zavřít menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain">
          <nav className="p-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                {item.subItems ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => setOpenMobileSubmenu(openMobileSubmenu === item.href ? null : item.href)}
                      className="w-full flex items-center justify-between p-4 rounded-xl transition-colors duration-200 hover:bg-stone-800/50 text-stone-300 font-medium text-base tracking-wide touch-manipulation active:bg-stone-800"
                    >
                      <span>{item.label}</span>
                      <ChevronRight 
                        className={`h-5 w-5 transition-transform duration-300 ${
                          openMobileSubmenu === item.href ? 'rotate-90' : ''
                        }`}
                        style={{ color: BRAND_COLOR }}
                      />
                    </button>
                    
                    {/* Submenu */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openMobileSubmenu === item.href ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="bg-stone-900/50 rounded-xl mt-1 py-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block py-3 px-4 pl-8 text-stone-400 hover:text-stone-200 transition-colors duration-200 text-sm font-medium touch-manipulation active:bg-stone-800/50"
                            onClick={closeMobileMenu}
                          >
                            <span className="flex items-center gap-3">
                              <span 
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0" 
                                style={{ backgroundColor: BRAND_COLOR }}
                              />
                              {subItem.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={item.href}
                    className="flex items-center justify-between p-4 rounded-xl transition-colors duration-200 hover:bg-stone-800/50 text-stone-300 font-medium text-base tracking-wide touch-manipulation group active:bg-stone-800"
                    onClick={closeMobileMenu}
                  >
                    <span>{item.label}</span>
                    <ChevronRight 
                      className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                      style={{ color: BRAND_COLOR }}
                    />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Footer Info */}
          <div className="p-6 border-t border-stone-800 mt-4 space-y-6">
            <Link 
              href="https://shop.miqueen.cz"
              className="w-full block touch-manipulation"
              onClick={closeMobileMenu}
              target="_blank"
            >
              <div 
                className="text-white p-4 rounded-2xl font-semibold text-base tracking-wide flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform" 
                style={{ background: `linear-gradient(135deg, ${BRAND_COLOR}, #c49a5e)` }}
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Navštívit E-shop</span>
              </div>
            </Link>

            <div className="text-center">
              <div className="font-medium mb-4 text-sm" style={{ color: GOLD_COLOR }}>Sledujte nás</div>
              <div className="flex justify-center gap-4">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/vinarstvi.miqueen/" },
                  { icon: Instagram, href: "https://www.instagram.com/vinarstvi.miqueen/" },
                  { icon: Mail, href: "mailto:info@miqueen.cz" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 active:scale-95"
                    style={{ 
                      backgroundColor: 'rgba(171, 135, 84, 0.1)',
                      border: '1px solid rgba(171, 135, 84, 0.2)'
                    }}
                  >
                    <social.icon className="h-5 w-5" style={{ color: GOLD_COLOR }} />
                  </a>
                ))}
              </div>
              <div className="mt-6 text-stone-500 text-xs">
                <p>Mikulov, Česká republika</p>
                <a href="mailto:info@miqueen.cz" className="hover:text-stone-300 transition-colors">info@miqueen.cz</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Navbar);