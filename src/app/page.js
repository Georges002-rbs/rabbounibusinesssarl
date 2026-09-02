import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* En-tête institutionnel */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center border-b-8 border-orange-500">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-orange-500 text-xs uppercase font-bold px-3 py-1 rounded-full">
            Plateforme Officielle
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">
            Société Rabbouni Business SARL
          </h1>
          <p className="text-lg md:text-xl text-orange-300 font-medium italic">
            &laquo; Des solutions diversifiées, un seul partenaire. &raquo;
          </p>
          <div className="pt-6 flex justify-center gap-4 flex-wrap">
            <Link
              href="/carrieres"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition shadow-lg"
            >
              Consulter les Offres d&apos;Emploi
            </Link>
            <Link
              href="/admin"
              className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold border border-blue-600 transition"
            >
              Espace Administration
            </Link>
          </div>
        </div>
      </section>

      {/* Présentation de l'entreprise */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-orange-500 pb-2">
            À propos de nous
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La <strong>SOCIÉTÉ RABBOUNI BUSINESS SARL</strong> est une entité multisectorielle à caractère international qui propose des solutions adaptées aux besoins des particuliers, des entreprises et des institutions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Créée en Septembre 2023 à Kinshasa par Monsieur KILUBA NTUMBA Ezéchiel, elle a pour vision d&apos;améliorer les conditions socio-économiques et le développement de la classe moyenne par l&apos;entrepreneuriat.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
          <h3 className="text-lg font-bold text-blue-900 mb-3">Nos Domaines d&apos;Intervention</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm font-semibold text-gray-800">
            <li>✔ Sous-traitance</li>
            <li>✔ Agroalimentaire</li>
            <li>✔ Ressources Humaines</li>
            <li>✔ Informatique</li>
            <li>✔ Génie Civil & Construction</li>
            <li>✔ Import & Export</li>
            <li>✔ Éducation & Formation</li>
            <li>✔ Mines & Hydrocarbures</li>
          </ul>
        </div>
      </section>
    </main>
  );
}