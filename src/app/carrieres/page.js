'use client';
import { useState } from 'react';

export default function CarrieresPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    poste: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Votre candidature a été transmise avec succès !');
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 space-y-6">
        
        {/* En-tête de la section */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-serif font-bold text-amber-600">Candidature Spontanée</h1>
          <p className="text-gray-600 text-sm mt-1">
            Nous sommes toujours à la recherche de nouveaux talents. Envoyez-nous votre candidature.
          </p>
        </div>

        {/* Formulaire de candidature */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Nom complet */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                required
                placeholder="Votre nom"
                className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none shadow-sm"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              />
            </div>

            {/* Adresse Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Adresse Email
              </label>
              <input
                type="email"
                required
                placeholder="votre.email@exemple.com"
                className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none shadow-sm"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

          </div>

          {/* Poste convoité */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Poste convoité
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Développeur, Chef de projet..."
              className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none shadow-sm"
              value={formData.poste}
              onChange={(e) => setFormData({ ...formData, poste: e.target.value })}
            />
          </div>

          {/* Message / Lettre de motivation */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Message / Lettre de motivation
            </label>
            <textarea
              rows="5"
              required
              placeholder="Présentez-vous en quelques lignes..."
              className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none shadow-sm resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          {/* Bouton de soumission aux couleurs de l'entreprise */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-lg shadow transition"
          >
            Envoyer ma candidature
          </button>

        </form>
      </div>
    </main>
  );
}