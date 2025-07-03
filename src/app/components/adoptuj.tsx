"use client";
import React from "react";
import { Play, Heart, Calendar, Gift, Grape, Wine } from "lucide-react";

const AdoptujVinohrad: React.FC = () => {
  const benefits = [
    {
      icon: Grape,
      title: "Vlastní vinohrad",
      description: "Pojmenuj si svůj kousek vinohradu"
    },
    {
      icon: Wine,
      title: "Kvalitní vína",
      description: "Moravská vína z Pálavy"
    },
    {
      icon: Calendar,
      title: "Celoroční zážitek",
      description: "Sleduj práci po celý rok"
    },
    {
      icon: Gift,
      title: "Perfektní dárek",
      description: "Originální dárek pro blízké"
    }
  ];

  const experiences = [
    "Staň se virtuálním vinařem",
    "Poznej fáze práce na vinohradu",
    "Vyzkoušej si práci vinohradníka",
    "Měj kvalitní moravská vína",
    "Pojmenuj svůj mikrovinohrad",
    "Zaži celoroční vinařský zážitek"
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: "#1C1C1E" }}>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-l from-yellow-900/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-r from-amber-900/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-green-900/5 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center space-x-3 text-gray-400 font-light text-sm sm:text-base tracking-wider uppercase mb-4">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent" style={{ backgroundColor: "#ab8754" }}></div>
              <span>Exkluzivní nabídka</span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent" style={{ backgroundColor: "#ab8754" }}></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white tracking-wide">
              <span style={{ color: "#ab8754" }}>Adoptuj</span> vinohrad
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl font-light italic" style={{ color: "#ab8754" }}>
              Tvůj relax kdykoliv a kdekoliv
            </p>
          </div>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center mt-8 sm:mt-12">
            <div className="w-16 sm:w-24 lg:w-32 h-px bg-gradient-to-r from-transparent to-white/20"></div>
            <div className="mx-4 sm:mx-6 lg:mx-8 flex items-center space-x-2 sm:space-x-3">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full" style={{ backgroundColor: "#ab8754" }}></div>
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: "#ab8754" }} />
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full" style={{ backgroundColor: "#ab8754" }}></div>
            </div>
            <div className="w-16 sm:w-24 lg:w-32 h-px bg-gradient-to-l from-transparent to-white/20"></div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20">
          
          {/* Video section - left */}
          <div className="relative group">
            <div 
              className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl mb-8"
              style={{
                animationDelay: '200ms',
                animation: 'fadeInLeft 0.8s ease-out forwards'
              }}
            >
              {/* Video placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center relative overflow-hidden">
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-800/20 to-amber-800/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                {/* Play button */}
                <div 
                  className="relative z-10 group/play cursor-pointer transition-all duration-500 hover:scale-110"
                  style={{
                    animation: 'float 3s ease-in-out infinite'
                  }}
                >
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div 
                      className="absolute inset-0 rounded-full opacity-20 group-hover/play:opacity-40 transition-opacity duration-500 animate-pulse"
                      style={{ 
                        backgroundColor: "#ab8754",
                        filter: 'blur(20px)',
                        transform: 'scale(1.5)'
                      }}
                    ></div>
                    
                    {/* Main play button */}
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-full p-6 sm:p-8 shadow-xl border border-white/20 group-hover/play:bg-white group-hover/play:scale-105 transition-all duration-300">
                      <Play className="w-8 h-8 sm:w-12 sm:h-12 ml-1" style={{ color: "#ab8754" }} fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-6 left-6 text-white/40">
                  <Grape className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                
                <div className="absolute bottom-6 right-6 text-white/40">
                  <Wine className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-white/20 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-white/20 rounded-br-2xl"></div>
              </div>
              
              {/* Elegant frame */}
              <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border border-white/10 pointer-events-none"></div>
            </div>
            
            {/* Glow effect */}
            <div 
              className="absolute -inset-4 rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
              style={{ backgroundColor: "#ab8754" }}
            ></div>

            {/* CTA Buttons pod videem */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button 
                className="group relative overflow-hidden px-8 sm:px-10 py-3 sm:py-4 text-white font-medium text-sm sm:text-base transition-all duration-300 hover:shadow-xl hover:shadow-black/20 rounded-full hover:scale-105"
                style={{ backgroundColor: "#ab8754" }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative group-hover:tracking-wide transition-all duration-300">
                  Adoptuj teď
                </span>
              </button>
              
              <button className="group px-8 sm:px-10 py-3 sm:py-4 text-white font-light text-sm sm:text-base border border-white/20 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
                <span className="group-hover:text-white/80 transition-colors duration-300 group-hover:tracking-wide">
                  Více informací
                </span>
              </button>
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
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-base sm:text-lg font-light">
                Staň se virtuálním vinařem. Poznej fáze práce na vinohradu během celého roku, 
                vyzkoušej si práci vinohradníka, měj po celý rok skvělá moravská vína z Pálavy ve své 
                skleněce, pojmenuj svůj mikrovinohrad a zaži jeden velký celý rok trvající zážitek.
              </p>
              
              <p className="text-base sm:text-lg font-medium text-white">
                Adoptovat vinohrad můžeš sám pro sebe anebo jako 
                <span style={{ color: "#ab8754" }}> dárek</span>.
              </p>
            </div>

            {/* Experience layout - clean 2 sloupce */}
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-medium text-white">Co tě čeká:</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-12">
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
                    <span className="text-gray-300 text-sm font-light group-hover:text-white transition-colors duration-300 leading-relaxed">
                      {experience}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits section */}
        <div className="text-center">
          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4 sm:mb-6">
              <span style={{ color: "#ab8754" }}>Výhody</span> adopce
            </h3>
            <p className="text-base sm:text-lg text-gray-400 font-light max-w-2xl mx-auto">
              Jedinečný zážitek pro všechny smysly a celoroční radost z vlastního vinohradu
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-700 hover:bg-white/10 hover:shadow-2xl hover:shadow-black/20 hover:scale-105 cursor-pointer"
                  style={{ 
                    animationDelay: `${800 + index * 150}ms`,
                    animation: 'fadeInUp 0.8s ease-out forwards'
                  }}
                >
                  {/* Animated background glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-xl rounded-xl lg:rounded-2xl"
                    style={{ backgroundColor: "#ab8754" }}
                  ></div>

                  <div className="relative z-10 flex flex-col items-center text-center space-y-4 sm:space-y-6">
                    <div className="p-3 sm:p-4 rounded-full bg-white/10 border border-white/20 group-hover:border-white/30 group-hover:scale-110 transition-all duration-500">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: "#ab8754" }} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white text-sm sm:text-base font-medium group-hover:text-white/90 transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-white/20 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-white/20 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>

          {/* Final CTA */}
          <div className="mt-16 sm:mt-20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <button 
                className="group relative overflow-hidden px-12 sm:px-16 py-4 sm:py-5 text-white font-medium text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-black/20 rounded-full hover:scale-105"
                style={{ backgroundColor: "#ab8754" }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative group-hover:tracking-wide transition-all duration-300">
                  Začni svou vinařskou cestu
                </span>
              </button>
              
              <div className="text-gray-400 text-sm font-light">
                nebo se{" "}
                <button className="underline hover:text-white transition-colors duration-300" style={{ color: "#ab8754" }}>
                  dozvěz více
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .benefit-card {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AdoptujVinohrad;