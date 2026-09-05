'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';

export default function RootLayout({ children }) {
  const [customLogo, setCustomLogo] = useState(null);
  const pathname = usePathname(); // Récupère le chemin actif de l'URL

  useEffect(() => {
    const savedLogo = localStorage.getItem('rabbouni_logo');
    if (savedLogo) {
      setCustomLogo(savedLogo);
    }
  }, []);

  // Liste des liens de navigation
  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/apropos', label: 'À propos' },
    { href: '/services', label: 'Services' },
    { href: '/sieges', label: 'Sièges' },
    { href: '/galerie', label: 'Galerie' },
    { href: '/carrieres', label: 'Carrières' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <html lang="fr">
      <head>
        <title>SOCIETE RABBOUNI BUSINESS SARL</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-900 text-white min-h-screen flex flex-col justify-between font-sans">
        
        {/* En-tête / Navigation */}
        <header className="bg-amber-50/95 text-gray-800 border-b border-amber-200/60 sticky top-0 z-50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <img 
                src={customLogo || '/logo.jpg'} 
                alt="Logo Rabbouni Business SARL" 
                className="w-12 h-12 object-contain rounded-md"
              />
              <div>
                <span className="font-extrabold text-amber-700 tracking-wide text-sm sm:text-base block leading-none">
                  RABBOUNI BUSINESS <span className="text-orange-600 text-xs font-semibold">SARL</span>
                </span>
                <span className="text-[10px] text-gray-500 font-medium">Entreprise Multisectorielle</span>
              </div>
            </Link>

            {/* Liens de Navigation avec Indicateur de Page Active */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-1 transition-all duration-200 ${
                      isActive
                        ? 'text-orange-600 font-bold border-b-2 border-orange-600'
                        : 'text-gray-700 hover:text-amber-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Boutons d'action */}
            <div className="flex items-center gap-3">
              <Link 
                href="/admin" 
                className={`hidden sm:inline-block text-xs font-bold px-3 py-2 rounded-md transition border ${
                  pathname === '/admin'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'text-gray-600 hover:text-amber-600 border-gray-300'
                }`}
              >
                Admin
              </Link>
              <Link 
                href="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-md text-sm shadow transition"
              >
                Mon espace
              </Link>
            </div>

          </div>
        </header>

        {/* Contenu principal */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Pied de page */}
        <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-400">
          <div className="max-w-7xl mx-auto px-6 space-y-2">
            <p className="font-semibold text-slate-300">SOCIETE RABBOUNI BUSINESS SARL</p>
            <p>© 2026 Tous droits réservés. Kinshasa, République Démocratique du Congo.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}