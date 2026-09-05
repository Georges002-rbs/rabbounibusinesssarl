'use client';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialisation du client Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function CarrieresPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    poste: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

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
    setStatus(null);

    try {
      let cvUrl = null;

      // 1. Upload du CV dans Supabase Storage
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('fichiers CV')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        // Récupération de l'URL publique
        const { data: publicUrlData } = supabase.storage
          .from('fichiers CV')
          .getPublicUrl(filePath);

        cvUrl = publicUrlData.publicUrl;
      }

      // 2. Enregistrement des données de la candidature dans la base de données
      const { error: dbError } = await supabase
        .from('candidatures')
        .insert([
          {
            nom: formData.nom,
            email: formData.email,
            telephone: formData.telephone,
            poste: formData.poste,
            message: formData.message,
            cv_url: cvUrl,
          },
        ]);

      if (dbError) throw dbError;

      setStatus({ type: 'success', text: 'Votre candidature a été envoyée avec succès !' });
      setFormData({ nom: '', email: '', telephone: '', poste: '', message: '' });
      setFile(null);
    } catch (error) {
      console.error('Erreur lors de l’envoi :', error);
      setStatus({ type: 'error', text: 'Une erreur est survenue lors de l’envoi. Réessayez.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold text-amber-500 mb-6 text-center">
        Rejoignez RABBOUNI BUSINESS SARL
      </h1>

      {status && (
        <div className={`p-4 mb-6 rounded-md text-sm font-semibold ${
          status.type === 'success' ? 'bg-green-800/50 text-green-200 border border-green-600' : 'bg-red-800/50 text-red-200 border border-red-600'
        }`}>
          {status.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-300">Nom complet *</label>
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
            <label className="block text-xs font-semibold mb-1 text-slate-300">Adresse Email *</label>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-300">Téléphone</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-300">Poste convoité *</label>
            <input
              type="text"
              name="poste"
              required
              value={formData.poste}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1 text-slate-300">Joindre votre CV (PDF ou Word) *</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            required
            onChange={handleFileChange}
            className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-xs text-slate-300 file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1 text-slate-300">Message / Lettre de motivation</label>
          <textarea
            name="message"
            rows="4"
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
          {loading ? 'Envoi en cours...' : 'Soumettre ma candidature'}
        </button>
      </form>
    </main>
  );
}