"use client"
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronRight, ShoppingBag, Facebook, Instagram, Mail, Home } from 'lucide-react';

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

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Memoizované inline styly - BEZ BLUR, SE SVG POZADÍM
  const navbarStyle = useMemo(() => ({
    backgroundImage: 'url(/bgnav1.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '50px',
    border: '1px solid rgba(171, 135, 84, 0.15)',
    willChange: isScrolled ? 'transform' : 'auto'
  }), [isScrolled]);

  return (
    <>
      {/* NAVBAR SE SVG POZADÍM, BEZ BLUR */}
      <nav className="fixed top-4 lg:top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1600px] z-50">
        <div 
          className="shadow-xl relative overflow-visible"
          style={navbarStyle}
        >
          <div className="flex items-center justify-between px-6 lg:px-10 py-2 lg:py-3">
            
            {/* Logo - VLEVO - KLIKACÍ NA HLAVNÍ STRÁNKU */}
            <Link 
              href="/" 
              className="flex items-center group cursor-pointer touch-manipulation"
              prefetch={true}
            >
              <Image 
                src="/logo.png" 
                alt="MiQueen Logo" 
                width={120}
                height={48}
                className="h-10 sm:h-12 w-auto hover:scale-105 transition-transform duration-300"
                style={{ objectFit: 'contain' }}
                priority
                quality={90}
              />
            </Link>

            {/* Desktop Navigation - UPROSTŘED */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-2 xl:space-x-4">
                {NAV_ITEMS.map((item) => (
                  <div key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className="text-black hover:text-white transition-all duration-300 font-semibold text-[13px] xl:text-[16px] tracking-wide flex items-center space-x-1 relative py-2 whitespace-nowrap touch-manipulation"
                      prefetch={true}
                    >
                      <span className="relative flex items-center space-x-1">
                        {item.label === 'Adoptuj vinohrad' && (
                          <>
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-[11px] px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">
                              TIP na dárek
                            </span>
                            <span className="text-base" role="img" aria-label="Hrozny">🍇</span>
                          </>
                        )}
                        {item.label === 'Akční nabídka' && (
                          <span className="text-base" role="img" aria-label="Oheň">🔥</span>
                        )}
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* E-shop button - VPRAVO */}
            <div className="hidden lg:block">
              <Link 
                href="https://shop.miqueen.cz"
                className="relative group overflow-hidden touch-manipulation"
                prefetch={false}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div 
                  className="text-white px-8 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold text-base tracking-wide flex items-center space-x-2 hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${BRAND_COLOR}, #c49a5e)` }}
                >
                  <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                  <span>E-shop</span>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden text-gray-700 hover:text-amber-700 transition-colors duration-200 p-2 touch-manipulation"
              aria-label="Otevřít menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* BREADCRUMBS - ČISTÉ BÍLÉ POZADÍ BEZ BLUR/SHADOW, ZAROVNANÉ POD LOGEM */}
      {breadcrumbs && (
        <div className="fixed top-[76px] lg:top-[100px] left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1600px] z-40">
          <div 
            className="inline-block rounded-full px-4 lg:px-6 py-2 ml-6 lg:ml-10"
            style={{
              backgroundColor: 'white',
            }}
          >
            <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-[11px] lg:text-xs">
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={item.href}>
                  {index > 0 && (
                    <ChevronRight className="h-3 w-3 lg:h-3.5 lg:w-3.5 text-gray-400" aria-hidden="true" />
                  )}
                  
                  {item.isLast ? (
                    <span 
                      className="text-amber-700 font-medium flex items-center space-x-1" 
                      style={{ color: BRAND_COLOR }}
                      aria-current="page"
                    >
                      {item.isHome && <Home className="h-3 w-3 lg:h-3.5 lg:w-3.5" aria-hidden="true" />}
                      <span>{item.name}</span>
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-amber-700 transition-colors duration-200 flex items-center space-x-1 group touch-manipulation"
                      prefetch={true}
                    >
                      {item.isHome && (
                        <Home className="h-3 w-3 lg:h-3.5 lg:w-3.5 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                      )}
                      <span className="relative">
                        {item.name}
                        <span 
                          className="absolute -bottom-0.5 left-0 w-0 h-[0.5px] bg-amber-700 transition-all duration-300 group-hover:w-full" 
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
      )}

      {/* MOBILE MENU - BEZ BLUR EFEKTŮ */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop - BEZ BLUR */}
          <div 
            className="fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 lg:hidden"
            onClick={closeMobileMenu}
            role="button"
            aria-label="Zavřít menu"
            style={{ touchAction: 'none' }}
          />

          {/* Menu Panel - BEZ BLUR */}
          <div 
            className="fixed top-0 right-0 h-full w-full max-w-sm z-50 border-l border-amber-600/20 shadow-2xl transform transition-transform duration-300 ease-out lg:hidden"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.98)', // Solid pozadí místo blur
              willChange: 'transform'
            }}
          >
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-amber-600/20">
              <Link 
                href="/" 
                className="flex items-center touch-manipulation" 
                onClick={closeMobileMenu}
                prefetch={true}
              >
                <Image 
                  src="/logo.png" 
                  alt="MiQueen Logo" 
                  width={100}
                  height={40}
                  className="h-8 w-auto"
                  style={{ objectFit: 'contain' }}
                  priority
                  quality={85}
                />
              </Link>
              
              <button 
                onClick={closeMobileMenu}
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200 p-2 touch-manipulation"
                aria-label="Zavřít menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation - OPTIMALIZOVANÉ PRO MOBIL */}
            <div className="flex-1 overflow-y-auto overscroll-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
              <nav className="p-3 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.href} className="group">
                    <Link 
                      href={item.href}
                      className="flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors duration-200 hover:bg-amber-50 active:bg-amber-100 text-gray-700 font-medium text-[15px] tracking-wide touch-manipulation"
                      onClick={closeMobileMenu}
                      prefetch={true}
                    >
                      <span className="flex items-center space-x-1.5">
                        {item.icon && (
                          <span role="img" aria-hidden="true">{item.icon}</span>
                        )}
                        <span>{item.label}</span>
                      </span>
                      <ChevronRight 
                        className="h-4 w-4 text-amber-600" 
                        style={{ color: BRAND_COLOR }}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="p-3 pt-2">
                <Link 
                  href="https://shop.miqueen.cz"
                  className="w-full relative group block touch-manipulation"
                  onClick={closeMobileMenu}
                  prefetch={false}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div 
                    className="text-white p-3 rounded-2xl transition-all duration-200 font-semibold text-base tracking-wide flex items-center justify-center space-x-2 shadow-xl active:shadow-lg active:scale-95" 
                    style={{ background: `linear-gradient(135deg, ${BRAND_COLOR}, #c49a5e)` }}
                  >
                    <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                    <span>Navštívit E-shop</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-amber-600/20 p-4">
              <div className="text-center mb-3">
                <div 
                  className="text-amber-600 font-medium mb-2 text-sm" 
                  style={{ color: BRAND_COLOR }}
                >
                  Sledujte nás
                </div>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://www.facebook.com/vinarstvi.miqueen/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-amber-600 active:scale-95 transition-all duration-200 touch-manipulation p-2"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/vinarstvi.miqueen/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-amber-600 active:scale-95 transition-all duration-200 touch-manipulation p-2"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="mailto:info@miqueen.cz" 
                    className="text-gray-600 hover:text-amber-600 active:scale-95 transition-all duration-200 touch-manipulation p-2"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="text-center text-gray-500 text-xs">
                <div>Mikulov, Česká republika</div>
                <a 
                  href="mailto:info@miqueen.cz"
                  className="hover:underline"
                  style={{ color: BRAND_COLOR }}
                >
                  info@miqueen.cz
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;