'use client';
import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [offres, setOffres] = useState([]);
  const [galerie, setGalerie] = useState([]);
  const [activeTab, setActiveTab] = useState('carrieres');

  // Formulaire Offre d'emploi
  const [nouvelleOffre, setNouvelleOffre] = useState({
    titre: '',
    lieu: 'Kinshasa',
    type: 'CDI',
    description: ''
  });

  // Formulaire Photo Galerie
  const [nouvellePhoto, setNouvellePhoto] = useState({
    titre: '',
    url: '',
    categorie: 'Réalisations'
  });

  // Charger les données sauvegardées localement
  useEffect(() => {
    const savedOffres = localStorage.getItem('rabbouni_offres');
    const savedGalerie = localStorage.getItem('rabbouni_galerie');
    if (savedOffres) setOffres(JSON.parse(savedOffres));
    if (savedGalerie) setGalerie(JSON.parse(savedGalerie));
  }, []);

  // Ajouter une offre d'emploi
  const handleAddOffre = (e) => {
    e.preventDefault();
    if (!nouvelleOffre.titre) return;
    const updated = [...offres, { ...nouvelleOffre, id: Date.now() }];
    setOffres(updated);
    localStorage.setItem('rabbouni_offres', JSON.stringify(updated));
    setNouvelleOffre({ titre: '', lieu: 'Kinshasa', type: 'CDI', description: '' });
    alert('Offre d\'emploi publiée avec succès !');
  };

  // Supprimer une offre
  const handleDeleteOffre = (id) => {
    const updated = offres.filter(item => item.id !== id);
    setOffres(updated);
    localStorage.setItem('rabbouni_offres', JSON.stringify(updated));
  };

  // Ajouter une photo dans la galerie
  const handleAddPhoto = (e) => {
    e.preventDefault();
    if (!nouvellePhoto.url) return;
    const updated = [...galerie, { ...nouvellePhoto, id: Date.now() }];
    setGalerie(updated);
    localStorage.setItem('rabbouni_galerie', JSON.stringify(updated));
    setNouvellePhoto({ titre: '', url: '', categorie: 'Réalisations' });
    alert('Photo ajoutée à la galerie avec succès !');
  };

  // Supprimer une photo
  const handleDeletePhoto = (id) => {
    const updated = galerie.filter(item => item.id !== id);
    setGalerie(updated);
    localStorage.setItem('rabbouni_galerie', JSON.stringify(updated));
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 space-y-8">
        
        {/* En-tête Administrateur */}
        <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-100 px-2.5 py-1 rounded">
              Espace d'administration
            </span>
            <h1 className="text-3xl font-serif font-bold text-gray-900 mt-2">Gestion du contenu du site</h1>
          </div>
          
          {/* Onglets de navigation Admin */}
          <div className="flex gap-2 bg-gray-100 p-1.5 rounded-lg">
            <button
              onClick={() => setActiveTab('carrieres')}
              className={`px-4 py-2 rounded-md text-xs font-bold transition ${activeTab === 'carrieres' ? 'bg-orange-500 text-white shadow' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Offres d'emploi ({offres.length})
            </button>
            <button
              onClick={() => setActiveTab('galerie')}
              className={`px-4 py-2 rounded-md text-xs font-bold transition ${activeTab === 'galerie' ? 'bg-orange-500 text-white shadow' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Galerie Photos ({galerie.length})
            </button>
          </div>
        </div>

        {/* SECTION 1: GESTION DES OFFRES D'EMPLOI */}
        {activeTab === 'carrieres' && (
          <div className="space-y-8">
            <form onSubmit={handleAddOffre} className="bg-slate-50 p-6 rounded-lg border border-gray-200 space-y-4">
              <h2 className="text-lg font-bold text-gray-800">Publier une nouvelle offre d'emploi</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Intitulé du poste</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ingénieur de Chantier / BTP"
                    className="w-full bg-white text-gray-900 border border-gray-300 rounded p-2.5 text-sm"
                    value={nouvelleOffre.titre}
                    onChange={(e) => setNouvelleOffre({ ...nouvelleOffre, titre: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Ville / Siège</label>
                  <select
                    className="w-full bg-white text-gray-900 border border-gray-300 rounded p-2.5 text-sm"
                    value={nouvelleOffre.lieu}
                    onChange={(e) => setNouvelleOffre({ ...nouvelleOffre, lieu: e.target.value })}
                  >
                    <option value="Kinshasa">Kinshasa</option>
                    <option value="Lubumbashi">Lubumbashi</option>
                    <option value="Matadi">Matadi</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Description du poste et exigences</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Missions, qualifications requises, modalités de candidature..."
                  className="w-full bg-white text-gray-900 border border-gray-300 rounded p-2.5 text-sm"
                  value={nouvelleOffre.description}
                  onChange={(e) => setNouvelleOffre({ ...nouvelleOffre, description: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded text-sm transition"
              >
                Publier l'offre
              </button>
            </form>

            {/* Liste des offres publiées */}
            <div className="space-y-3">
              <h3 className="text-md font-bold text-gray-800">Offres en ligne</h3>
              {offres.length === 0 ? (
                <p className="text-gray-500 text-sm italic">Aucune offre publiée pour le moment.</p>
              ) : (
                offres.map((item) => (
                  <div key={item.id} className="p-4 border border-gray-200 rounded-lg flex justify-between items-center bg-white">
                    <div>
                      <h4 className="font-bold text-gray-900">{item.titre}</h4>
                      <p className="text-xs text-gray-500">{item.lieu} • {item.type}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteOffre(item.id)}
                      className="text-xs text-red-600 hover:text-red-800 font-bold border border-red-200 px-3 py-1.5 rounded"
                    >
                      Supprimer
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* SECTION 2: GESTION DE LA GALERIE */}
        {activeTab === 'galerie' && (
          <div className="space-y-8">
            <form onSubmit={handleAddPhoto} className="bg-slate-50 p-6 rounded-lg border border-gray-200 space-y-4">
              <h2 className="text-lg font-bold text-gray-800">Ajouter une image à la galerie</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Titre de l'image / Projet</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Travaux d'aménagement à Kinshasa"
                    className="w-full bg-white text-gray-900 border border-gray-300 rounded p-2.5 text-sm"
                    value={nouvellePhoto.titre}
                    onChange={(e) => setNouvellePhoto({ ...nouvellePhoto, titre: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Lien de l'image (URL)</label>
                  <input
                    type="url"
                    required
                    placeholder="https://images.unsplash.com/..."
                    className="w-full bg-white text-gray-900 border border-gray-300 rounded p-2.5 text-sm"
                    value={nouvellePhoto.url}
                    onChange={(e) => setNouvellePhoto({ ...nouvellePhoto, url: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded text-sm transition"
              >
                Ajouter la photo
              </button>
            </form>

            {/* Liste des photos publiées */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {galerie.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white p-2">
                  <img src={item.url} alt={item.titre} className="w-full h-32 object-cover rounded" />
                  <div className="mt-2 flex justify-between items-center">
                    <p className="text-xs font-bold text-gray-800 truncate">{item.titre}</p>
                    <button
                      onClick={() => handleDeletePhoto(item.id)}
                      className="text-[10px] text-red-600 font-bold ml-2"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}