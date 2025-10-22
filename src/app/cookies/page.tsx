"use client"
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Cookie, Settings, Eye, TrendingUp, Target, Shield, ToggleLeft, Clock, Trash2 } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Cookies Policy */}
      <section className="py-20 lg:py-28 bg-[#fefbea]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 mt-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <Cookie className="w-8 h-8" style={{ color: "#ab8754" }} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-light text-gray-800 mb-4">
              Zásady používání <span className="font-normal" style={{ color: "#ab8754" }}>cookies</span>
            </h1>
            <p className="text-lg text-gray-600">
              Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>

          {/* Obsah */}
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 space-y-10">
            
            {/* Co jsou cookies */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <Cookie className="w-6 h-6" />
                1. Co jsou cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče při návštěvě webových stránek. 
                Umožňují webu zapamatovat si vaše preference a poskytovat lepší uživatelský zážitek.
              </p>
              <div className="bg-gradient-to-r from-[#ab875410] to-transparent p-6 rounded-2xl border border-[#ab875420]">
                <p className="text-gray-700">
                  <strong>Jednoduše řečeno:</strong> Cookies jsou jako &quot;lepící lístky&quot; s informacemi, které si váš 
                  prohlížeč pamatuje. Díky nim nemusíte při každé návštěvě webu znovu vyplňovat stejné údaje nebo nastavení.
                </p>
              </div>
            </div>

            {/* Jaké cookies používáme */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <Settings className="w-6 h-6" />
                2. Jaké cookies používáme
              </h2>
              
              {/* Nezbytné cookies */}
              <div className="mb-6">
                <div className="flex items-start gap-4 p-6 bg-green-50 border-2 border-green-200 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Nezbytné cookies</h3>
                      <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
                        VŽDY AKTIVNÍ
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Tyto cookies jsou nezbytné pro základní funkčnost webu a nelze je vypnout.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-gray-600 text-sm">
                          <strong>Košík:</strong> Ukládání položek ve vašem nákupním košíku
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-gray-600 text-sm">
                          <strong>Přihlášení:</strong> Udržení vašeho přihlášení během návštěvy
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-gray-600 text-sm">
                          <strong>Bezpečnost:</strong> Ochrana proti útokům a zajištění bezpečnosti
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-gray-600 text-sm">
                          <strong>Preference:</strong> Zapamatování vašeho souhlasu s cookies
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-white rounded-lg">
                      <p className="text-xs text-gray-500 font-mono">
                        Platnost: Session / 1 rok
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytické cookies */}
              <div className="mb-6">
                <div className="flex items-start gap-4 p-6 bg-blue-50 border-2 border-blue-200 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Analytické cookies</h3>
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                        S VAŠÍM SOUHLASEM
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Pomáhají nám pochopit, jak návštěvníci používají náš web, abychom mohli zlepšovat naše služby.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">📊</span>
                        <span className="text-gray-600 text-sm">
                          <strong>Google Analytics:</strong> Anonymní statistiky návštěvnosti
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">📊</span>
                        <span className="text-gray-600 text-sm">
                          <strong>Chování na webu:</strong> Které stránky jsou nejoblíbenější
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">📊</span>
                        <span className="text-gray-600 text-sm">
                          <strong>Demografické údaje:</strong> Základní informace o návštěvnících (anonymně)
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-white rounded-lg">
                      <p className="text-xs text-gray-500 font-mono">
                        Poskytovatel: Google LLC | Platnost: 2 roky
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marketingové cookies */}
              <div className="mb-6">
                <div className="flex items-start gap-4 p-6 bg-purple-50 border-2 border-purple-200 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Marketingové cookies</h3>
                      <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
                        S VAŠÍM SOUHLASEM
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Používají se k zobrazování relevantních reklam a měření účinnosti našich marketingových kampaní.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">📢</span>
                        <span className="text-gray-600 text-sm">
                          <strong>Facebook Pixel:</strong> Měření konverzí z Facebook reklam
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">📢</span>
                        <span className="text-gray-600 text-sm">
                          <strong>Google Ads:</strong> Zobrazování relevantních reklam
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">📢</span>
                        <span className="text-gray-600 text-sm">
                          <strong>Remarketing:</strong> Připomínání našich produktů na jiných webech
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-white rounded-lg">
                      <p className="text-xs text-gray-500 font-mono">
                        Poskytovatelé: Meta (Facebook), Google | Platnost: 90 dní - 2 roky
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Jak spravovat cookies */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <ToggleLeft className="w-6 h-6" />
                3. Jak spravovat cookies
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#ab875410] to-transparent p-6 rounded-2xl border border-[#ab875420]">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-[#ab8754]" />
                    Nastavení cookies na našem webu
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Své preference můžete změnit kdykoli pomocí cookie banneru, který se zobrazí při první návštěvě. 
                    Můžete si vybrat, které typy cookies chcete povolit.
                  </p>
                  <button 
                    onClick={() => {
                      localStorage.removeItem('cookieConsent');
                      window.location.reload();
                    }}
                    className="px-6 py-3 bg-[#ab8754] text-white rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Změnit nastavení cookies
                  </button>
                </div>

                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-gray-600" />
                    Nastavení v prohlížeči
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Většina prohlížečů umožňuje kontrolovat cookies prostřednictvím nastavení. Zde jsou odkazy na návody pro nejoblíbenější prohlížeče:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <a 
                      href="https://support.google.com/chrome/answer/95647" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-lg border border-gray-200 hover:border-[#ab8754] transition-colors"
                    >
                      <p className="font-medium text-gray-900">🌐 Google Chrome</p>
                      <p className="text-xs text-gray-500">Spravovat cookies</p>
                    </a>
                    <a 
                      href="https://support.mozilla.org/cs/kb/povoleni-zakazani-cookies" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-lg border border-gray-200 hover:border-[#ab8754] transition-colors"
                    >
                      <p className="font-medium text-gray-900">🦊 Mozilla Firefox</p>
                      <p className="text-xs text-gray-500">Spravovat cookies</p>
                    </a>
                    <a 
                      href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-lg border border-gray-200 hover:border-[#ab8754] transition-colors"
                    >
                      <p className="font-medium text-gray-900">🧭 Safari</p>
                      <p className="text-xs text-gray-500">Spravovat cookies</p>
                    </a>
                    <a 
                      href="https://support.microsoft.com/cs-cz/microsoft-edge/odstranění-souborů-cookie-v-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-lg border border-gray-200 hover:border-[#ab8754] transition-colors"
                    >
                      <p className="font-medium text-gray-900">🌊 Microsoft Edge</p>
                      <p className="text-xs text-gray-500">Spravovat cookies</p>
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    ⚠️ Upozornění: Pokud cookies zcela zakážete, některé funkce webu nemusí správně fungovat.
                  </p>
                </div>
              </div>
            </div>

            {/* Platnost cookies */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <Clock className="w-6 h-6" />
                4. Platnost cookies
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#ab8754] text-white">
                      <th className="p-3 text-left rounded-tl-lg">Typ cookies</th>
                      <th className="p-3 text-left">Platnost</th>
                      <th className="p-3 text-left rounded-tr-lg">Popis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-medium">Session</td>
                      <td className="p-3 text-gray-600">Do zavření prohlížeče</td>
                      <td className="p-3 text-gray-600 text-sm">Dočasné cookies smazané po ukončení relace</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-3 font-medium">Nezbytné</td>
                      <td className="p-3 text-gray-600">1 rok</td>
                      <td className="p-3 text-gray-600 text-sm">Cookies pro základní funkčnost</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-medium">Analytické</td>
                      <td className="p-3 text-gray-600">2 roky</td>
                      <td className="p-3 text-gray-600 text-sm">Google Analytics cookies</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 font-medium rounded-bl-lg">Marketingové</td>
                      <td className="p-3 text-gray-600">90 dní - 2 roky</td>
                      <td className="p-3 text-gray-600 text-sm rounded-br-lg">Reklamní a remarketing cookies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Jak smazat cookies */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <Trash2 className="w-6 h-6" />
                5. Jak smazat cookies
              </h2>
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
                <p className="text-gray-700 mb-4">
                  Cookies můžete kdykoli smazat v nastavení svého prohlížeče. Zde je základní postup:
                </p>
                <ol className="space-y-3 list-decimal list-inside text-gray-700">
                  <li>Otevřete nastavení prohlížeče</li>
                  <li>Najděte sekci &quot;Soukromí&quot; nebo &quot;Cookies&quot;</li>
                  <li>Vyberte možnost &quot;Vymazat data prohlížení&quot; nebo &quot;Smazat cookies&quot;</li>
                  <li>Potvrďte smazání</li>
                </ol>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-600">
                    💡 <strong>Tip:</strong> Můžete také smazat pouze cookies konkrétního webu, 
                    aniž byste museli mazat všechny cookies.
                  </p>
                </div>
              </div>
            </div>

            {/* Třetí strany */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ab8754" }}>
                6. Cookies třetích stran
              </h2>
              <p className="text-gray-700 mb-4">
                Náš web může obsahovat cookies od třetích stran. Tyto služby mají vlastní zásady ochrany soukromí:
              </p>
              <div className="space-y-3">
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border-2 border-gray-200 hover:border-[#ab8754] rounded-xl transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    📊
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Google Analytics & Google Ads</p>
                    <p className="text-sm text-gray-600">Zásady ochrany soukromí Google</p>
                  </div>
                  <span className="text-[#ab8754]">→</span>
                </a>
                
                <a 
                  href="https://www.facebook.com/privacy/policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border-2 border-gray-200 hover:border-[#ab8754] rounded-xl transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    📱
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Meta (Facebook & Instagram)</p>
                    <p className="text-sm text-gray-600">Zásady ochrany soukromí Meta</p>
                  </div>
                  <span className="text-[#ab8754]">→</span>
                </a>
              </div>
            </div>

            {/* Kontakt */}
            <div className="bg-gradient-to-r from-[#ab875420] to-transparent p-8 rounded-2xl border-2 border-[#ab8754]">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ab8754" }}>
                7. Máte otázky?
              </h2>
              <p className="text-gray-700 mb-6">
                Pokud máte jakékoli dotazy ohledně našich cookies, neváhejte nás kontaktovat:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ab8754] flex items-center justify-center">
                    <span className="text-white text-lg">📧</span>
                  </div>
                  <a href="mailto:info@miqueen.cz" className="text-[#ab8754] hover:underline text-lg font-medium">
                    info@miqueen.cz
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ab8754] flex items-center justify-center">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <a href="tel:+420731610344" className="text-[#ab8754] hover:underline text-lg font-medium">
                    +420 731 610 344
                  </a>
                </div>
              </div>
            </div>

            {/* Související dokumenty */}
            <div className="border-t-2 border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📑 Související dokumenty</h3>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="/zasady-ochrany-osobnich-udaju" 
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 font-medium transition-colors"
                >
                  Zásady ochrany osobních údajů
                </a>
                <a 
                  href="/obchodni-podminky" 
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 font-medium transition-colors"
                >
                  Obchodní podmínky
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}