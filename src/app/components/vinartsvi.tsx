"use client";
import React from "react";
import Image from "next/image";
import { Award, Leaf, MapPin, Users, Calendar, Wine, Star, Crown, Trophy, Sparkles } from "lucide-react";

const AboutWinerySection: React.FC = () => {
  // Možnost nastavit vlastní pozadí pro sekci s medailemi - změň URL nebo nech prázdné
  const medalsBackgroundImageUrl = ""; // Zde můžeš vložit URL obrázku: "/images/vineyard-bg.jpg"
  
  // Možnost nastavit obrázek nad textem příběhu - VLOŽ URL OBRÁZKU ZDE!
  const storyImageUrl = "/ryzlik.jpg"; // Zde MUSÍŠ vložit URL obrázku!

  const achievements = [
    {
      title: "Zlatý pohár Česko Slovenska 2024",
      goldMedals: 2,
      silverMedals: 4,
      totalMedals: "2 hlavní zlaté + 4 zlaté medaile",
      year: "2024",
      type: "main",
      icon: Crown
    },
    {
      title: "GRAND PRIX VINEX 2024", 
      goldMedals: 1,
      silverMedals: 6,
      totalMedals: "1 zlatá + 6 stříbrných medailí",
      year: "2024",
      type: "grand",
      icon: Trophy
    },
    {
      title: "Jarovin 2023",
      goldMedals: 2,
      silverMedals: 0,
      totalMedals: "2 zlaté medaile",
      year: "2023",
      type: "gold",
      icon: Award
    },
    {
      title: "Weinparade Poysdorf 2024",
      goldMedals: 2,
      silverMedals: 7,
      totalMedals: "2 zlaté + 7 stříbrných medailí", 
      year: "2024",
      type: "international",
      icon: Sparkles
    },
    {
      title: "GRAND PRIX VINEX 2024",
      goldMedals: 1,
      silverMedals: 6,
      totalMedals: "1 zlatá + 6 stříbrných medailí",
      year: "2024",
      type: "grand",
      icon: Trophy
    },
    {
      title: "VINUM JUVENALE 2023",
      goldMedals: 2,
      silverMedals: 2,
      totalMedals: "2 zlaté + 2 stříbrné medaile",
      year: "2023",
      type: "youth",
      icon: Award
    }
  ];

  const highlights = [
    {
      icon: Leaf,
      title: "Ekologické hospodaření",
      description: "32 hektarů vinic v plně ekologickém režimu"
    },
    {
      icon: MapPin,
      title: "Mikulovský terroir",
      description: "Jedinečné minerální podloží z jurského vápence"
    },
    {
      icon: Users,
      title: "Rodinná tradice",
      description: "Od roku 2006 s láskou k vínu a tradicím"
    },
    {
      icon: Wine,
      title: "30 000 lahví ročně",
      description: "Prémiová kvalita v každé lahvi"
    }
  ];

  // Spočítáme celkové počty medailí
  const totalGold = achievements.reduce((sum, achievement) => sum + achievement.goldMedals, 0);
  const totalSilver = achievements.reduce((sum, achievement) => sum + achievement.silverMedals, 0);
  const totalCompetitions = achievements.length;

  // Duplikujeme achievements pro nekonečný loop
  const duplicatedAchievements = [...achievements, ...achievements];

  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: "#1C1C1E" }}>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-l from-yellow-900/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-r from-amber-900/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white tracking-wide">
              <span style={{ color: "#ab8754" }}>Náš</span> příběh
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              Vinařství MiQueen v sobě snoubí moderní prvky s mnohaletou tradicí a zkušeností
            </p>
          </div>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center mt-8 sm:mt-12">
            <div className="w-16 sm:w-24 lg:w-32 h-px bg-gradient-to-r from-transparent to-white/20"></div>
            <div className="mx-4 sm:mx-6 lg:mx-8 flex items-center space-x-2 sm:space-x-3">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full" style={{ backgroundColor: "#ab8754" }}></div>
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: "#ab8754" }} />
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full" style={{ backgroundColor: "#ab8754" }}></div>
            </div>
            <div className="w-16 sm:w-24 lg:w-32 h-px bg-gradient-to-l from-transparent to-white/20"></div>
          </div>
        </div>

        {/* Story section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 sm:mb-24">
          
          {/* Story text with optional image */}
          <div className="space-y-6 sm:space-y-8">
            {/* Obrázek nad příběhem - pokud je nastaven */}
            {storyImageUrl && (
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl mb-8">
                <Image 
                  src={storyImageUrl} 
                  alt="Náš příběh - Vinařství MiQueen" 
                  width={800}
                  height={320}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                  priority={false}
                />
                {/* Overlay pro lepší kontrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                {/* Elegantní rámeček */}
                <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border border-white/10 pointer-events-none"></div>
              </div>
            )}

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-base sm:text-lg font-light">
                Kolébkou všeho byla rodinná výroba vína, časem umocněna zkušenostmi ze srdce velké vinařské firmy. 
                <span className="text-white font-medium"> Od roku 2006</span> jsme rostli s láskou k vínu a tradicím.
              </p>
              
              <p className="text-base sm:text-lg font-light">
                V roce <span className="text-white font-medium">2009</span> vznikla samostatná rodinná firma 
                s výrobní kapacitou 30 000 lahví. Dnes je vinařství MiQueen 
                <span className="font-medium" style={{ color: "#ab8754" }}> kompletně ekologicky hospodařící</span> 
                na téměř 32 hektarech vinic.
              </p>
              
              <p className="text-base sm:text-lg font-light">
                Naše vína získávají typický mikulovský minerální charakter díky 
                <span className="text-white font-medium"> minerálnímu podloží z jurského vápence s jíly</span> 
                v lokalitě Za cihelnou.
              </p>
            </div>
          </div>

          {/* Highlights list - širší formát */}
          <div className="space-y-4 self-start">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div 
                  key={index}
                  className="group p-4 sm:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-white/10 border border-white/20 group-hover:border-white/30 transition-all duration-500 flex-shrink-0">
                      <IconComponent className="w-5 h-5" style={{ color: "#ab8754" }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-base font-medium group-hover:text-white/80 transition-colors duration-300 mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* CTA Button pod gridem */}
            <div className="pt-6">
              <button className="group px-8 sm:px-10 py-3 sm:py-4 text-white font-light text-sm sm:text-base border border-white/20 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
                <span className="group-hover:text-white/80 transition-colors duration-300 group-hover:tracking-wide">
                  Více v blogu vinařství
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Awards section - KOMPLETNĚ mimo kontejner pro full width */}
      <div className="relative w-full overflow-hidden">
        {/* Pozadí s možností vlastního obrázku */}
        {medalsBackgroundImageUrl && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
              style={{ backgroundImage: `url(${medalsBackgroundImageUrl})` }}
            ></div>
            {/* Overlay pro zachování kontrastu */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        )}

        <div className="relative text-center py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4 sm:mb-6">
                <span style={{ color: "#ab8754" }}>Náš sklizenň</span> medailí
              </h3>
              <p className="text-base sm:text-lg text-gray-400 font-light max-w-2xl mx-auto">
                Na významných soutěžích nejen v České republice získávají naše vína krásná ocenění
              </p>

              {/* Statistiky */}
              <div className="flex justify-center items-center space-x-8 sm:space-x-12 mt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400">{totalGold}</div>
                  <div className="text-sm text-gray-400 font-light">Zlatých medailí</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-400">{totalSilver}</div>
                  <div className="text-sm text-gray-400 font-light">Stříbrných medailí</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: "#ab8754" }}>{totalCompetitions}</div>
                  <div className="text-sm text-gray-400 font-light">Soutěží</div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards slider - skutečně full width */}
          <div className="awards-slider-container overflow-hidden relative py-4 w-full">
            <div className="awards-slider flex space-x-4 sm:space-x-6 pl-4 sm:pl-6">
              {duplicatedAchievements.map((achievement, index) => {
                const AchievementIcon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="group relative p-4 sm:p-5 bg-white/5 backdrop-blur-sm rounded-lg lg:rounded-xl border border-white/10 hover:border-white/20 transition-all duration-700 hover:bg-white/10 hover:shadow-xl hover:shadow-black/20 hover:scale-105 cursor-pointer overflow-hidden flex-shrink-0 w-44 sm:w-72"
                  >
                    
                    {/* Background glow - amber-400 */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-xl"
                      style={{ backgroundColor: "#fbbf24" }}
                    ></div>

                    <div className="relative z-10 text-center space-y-3 sm:space-y-4">
                      
                      {/* Year badge */}
                      <div className="absolute -top-2 -right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20">
                        <span className="text-white text-xs font-medium">{achievement.year}</span>
                      </div>

                      {/* Award icon with medals counter - menší velikost */}
                      <div className="relative mx-auto w-14 h-14 sm:w-16 sm:h-16">
                        
                        {/* Main award circle */}
                        <div 
                          className="w-full h-full rounded-full bg-gradient-to-b from-amber-400/20 to-amber-600/30 border-2 border-amber-400/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg"
                        >
                          <AchievementIcon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#ab8754" }} />
                        </div>

                        {/* Gold medals counter - menší */}
                        {achievement.goldMedals > 0 && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-300/50 group-hover:scale-125 transition-all duration-500">
                            <span className="text-white text-xs font-bold">{achievement.goldMedals}</span>
                          </div>
                        )}

                        {/* Silver medals counter - menší */}
                        {achievement.silverMedals > 0 && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200/50 group-hover:scale-125 transition-all duration-500 delay-100">
                            <span className="text-white text-xs font-bold">{achievement.silverMedals}</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-white text-xs sm:text-sm font-medium leading-tight group-hover:text-white/90 transition-colors duration-300 min-h-[2rem] flex items-center justify-center px-1 sm:px-2">
                          {achievement.title}
                        </h4>
                        
                        <div className="space-y-2">
                          <p className="text-xs font-medium transition-colors duration-300" style={{ color: "#ab8754" }}>
                            {achievement.totalMedals}
                          </p>
                          
                          {/* Medal breakdown visual - menší */}
                          <div className="flex justify-center items-center gap-2">
                            {achievement.goldMedals > 0 && (
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-sm"></div>
                                <span className="text-amber-400 text-xs font-medium">{achievement.goldMedals}</span>
                              </div>
                            )}
                            {achievement.silverMedals > 0 && (
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-sm"></div>
                                <span className="text-gray-400 text-xs font-medium">{achievement.silverMedals}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Stars - menší */}
                      <div className="flex justify-center space-x-1 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        {[...Array(Math.min(5, achievement.goldMedals + Math.floor(achievement.silverMedals/2)))].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-amber-400 fill-current" 
                            style={{ 
                              animationDelay: `${i * 100}ms`,
                              animation: 'twinkle 1s ease-in-out infinite alternate'
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Decorative corner elements - menší */}
                    <div className="absolute top-0 left-0 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-white/20 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-white/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final CTA */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-16 sm:mt-20">
              <button 
                className="group relative overflow-hidden px-8 sm:px-12 py-3 sm:py-4 text-white font-medium text-sm sm:text-base lg:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-black/20 rounded-full"
                style={{ backgroundColor: "#ab8754" }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative group-hover:tracking-wide transition-all duration-300">
                  Objevte oceněná vína
                </span>
              </button>
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

        @keyframes twinkle {
          0% {
            opacity: 0.5;
            transform: scale(1);
          }
          100% {
            opacity: 1;
            transform: scale(1.1);
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

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .awards-slider-container {
          mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
          -webkit-mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
        }

        .awards-slider {
          animation: slide 30s linear infinite;
          width: calc(200%);
        }



        .achievement-card {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AboutWinerySection;