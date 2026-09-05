import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        
        {/* Colonne gauche : Textes & Boutons */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-amber-400 font-bold tracking-widest text-xs uppercase">
            Entreprise Multisectorielle Internationale
          </p>
          
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-white leading-tight">
            Des solutions diversifiées,<br />
            <span className="text-amber-200">un seul partenaire.</span>
          </h1>
          
          <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
            Nous accompagnons particuliers, entreprises et institutions dans la réalisation de leurs projets, avec exigence, fiabilité et vision.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="/services" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3.5 rounded-md font-semibold transition"
            >
              Découvrir nos expertises
            </Link>
            <Link 
              href="/carrieres" 
              className="text-white hover:text-amber-400 font-medium px-4 py-3.5 flex items-center gap-2 transition"
            >
              Rejoindre nos équipes &rarr;
            </Link>
          </div>
        </div>

        {/* Colonne droite : Encart transparent "Depuis 2023" */}
        <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-8 backdrop-blur-sm space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
              Depuis
            </p>
            <p className="text-6xl font-serif font-bold text-amber-500 mt-2">
              2023
            </p>
          </div>
          
          <hr className="border-slate-700/60" />
          
          <div className="space-y-1">
            <p className="font-bold text-lg text-white">Kinshasa</p>
            <p className="text-sm text-slate-400">République Démocratique du Congo</p>
          </div>
        </div>

      </div>
    </main>
  );
}