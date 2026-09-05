'use client';
import { useState } from 'react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('offres');

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 sm:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* En-tête du tableau de bord */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-amber-500">Panneau d'Administration</h1>
            <p className="text-slate-400 text-sm">SOCIETE RABBOUNI BUSINESS SARL</p>
          </div>
          <span className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-500/20">
            • Connecté en tant qu'Administrateur
          </span>
        </div>

        {/* Onglets de gestion */}
        <div className="flex gap-4 border-b border-slate-800 pb-2 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('offres')}
            className={`px-4 py-2 font-medium text-sm rounded-lg transition ${activeTab === 'offres' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
          >
            Offres d'emploi
          </button>
          <button 
            onClick={() => setActiveTab('candidatures')}
            className={`px-4 py-2 font-medium text-sm rounded-lg transition ${activeTab === 'candidatures' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
          >
            Candidatures reçues
          </button>
          <button 
            onClick={() => setActiveTab('galerie')}
            className={`px-4 py-2 font-medium text-sm rounded-lg transition ${activeTab === 'galerie' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
          >
            Galerie & Médias
          </button>
        </div>

        {/* Contenu : Publier une offre */}
        {activeTab === 'offres' && (
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
            <h2 className="text-xl font-bold text-white">Publier une nouvelle offre d'emploi</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Titre du poste</label>
                  <input type="text" placeholder="Ex: Informaticien de maintenance" className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-sm focus:border-amber-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Lieu</label>
                  <input type="text" placeholder="Ex: Kinshasa" className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-sm focus:border-amber-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Description & Profil recherché</label>
                <textarea rows="4" placeholder="Détails du poste..." className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-sm focus:border-amber-500 outline-none"></textarea>
              </div>
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5 rounded text-sm transition">
                Publier l'offre
              </button>
            </form>
          </section>
        )}

        {/* Contenu : Candidatures */}
        {activeTab === 'candidatures' && (
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-bold text-white">Candidatures récentes</h2>
            <p className="text-slate-400 text-sm">Les candidats qui postulent depuis la rubrique Carrières apparaîtront ici avec leurs CV[span_2](start_span)[span_2](end_span).</p>
          </section>
        )}

        {/* Contenu : Galerie */}
        {activeTab === 'galerie' && (
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-bold text-white">Ajouter une photo à la galerie</h2>
            <input type="file" className="block text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-500 file:text-slate-950 hover:file:bg-amber-600" />
          </section>
        )}

      </div>
    </main>
  );
}