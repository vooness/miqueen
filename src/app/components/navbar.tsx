"use client"
import React, { useState, useEffect } from 'react';
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

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Logika pro scroll efekty
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Adoptuj vinohrad', href: '/adoptuj-vinohrad' },
    { label: 'Všechna vína', href: '/vsechna-nase-vina' },
    { label: 'Akční nabídka', href: '/akcni-nabidka' },
    { label: 'MiQueen mini', href: '/miqueen-mini' },
    { label: 'Poukazy', href: '/poukazy' },
    { label: 'Pro firmy', href: '/pro-firmy' },
    { label: 'Degustace', href: '/degustace' },
    { label: 'Kontakty', href: '/kontakty' }
  ];

  // Mapa pro breadcrumbs
  const breadcrumbNameMap: Record<string, string> = {
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

  // Generování breadcrumbs
  const getBreadcrumbs = (): BreadcrumbItem[] | null => {
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
        name: breadcrumbNameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
        href: accumulatedPath,
        isLast
      });
    });

    return breadcrumbItems;
  };

  const breadcrumbs = getBreadcrumbs();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* MODERNÍ NAVBAR VE TVARU KAPKY */}
      <nav className="fixed top-4 lg:top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1600px] z-50">
        <div 
          className="backdrop-blur-md shadow-xl relative overflow-visible"
          style={{
            backgroundImage: 'url(/bgnav1.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '50px',
            border: '1px solid rgba(171, 135, 84, 0.15)',
          }}
        >
          <div className="flex items-center justify-between px-6 lg:px-10 py-2 lg:py-3">
            
            {/* Logo - VLEVO - KLIKACÍ NA HLAVNÍ STRÁNKU */}
            <Link href="/" className="flex items-center group cursor-pointer">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={120}
                height={48}
                className="h-10 sm:h-12 w-auto hover:scale-105 transition-transform duration-300"
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>

            {/* Desktop Navigation - UPROSTŘED */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-2 xl:space-x-4">
                {navItems.map((item, index) => (
                  <div key={index} className="relative group">
                    <Link
                      href={item.href}
                      className="text-black hover:text-white transition-all duration-300 font-semibold text-[13px] xl:text-[16px] tracking-wide flex items-center space-x-1 relative py-2 whitespace-nowrap"
                    >
                      <span className="relative flex items-center space-x-1">
                        {item.label === 'Adoptuj vinohrad' && (
                          <>
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-[11px] px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">
                              TIP na dárek
                            </span>
                            <span className="text-base">🍇</span>
                          </>
                        )}
                        {item.label === 'Akční nabídka' && <span className="text-base">🔥</span>}
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
                className="relative group inline-block"
              >
                <div className="relative px-6 py-2 bg-white rounded-full overflow-hidden transition-all duration-300">
                  <span className="relative z-10 flex items-center space-x-2 font-semibold text-[15px] tracking-wide text-black group-hover:text-white transition-colors duration-300">
                    <ShoppingBag className="h-4 w-4" />
                    <span>E-shop</span>
                  </span>
                  <div className="absolute -inset-1 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom bg-[#ab8754]" />
                </div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-amber-600 transition-all duration-300 p-2 relative"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''
                  }`}></span>
                  <span className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}></span>
                  <span className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* BREADCRUMBS - POD NAVBAREM (ale součást komponenty) */}
      {breadcrumbs && (
        <div className="fixed top-[76px] lg:top-[100px] left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1600px] z-40">
          <div className="bg-gradient-to-b from-amber-50/30 to-transparent backdrop-blur-sm rounded-2xl px-6 lg:px-10 py-2">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-[11px] lg:text-xs">
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={item.href}>
                  {index > 0 && (
                    <ChevronRight className="h-3 w-3 lg:h-3.5 lg:w-3.5 text-gray-400" />
                  )}
                  
                  {item.isLast ? (
                    <span className="text-amber-700 font-medium flex items-center space-x-1" style={{ color: '#ab8754' }}>
                      {item.isHome && <Home className="h-3 w-3 lg:h-3.5 lg:w-3.5" />}
                      <span>{item.name}</span>
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-amber-700 transition-colors duration-200 flex items-center space-x-1 group"
                    >
                      {item.isHome && <Home className="h-3 w-3 lg:h-3.5 lg:w-3.5 group-hover:scale-110 transition-transform duration-200" />}
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-[0.5px] bg-amber-700 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#ab8754' }}></span>
                      </span>
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* MOBILE MENU - OPTIMALIZOVANÉ */}
      <>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={closeMobileMenu}
        />

        {/* Menu Panel */}
        <div className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-white/98 backdrop-blur-xl border-l border-amber-600/20 shadow-2xl transform transition-transform duration-500 ease-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Header - KOMPAKTNĚJŠÍ */}
          <div className="flex items-center justify-between p-4 border-b border-amber-600/20">
            <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={100}
                height={40}
                className="h-8 w-auto"
                style={{ objectFit: 'contain' }}
              />
            </Link>
            
            <button 
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200 p-2"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation - KOMPAKTNĚJŠÍ MEZERY */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-3 space-y-1">
              {navItems.map((item, index) => (
                <div key={index} className="group">
                  <Link 
                    href={item.href}
                    className="flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-amber-50 text-gray-700 font-medium text-[15px] tracking-wide"
                    onClick={closeMobileMenu}
                  >
                    <span className="flex items-center space-x-1.5">
                      {item.label === 'Adoptuj vinohrad' && <span>🍇</span>}
                      {item.label === 'Akční nabídka' && <span>🔥</span>}
                      <span>{item.label}</span>
                    </span>
                    <ChevronRight className="h-4 w-4 text-amber-600" style={{ color: '#ab8754' }} />
                  </Link>
                </div>
              ))}
            </nav>

            {/* CTA Button - KOMPAKTNĚJŠÍ */}
            <div className="p-3 pt-2">
              <Link 
                href="https://shop.miqueen.cz"
                className="w-full relative group block"
                onClick={closeMobileMenu}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #ab8754, #c49a5e)' }}></div>
                <div className="relative bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white p-3 rounded-2xl transition-all duration-300 font-semibold text-base tracking-wide flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98]" 
                     style={{ background: 'linear-gradient(135deg, #ab8754, #c49a5e)' }}>
                  <ShoppingBag className="h-5 w-5" />
                  <span>Navštívit E-shop</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Footer - KOMPAKTNĚJŠÍ */}
          <div className="border-t border-amber-600/20 p-4">
            <div className="text-center mb-3">
              <div className="text-amber-600 font-medium mb-2 text-sm" style={{ color: '#ab8754' }}>Sledujte nás</div>
              <div className="flex justify-center space-x-4">
                <a href="https://www.facebook.com/vinarstvi.miqueen/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-600 transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/vinarstvi.miqueen/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-600 transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="mailto:info@miqueen.cz" className="text-gray-600 hover:text-amber-600 transition-colors duration-200">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="text-center text-gray-500 text-xs">
              <div>Mikulov, Česká republika</div>
              <div className="text-amber-600" style={{ color: '#ab8754' }}>info@miqueen.cz</div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Navbar;