'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: 'Renseignements Généraux',
    message: ''
  });

  const [statut, setStatut] = useState(null);
  const [chargement, setChargement] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setChargement(true);
    setStatut(null);

    try {
      // Envoi des données dans Supabase (table candidates ou contacts)
      const { error } = await supabase.from('candidates').insert([
        {
          full_name: formData.nom,
          email: formData.email,
          phone: formData.telephone,
          message: `[Sujet: ${formData.sujet}] ${formData.message}`
        }
      ]);

      if (error) throw error;

      setStatut({
        type: 'succes',
        message: 'Votre message a été envoyé avec succès ! Nos équipes vous recontacteront sous peu.'
      });

      // Réinitialisation du formulaire
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        sujet: 'Renseignements Généraux',
        message: ''
      });
    } catch (err) {
      console.error(err);
      setStatut({
        type: 'erreur',
        message: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.'
      });
    } finally {
      setChargement(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col justify-between p-6 md:p-12">
      {/* Header */}
      <header className="flex justify-between items-center max-w-7xl mx-auto w-full py-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-black">
            R
          </div>
          <div>
            <h1 className="font-bold text-sm tracking-wider uppercase">Rabbouni</h1>
            <p className="text-xs text-gray-400">BUSINESS SARL</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">Accueil</Link>
          <Link href="/a-propos" className="hover:text-white transition">À propos</Link>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/sieges" className="hover:text-white transition">Sièges</Link>
          <Link href="/galerie" className="hover:text-white transition">Galerie</Link>
          <Link href="/carrieres" className="hover:text-white transition">Carrières</Link>
          <Link href="/contact" className="hover:text-white transition text-orange-400 font-semibold">Contact</Link>
        </nav>

        <Link 
          href="/mon-espace" 
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
        >
          Mon espace
        </Link>
      </header>

      {/* Main Form Section */}
      <main className="max-w-4xl mx-auto w-full py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Contactez-nous</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Une question ou un projet ? Laissez-nous un message et notre équipe vous répondra dans les plus brefs délais.
          </p>
        </div>

        {statut && (
          <div className={`p-4 mb-6 rounded-lg border ${
            statut.type === 'succes' 
              ? 'bg-green-950/60 border-green-500 text-green-200' 
              : 'bg-red-950/60 border-red-500 text-red-200'
          }`}>
            {statut.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl space-y-6 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nom complet *</label>
              <input
                type="text"
                name="nom"
                required
                value={formData.nom}
                onChange={handleChange}
                placeholder="Votre nom"
                className="w-full bg-slate-800/80 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-orange-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="exemple@domaine.com"
                className="w-full bg-slate-800/80 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-orange-500 transition"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Téléphone</label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="+243..."
                className="w-full bg-slate-800/80 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-orange-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Sujet</label>
              <select
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                className="w-full bg-slate-800/80 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-orange-500 transition"
              >
                <option value="Renseignements Généraux">Renseignements Généraux</option>
                <option value="Demande de Partenariat">Demande de Partenariat</option>
                <option value="Demande de Devis">Demande de Devis</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
            <textarea
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Écrivez votre message ici..."
              className="w-full bg-slate-800/80 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-orange-500 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={chargement}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-800 text-white font-medium py-3.5 rounded-lg transition"
          >
            {chargement ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </form>
      </main>

      {/* Footer minimaliste */}
      <footer className="text-center text-xs text-gray-500 py-4 border-t border-gray-800">
        © {new Date().getFullYear()} Rabbouni Business SARL. Tous droits réservés.
      </footer>
    </div>
  );
}