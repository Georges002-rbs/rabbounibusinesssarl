'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
      
      {/* HEADER / NAVIGATION */}
      <header className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <Link href="/" className="text-xl md:text-2xl font-extrabold tracking-wide text-orange-400 hover:text-orange-300 transition">
            RABBOUNI BUSINESS SARL
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8 font-medium">
            <Link href="/" className="hover:text-orange-400 transition">Accueil</Link>
            <Link href="/galerie" className="hover:text-orange-400 transition">Galerie</Link>
            <Link href="/carrieres" className="hover:text-orange-400 transition">Carrières</Link>
            <Link href="/contact" className="hover:text-orange-400 transition">Contact</Link>
            <Link href="/admin" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-bold transition shadow-sm">
              Espace Admin
            </Link>
          </nav>

          {/* Bouton Menu Mobile */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <nav className="md:hidden bg-blue-950 border-t border-blue-800 px-6 py-4 flex flex-col space-y-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-orange-400">Accueil</Link>
            <Link href="/galerie" onClick={() => setMenuOpen(false)} className="hover:text-orange-400">Galerie</Link>
            <Link href="/carrieres" onClick={() => setMenuOpen(false)} className="hover:text-orange-400">Carrières</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-orange-400">Contact</Link>
            <Link href="/admin" onClick={() => setMenuOpen(false)} className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-center">
              Espace Admin
            </Link>
          </nav>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Bienvenue chez <span className="text-orange-400">Rabbouni Business</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            Votre partenaire multisectoriel de confiance à Kinshasa : Services de bureautique, BTP, commerce et accompagnement sur-mesure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition shadow-lg text-lg">
              Demander un devis
            </Link>
            <Link href="/galerie" className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold px-8 py-3 rounded-xl transition text-lg">
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto bg-blue-950 text-gray-300 py-10 px-6 border-t border-blue-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Rabbouni Business SARL</h3>
            <p className="text-sm text-gray-400">Solutions professionnelles à Kinshasa, RDC.</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-orange-400">Accueil</Link></li>
              <li><Link href="/galerie" className="hover:text-orange-400">Galerie</Link></li>
              <li><Link href="/carrieres" className="hover:text-orange-400">Carrières</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Contact</h3>
            <p className="text-sm">📍 Kinshasa, RDC</p>
            <p className="text-sm">✉️ contact@rabbounibusiness.com</p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pt-6 border-t border-blue-900">
          © {new Date().getFullYear()} Rabbouni Business SARL. Tous droits réservés.
        </div>
      </footer>

    </div>
  );
}
