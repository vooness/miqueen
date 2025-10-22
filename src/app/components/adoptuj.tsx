"use client";
import React from "react";
import { Play, Heart, Grape, Wine } from "lucide-react";

const AdoptujVinohrad: React.FC = () => {

  const experiences = [
    "Staň se virtuálním vinařem",
    "Poznej fáze práce na vinohradu",
    "Vyzkoušej si práci vinohradníka",
    "Měj kvalitní moravská vína",
    "Pojmenuj svůj mikrovinohrad",
    "Zaži celoroční vinařský zážitek"
  ];

  return (
    <section 
      className="py-16 sm:py-20 lg:py-28 relative overflow-hidden " 
      style={{ 
        backgroundColor: "#fefbea"
      }}
    >
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse" 
             style={{ background: `radial-gradient(circle, #ab875415, transparent)` }}></div>
        <div className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse animation-delay-2000"
             style={{ background: `radial-gradient(circle, #ab875410, transparent)` }}></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center space-x-3 text-gray-600 font-medium text-sm sm:text-base tracking-wider uppercase mb-4">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent" style={{ backgroundColor: "#ab8754" }}></div>
              <span>Exkluzivní nabídka</span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent" style={{ backgroundColor: "#ab8754" }}></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 tracking-wide">
              <span style={{ color: "#ab8754" }}>Adoptuj</span> vinohrad
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl font-light italic" style={{ color: "#ab8754" }}>
              Tvůj relax kdykoliv a kdekoliv
            </p>
          </div>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center mt-8 sm:mt-12">
            <div className="w-16 sm:w-24 lg:w-32 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <div className="mx-4 sm:mx-6 lg:mx-8 flex items-center space-x-2 sm:space-x-3">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full" style={{ backgroundColor: "#ab8754" }}></div>
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: "#ab8754" }} />
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full" style={{ backgroundColor: "#ab8754" }}></div>
            </div>
            <div className="w-16 sm:w-24 lg:w-32 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 mb-16 sm:mb-20">
          
          {/* Video section - left */}
          <div className="relative group">
            <div 
              className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-3xl mb-8"
              style={{
                animationDelay: '200ms',
                animation: 'fadeInLeft 0.8s ease-out forwards'
              }}
            >
              {/* Video container */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source src="/video/adoptuj-vinohrad.webm" type="video/webm" />
                  Váš prohlížeč nepodporuje přehrávání videa.
                </video>
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-white/20 rounded-tl-2xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-white/20 rounded-br-2xl pointer-events-none"></div>
              </div>
              
              {/* Elegant frame */}
              <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border border-gray-200 pointer-events-none"></div>
            </div>
            
            {/* Glow effect */}
            <div 
              className="absolute -inset-4 rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundColor: "#ab8754" }}
            ></div>

            {/* CTA Buttons pod videem */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a 
                href="https://shop.miqueen.cz/adoptuj-vinohrad/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-8 sm:px-10 py-3 sm:py-4 text-white font-medium text-sm sm:text-base transition-all duration-300 hover:shadow-xl rounded-full hover:scale-105 text-center"
                style={{ backgroundColor: "#ab8754" }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative group-hover:tracking-wide transition-all duration-300">
                  Adoptuj teď
                </span>
              </a>
              
              <a 
                href="https://shop.miqueen.cz/kontakt/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 sm:px-10 py-3 sm:py-4 text-gray-700 font-medium text-sm sm:text-base border-2 border-gray-300 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:shadow-lg text-center"
              >
                <span className="group-hover:text-gray-900 transition-colors duration-300 group-hover:tracking-wide">
                  Více informací
                </span>
              </a>
            </div>
          </div>
          
          {/* Content section - right */}
          <div 
            className="space-y-8 lg:space-y-10"
            style={{
              animationDelay: '400ms',
              animation: 'fadeInRight 0.8s ease-out forwards'
            }}
          >
            {/* Main description */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg sm:text-xl lg:text-2xl font-light">
                Staň se virtuálním vinařem. Poznej fáze práce na vinohradu během celého roku, 
                vyzkoušej si práci vinohradníka, měj po celý rok skvělá moravská vína z Pálavy ve své 
                skleněce, pojmenuj svůj mikrovinohrad a zaži jeden velký celý rok trvající zážitek.
              </p>
              
              <p className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900">
                Adoptovat vinohrad můžeš sám pro sebe anebo jako 
                <span style={{ color: "#ab8754" }}> dárek</span>.
              </p>
            </div>

            {/* Experience layout - clean 2 sloupce */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Co tě čeká:</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-12">
                {experiences.map((experience, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 group"
                    style={{
                      animationDelay: `${600 + index * 100}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full group-hover:scale-125 transition-transform duration-300 flex-shrink-0 mt-2"
                      style={{ backgroundColor: "#ab8754" }}
                    ></div>
                    <span className="text-gray-700 text-base sm:text-lg font-light group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">
                      {experience}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits section - MODERN CAROUSEL DESIGN */}
        <div className="mt-32 relative overflow-hidden">
          {/* Clean background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/20 to-transparent"></div>

          <div className="relative ">
            {/* Header */}
            <div className="mb-16 text-center px-4">
              <div className="inline-block mb-3">
                <span className="text-xs tracking-[0.3em] uppercase text-amber-700/50 font-medium">
                  Premium Experience
                </span>
              </div>
              
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-800 mb-4">
                <span style={{ color: "#ab8754" }}>Výhody</span> adopce
              </h3>
              
              <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                Jedinečný zážitek pro všechny smysly a celoroční radost z vlastního vinohradu
              </p>
            </div>

            {/* Horizontal Scrolling Cards */}
            <div className="relative">
              <div className="overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8">
                <div className="flex gap-6 pb-8 max-w-[1400px] mx-auto">
                  {/* Card 1 */}
                  <div className="flex-shrink-0 w-[280px] sm:w-[320px] group">
                    <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200">
                      <div className="absolute top-0 left-0 w-1 h-20 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: "#ab8754" }}></div>
                      <div className="mb-6">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: "rgba(171, 135, 84, 0.1)" }}>
                          <Wine className="w-6 h-6" style={{ color: "#ab8754" }} />
                        </div>
                        <h4 className="text-xl font-medium text-gray-900 mb-3">
                          Staň se virtuálním vinařem
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Zažij vinařský život na vlastní kůži
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex-shrink-0 w-[280px] sm:w-[320px] group">
                    <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200">
                      <div className="absolute top-0 left-0 w-1 h-20 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: "#ab8754" }}></div>
                      <div className="mb-6">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: "rgba(171, 135, 84, 0.1)" }}>
                          <Grape className="w-6 h-6" style={{ color: "#ab8754" }} />
                        </div>
                        <h4 className="text-xl font-medium text-gray-900 mb-3">
                          Poznej fáze práce na vinohradu
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Od jara do podzimu s námi
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex-shrink-0 w-[280px] sm:w-[320px] group">
                    <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200">
                      <div className="absolute top-0 left-0 w-1 h-20 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: "#ab8754" }}></div>
                      <div className="mb-6">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: "rgba(171, 135, 84, 0.1)" }}>
                          <Wine className="w-6 h-6" style={{ color: "#ab8754" }} />
                        </div>
                        <h4 className="text-xl font-medium text-gray-900 mb-3">
                          Měj kvalitní moravská vína
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Pravidelné dodávky přímo domů
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="flex-shrink-0 w-[280px] sm:w-[320px] group">
                    <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200">
                      <div className="absolute top-0 left-0 w-1 h-20 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: "#ab8754" }}></div>
                      <div className="mb-6">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: "rgba(171, 135, 84, 0.1)" }}>
                          <Grape className="w-6 h-6" style={{ color: "#ab8754" }} />
                        </div>
                        <h4 className="text-xl font-medium text-gray-900 mb-3">
                          Vyzkoušej si práci vinohradníka
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Osobní zkušenost na vinohradu
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="flex-shrink-0 w-[280px] sm:w-[320px] group">
                    <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200">
                      <div className="absolute top-0 left-0 w-1 h-20 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: "#ab8754" }}></div>
                      <div className="mb-6">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: "rgba(171, 135, 84, 0.1)" }}>
                          <Heart className="w-6 h-6" style={{ color: "#ab8754" }} />
                        </div>
                        <h4 className="text-xl font-medium text-gray-900 mb-3">
                          Pojmenuj svůj mikrovinohrad
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Personalizuj vlastní vinohrad
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 6 */}
                  <div className="flex-shrink-0 w-[280px] sm:w-[320px] group">
                    <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200">
                      <div className="absolute top-0 left-0 w-1 h-20 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: "#ab8754" }}></div>
                      <div className="mb-6">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: "rgba(171, 135, 84, 0.1)" }}>
                          <Play className="w-6 h-6" style={{ color: "#ab8754" }} />
                        </div>
                        <h4 className="text-xl font-medium text-gray-900 mb-3">
                          Zaži celoroční vinařský zážitek
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Celý rok plný nezapomenutelných okamžiků
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll hint */}
              <div className="text-center mt-8">
                <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                  <span>Posuň pro více</span>
                  <span className="animate-pulse">→</span>
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-20 text-center px-4">
              <a 
                href="https://shop.miqueen.cz/adoptuj-vinohrad/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 text-white font-medium text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: "#ab8754" }}
              >
                Začni svou vinařskou cestu
              </a>
              
              <div className="mt-6 text-gray-600 text-sm">
                nebo se{" "}
                <a 
                  href="https://shop.miqueen.cz/kontakt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-900 transition-colors font-medium" 
                  style={{ color: "#ab8754" }}
                >
                  dozvěz více
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations & Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) rotate(45deg);
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Gradient Orbs */
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          animation: float-orb 20s ease-in-out infinite;
        }

        .gradient-orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(171, 135, 84, 0.15) 0%, rgba(171, 135, 84, 0.05) 50%, transparent 100%);
          top: -10%;
          left: -5%;
          animation-delay: 0s;
        }

        .gradient-orb-2 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(217, 119, 6, 0.06) 50%, transparent 100%);
          bottom: -15%;
          right: -10%;
          animation-delay: 7s;
        }

        .gradient-orb-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, rgba(251, 191, 36, 0.03) 50%, transparent 100%);
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 14s;
        }

        @keyframes float-orb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        /* Ultra Premium Benefits Card V2 */
        .benefit-card-v2 {
          position: relative;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 32px;
          padding: 56px 40px;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 
            0 4px 24px -1px rgba(0, 0, 0, 0.06),
            0 2px 8px -1px rgba(0, 0, 0, 0.04),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.9);
          overflow: hidden;
          cursor: pointer;
        }

        .benefit-card-v2::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 32px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(171, 135, 84, 0.2), transparent 50%, rgba(171, 135, 84, 0.1));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .benefit-card-v2:hover::before {
          opacity: 1;
        }

        .benefit-glow {
          position: absolute;
          inset: -2px;
          border-radius: 32px;
          background: linear-gradient(135deg, rgba(171, 135, 84, 0.4), rgba(217, 119, 6, 0.3));
          opacity: 0;
          filter: blur(20px);
          transition: opacity 0.6s ease;
          z-index: -1;
        }

        .benefit-card-v2:hover .benefit-glow {
          opacity: 0.6;
        }

        .benefit-card-v2:hover {
          transform: translateY(-12px) scale(1.02);
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 
            0 24px 48px -12px rgba(171, 135, 84, 0.25),
            0 12px 24px -8px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 0 rgba(255, 255, 255, 1);
        }

        .benefit-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .benefit-dot {
          width: 14px;
          height: 14px;
          background: linear-gradient(135deg, #ab8754 0%, #d4a574 100%);
          border-radius: 50%;
          margin-bottom: 28px;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 
            0 4px 16px rgba(171, 135, 84, 0.4),
            0 0 0 0 rgba(171, 135, 84, 0.3);
          position: relative;
        }

        .benefit-dot::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(171, 135, 84, 0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .benefit-card-v2:hover .benefit-dot {
          transform: scale(1.4) rotate(180deg);
          box-shadow: 
            0 8px 24px rgba(171, 135, 84, 0.6),
            0 0 0 8px rgba(171, 135, 84, 0.1),
            0 0 0 16px rgba(171, 135, 84, 0.05);
        }

        .benefit-card-v2:hover .benefit-dot::before {
          opacity: 1;
        }

        .benefit-text {
          font-size: 1.375rem;
          font-weight: 400;
          color: #292524;
          line-height: 1.5;
          letter-spacing: -0.02em;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .benefit-card-v2:hover .benefit-text {
          color: #ab8754;
          transform: translateY(-4px);
          letter-spacing: 0.01em;
        }

        /* CTA Button Premium */
        .cta-button-premium {
          position: relative;
          overflow: hidden;
          padding: 1.25rem 4rem;
          color: white;
          font-weight: 500;
          font-size: 1.125rem;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 9999px;
          box-shadow: 
            0 10px 40px -10px rgba(171, 135, 84, 0.5),
            0 0 0 0 rgba(171, 135, 84, 0.3);
        }

        .cta-button-premium:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 
            0 20px 60px -10px rgba(171, 135, 84, 0.6),
            0 0 0 8px rgba(171, 135, 84, 0.1);
        }

        @media (max-width: 768px) {
          .benefit-card-v2 {
            padding: 44px 32px;
          }
          
          .benefit-text {
            font-size: 1.25rem;
          }

          .gradient-orb-1,
          .gradient-orb-2,
          .gradient-orb-3 {
            width: 300px;
            height: 300px;
          }

          .cta-button-premium {
            padding: 1rem 3rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 640px) {
          .benefit-card-v2 {
            padding: 36px 24px;
            border-radius: 24px;
          }
          
          .benefit-text {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AdoptujVinohrad;