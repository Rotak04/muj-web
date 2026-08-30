'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Building2
} from 'lucide-react';

export default function KontaktPage() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Tvorba webových stránek',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitted(true);
      } else {
        alert(`Chyba při odesílání: ${resData.error || 'Neznámá chyba'}`);
      }
    } catch (error) {
      console.error(error);
      alert('Došlo k chybě při odesílání.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#090b14] text-white font-sans selection:bg-[#00E676] selection:text-black flex flex-col justify-between">
      {/* Sticky Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090b14]/90 backdrop-blur-md py-4 border-b border-gray-800/60 shadow-xl'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="flex items-center justify-between px-8 max-w-7xl mx-auto w-full">
          <Link href="/" className="flex items-center gap-3.5 group">
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
          </Link>

          <Link
            href="/"
            className="text-gray-400 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Zpět na hlavní stránku
          </Link>
        </div>
      </nav>

      {/* Main Content - s horním paddingem (pt-36) kvůli fixní navigaci */}
      <main className="px-8 pt-36 pb-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[#00E676] font-semibold text-sm tracking-wide uppercase">Kontakt</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Pojďme tvořit <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-emerald-300">něco skvělého</span>
              </h1>
              <p className="text-gray-400 text-base leading-relaxed">
                Máte dotaz, zájem o nový web nebo potřebujete konzultaci? Napište mi a ozvu se vám do 24 hodin.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#00E676]/10 text-[#00E676] rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">E-mail</h4>
                  <a href="mailto:rotcode@outlook.cz" className="text-lg font-medium hover:text-[#00E676] transition-colors">
                    rotcode@outlook.cz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#00E676]/10 text-[#00E676] rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Telefon</h4>
                  <a href="tel:+420601300900" className="text-lg font-medium hover:text-[#00E676] transition-colors">
                    +420 601 300 900
                  </a>
                </div>
              </div>

              {/* Fakturační údaje */}
              <div className="flex items-start gap-4 pt-2">
                <div className="p-3 bg-[#00E676]/10 text-[#00E676] rounded-xl">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Fakturační údaje</h4>
                  <p className="text-base font-semibold text-gray-200">Matěj Rotrekl</p>
                  <p className="text-sm text-gray-400">IČO: 22529926</p>
                  <p className="text-xs text-gray-500 mt-1">Fyzická osoba zapsaná v živnostenském rejstříku</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-[#101424] border border-gray-800/80 p-8 sm:p-10 rounded-2xl shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#00E676]/10 text-[#00E676] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold">Zpráva byla úspěšně odeslána!</h3>
                <p className="text-gray-400 text-sm max-w-md mx-auto">
                  Děkuji za zprávu. Co nejdříve se vám ozvu zpět na uvedený e-mail.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all"
                >
                  Odeslat další zprávu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold border-b border-gray-800 pb-4">Napište mi</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Jméno a příjmení *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jan Novák"
                      className="w-full bg-[#161b2e] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00E676] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      E-mailová adresa *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jan@novak.cz"
                      className="w-full bg-[#161b2e] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00E676] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    O jakou službu máte zájem?
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#161b2e] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E676] transition-colors"
                  >
                    <option value="Tvorba webových stránek">Tvorba webových stránek</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Optimalizace výkonu (SEO)">Optimalizace výkonu (SEO)</option>
                    <option value="Úpravy a redesign">Úpravy a redesign webu</option>
                    <option value="Jiné">Jiné / Konzultace</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Zpráva *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Popište stručně váš projekt nebo představu..."
                    className="w-full bg-[#161b2e] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00E676] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#00E676] hover:bg-[#00c864] disabled:bg-emerald-900 text-gray-950 font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00E676]/25"
                >
                  {loading ? (
                    <span>Odesílám...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Odeslat poptávku
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-6 text-center text-xs text-gray-500 space-y-1">
        <p>© RotCode. Všechna práva vyhrazena.</p>
        <p>Matěj Rotrekl | IČO: 22529926 | Fyzická osoba zapsaná v živnostenském rejstříku</p>
      </footer>
    </div>
  );
}