'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Votre message a été envoyé avec succès !');
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-serif font-bold text-amber-600 mb-2">Contactez-nous</h1>
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
          Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* BLOC INFORMATIONS DE CONTACT */}
        <div className="bg-slate-900 text-white rounded-xl p-8 shadow-xl space-y-6">
          <h2 className="text-2xl font-bold text-amber-500 border-b border-slate-700 pb-3">
            Nos Coordonnées
          </h2>

          {/* Téléphone / WhatsApp */}
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Téléphone / WhatsApp</h3>
            <p className="text-base font-medium text-white">
              +243 821 616 938 <br />
              +243 995 629 300
            </p>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Email</h3>
            <p className="text-base font-medium text-amber-400 break-all">
              rabbounibusinesssarl002@gmail.com
            </p>
          </div>

          {/* Horaires */}
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Horaires de service</h3>
            <p className="text-base font-medium text-white">
              Du lundi au vendredi <br />
              De 7h30′ à 16h30′
            </p>
          </div>

          {/* Réseaux Sociaux */}
          <div className="space-y-2 pt-4 border-t border-slate-700">
            <h3 className="text-sm font-semibold text-amber-500 uppercase tracking-wider">Suivez-nous</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><strong className="text-white">Facebook :</strong> Société rabbouni business sarl</li>
              <li><strong className="text-white">YouTube :</strong> Société rabbouni business sarl</li>
              <li><strong className="text-white">Instagram :</strong> Société rabbouni business sarl</li>
              <li><strong className="text-white">TikTok :</strong> Société rabbouni business sarl</li>
              <li><strong className="text-white">LinkedIn :</strong> Société rabbouni business sarl</li>
            </ul>
          </div>
        </div>

        {/* FORMULAIRE DE CONTACT */}
        <div className="lg:col-span-2 bg-white text-gray-900 rounded-xl p-8 shadow-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>

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
                  placeholder="Votre nom complet"
                  className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
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
                  className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Sujet */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Sujet
              </label>
              <input
                type="text"
                required
                placeholder="Objet de votre message"
                className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                value={formData.sujet}
                onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                required
                placeholder="Expliquez-nous votre besoin..."
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
              Envoyer le message
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}