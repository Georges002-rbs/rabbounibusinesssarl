'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Services', href: '/services' },
    { name: 'Sièges', href: '/sieges' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Carrières', href: '/carrieres' },
  ];

  return (
    <nav className="bg-amber-100/90 text-slate-800 shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Titre à gauche (si présent) */}
          <div className="flex-shrink-0 font-bold text-lg text-slate-900">
            <Link href="/">RABBOUNI BUSINESS</Link>
          </div>

          {/* Menu pour Grand Écran (Desktop) */}
          <div className="hidden md:flex space-x-6 font-medium text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-amber-600 transition duration-150"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bouton Hamburger à 3 lignes (Visible uniquement sur mobile/tablette) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-slate-800 hover:text-amber-600 focus:outline-none p-2"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  // Icône "X" pour fermer
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Icône 3 lignes (Hamburger)
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Déroulant Mobile (S'affiche lors du clic sur le bouton 3 lignes) */}
      {isOpen && (
        <div className="md:hidden bg-amber-50 border-t border-amber-200 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Ferme le menu au clic d'un lien
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-amber-200 hover:text-amber-900 transition duration-150"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}