import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Navbar from "./components/navbar";
import HomeClient from "./components/Homeclient";

const Footer = dynamic(() => import("./components/footer"));

function SEOContent() {
  return (
    <div className="sr-only">
      <h1>Vinařství Miqueen – Rodinné vinařství Mikulov</h1>
      <p>
        Prémiová moravská vína z rodinného vinařství Miqueen v Mikulově.
        Specializujeme se na odrůdy Ryzlink rýnský, Veltlínské zelené a Pálava.
        Nabízíme online prodej vín, dárkové sady, degustace a adopci vinice.
      </p>
      <h2>Naše nabídka</h2>
      <p>
        V e-shopu Vinařství Miqueen najdete prémiová moravská vína, kolekce
        Miqueen Mini, dárkové sady, vouchery na degustace a unikátní program
        adopce vinice. Doručujeme po celé České republice.
      </p>
      <nav aria-label="Hlavní kategorie">
        <Link href="/vina">Vína</Link>
        <Link href="/darkove-sady">Dárkové sady</Link>
        <Link href="/degustace">Degustace</Link>
        <Link href="/adopce-vinice">Adopce vinice</Link>
        <Link href="/o-nas">O vinařství</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative bg-[#fefbea]">
      <Navbar />
      <SEOContent />
      <HomeClient />
      <Suspense fallback={<div className="h-[400px] bg-stone-950" />}>
        <Footer />
      </Suspense>
    </main>
  );
}