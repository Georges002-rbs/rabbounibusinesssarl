import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    "Sous-traitance", "Agroalimentaire", "Agroindustrielle", "Ressources humaines",
    "Informatique", "Éducation & Formation", "Restauration", "Construction",
    "Électricité", "Nettoyage", "Import & Export", "Douanes", "Publicité"
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-amber-500 mb-6">Nos Domaines d'Intervention</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-lg font-semibold text-white">{service}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}