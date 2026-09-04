export default function GaleriePage() {
  // Liste d'exemples de réalisations/projets
  const projets = [
    {
      id: 1,
      titre: "Impression & Secrétariat",
      categorie: "Services de Bureau",
      description: "Traitement de texte, numérisation et impressions haute qualité.",
      image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      titre: "Équipements Informatiques",
      categorie: "Informatique",
      description: "Fourniture et maintenance de matériel pour entreprises.",
      image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      titre: "Support & Assistance",
      categorie: "Technologie",
      description: "Accompagnement technique et solutions sur-mesure à Kinshasa.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* En-tête de la page */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Notre Galerie
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Aperçu de nos réalisations, équipements et services chez Rabbouni Business SARL.
          </p>
        </div>

        {/* Grille d'images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((projet) => (
            <div 
              key={projet.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full bg-gray-200">
                <img 
                  src={projet.image} 
                  alt={projet.titre} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                    {projet.categorie}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                    {projet.titre}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {projet.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}