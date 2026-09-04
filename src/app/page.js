import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col justify-between p-6 md:p-12 relative overflow-hidden">
      {/* Navigation En-tête */}
      <header className="flex justify-between items-center max-w-7xl mx-auto w-full py-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-black text-xl">
            R
          </div>
          <div>
            <h1 className="font-bold text-sm tracking-wider uppercase">Rabbouni</h1>
            <p className="text-xs text-gray-400">BUSINESS SARL</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="/" className="text-orange-400 font-semibold transition">Accueil</Link>
          <Link href="/a-propos" className="hover:text-white transition">À propos</Link>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/sieges" className="hover:text-white transition">Sièges</Link>
          <Link href="/galerie" className="hover:text-white transition">Galerie</Link>
          <Link href="/carrieres" className="hover:text-white transition">Carrières</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>

        <Link 
          href="/mon-espace" 
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
        >
          Mon espace
        </Link>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto w-full my-auto py-16 grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2 space-y-6">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
            ENTREPRISE MULTISECTORIELLE INTERNATIONALE
          </p>
          
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Des solutions diversifiées, <br />
            <span className="text-orange-400 italic">un seul partenaire.</span>
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl">
            Nous accompagnons particuliers, entreprises et institutions dans la réalisation de leurs projets, avec exigence, fiabilité et vision.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="/services" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Découvrir nos expertises
            </Link>
            
            <Link 
              href="/carrieres" 
              className="text-white hover:text-orange-400 font-medium px-4 py-3 flex items-center gap-2 transition"
            >
              Rejoindre nos équipes →
            </Link>
          </div>
        </div>

        {/* Encadré d'information droite */}
        <div className="border border-gray-700/60 bg-gray-900/40 p-8 rounded-xl space-y-6 text-right md:text-left backdrop-blur-sm">
          <div>
            <p className="text-xs text-gray-400 uppercase">Depuis</p>
            <p className="text-5xl font-serif text-orange-400 mt-1">2023</p>
          </div>

          <hr className="border-gray-800" />

          <div className="text-sm text-gray-300 space-y-1">
            <p className="font-semibold text-white">Kinshasa</p>
            <p>République Démocratique du Congo</p>
          </div>
        </div>
      </main>

      {/* Pied de page */}
      <footer className="max-w-7xl mx-auto w-full text-center text-xs text-gray-500 py-4 border-t border-gray-800">
        © {new Date().getFullYear()} Rabbouni Business SARL. Tous droits réservés.
      </footer>
    </div>
  );
}
