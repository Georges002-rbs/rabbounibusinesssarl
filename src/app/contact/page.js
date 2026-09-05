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
        .from('messages')
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
    <main className="max-w-6xl mx-auto px-6 py-12 text-slate-100">
      <h1 className="text-3xl font-extrabold text-amber-500 mb-8 text-center">
        Contactez RABBOUNI BUSINESS SARL
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* BLOC COORDONNÉES */}
        <div className="bg-slate-800/90 p-6 rounded-xl border border-slate-700 space-y-6">
          <h2 className="text-xl font-bold text-amber-400 border-b border-slate-700 pb-2">
            Nos Coordonnées
          </h2>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-slate-400 font-semibold">Téléphone / WhatsApp :</p>
              <p className="text-white">+243 821 616 938</p>
              <p className="text-white">+243 995 629 300</p>
            </div>

            <div>
              <p className="text-slate-400 font-semibold">Email :</p>
              <p className="text-white break-all">rabbounibusinesssarl002@gmail.com</p>
            </div>

            <div className="pt-2">
              <p className="text-slate-400 font-semibold mb-2">Nos Réseaux Sociaux :</p>
              <ul className="space-y-1.5 text-slate-300">
                <li><span className="font-medium text-amber-400">Facebook :</span> Société Rabbouni Business SARL</li>
                <li><span className="font-medium text-amber-400">Instagram :</span> Société Rabbouni Business SARL</li>
                <li><span className="font-medium text-amber-400">YouTube :</span> Société Rabbouni Business SARL</li>
                <li><span className="font-medium text-amber-400">TikTok :</span> Société Rabbouni Business SARL</li>
                <li><span className="font-medium text-amber-400">LinkedIn :</span> Société Rabbouni Business SARL</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FORMULAIRE AVEC LABELS ET PLACEHOLDERS CLAIRS */}
        <div className="md:col-span-2 bg-slate-800/80 p-6 rounded-xl border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-6">Envoyez-nous un message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-amber-400">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="nom"
                  required
                  placeholder="Ex: Georges Mulamba"
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-amber-400">
                  Adresse Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Ex: exemple@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5 text-amber-400">
                Sujet du message *
              </label>
              <input
                type="text"
                name="sujet"
                required
                placeholder="Ex: Demande de renseignement, Retard de livraison..."
                value={formData.sujet}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5 text-amber-400">
                Votre Message *
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Rédigez votre message ici..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-lg transition duration-200 text-sm shadow disabled:opacity-50"
            >
              {loading ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}