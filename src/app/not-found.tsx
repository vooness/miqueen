import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stránka nenalezena (404)",
  description:
    "Tato stránka neexistuje. Vraťte se na hlavní stránku Vinařství Miqueen a prozkoumejte naši nabídku prémiových moravských vín.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fefbea] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Dekorativní ikona */}
        <div className="mb-6">
          <span className="text-7xl" role="img" aria-label="Rozlité víno">
            🍷
          </span>
        </div>

        {/* Nadpis */}
        <h1
          className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-semibold text-[#722f37] mb-4"
        >
          404
        </h1>

        <h2
          className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-medium text-[#3d3024] mb-4"
        >
          Stránka nenalezena
        </h2>

        <p className="text-[#6b5e50] text-base md:text-lg mb-10 leading-relaxed max-w-md mx-auto">
          Vypadá to, že se tato stránka rozlila jako dobré víno.
          Nevadí — máme pro vás spoustu dalšího k&nbsp;objevení.
        </p>

        {/* CTA tlačítka */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#722f37] text-white font-medium rounded-lg hover:bg-[#5a252c] transition-colors duration-200"
          >
            Zpět na hlavní stránku
          </Link>
          <Link
            href="/vina"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#ab8754] text-[#ab8754] font-medium rounded-lg hover:bg-[#ab8754] hover:text-white transition-colors duration-200"
          >
            Prohlédnout vína
          </Link>
        </div>

        {/* Pomocné odkazy */}
        <nav
          className="mt-12 pt-8 border-t border-[#e8e0d4]"
          aria-label="Užitečné odkazy"
        >
          <p className="text-sm text-[#9a8d7f] mb-4">Možná hledáte:</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/vina"
              className="text-sm text-[#722f37] hover:text-[#ab8754] underline underline-offset-2 transition-colors"
            >
              Vína
            </Link>
            <Link
              href="/darkove-sady"
              className="text-sm text-[#722f37] hover:text-[#ab8754] underline underline-offset-2 transition-colors"
            >
              Dárkové sady
            </Link>
            <Link
              href="/degustace"
              className="text-sm text-[#722f37] hover:text-[#ab8754] underline underline-offset-2 transition-colors"
            >
              Degustace
            </Link>
            <Link
              href="/adopce-vinice"
              className="text-sm text-[#722f37] hover:text-[#ab8754] underline underline-offset-2 transition-colors"
            >
              Adopce vinice
            </Link>
            <Link
              href="/kontakt"
              className="text-sm text-[#722f37] hover:text-[#ab8754] underline underline-offset-2 transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </nav>
      </div>
    </main>
  );
}