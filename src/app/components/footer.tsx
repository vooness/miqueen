"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Instagram, Facebook, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-stone-950 to-black">
      {/* Top decorative border - matches your wood theme */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />
      
      <div className="px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* Brand */}
            <div>
              <div className="mb-6">
                <Image 
                  src="/logo-white.png" 
                  alt="MiQueen" 
                  width={160}
                  height={64}
                  className="h-16 w-auto"
                />
              </div>
              
              <p className="text-stone-400 text-sm leading-relaxed mb-6">
                Prémiové moravské vinařství s rodinnou tradicí. 
                Vytváříme vína s charakterem a příběhem již od roku 2015.
              </p>

              {/* CTA matching your site button */}
              <Link 
                href="/vsechna-nase-vina" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all group"
                style={{ 
                  backgroundColor: '#ab8754',
                  boxShadow: '0 2px 8px rgba(171, 135, 84, 0.3)'
                }}
              >
                Objevte naše vína
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-medium mb-6 text-sm uppercase tracking-[0.15em]" style={{ color: '#d4a574' }}>
                Navigace
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'Adoptuj vinohrad', href: '/adoptuj-vinohrad' },
                  { label: 'Všechna vína', href: '/vsechna-nase-vina' },
                  { label: 'Akční nabídka', href: '/akcni-nabidka' },
                  { label: 'MiQueen mini', href: '/miqueen-mini' }
                ].map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-stone-500 hover:text-stone-300 text-sm transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-0 h-px mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" 
                        style={{ backgroundColor: '#ab8754' }}
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-medium mb-6 text-sm uppercase tracking-[0.15em]" style={{ color: '#d4a574' }}>
                Služby
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'Poukazy', href: '/poukazy' },
                  { label: 'Pro firmy', href: '/pro-firmy' },
                  { label: 'Degustace', href: '/degustace' },
                  { label: 'Kontakty', href: '/kontakty' }
                ].map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-stone-500 hover:text-stone-300 text-sm transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-0 h-px mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" 
                        style={{ backgroundColor: '#ab8754' }}
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-medium mb-6 text-sm uppercase tracking-[0.15em]" style={{ color: '#d4a574' }}>
                Spojte se s námi
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+420731610344" className="text-stone-500 hover:text-stone-300 text-sm transition-colors duration-200 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" style={{ color: '#ab8754' }} />
                    +420 731 610 344
                  </a>
                </li>
                <li>
                  <a href="mailto:info@miqueen.cz" className="text-stone-500 hover:text-stone-300 text-sm transition-colors duration-200 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" style={{ color: '#ab8754' }} />
                    info@miqueen.cz
                  </a>
                </li>
                <li className="text-stone-500 text-sm">
                  Za Valama 938, 696 15 Čejkovice
                </li>
                
              </ul>
            </div>
          </div>

          {/* Partner Logo Section */}
          <div className="mb-8 pb-8 border-b border-stone-900/50">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-stone-600 text-xs uppercase tracking-wider mb-4">
                  Partner vinařství
                </p>
                <div className="flex items-center justify-center">
                  <div className="relative px-6 py-4 rounded-xl bg-stone-900/30 backdrop-blur-sm border border-stone-800/50 hover:border-[#ab8754]/30 transition-all duration-300">
                    <Image 
                      src="/new-logo.svg" 
                      alt="Partner Logo" 
                      width={140}
                      height={50}
                      className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6">
                <p className="text-stone-600 text-xs">
                  © 2025 MiQueen. Všechna práva vyhrazena.
                </p>
                
                {/* Social icons */}
                <div className="flex items-center gap-1">
                  <a
                    href="https://www.facebook.com/vinarstvi.miqueen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                    style={{ 
                      backgroundColor: 'rgba(171, 135, 84, 0.1)',
                      borderColor: 'rgba(171, 135, 84, 0.2)',
                      borderWidth: '1px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(171, 135, 84, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(171, 135, 84, 0.1)';
                    }}
                  >
                    <Facebook className="w-3.5 h-3.5" style={{ color: '#d4a574' }} />
                  </a>
                  
                  <a
                    href="https://www.instagram.com/vinarstvi.miqueen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                    style={{ 
                      backgroundColor: 'rgba(171, 135, 84, 0.1)',
                      borderColor: 'rgba(171, 135, 84, 0.2)',
                      borderWidth: '1px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(171, 135, 84, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(171, 135, 84, 0.1)';
                    }}
                  >
                    <Instagram className="w-3.5 h-3.5" style={{ color: '#d4a574' }} />
                  </a>
                </div>
              </div>

              {/* Legal */}
              <div className="flex items-center gap-5 text-xs">
                <Link href="/zasady-ochrany-osobnich-udaju" className="text-stone-600 hover:text-stone-400 transition-colors">
                  Ochrana údajů
                </Link>
                <span className="text-stone-700">·</span>
                <Link href="/obchodni-podminky" className="text-stone-600 hover:text-stone-400 transition-colors">
                  Podmínky
                </Link>
                <span className="text-stone-700">·</span>
                <Link href="/cookies" className="text-stone-600 hover:text-stone-400 transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;