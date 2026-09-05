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
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl border border-gray-200">
        <h1 className="text-3xl font-serif font-bold text-amber-600 mb-2">Contactez-nous</h1>
        <p className="text-gray-600 mb-8 text-sm">
          Laissez-nous un message, notre équipe vous répondra dans les plus brefs délais.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
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
    </main>
  );
}