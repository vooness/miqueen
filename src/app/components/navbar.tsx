"use client"
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronRight, ShoppingBag, Facebook, Instagram, Mail, Home, Menu } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
  isHome?: boolean;
  isLast?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

// Data mimo komponentu pro lepší performance
const NAV_ITEMS: NavItem[] = [
  { label: 'Adoptuj vinohrad', href: '/adoptuj-vinohrad', icon: '🍇' },
  { label: 'Všechna vína', href: '/vsechna-nase-vina' },
  { label: 'Akční nabídka', href: '/akcni-nabidka', icon: '🔥' },
  { label: 'MiQueen mini', href: '/miqueen-mini' },
  { label: 'Poukazy', href: '/poukazy' },
  { label: 'Pro firmy', href: '/pro-firmy' },
  { label: 'Degustace', href: '/degustace' },
  { label: 'Kontakty', href: '/kontakty' }
];

const BREADCRUMB_MAP: Record<string, string> = {
  'adoptuj-vinohrad': 'Adoptuj vinohrad',
  'vsechna-nase-vina': 'Všechna vína',
  'akcni-nabidka': 'Akční nabídka',
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
  const [, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Optimalizovaný scroll handler s throttling
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (timeoutId) return;
      
      timeoutId = setTimeout(() => {
        const currentScrollY = window.scrollY;
        if (Math.abs(currentScrollY - lastScrollY) > 10) {
          setIsScrolled(currentScrollY > 50);
          lastScrollY = currentScrollY;
        }
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Zamezení scrollování při otevřeném menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMobileMenuOpen]);

  // Memoizované callbacky
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Memoizované breadcrumbs
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
      {/* STICKY NAVBAR - DARK THEME MATCHING FOOTER */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-stone-950/98 backdrop-blur-md shadow-2xl"
      >
        {/* Top decorative border */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo - VLEVO */}
            <Link 
              href="/" 
              className="flex items-center group cursor-pointer touch-manipulation z-50"
              prefetch={true}
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

            {/* Desktop Navigation - UPROSTŘED */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center gap-1 xl:gap-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-3 xl:px-4 py-2 text-stone-400 hover:text-stone-200 transition-all duration-300 font-medium text-sm xl:text-base tracking-wide group touch-manipulation"
                    prefetch={true}
                  >
                    <span className="flex items-center gap-1.5">
                      {item.icon && (
                        <span className="text-sm" role="img" aria-hidden="true">{item.icon}</span>
                      )}
                      <span className="relative">
                        {item.label}
                        <span 
                          className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                          style={{ backgroundColor: BRAND_COLOR }}
                        />
                      </span>
                    </span>
                    
                    {/* Active indicator */}
                    {pathname === item.href && (
                      <span 
                        className="absolute -bottom-1 left-0 right-0 h-0.5"
                        style={{ backgroundColor: BRAND_COLOR }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* E-shop button - VPRAVO */}
            <div className="hidden lg:flex items-center gap-4">
              <Link 
                href="https://shop.miqueen.cz"
                className="group touch-manipulation"
                prefetch={false}
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
              className="lg:hidden p-2 rounded-lg text-stone-400 hover:text-stone-200 hover:bg-stone-800/50 transition-all duration-200 touch-manipulation"
              aria-label="Otevřít menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Bottom decorative border - golden */}
        <div 
          className="h-[2px]" 
          style={{ 
            background: `linear-gradient(to right, transparent, ${BRAND_COLOR}80, ${BRAND_COLOR}, ${BRAND_COLOR}80, transparent)` 
          }} 
        />
      </nav>

      {/* BREADCRUMBS - POD NAVBAREM */}
      {breadcrumbs && (
        <div 
          className="fixed left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-sm top-[64px] lg:top-[80px]"
        >
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
                        prefetch={true}
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

      {/* MOBILE MENU - DARK THEME */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
            onClick={closeMobileMenu}
            role="button"
            aria-label="Zavřít menu"
            style={{ touchAction: 'none' }}
          />

          {/* Menu Panel */}
          <div 
            className="fixed top-0 right-0 h-full w-full max-w-sm z-50 shadow-2xl transform transition-transform duration-300 ease-out lg:hidden"
            style={{ 
              background: 'linear-gradient(to bottom, rgb(28, 25, 23), rgb(0, 0, 0))',
              willChange: 'transform'
            }}
          >
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-stone-800">
              <Link 
                href="/" 
                className="flex items-center touch-manipulation" 
                onClick={closeMobileMenu}
                prefetch={true}
              >
                <Image 
                  src="/logo-white.png" 
                  alt="MiQueen Logo" 
                  width={120}
                  height={48}
                  className="h-10 w-auto"
                  style={{ objectFit: 'contain' }}
                  priority
                  quality={85}
                />
              </Link>
              
              <button 
                onClick={closeMobileMenu}
                className="text-stone-400 hover:text-stone-200 transition-colors duration-200 p-2 rounded-lg hover:bg-stone-800/50 touch-manipulation"
                aria-label="Zavřít menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto overscroll-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
              <nav className="p-4 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-200 hover:bg-stone-800/50 active:bg-stone-800 text-stone-300 font-medium text-base tracking-wide touch-manipulation group"
                    onClick={closeMobileMenu}
                    prefetch={true}
                  >
                    <span className="flex items-center gap-2">
                      {item.icon && (
                        <span role="img" aria-hidden="true">{item.icon}</span>
                      )}
                      <span>{item.label}</span>
                    </span>
                    <ChevronRight 
                      className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                      style={{ color: BRAND_COLOR }}
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="p-4 pt-2">
                <Link 
                  href="https://shop.miqueen.cz"
                  className="w-full relative group block touch-manipulation"
                  onClick={closeMobileMenu}
                  prefetch={false}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div 
                    className="text-white p-4 rounded-2xl transition-all duration-200 font-semibold text-base tracking-wide flex items-center justify-center gap-2 shadow-xl active:shadow-lg active:scale-95" 
                    style={{ background: `linear-gradient(135deg, ${BRAND_COLOR}, #c49a5e)` }}
                  >
                    <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                    <span>Navštívit E-shop</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-stone-800 p-6">
              <div className="text-center mb-4">
                <div 
                  className="font-medium mb-3 text-sm" 
                  style={{ color: GOLD_COLOR }}
                >
                  Sledujte nás
                </div>
                <div className="flex justify-center gap-3">
                  <a 
                    href="https://www.facebook.com/vinarstvi.miqueen/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 touch-manipulation"
                    style={{ 
                      backgroundColor: 'rgba(171, 135, 84, 0.1)',
                      borderColor: 'rgba(171, 135, 84, 0.2)',
                      borderWidth: '1px'
                    }}
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" style={{ color: GOLD_COLOR }} />
                  </a>
                  <a 
                    href="https://www.instagram.com/vinarstvi.miqueen/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 touch-manipulation"
                    style={{ 
                      backgroundColor: 'rgba(171, 135, 84, 0.1)',
                      borderColor: 'rgba(171, 135, 84, 0.2)',
                      borderWidth: '1px'
                    }}
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" style={{ color: GOLD_COLOR }} />
                  </a>
                  <a 
                    href="mailto:info@miqueen.cz" 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 touch-manipulation"
                    style={{ 
                      backgroundColor: 'rgba(171, 135, 84, 0.1)',
                      borderColor: 'rgba(171, 135, 84, 0.2)',
                      borderWidth: '1px'
                    }}
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" style={{ color: GOLD_COLOR }} />
                  </a>
                </div>
              </div>
              
              <div className="text-center text-stone-500 text-xs">
                <div>Mikulov, Česká republika</div>
                <a 
                  href="mailto:info@miqueen.cz"
                  className="hover:underline transition-colors"
                  style={{ color: BRAND_COLOR }}
                >
                  info@miqueen.cz
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        /* Touch optimizations */
        * {
          -webkit-tap-highlight-color: transparent;
        }

        .touch-manipulation {
          touch-action: manipulation;
        }
      `}</style>
    </>
  );
};

export default Navbar;