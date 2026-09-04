export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Contactez-nous
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Une question ou un projet ? L'équipe de Rabbouni Business SARL est à votre écoute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Nos Coordonnées</h2>
              
              <div className="space-y-6 text-gray-600">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresse</h3>
                    <p className="text-sm mt-1">Kinshasa, République Démocratique du Congo</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-sm mt-1">contact@rabbounibusiness.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Téléphone</h3>
                    <p className="text-sm mt-1">+243 000 000 000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Heures d'ouverture</h3>
              <p className="text-sm text-gray-600">Lundi - Vendredi : 08h00 - 17h00</p>
              <p className="text-sm text-gray-600">Samedi : 08h00 - 12h30</p>
            </div>
          </div>

          {/* Formulaire de message */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
            
            <form className="space-y-4">
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <input 
                  type="text" 
                  placeholder="Objet de votre message" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Expliquez-nous votre besoin..." 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition-colors duration-200"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}