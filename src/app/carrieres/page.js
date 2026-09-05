'use client';
import { useState, useEffect } from 'react';

export default function CarrieresPage() {
  const [offres, setOffres] = useState([]);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    poste: '',
    message: '',
    cv: null,
    photo: null
  });

  // Charger les offres d'emploi ajoutées via le tableau de bord /admin
  useEffect(() => {
    const savedOffres = localStorage.getItem('rabbouni_offres');
    if (savedOffres) {
      setOffres(JSON.parse(savedOffres));
    }
  }, []);

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, [field]: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci ${formData.nom} ! Votre candidature avec CV (${formData.cv ? formData.cv.name : 'Non joint'}) et photo a bien été transmise.`);
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      poste: '',
      message: '',
      cv: null,
      photo: null
    });
  };

  const postulerAOffre = (titrePoste) => {
    setFormData((prev) => ({ ...prev, poste: titrePoste }));
    const formElement = document.getElementById('formulaire-candidature');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      
      {/* SECTION 1: OFFRES D'EMPLOI DISPONIBLES */}
      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 inline-block mb-2">
            Opportunités
          </span>
          <h1 className="text-3xl font-serif font-bold text-white">Offres d'Emploi Récentes</h1>
          <p className="text-slate-400 text-sm mt-1">
            Consultez nos postes ouverts et postulez directement ci-dessous.
          </p>
        </div>

        {offres.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center text-slate-400 text-sm">
            Aucune offre spécifique n'est publiée pour le moment. Vous pouvez soumettre une candidature spontanée ci-dessous.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offres.map((item) => (
              <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-4 shadow-lg">
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <h2 className="text-xl font-bold text-white">{item.titre}</h2>
                    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 whitespace-nowrap">
                      {item.lieu || 'Kinshasa'}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={() => postulerAOffre(item.titre)}
                  className="w-full bg-orange-500/20 hover:bg-orange-500 text-orange-400 hover:text-white border border-orange-500/40 font-bold py-2 rounded text-xs transition"
                >
                  Postuler à ce poste →
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SECTION 2: FORMULAIRE DE CANDIDATURE AVEC CV ET PHOTO */}
      <div id="formulaire-candidature" className="bg-white text-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-serif font-bold text-amber-600">Formulaire de Candidature</h2>
          <p className="text-gray-600 text-sm mt-1">
            Remplissez vos informations et joignez votre CV ainsi que votre photo.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nom complet */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                required
                placeholder="Votre nom complet"
                className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              />
            </div>

            {/* Adresse Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Adresse Email *
              </label>
              <input
                type="email"
                required
                placeholder="votre.email@exemple.com"
                className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Numéro de Téléphone */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Numéro de Téléphone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="+243 ..."
                className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                value={formData.telephone}
                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
              />
            </div>

            {/* Poste convoité */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Poste convoité *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Ingénieur BTP, Agent Administratif..."
                className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                value={formData.poste}
                onChange={(e) => setFormData({ ...formData, poste: e.target.value })}
              />
            </div>
          </div>

          {/* CHAMPS TELEVERSEMENT : CV & PHOTO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-slate-50 rounded-lg border border-gray-200">
            {/* Joindre CV (PDF / DOC) */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Curriculum Vitae (CV) * <span className="text-xs font-normal text-gray-500">(PDF, DOC, DOCX)</span>
              </label>
              <input
                type="file"
                required
                accept=".pdf,.doc,.docx"
                className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-500 file:text-white hover:file:bg-amber-600 cursor-pointer"
                onChange={(e) => handleFileChange(e, 'cv')}
              />
            </div>

            {/* Joindre Photo */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Photo de profil / Identité * <span className="text-xs font-normal text-gray-500">(JPG, PNG)</span>
              </label>
              <input
                type="file"
                required
                accept="image/*"
                className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-500 file:text-white hover:file:bg-amber-600 cursor-pointer"
                onChange={(e) => handleFileChange(e, 'photo')}
              />
            </div>
          </div>

          {/* Message / Lettre de motivation */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Message / Lettre de motivation
            </label>
            <textarea
              rows="4"
              placeholder="Présentez brièvement vos compétences et votre motivation..."
              className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          {/* Bouton d'envoi */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-lg shadow transition"
          >
            Envoyer ma candidature complète
          </button>
        </form>
      </div>

    </main>
  );
}