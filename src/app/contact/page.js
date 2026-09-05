'use client';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const getSupabaseClient = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    return createClient(supabaseUrl, supabaseAnonKey);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const supabase = getSupabaseClient();
      
      const { error } = await supabase
        .from('messages') // Assurez-vous que le nom de la table correspond à la vôtre
        .insert([
          {
            nom: formData.nom,
            email: formData.email,
            sujet: formData.sujet,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      alert('Votre message a été envoyé avec succès !');

      // RESET DES CHAMPS DU FORMULAIRE :
      setFormData({
        nom: '',
        email: '',
        sujet: '',
        message: '',
      });

    } catch (error) {
      console.error('Erreur lors de l’envoi :', error);
      alert('Une erreur est survenue lors de l’envoi. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold text-amber-500 mb-6 text-center">
        Envoyez-nous un message
      </h1>

      <form onSubmit={handleSubmit} className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-300">Nom complet</label>
            <input
              type="text"
              name="nom"
              required
              value={formData.nom}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-300">Adresse Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1 text-slate-300">Sujet</label>
          <input
            type="text"
            name="sujet"
            required
            value={formData.sujet}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1 text-slate-300">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition duration-200 text-sm shadow disabled:opacity-50"
        >
          {loading ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
      </form>
    </main>
  );
}