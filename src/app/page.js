export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Colonne gauche : Titre & Actions */}
        <div className="md:col-span-2 space-y-6">
          <p className="text-amber-500 font-semibold tracking-wider text-xs uppercase">
            Entreprise Multisectorielle Internationale
          </p>
          <h1 className="text-5xl font-extrabold leading-tight">
            Des solutions diversifiées,<br />
            un seul partenaire.
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Nous accompagnons particuliers, entreprises et institutions dans la réalisation de leurs projets, avec exigence, fiabilité et vision.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="/services" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-semibold">
              Découvrir nos expertises
            </a>
            <a href="/carrieres" className="flex items-center gap-2 border border-white/20 hover:border-white px-6 py-3 rounded-md font-semibold">
              Rejoindre nos équipes &rarr;
            </a>
          </div>
        </div>

        {/* Colonne droite : Carte "Depuis 2023" */}
        <div className="bg-gray-800/60 border border-gray-700 p-8 rounded-xl space-y-4">
          <p className="text-xs uppercase text-gray-400 tracking-wider">Depuis</p>
          <p className="text-6xl font-extrabold text-amber-500">2023</p>
          <hr className="border-gray-700" />
          <div>
            <p className="font-bold text-lg">Kinshasa</p>
            <p className="text-sm text-gray-400">République Démocratique du Congo</p>
          </div>
        </div>

      </div>
    </main>
  );
}