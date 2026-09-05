import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'SOCIETE RABBOUNI BUSINESS SARL',
  description: 'Des solutions diversifiées, un seul partenaire.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-900 text-white min-h-screen flex flex-col justify-between font-sans">
        
        {/* En-tête clair officiel */}
        <header className="bg-amber-50/95 text-gray-800 border-b border-amber-200/60 sticky top-0 z-50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Logo officiel (.jpg) & Identité */}
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/logo.jpg" 
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

            {/* Menu de navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
              <Link href="/" className="hover:text-amber-600 transition">Accueil</Link>
              <Link href="/apropos" className="hover:text-amber-600 transition">À propos</Link>
              <Link href="/services" className="hover:text-amber-600 transition">Services</Link>
              <Link href="/sieges" className="hover:text-amber-600 transition">Sièges</Link>
              <Link href="/galerie" className="hover:text-amber-600 transition">Galerie</Link>
              <Link href="/carrieres" className="hover:text-amber-600 transition">Carrières</Link>
              <Link href="/contact" className="hover:text-amber-600 transition">Contact</Link>
            </nav>

            {/* Boutons d'accès direct */}
            <div className="flex items-center gap-3">
              <Link 
                href="/admin" 
                className="hidden sm:inline-block text-xs font-bold text-gray-600 hover:text-amber-600 border border-gray-300 px-3 py-2 rounded-md transition"
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

        {/* Zone de contenu */}
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