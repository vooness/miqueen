"use client"
import React, { useState, useEffect } from 'react';
import { X, Wine, ChevronDown, ShoppingBag, ChevronRight, Facebook, Instagram, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'O vinařství', href: '#about' },
    { 
      label: 'Kolekce vín', 
      href: '#wines', 
      dropdown: [
        { name: 'Vína bílá', desc: 'Elegantní bílá vína' },
        { name: 'Vína červená', desc: 'Plná červená vína' },
        { name: 'Vína růžová a klaret', desc: 'Jemná růžová vína' },
        { name: 'Frizzante', desc: 'Šumivá vína' },
        { name: 'MiQueen mini', desc: 'Malé lahve' }
      ]
    },
    { label: 'Novinky', href: '#news' },
    { label: 'Adoptuj vinohrad', href: '#adopt' },
    { label: 'Kontakt', href: '#contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-black/90 backdrop-blur-xl shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-24 xl:px-32">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            
            {/* Logo */}
            <div className="flex items-center group cursor-pointer flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" style={{ backgroundColor: '#ab8754' }}></div>
                <div className="relative bg-amber-600 p-2 sm:p-2.5 lg:p-3 rounded-full shadow-xl" style={{ backgroundColor: '#ab8754' }}>
                  <Wine className="h-5 sm:h-6 lg:h-8 w-5 sm:w-6 lg:w-8 text-white" />
                </div>
              </div>
              <div className="ml-2 sm:ml-3 lg:ml-4">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-400 tracking-wide" style={{ color: '#ab8754' }}>
                  MiQueen
                </span>
                <div className="text-xs text-amber-400/80 font-light tracking-[0.1em] sm:tracking-[0.2em] uppercase hidden sm:block" style={{ color: '#ab8754' }}>
                  Mikulov Estate
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8 xl:space-x-12">
                {navItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.dropdown ? index : null)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className="text-gray-200 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide uppercase flex items-center space-x-1 relative"
                    >
                      <span className="relative flex items-center space-x-1">
                        {item.label === 'Adoptuj vinohrad' && <span>🍇</span>}
                        <span className="relative">
                          {item.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#ab8754' }}></span>
                        </span>
                      </span>
                      {item.dropdown && (
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} />
                      )}
                    </a>
                    
                    {item.dropdown && (
                      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-6 w-80 transition-all duration-300 ${
                        activeDropdown === index 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible translate-y-4'
                      }`}>
                        <div className="bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-600/20 overflow-hidden">
                          <div className="p-6">
                            {item.dropdown.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={`#${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block group/item p-4 rounded-xl hover:bg-amber-600/10 transition-all duration-300"
                              >
                                <div className="text-amber-400 font-medium mb-1 group-hover/item:text-white" style={{ color: '#ab8754' }}>
                                  {subItem.name}
                                </div>
                                <div className="text-gray-400 text-sm group-hover/item:text-gray-300">
                                  {subItem.desc}
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* E-shop button */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <button className="relative group">
                <div className="absolute inset-0 bg-amber-600 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-300" style={{ backgroundColor: '#ab8754' }}></div>
                <div className="relative bg-amber-600 hover:bg-amber-700 text-white px-6 xl:px-8 py-2.5 xl:py-3 rounded-full transition-all duration-300 font-medium text-sm tracking-wide uppercase flex items-center space-x-2 shadow-xl" style={{ backgroundColor: '#ab8754' }}>
                  <ShoppingBag className="h-4 w-4" />
                  <span>E-shop</span>
                </div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-200 hover:text-white transition-all duration-300 p-2 relative"
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

      {/* MOBILE MENU */}
      <>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={closeMobileMenu}
        />

        {/* Menu Panel */}
        <div className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-gray-900/98 backdrop-blur-xl border-l border-amber-600/20 shadow-2xl transform transition-transform duration-500 ease-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-amber-600/20">
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-600 rounded-full blur-lg opacity-40" style={{ backgroundColor: '#ab8754' }}></div>
                <div className="relative bg-amber-600 p-2 rounded-full" style={{ backgroundColor: '#ab8754' }}>
                  <Wine className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <span className="text-lg sm:text-xl font-bold text-amber-400" style={{ color: '#ab8754' }}>
                  MiQueen
                </span>
                <div className="text-xs text-amber-400/80 font-light tracking-widest uppercase" style={{ color: '#ab8754' }}>
                  Menu
                </div>
              </div>
            </div>
            
            <button 
              onClick={closeMobileMenu}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-4 sm:p-6 space-y-2">
              {navItems.map((item, index) => (
                <div key={index} className="group">
                  <div 
                    className={`flex items-center justify-between p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-amber-600/10`}
                    onClick={item.dropdown ? () => toggleExpand(index) : closeMobileMenu}
                  >
                    <a 
                      href={item.href}
                      className="text-gray-200 font-medium text-base sm:text-lg tracking-wide flex-1 hover:text-white flex items-center space-x-1"
                      onClick={!item.dropdown ? closeMobileMenu : (e) => e.preventDefault()}
                    >
                      {item.label === 'Adoptuj vinohrad' && <span>🍇</span>}
                      <span>{item.label}</span>
                    </a>
                    {item.dropdown && (
                      <ChevronRight className={`h-4 w-4 sm:h-5 sm:w-5 text-amber-400 transition-transform duration-300 ${
                        expandedItem === index ? 'rotate-90' : ''
                      }`} style={{ color: '#ab8754' }} />
                    )}
                  </div>
                  
                  {/* Submenu */}
                  {item.dropdown && (
                    <div className={`ml-2 sm:ml-4 overflow-hidden transition-all duration-300 ${
                      expandedItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="py-2 space-y-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={`#${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block p-2 sm:p-3 text-sm sm:text-base text-gray-400 hover:text-white hover:bg-amber-600/5 rounded-lg transition-all duration-200"
                            onClick={closeMobileMenu}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="p-4 sm:p-6">
              <button 
                className="w-full relative group"
                onClick={closeMobileMenu}
              >
                <div className="absolute inset-0 bg-amber-600 rounded-xl sm:rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-300" style={{ backgroundColor: '#ab8754' }}></div>
                <div className="relative bg-amber-600 hover:bg-amber-700 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 font-medium text-base sm:text-lg tracking-wide flex items-center justify-center space-x-2 sm:space-x-3 shadow-xl" style={{ backgroundColor: '#ab8754' }}>
                  <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Navštívit E-shop</span>
                </div>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-amber-600/20 p-4 sm:p-6">
            <div className="text-center mb-4">
              <div className="text-amber-400 font-medium mb-2 sm:mb-1" style={{ color: '#ab8754' }}>Sledujte nás</div>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </div>
            </div>
            
            <div className="text-center text-gray-500 text-xs sm:text-sm">
              <div>Mikulov, Česká republika</div>
              <div className="text-amber-400" style={{ color: '#ab8754' }}>info@miqueen.cz</div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Navbar;