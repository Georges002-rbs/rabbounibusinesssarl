import Link from 'next/link';

export const metadata = {
  title: 'RABBOUNI BUSINESS SARL',
  description: 'Des solutions diversifiées, un seul partenaire.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-900 text-white min-h-screen flex flex-col justify-between font-sans">
        
        {/* En-tête clair identique à la photo */}
        <header className="bg-amber-50/90 text-gray-800 border-b border-amber-200/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Logo et Nom */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center font-bold text-amber-600 text-xl">
                R
              </div>
              <span className="font-bold text-amber-700 tracking-wide text-sm sm:text-base">
                RABBOUNI<br />BUSINESS SARL
              </span>
            </Link>

            {/* Navigation horizontale */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-amber-600 transition">Accueil</Link>
              <Link href="/about" className="hover:text-amber-600 transition">À propos</Link>
              <Link href="/services" className="hover:text-amber-600 transition">Services</Link>
              <Link href="/sieges" className="hover:text-amber-600 transition">Sièges</Link>
              <Link href="/galerie" className="hover:text-amber-600 transition">Galerie</Link>
              <Link href="/carrieres" className="hover:text-amber-600 transition">Carrières</Link>
              <Link href="/contact" className="hover:text-amber-600 transition">Contact</Link>
            </nav>

            {/* Bouton Mon espace */}
            <Link 
              href="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2.5 rounded-md shadow transition"
            >
              Mon espace
            </Link>
          </div>
        </header>

        {/* Zone de contenu principal */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-xs text-slate-500">
          © 2026 RABBOUNI BUSINESS SARL. Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}