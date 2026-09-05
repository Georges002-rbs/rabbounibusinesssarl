'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function CarrieresClient() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    position: '',
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let cvUrl = null;

      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from('cv_files')
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from('cv_files')
          .getPublicUrl(fileName);

        cvUrl = urlData.publicUrl;
      }

      const { error: insertError } = await supabase
        .from('candidates')
        .insert([
          {
            full_name: formData.full_name,
            email: formData.email,
            phone: formData.phone,
            position: formData.position,
            cv_url: cvUrl,
          },
        ]);

      if (insertError) throw insertError;

      alert('Votre candidature a été envoyée avec succès !');
      setFormData({ full_name: '', email: '', phone: '', position: '' });
      setFile(null);
    } catch (err) {
      console.error('Erreur Supabase :', err);
      alert('Une erreur est survenue lors de l’envoi. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-lg my-10">
      <h1 className="text-3xl font-bold text-center text-amber-500 mb-8">
        Rejoignez RABBOUNI BUSINESS SARL
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-amber-400">
              Nom complet *
            </label>
            <input
              type="text"
              name="full_name"
              required
              placeholder="Ex: Jean Dupont"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-amber-400">
              Adresse e-mail *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Ex: exemple@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-amber-400">
              Numéro de téléphone *
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Ex: +243 81 000 0000"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-amber-400">
              Poste souhaité *
            </label>
            <input
              type="text"
              name="position"
              required
              placeholder="Ex: Informaticien, Comptable..."
              value={formData.position}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-amber-400">
            Joindre votre CV (PDF ou DOCX)
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3.5 rounded-lg transition duration-200 text-sm shadow disabled:opacity-50"
        >
          {loading ? 'Envoi en cours...' : 'Envoyer ma candidature'}
        </button>
      </form>
    </main>
  );
}