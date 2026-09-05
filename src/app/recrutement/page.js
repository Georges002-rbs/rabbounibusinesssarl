'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Configuration Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function RecrutementPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    poste: '',
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');

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
    setMessageStatus('');

    try {
      let cvUrl = null;

      // Upload du CV dans le bucket 'cvs' si un fichier est sélectionné
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('cvs')
          .upload(filePath, file);

        if (uploadError) {
          throw new Error("Erreur lors de l'envoi du CV : " + uploadError.message);
        }

        const { data: urlData } = supabase.storage
          .from('cvs')
          .getPublicUrl(filePath);

        cvUrl = urlData.publicUrl;
      }

      // Enregistrement de la candidature dans la base de données
      const { error: insertError } = await supabase
        .from('candidatures')
        .insert([
          {
            nom: formData.nom,
            email: formData.email,
            telephone: formData.telephone,
            poste: formData.poste,
            cv_url: cvUrl,
          },
        ]);

      if (insertError) {
        throw new Error("Erreur lors de l'enregistrement : " + insertError.message);
      }

      setMessageStatus('Votre candidature a été envoyée avec succès !');
      setFormData({ nom: '', email: '', telephone: '', poste: '' });
      setFile(null);
    } catch (err) {
      setMessageStatus(err.message || 'Une erreur est survenue.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-lg my-10">
      <h1 className="text-3xl font-bold text-center text-amber-500 mb-8">
        Rejoignez RABBOUNI BUSINESS SARL
      </h1>

      {messageStatus && (
        <div
          className={`p-4 mb-6 rounded text-center font-semibold ${
            messageStatus.includes('succès')
              ? 'bg-green-600 text-white'
              : 'bg-red-600 text-white'
          }`}
        >
          {messageStatus}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Ligne 1 : Nom complet et Adresse Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-200 mb-2">
              Nom complet <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              placeholder="Ex: Jean Dupont"
              className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
              Adresse e-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Ex: jean.dupont@email.com"
              className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Ligne 2 : Numéro de téléphone et Poste souhaité */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-200 mb-2">
              Numéro de téléphone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              placeholder="Ex: +243 81 000 0000"
              className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="poste" className="block text-sm font-medium text-gray-200 mb-2">
              Poste souhaité <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="poste"
              name="poste"
              value={formData.poste}
              onChange={handleChange}
              required
              placeholder="Ex: Développeur Web, Comptable..."
              className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Champs Fichier CV */}
        <div>
          <label htmlFor="cv" className="block text-sm font-medium text-gray-200 mb-2">
            Joindre votre CV (PDF ou DOCX)
          </label>
          <input
            type="file"
            id="cv"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
          />
        </div>

        {/* Bouton de soumission */}
        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-8 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-md transition duration-200 disabled:opacity-50"
          >
            {loading ? 'Envoi en cours...' : 'Envoyer ma candidature'}
          </button>
        </div>
      </form>
    </div>
  );
}