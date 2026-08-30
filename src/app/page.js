'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Palette,
  Clock,
  Monitor,
  Layout,
  Layers,
  Rocket,
  PenTool,
  ArrowRight,
  ArrowLeft,
  Play
} from 'lucide-react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#090b14] text-white font-sans selection:bg-[#00E676] selection:text-black">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090b14]/90 backdrop-blur-md py-4 border-b border-gray-800/60 shadow-xl'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="flex items-center justify-between px-8 max-w-7xl mx-auto">
          {/* Logo a název - při scrollu se zmenší */}
          <div className="flex items-center gap-3.5">
            <img
              src="/logoWH.png"
              alt="RotCode Logo"
              className={`rounded-full object-cover border border-[#00E676]/30 transition-all duration-300 ${
                scrolled ? 'w-10 h-10' : 'w-16 h-16'
              }`}
            />
            <span
              className={`font-bold tracking-tight transition-all duration-300 ${
                scrolled ? 'text-xl' : 'text-2xl sm:text-3xl'
              }`}
            >
              RotCode
            </span>
          </div>

          {/* Všechny odkazy v navigaci jsou šedé a po najetí bílé */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button
              onClick={() => {
                document.getElementById('uvod')?.scrollIntoView({ behavior: 'smooth' });
                window.history.replaceState(null, '', '#uvod');
              }}
              className="text-gray-400 hover:text-white transition-colors text-left font-medium bg-transparent border-none cursor-pointer text-base"
            >
              Úvod
            </button>
            <button
              onClick={() => {
                document.getElementById('sluzby')?.scrollIntoView({ behavior: 'smooth' });
                window.history.replaceState(null, '', '#sluzby');
              }}
              className="text-gray-400 hover:text-white transition-colors text-left font-medium bg-transparent border-none cursor-pointer text-base"
            >
              Služby
            </button>
            <button
              onClick={() => {
                document.getElementById('ukazky')?.scrollIntoView({ behavior: 'smooth' });
                window.history.replaceState(null, '', '#ukazky');
              }}
              className="text-gray-400 hover:text-white transition-colors text-left font-medium bg-transparent border-none cursor-pointer text-base"
            >
              Ukázky práce
            </button>
            <Link href="/kontakt" className="text-gray-400 hover:text-white transition-colors">Kontakt</Link>
          </div>

          <Link
            href="/kontakt"
            className="bg-[#00E676] hover:bg-[#00c864] text-gray-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-all flex items-center gap-2 shadow-lg shadow-[#00E676]/20"
          >
            Napište mi <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="uvod" className="px-8 pt-36 pb-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-8">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Tvořím moderní weby, které <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-emerald-300">zaujmou a prodávají</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Pomáhám podnikatelům a značkám získat profesionální webové stránky, které vypadají skvěle a přinášejí výsledky.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/kontakt"
              className="bg-[#00E676] hover:bg-[#00c864] text-gray-950 font-bold px-6 py-3.5 rounded-lg transition-all shadow-lg shadow-[#00E676]/25"
            >
              Mám zájem o web
            </Link>
            <a
              href="#ukazky"
              className="border border-gray-800 hover:border-gray-700 bg-gray-900/50 text-white px-7 py-4 rounded-lg font-semibold text-base transition-all flex items-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" /> Podívejte se na ukázky
            </a>
          </div>

          <div className="pt-6 border-t border-gray-800/60 flex flex-wrap gap-6 text-xs text-gray-400 font-medium">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#00E676]" />
              Moderní design
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#00E676]" />
              Rychlé dodání
            </div>
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-[#00E676]" />
              Responzivní na všech zařízeních
            </div>
          </div>
        </div>

        {/* Realistický Notebook + Telefon Mockup */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#00E676] to-emerald-600 rounded-full blur-3xl opacity-15"></div>

          {/* Kontejner notebooku */}
          <div className="relative w-full max-w-xl">
            {/* Vnitřek notebooku (Víko/Obrazovka) */}
            <div className="relative bg-[#0d101d] rounded-t-2xl p-2 sm:p-3 border-t border-x border-slate-700/60 shadow-2xl">
              {/* Webkamera */}
              <div className="w-2 h-2 bg-slate-800 rounded-full mx-auto mb-2 border border-slate-600/40"></div>

              {/* Obrazovka webu */}
              <div className="bg-white rounded-lg overflow-hidden text-gray-900 shadow-inner">
                {/* Horní lišta webu */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white">
                  <span className="font-extrabold text-sm text-gray-900">Brand.</span>
                  <div className="hidden sm:flex gap-4 text-[11px] font-medium text-gray-600">
                    <span className="text-[#00E676] font-bold">Domů</span>
                    <span>Služby</span>
                    <span>O nás</span>
                    <span>Kontakt</span>
                  </div>
                  <button className="bg-[#00E676] text-gray-950 font-bold text-[10px] px-2.5 py-1 rounded-md">
                    Poptat spolupráci
                  </button>
                </div>

                {/* Obsah webu v notebooku */}
                <div className="p-6 sm:p-8 grid grid-cols-2 gap-4 items-center min-h-[220px] sm:min-h-[260px] bg-gradient-to-br from-white via-slate-50 to-[#00E676]/10">
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-2xl font-extrabold text-gray-900 leading-tight">
                      Řešení pro vaše <span className="text-[#00c864]">podnikání</span>
                    </h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed hidden sm:block">
                      Vytváříme unikátní digitální zážitky, které posouvají značky vpřed.
                    </p>
                    <button className="bg-[#00E676] text-gray-950 font-bold text-[11px] px-3.5 py-1.5 rounded-md shadow-md shadow-[#00E676]/20">
                      Zjistit více
                    </button>
                  </div>

                  {/* Abstraktní grafika */}
                  <div className="relative flex justify-center items-center">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-[#00E676]/20 to-emerald-100 border border-[#00E676]/30 flex items-center justify-center shadow-inner p-4">
                      <img
                        src="/logoBL.png"
                        alt="RotCode Logo"
                        className="w-full h-full object-contain rounded-full drop-shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spodní základna notebooku */}
            <div className="relative bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 h-3.5 sm:h-4 rounded-b-xl border-t border-slate-600/80 shadow-2xl flex justify-center">
              <div className="w-16 sm:w-20 h-1.5 bg-slate-900 rounded-b-md"></div>
            </div>

            {/* Smartphone Mockup */}
            <div className="absolute -bottom-8 -right-1 sm:-right-3 w-32 sm:w-36 bg-slate-900 ring-1 ring-slate-700/80 rounded-[2.2rem] p-1 sm:p-1.5 shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-20">
              <div className="absolute -left-1 top-16 w-0.5 h-6 bg-slate-700 rounded-l"></div>
              <div className="absolute -left-1 top-24 w-0.5 h-6 bg-slate-700 rounded-l"></div>
              <div className="absolute -right-1 top-20 w-0.5 h-9 bg-slate-700 rounded-r"></div>

              <div className="relative bg-[#090c15] rounded-[1.8rem] p-3 text-left border border-slate-800/90 overflow-hidden shadow-inner h-[250px] sm:h-[285px] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-[8px] text-gray-400 px-1 pt-0.5 pb-2">
                    <span className="font-semibold text-[7.5px]">9:41</span>
                    <div className="w-8 sm:w-9 h-2.5 bg-black rounded-full border border-slate-800 flex items-center justify-center gap-1">
                      <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                    </div>
                    <span className="text-[7px]">5G</span>
                  </div>

                  <div className="flex justify-between items-center text-[9px] text-gray-300 font-bold border-b border-gray-800/80 pb-2 mb-2">
                    <span className="text-white">Studio.</span>
                    <span className="text-gray-400 text-xs">≡</span>
                  </div>

                  <div className="space-y-2 py-1">
                    <h4 className="text-[11px] font-extrabold leading-tight text-white tracking-tight">
                      Kreativní studio s důrazem na detail
                    </h4>
                    <p className="text-[8px] text-gray-400 leading-relaxed">
                      Vytváříme unikátní digitální zážitky, které posouvají značky vpřed.
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button className="w-full bg-[#00E676] hover:bg-[#00c864] text-gray-950 font-bold text-[9px] py-1.5 rounded-lg shadow-md shadow-[#00E676]/30">
                    Naše práce
                  </button>
                  <div className="w-10 h-0.5 bg-slate-500/80 rounded-full mx-auto"></div>
                </div>

                <div className="absolute -top-12 -left-12 w-28 h-48 bg-gradient-to-br from-white/10 via-white/5 to-transparent rotate-45 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="sluzby" className="px-8 py-20 max-w-7xl mx-auto border-t border-gray-800/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[#00E676] font-semibold text-sm tracking-wide uppercase">Služby</span>
            <h2 className="text-3xl font-bold tracking-tight">Kompletní řešení webu</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Od návrhu až po spuštění. Postarám se o vše, co potřebujete.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#101424] p-6 rounded-xl border border-gray-800/80 hover:border-gray-700 transition-all space-y-3">
              <div className="p-2.5 bg-[#00E676]/10 text-[#00E676] rounded-lg w-fit">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Tvorba webových stránek</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Moderní a responzivní weby na míru vašemu podnikání.</p>
            </div>

            <div className="bg-[#101424] p-6 rounded-xl border border-gray-800/80 hover:border-gray-700 transition-all space-y-3">
              <div className="p-2.5 bg-[#00E676]/10 text-[#00E676] rounded-lg w-fit">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">UI/UX Design</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Návrh přehledného rozhraní a skvělého uživatelského zážitku.</p>
            </div>

            <div className="bg-[#101424] p-6 rounded-xl border border-gray-800/80 hover:border-gray-700 transition-all space-y-3">
              <div className="p-2.5 bg-[#00E676]/10 text-[#00E676] rounded-lg w-fit">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Optimalizace výkonu (SEO)</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Rychlé načítání a SEO, aby vás našli ti správní lidé.</p>
            </div>

            <div className="bg-[#101424] p-6 rounded-xl border border-gray-800/80 hover:border-gray-700 transition-all space-y-3">
              <div className="p-2.5 bg-[#00E676]/10 text-[#00E676] rounded-lg w-fit">
                <PenTool className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg">Úpravy a redesign</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Vylepším váš stávající web, aby odpovídal dnešním trendům.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section id="ukazky" className="px-8 py-24 max-w-7xl mx-auto border-t border-gray-800/50">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <span className="text-[#00E676] font-semibold text-base tracking-wide uppercase">Ukázky práce</span>
            <h2 className="text-4xl font-bold tracking-tight">Některé z mých projektů</h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Tlačítka se šipkami pro posouvání */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const container = document.getElementById('projects-container');
                  if (container) container.scrollBy({ left: -350, behavior: 'smooth' });
                }}
                className="p-3 rounded-lg bg-[#101424] border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white transition-all cursor-pointer"
                aria-label="Předchozí projekt"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  const container = document.getElementById('projects-container');
                  if (container) container.scrollBy({ left: 350, behavior: 'smooth' });
                }}
                className="p-3 rounded-lg bg-[#101424] border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white transition-all cursor-pointer"
                aria-label="Další projekt"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <Link href="/kontakt" className="hidden sm:flex text-gray-400 hover:text-white text-base font-semibold items-center gap-1.5 transition-all">
              Chci podobný web <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Kontejner s horizontálním posouváním */}
        <div
          id="projects-container"
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* Projekt 1 */}
          <div className="min-w-[300px] sm:min-w-[360px] lg:min-w-[400px] flex-shrink-0 group cursor-pointer space-y-3 snap-start">
            <div className="bg-[#0f1423] rounded-xl overflow-hidden aspect-[16/10] border border-gray-800 group-hover:border-gray-700 transition-all relative">
              <img
                src="/1 SP.png"
                alt="Xsports Kemp"
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h4 className="font-bold text-base">Xsports Kemp</h4>
              <p className="text-sm text-gray-400">sportovní kempy a tábory pro děti</p>
            </div>
          </div>

          {/* Projekt 2 */}
          <div className="min-w-[300px] sm:min-w-[360px] lg:min-w-[400px] flex-shrink-0 group cursor-pointer space-y-3 snap-start">
            <div className="bg-[#0f1423] rounded-xl overflow-hidden aspect-[16/10] border border-gray-800 group-hover:border-gray-700 transition-all relative">
              <img
                src="/1 BK.png"
                alt="BudeKytka"
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h4 className="font-bold text-base">BudeKytka</h4>
              <p className="text-sm text-gray-400">roddiná květinová farma</p>
            </div>
          </div>

          {/* Projekt 4 */}
          <div className="min-w-[300px] sm:min-w-[360px] lg:min-w-[400px] flex-shrink-0 group cursor-pointer space-y-3 snap-start">
            <div className="bg-[#0f1423] rounded-xl overflow-hidden aspect-[16/10] border border-gray-800 group-hover:border-gray-700 transition-all relative">
              <img
                src="/1 KM.png"
                alt="Kadeřnictví Magda"
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h4 className="font-bold text-base">Kadeřnictví Magda</h4>
              <p className="text-sm text-gray-400">kadeřnický salón</p>
            </div>
          </div>

          {/* Projekt 5 */}
          <div className="min-w-[300px] sm:min-w-[360px] lg:min-w-[400px] flex-shrink-0 group cursor-pointer space-y-3 snap-start">
            <div className="bg-[#0f1423] rounded-xl overflow-hidden aspect-[16/10] border border-gray-800 group-hover:border-gray-700 transition-all relative">
              <img
                src="/1 AK.png"
                alt="Auto Klímek"
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h4 className="font-bold text-base">Auto Klímek</h4>
              <p className="text-sm text-gray-400">Autoservis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RotCode. Všechna práva vyhrazena.
      </footer>
    </div>
  );
}