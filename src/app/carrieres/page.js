export default function CarrieresPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* En-tête de la page */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Rejoignez Rabbouni Business SARL
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Développez votre potentiel et construisez votre avenir au sein de notre équipe.
          </p>
        </div>

        {/* Section Nos Valeurs / Pourquoi nous rejoindre */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Pourquoi travailler avec nous ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 border border-gray-100 rounded-lg bg-blue-50/50">
              <h3 className="font-semibold text-lg text-blue-900 mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">Nous encourageons les nouvelles idées et l'initiative personnelle.</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg bg-blue-50/50">
              <h3 className="font-semibold text-lg text-blue-900 mb-2">Croissance</h3>
              <p className="text-sm text-gray-600">Opportunités de formation continue et d'évolution professionnelle.</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg bg-blue-50/50">
              <h3 className="font-semibold text-lg text-blue-900 mb-2">Collaboration</h3>
              <p className="text-sm text-gray-600">Un environnement de travail bienveillant et axé sur l'esprit d'équipe.</p>
            </div>
          </div>
        </div>

        {/* Section Offres d'emploi / Candidature spontanée */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Candidature Spontanée</h2>
          <p className="text-gray-600 mb-6">
            Nous sommes toujours à la recherche de nouveaux talents. Si aucune offre ne correspond directement à votre profil, envoyez-nous votre candidature.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input 
                  type="text" 
                  placeholder="Votre nom" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adresse Email</label>
                <input 
                  type="email" 
                  placeholder="votre.email@exemple.com" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Poste convoité</label>
              <input 
                type="text" 
                placeholder="Ex: Développeur, Chef de projet..." 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message / Lettre de motivation</label>
              <textarea 
                rows="4" 
                placeholder="Présentez-vous en quelques lignes..." 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition-colors duration-200"
            >
              Envoyer ma candidature
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}