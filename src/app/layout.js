import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-900 text-white">
        {/* Barre de navigation */}
        <header className="flex justify-between items-center p-6 bg-white text-gray-800 shadow-md">
          <div className="font-bold text-xl text-amber-600">
            RABBOUNI BUSINESS SARL
          </div>
          <nav className="space-x-6 text-sm font-medium">
            <Link href="/">Accueil</Link>
            <Link href="/about">À propos</Link>
            <Link href="/services">Services</Link>
            <Link href="/galerie">Galerie</Link>
            <Link href="/carrieres">Carrières</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <button className="bg-amber-500 text-white px-4 py-2 rounded-md font-semibold">
            Mon espace
          </button>
        </header>

        {/* Contenu principal de la page */}
        {children}
      </body>
    </html>
  );
}