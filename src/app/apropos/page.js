import Link from 'next/link';

export default function AproposPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      
      {/* En-tête de page */}
      <div className="border-b border-slate-800 pb-8">
        <p className="text-amber-500 font-bold text-xs uppercase tracking-widest">Présentation officielle</p>
        <h1 className="text-4xl font-serif font-bold text-white mt-2">À propos de nous</h1>
      </div>

      {/* Contenu principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6 text-slate-300 leading-relaxed">
          <p className="text-lg text-white font-medium">
            La <strong className="text-amber-400">SOCIÉTÉ RABBOUNI BUSINESS SARL</strong> est une entité multisectorielle à caractère international qui propose des solutions adaptées aux besoins des particuliers, des entreprises, des institutions et des organisations[span_2](start_span)[span_2](end_span).
          </p>
          <p>
            Elle a été créée en Septembre 2023 à Kinshasa, en République Démocratique du Congo, par Monsieur <strong>KILUBA NTUMBA Ezéchiel</strong>, visionnaire accompagné par un groupe d'associés Congolais, Camerounais et Américains pour la mise en œuvre de la société[span_3](start_span)[span_3](end_span).
          </p>
          <p>
            Notre vision est d'améliorer les conditions socio-économiques et le développement de la classe moyenne par l'entrepreneuriat[span_4](start_span)[span_4](end_span).
          </p>

          <h2 className="text-2xl font-serif font-bold text-white pt-4">Notre Engagement</h2>
          <p>
            Nous nous engageons à offrir des solutions adaptées dans divers secteurs tels que le commerce général, l'import-export, l'exploitation minière, le génie civil, l'agro-alimentaire, la recherche scientifique et la santé publique[span_5](start_span)[span_5](end_span).
          </p>
        </div>

        {/* Encadré Visionnaire / Fiche */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 h-fit">
          <h3 className="text-amber-500 font-bold text-sm uppercase tracking-wider">Identité</h3>
          <ul className="space-y-3 text-sm">
            <li className="border-b border-slate-800 pb-2">
              <span className="text-slate-400 block text-xs">Fondateur & Visionnaire</span>
              <span className="text-white font-semibold">M. KILUBA NTUMBA Ezéchiel[span_6](start_span)[span_6](end_span)</span>
            </li>
            <li className="border-b border-slate-800 pb-2">
              <span className="text-slate-400 block text-xs">Date de création</span>
              <span className="text-white font-semibold">Septembre 2023[span_7](start_span)[span_7](end_span)</span>
            </li>
            <li>
              <span className="text-slate-400 block text-xs">Siège Social</span>
              <span className="text-white font-semibold">Kinshasa, RDC[span_8](start_span)[span_8](end_span)</span>
            </li>
          </ul>
        </div>
      </div>

    </main>
  );
}