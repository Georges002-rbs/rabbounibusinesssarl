export default function SiegesPage() {
  const implantations = [
    {
      niveau: "Siège Social / Niveau National",
      ville: "Kinshasa",
      adresse: "24 Av. Nguma, Q/Joli-Parc, C/Ngaliema, Kinshasa-RDC",
      details: "Bureau principal d'administration et de direction générale."
    },
    {
      niveau: "Siège Social / Niveau Provincial",
      ville: "Lubumbashi",
      adresse: "Province du Haut-Katanga, RDC",
      details: "Représentation provinciale pour les opérations minières et industrielles."
    },
    {
      niveau: "Siège Social / Niveau Provincial",
      ville: "Matadi",
      adresse: "Province du Kongo-Central, RDC",
      details: "Antenne provinciale pour la logistique, l'import-export et le transit douanier."
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      <div className="border-b border-slate-800 pb-6">
        <p className="text-amber-500 font-bold text-xs uppercase tracking-widest">Implantations & Réseau</p>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">Nos Sièges & Localisations</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {implantations.map((siege, index) => (
          <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 inline-block">
              {siege.niveau}
            </span>
            <h2 className="text-2xl font-bold text-white">{siege.ville}</h2>
            <p className="text-slate-300 text-sm font-medium">{siege.adresse}</p>
            <p className="text-slate-400 text-xs leading-relaxed">{siege.details}</p>
          </div>
        ))}
      </div>
    </main>
  );
}