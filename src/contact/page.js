'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: 'Renseignements Généraux',
    message: ''
  });

  const [statut, setStatut] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatut('Envoi en cours...');
    setTimeout(() => {
      setStatut('Votre message a été envoyé avec succès ! Notre équipe vous recontactera rapidement.');
      setFormData({ nom: '', email: '', telephone: '', sujet: 'Renseignements Généraux', message: '' });
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* Banner */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold uppercase tracking-wide">Contactez-nous</h1>
        <p className="mt-3 text-lg text-orange-300 max-w-2xl mx-auto">
          Besoin d&apos;un renseignement ou d&apos;un devis ? L&apos;équipe de Rabbouni Business SARL est à votre écoute.
        </p>
      </section>

      {/* Section Contenu */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Coordonnées */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-900 border-b pb-3">Nos Coordonnées</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white p-3 rounded-lg text-xl">📍</div>
                <div>
                  <h3 className="font-bold text-gray-900">Adresse</h3>
                  <p className="text-gray-600 text-sm">Kinshasa, République Démocratique du Congo</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white p-3 rounded-lg text-xl">📞</div>
                <div>
                  <h3 className="font-bold text-gray-900">Téléphone</h3>
                  <p className="text-gray-600 text-sm">+243 81 00 00 000 / +243 99 00 00 000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white p-3 rounded-lg text-xl">✉️</div>
                <div>
                  <h3 className="font-bold text-gray-900">Adresse E-mail</h3>
                  <p className="text-gray-600 text-sm">contact@rabbounibusiness.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white p-3 rounded-lg text-xl">🕒</div>
                <div>
                  <h3 className="font-bold text-gray-900">Heures d&apos;ouverture</h3>
                  <p className="text-gray-600 text-sm">Lundi - Vendredi : 08h00 - 17h00</p>
                  <p className="text-gray-600 text-sm">Samedi : 08h00 - 12h30</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 text-white p-6 rounded-xl mt-6">
              <h3 className="font-bold text-lg text-orange-300">Société Rabbouni Business SARL</h3>
              <p className="text-sm mt-2 text-gray-200">
                Fondée par M. KILUBA NTUMBA Ezéchiel. Un partenaire multisectoriel de confiance pour tous vos projets.
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Envoyez-nous un message</h2>

            {statut && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm font-semibold">
                {statut}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom Complet</label>
                <input 
                  type="text" 
                  name="nom" 
                  required 
                  value={formData.nom} 
                  onChange={handleChange} 
                  className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-900 outline-none" 
                  placeholder="Ex: Jean Mukendi"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-900 outline-none" 
                    placeholder="nom@exemple.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input 
                    type="tel" 
                    name="telephone" 
                    value={formData.telephone} 
                    onChange={handleChange} 
                    className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-900 outline-none" 
                    placeholder="+243..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <select 
                  name="sujet" 
                  value={formData.sujet} 
                  onChange={handleChange} 
                  className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-900 outline-none"
                >
                  <option value="Renseignements Généraux">Renseignements Généraux</option>
                  <option value="Demande de Devis">Demande de Devis</option>
                  <option value="Partenariat / Affaires">Partenariat / Affaires</option>
                  <option value="Services de Bureautique">Services de Bureautique</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-900 outline-none" 
                  placeholder="Écrivez votre message ici..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition shadow-md"
              >
                Envoyer le Message
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}