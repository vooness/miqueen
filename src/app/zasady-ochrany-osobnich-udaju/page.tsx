import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Shield, Mail, Phone, MapPin, FileText, Lock, Eye, UserCheck } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Zásady ochrany osobních údajů */}
      <section className="py-20 lg:py-28 bg-[#fefbea]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 mt-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <Shield className="w-8 h-8" style={{ color: "#ab8754" }} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent"></div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-light text-gray-800 mb-4">
              Zásady ochrany <span className="font-normal" style={{ color: "#ab8754" }}>osobních údajů</span>
            </h1>
            <p className="text-lg text-gray-600">
              Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>

          {/* Obsah */}
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 space-y-10">
            
            {/* Úvod */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <FileText className="w-6 h-6" />
                1. Úvod
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Vinařství MiQueen respektuje vaše soukromí a zavazuje se chránit vaše osobní údaje. 
                Tyto zásady ochrany osobních údajů vysvětlují, jak shromažďujeme, používáme a chráníme 
                vaše informace v souladu s Nařízením EU 2016/679 (GDPR) a zákonem č. 110/2019 Sb., 
                o zpracování osobních údajů.
              </p>
            </div>

            {/* Správce údajů */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <UserCheck className="w-6 h-6" />
                2. Správce osobních údajů
              </h2>
              <div className="bg-gradient-to-r from-[#ab875410] to-transparent p-6 rounded-2xl border border-[#ab875420]">
                <p className="text-gray-800 font-semibold mb-4">Vinařství MiQueen s.r.o.</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#ab8754] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">Za Valama 938</p>
                      <p className="text-gray-700">696 15 Čejkovice</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#ab8754] flex-shrink-0" />
                    <p className="text-gray-700">IČO: 17942187</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#ab8754] flex-shrink-0" />
                    <a href="mailto:info@miqueen.cz" className="text-[#ab8754] hover:underline">
                      info@miqueen.cz
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#ab8754] flex-shrink-0" />
                    <a href="tel:+420731610344" className="text-[#ab8754] hover:underline">
                      +420 731 610 344
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Jaké údaje sbíráme */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <Eye className="w-6 h-6" />
                3. Jaké osobní údaje sbíráme
              </h2>
              <div className="space-y-6">
                <div className="pl-6 border-l-4 border-[#ab8754]">
                  <h3 className="font-semibold text-gray-900 mb-2">📋 Kontaktní údaje:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Jméno a příjmení</li>
                    <li>E-mailová adresa</li>
                    <li>Telefonní číslo</li>
                    <li>Doručovací adresa (při objednávce)</li>
                    <li>Fakturační adresa</li>
                  </ul>
                </div>
                
                <div className="pl-6 border-l-4 border-[#ab8754]">
                  <h3 className="font-semibold text-gray-900 mb-2">🛒 Objednávkové údaje:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Historie objednávek</li>
                    <li>Údaje o platbách (zpracovávané platební bránou)</li>
                    <li>Preferencemi při objednávkách</li>
                  </ul>
                </div>

                <div className="pl-6 border-l-4 border-[#ab8754]">
                  <h3 className="font-semibold text-gray-900 mb-2">🍷 Údaje o návštěvách a degustacích:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Rezervace degustací</li>
                    <li>Údaje o účasti na akcích vinařství</li>
                    <li>Preference týkající se vín</li>
                  </ul>
                </div>

                <div className="pl-6 border-l-4 border-[#ab8754]">
                  <h3 className="font-semibold text-gray-900 mb-2">💻 Technické údaje:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>IP adresa</li>
                    <li>Informace o prohlížeči a zařízení</li>
                    <li>Cookies (s vaším souhlasem)</li>
                    <li>Údaje o chování na webu (analytics)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* K čemu údaje používáme */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3" style={{ color: "#ab8754" }}>
                <Lock className="w-6 h-6" />
                4. K čemu vaše údaje používáme
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold text-gray-900">Zpracování objednávek</p>
                    <p className="text-gray-600 text-sm">Vyřízení, doručení a fakturace vašich objednávek</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold text-gray-900">Komunikace s vámi</p>
                    <p className="text-gray-600 text-sm">Odpovědi na dotazy, potvrzení objednávek, novinky</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold text-gray-900">Organizace degustací</p>
                    <p className="text-gray-600 text-sm">Správa rezervací a zajištění hladkého průběhu akcí</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold text-gray-900">Marketing</p>
                    <p className="text-gray-600 text-sm">Zasílání novinek, akcí a nabídek (se souhlasem)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold text-gray-900">Zlepšování služeb</p>
                    <p className="text-gray-600 text-sm">Analýza návštěvnosti webu a zlepšování uživatelského zážitku</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Právní základ */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ab8754" }}>
                5. Právní základ zpracování
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vaše osobní údaje zpracováváme na základě:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#ab8754] font-bold">•</span>
                  <span><strong>Plnění smlouvy</strong> – zpracování objednávek a dodání vín</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ab8754] font-bold">•</span>
                  <span><strong>Váš souhlas</strong> – pro marketingové účely a cookies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ab8754] font-bold">•</span>
                  <span><strong>Právní povinnost</strong> – účetnictví, daňová evidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ab8754] font-bold">•</span>
                  <span><strong>Oprávněný zájem</strong> – ochrana před podvody, zlepšování služeb</span>
                </li>
              </ul>
            </div>

            {/* Jak dlouho uchovává */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ab8754" }}>
                6. Jak dlouho uchovášíme vaše údaje
              </h2>
              <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                <p className="text-gray-700">
                  <strong>Objednávky a faktury:</strong> 10 let (zákonná povinnost)
                </p>
                <p className="text-gray-700">
                  <strong>Marketingové účely:</strong> Do odvolání souhlasu
                </p>
                <p className="text-gray-700">
                  <strong>Technické údaje:</strong> 2 roky
                </p>
                <p className="text-gray-700">
                  <strong>Zákaznické účty:</strong> Po dobu trvání účtu + 3 roky
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ab8754" }}>
                7. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Náš web používá cookies pro zajištění funkčnosti webu a zlepšení vašeho zážitku:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="font-semibold text-gray-900 mb-1">🍪 Nezbytné cookies</p>
                  <p className="text-gray-600 text-sm">
                    Zajišťují základní funkčnost webu (košík, přihlášení)
                  </p>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="font-semibold text-gray-900 mb-1">📊 Analytické cookies</p>
                  <p className="text-gray-600 text-sm">
                    Pomáhají nám pochopit, jak návštěvníci používají web (Google Analytics)
                  </p>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
                  <p className="font-semibold text-gray-900 mb-1">📢 Marketingové cookies</p>
                  <p className="text-gray-600 text-sm">
                    Umožňují personalizovanou reklamu (Facebook Pixel, Google Ads)
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4 italic">
                Svůj souhlas s cookies můžete kdykoli změnit v nastavení prohlížeče.
              </p>
            </div>

            {/* Vaše práva */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ab8754" }}>
                8. Vaše práva
              </h2>
              <p className="text-gray-700 mb-4">Máte právo:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 border-2 border-[#ab8754] rounded-xl">
                  <p className="font-semibold text-gray-900 mb-2">✋ Přístup k údajům</p>
                  <p className="text-gray-600 text-sm">Získat kopii svých osobních údajů</p>
                </div>
                <div className="p-4 border-2 border-[#ab8754] rounded-xl">
                  <p className="font-semibold text-gray-900 mb-2">✏️ Oprava údajů</p>
                  <p className="text-gray-600 text-sm">Požádat o opravu nesprávných údajů</p>
                </div>
                <div className="p-4 border-2 border-[#ab8754] rounded-xl">
                  <p className="font-semibold text-gray-900 mb-2">🗑️ Výmaz údajů</p>
                  <p className="text-gray-600 text-sm">Požádat o smazání vašich údajů</p>
                </div>
                <div className="p-4 border-2 border-[#ab8754] rounded-xl">
                  <p className="font-semibold text-gray-900 mb-2">🚫 Námitka</p>
                  <p className="text-gray-600 text-sm">Vznést námitku proti zpracování</p>
                </div>
                <div className="p-4 border-2 border-[#ab8754] rounded-xl">
                  <p className="font-semibold text-gray-900 mb-2">📤 Přenositelnost</p>
                  <p className="text-gray-600 text-sm">Získat údaje ve strukturované podobě</p>
                </div>
                <div className="p-4 border-2 border-[#ab8754] rounded-xl">
                  <p className="font-semibold text-gray-900 mb-2">❌ Odvolání souhlasu</p>
                  <p className="text-gray-600 text-sm">Kdykoli odvolat udělený souhlas</p>
                </div>
              </div>
              <p className="text-gray-700 mt-6">
                Pro uplatnění svých práv nás kontaktujte na{' '}
                <a href="mailto:info@miqueen.cz" className="text-[#ab8754] hover:underline font-medium">
                  info@miqueen.cz
                </a>
              </p>
            </div>

            {/* Bezpečnost */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ab8754" }}>
                9. Zabezpečení údajů
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Vaše osobní údaje jsou chráněny pomocí moderních bezpečnostních opatření včetně 
                šifrování (SSL/TLS), zabezpečených serverů a pravidelných bezpečnostních auditů. 
                Přístup k údajům mají pouze oprávněné osoby.
              </p>
            </div>

            {/* Třetí strany */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ab8754" }}>
                10. Sdílení údajů s třetími stranami
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vaše údaje můžeme sdílet pouze s:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#ab8754]">📦</span>
                  <span>Dopravci (pro doručení objednávek)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ab8754]">💳</span>
                  <span>Platební brány (pro zpracování plateb)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ab8754]">📊</span>
                  <span>Analytické nástroje (Google Analytics)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ab8754]">📧</span>
                  <span>E-mailové služby (pro zasílání newsletterů)</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Všechny třetí strany jsou povinny chránit vaše údaje v souladu s GDPR.
              </p>
            </div>

            {/* Změny zásad */}
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ab8754" }}>
                11. Změny těchto zásad
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Tyto zásady můžeme čas od času aktualizovat. O významných změnách vás budeme 
                informovat e-mailem nebo oznámením na webu. Doporučujeme pravidelně kontrolovat 
                tuto stránku.
              </p>
            </div>

            {/* Kontakt */}
            <div className="bg-gradient-to-r from-[#ab875420] to-transparent p-8 rounded-2xl border-2 border-[#ab8754]">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#ab8754" }}>
                12. Kontaktujte nás
              </h2>
              <p className="text-gray-700 mb-6">
                Máte otázky ohledně ochrany osobních údajů? Kontaktujte nás:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#ab8754]" />
                  <a href="mailto:info@miqueen.cz" className="text-[#ab8754] hover:underline text-lg font-medium">
                    info@miqueen.cz
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#ab8754]" />
                  <a href="tel:+420731610344" className="text-[#ab8754] hover:underline text-lg font-medium">
                    +420 731 610 344
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#ab8754] mt-1" />
                  <div>
                    <p className="text-gray-700 font-medium">Vinařství MiQueen s.r.o.</p>
                    <p className="text-gray-700">Za Valama 938</p>
                    <p className="text-gray-700">696 15 Čejkovice</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-6 italic">
                Máte také právo podat stížnost u Úřadu pro ochranu osobních údajů (
                <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-[#ab8754] hover:underline">
                  www.uoou.cz
                </a>
                ).
              </p>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}