import React from 'react';
import { Wine, MapPin, Phone, Clock, Facebook, Instagram, Youtube, Award, Heart } from 'lucide-react';

const Footer = () => {
  const wineCategories = [
    'Vína bílá',
    'Vína červená', 
    'Vína růžová a klaret',
    'Frizzante',
    'MiQueen mini',
    'Limitované edice'
  ];

  const quickLinks = [
    'Degustační programy',
    'Vinařské prohlídky',
    'Firemní události',
    'Svatební balíčky',
    'Wine Club',
    'Gift Cards'
  ];

  return (
    <footer className="relative text-white overflow-hidden" style={{ backgroundColor: '#ab8754' }}>
      
      {/* Vlnitá maska nahoře */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg 
          className="relative block w-full h-20" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="#1C1C1E"
          ></path>
        </svg>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-black rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-30"></div>
                  <div className="relative bg-white p-3 rounded-full shadow-xl">
                    <Wine className="h-8 w-8" style={{ color: '#ab8754' }} />
                  </div>
                </div>
                <div>
                  <span className="text-3xl font-bold text-white">
                    MiQueen
                  </span>
                  <div className="text-sm text-white/80 font-light tracking-[0.2em] uppercase">
                    Mikulov Estate
                  </div>
                </div>
              </div>
              
              <p className="text-white/80 mb-8 leading-relaxed text-lg max-w-md">
                Rodinné vinařství s desetiletou tradicí. Pěstujeme prémiová vína 
                na svazích Pálavy s respektem k terroir a vinařskému řemeslu.
              </p>

              {/* Awards */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 backdrop-blur-sm">
                  <Award className="h-4 w-4 text-white" />
                  <span className="text-white text-sm font-medium">Wine Awards 2024</span>
                </div>
              </div>

              {/* Social media */}
              <div className="flex space-x-6">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Youtube, href: '#', label: 'YouTube' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group relative"
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-white rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative text-white/70 hover:text-white transition-colors duration-300 p-3">
                      <social.icon className="h-6 w-6" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Wine Collections */}
            <div>
              <h3 className="text-white font-semibold mb-8 text-lg tracking-wide">
                Naše kolekce
              </h3>
              <ul className="space-y-4">
                {wineCategories.map((category, index) => (
                  <li key={index}>
                    <a 
                      href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-white/70 hover:text-white transition-colors duration-300 group flex items-center"
                    >
                      <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-3"></span>
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-8 text-lg tracking-wide">
                Služby & Zážitky
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-white/70 hover:text-white transition-colors duration-300 group flex items-center"
                    >
                      <span className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-3"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact section */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Address */}
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Adresa vinařství</h4>
                    <p className="text-white/70 leading-relaxed">
                      Vinařství MiQueen<br />
                      Mikulov 692 01<br />
                      Česká republika
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Kontakt</h4>
                    <p className="text-white/70 mb-1">+420 XXX XXX XXX</p>
                    <a 
                      href="mailto:info@miqueen.cz" 
                      className="text-white hover:text-white/80 transition-colors duration-300"
                    >
                      info@miqueen.cz
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening hours */}
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Otevírací doba</h4>
                    <div className="text-white/70 space-y-1 text-sm">
                      <div>Po - Pá: 9:00 - 18:00</div>
                      <div>So: 10:00 - 16:00</div>
                      <div>Ne: Po domluvě</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              <div className="flex items-center space-x-2 text-white/60 text-sm">
                <span>© 2025 MiQueen Vinařství.</span>
                <Heart className="h-4 w-4 text-red-400" />
                <span>Vytvořeno s láskou v Mikulově.</span>
              </div>

              <div className="flex space-x-8 text-sm">
                <a 
                  href="#privacy" 
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  Ochrana osobních údajů
                </a>
                <a 
                  href="#terms" 
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  Obchodní podmínky
                </a>
                <a 
                  href="#cookies" 
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;