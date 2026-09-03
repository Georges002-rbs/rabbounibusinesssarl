import Link from 'next/link';

export default function CarrieresPage() {
  const offres = [
    {
      id: 1,
      titre: "Agent Administratif & Réceptionniste",
      secteur: "Ressources Humaines",
      lieu: "Kinshasa",
      type: "CDI",
      description: "Accueil des clients, gestion des appels et traitement des documents administratifs."
    },
    {
      id: 2,
      titre: "Technicien Support Informatique",
      secteur: "Informatique & Télécoms",
      lieu: "Kinshasa",
      type: "CDI",
      description: "Maintenance du parc informatique, gestion des réseaux et assistance aux utilisateurs."
    },
    {
      id: 3,
      titre: "Superviseur de Chantier",
      secteur: "Génie Civil & BTP",
      lieu: "Kinshasa / Provinces",
      type: "CDD",
      description: "Suivi des travaux de construction et coordination des équipes sur le terrain."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* En-tête */}
        <div className="text-center space-y-2">
          <Link href="/" className="text-sm font-semibold text-orange-600 hover:underline">
            &larr; Retour à l&apos;accueil
          </Link>
          <h1 className="text-3xl font-extrabold text-blue-900 uppercase">
            Portail de Recrutement
          </h1>
          <p className="text-gray-600">
            Rejoignez les équipes de la Société Rabbouni Business SARL.
          </p>
        </div>

        {/* Liste des Offres */}
        <div className="grid gap-6">
          {offres.map((offre) => (
            <div key={offre.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded">
                    {offre.secteur}
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-bold px-2.5 py-0.5 rounded">
                    {offre.type}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">{offre.titre}</h2>
                <p className="text-sm text-gray-500">&#128205; {offre.lieu}</p>
                <p className="text-sm text-gray-700">{offre.description}</p>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-lg transition whitespace-nowrap">
                Postuler maintenant
              </button>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}