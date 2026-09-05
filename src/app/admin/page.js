'use client';
import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [offres, setOffres] = useState([]);
  const [galerie, setGalerie] = useState([]);
  const [logoUrl, setLogoUrl] = useState('');
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
    imageData: '',
    categorie: 'Réalisations'
  });

  // Charger les données sauvegardées
  useEffect(() => {
    const savedOffres = localStorage.getItem('rabbouni_offres');
    const savedGalerie = localStorage.getItem('rabbouni_galerie');
    const savedLogo = localStorage.getItem('rabbouni_logo');
    if (savedOffres) setOffres(JSON.parse(savedOffres));
    if (savedGalerie) setGalerie(JSON.parse(savedGalerie));
    if (savedLogo) setLogoUrl(savedLogo);
  }, []);

  // Gestion du téléversement du logo
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setLogoUrl(base64String);
        localStorage.setItem('rabbouni_logo', base64String);
        alert('Logo mis à jour avec succès sur tout le site !');
      };
      reader.readAsDataURL(file);
    }
  };

  // Réinitialiser au logo par défaut (public/logo.jpg)
  const handleResetLogo = () => {
    localStorage.removeItem('rabbouni_logo');
    setLogoUrl('');
    alert('Logo réinitialisé au fichier par défaut (logo.jpg) !');
  };

  // Offres
  const handleAddOffre = (e) => {
    e.preventDefault();
    if (!nouvelleOffre.titre) return;
    const updated = [...offres, { ...nouvelleOffre, id: Date.now() }];
    setOffres(updated);
    localStorage.setItem('rabbouni_offres', JSON.stringify(updated));
    setNouvelleOffre({ titre: '', lieu: 'Kinshasa', type: 'CDI', description: '' });
    alert('Offre d\'emploi publiée !');
  };

  const handleDeleteOffre = (id) => {
    const updated = offres.filter(item => item.id !== id);
    setOffres(updated);
    localStorage.setItem('rabbouni_offres', JSON.stringify(updated));
  };

  // Galerie : Téléversement de fichier image
  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNouvellePhoto(prev => ({ ...prev, imageData: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPhoto = (e) => {
    e.preventDefault();
    if (!nouvellePhoto.imageData) {
      alert('Veuillez sélectionner un fichier image.');
      return;
    }
    const updated = [...galerie, { ...nouvellePhoto, id: Date.now() }];
    setGalerie(updated);
    localStorage.setItem('rabbouni_galerie', JSON.stringify(updated));
    setNouvellePhoto({ titre: '', imageData: '', categorie: 'Réalisations' });
    alert('Photo ajoutée à la galerie !');
  };

  const handleDeletePhoto = (id) => {
    const updated = galerie.filter(item => item.id !== id);
    setGalerie(updated);
    localStorage.setItem('rabbouni_galerie', JSON.stringify(updated));
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      
      {/* SECTION BÂNIERE & LOGO */}
      <div className="bg-white text-gray-900 rounded-xl p-6 shadow-md border border-gray-200 space-y-4">
        <h2 className="text-xl font-bold text-amber-600 border-b border-gray-200 pb-2">
          Gestion du Logo Officiel
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 border border-gray-300 rounded-lg flex items-center justify-center p-1 bg-gray-50">
              <img 
                src={logoUrl || '/logo.jpg'} 
                alt="Aperçu Logo" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Logo actuel</p>
              <p className="text-xs text-gray-500">
                {logoUrl ? 'Logo personnalisé chargé' : 'Logo par défaut (public/logo.jpg)'}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <label className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold py-2.5 px-4 rounded-lg cursor-pointer text-center transition">
              Changer le logo (Téléverser image)
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleLogoUpload}
              />
            </label>
            {logoUrl && (
              <button
                type="button"
                onClick={handleResetLogo}
                className="text-xs text-red-600 hover:text-red-800 font-bold border border-red-200 px-3 py-2.5 rounded-lg"
              >
                Réinitialiser par défaut
              </button>
            )}
          </div>
        </div>
      </div>

      {/* CONTENU PRINCIPAL DE L'ADMINISTRATION */}
      <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 space-y-8">
        
        <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-100 px-2.5 py-1 rounded">
              Administration
            </span>
            <h1 className="text-3xl font-serif font-bold text-gray-900 mt-2">Gestion du contenu</h1>
          </div>
          
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

        {/* OFFRES D'EMPLOI */}
        {activeTab === 'carrieres' && (
          <div className="space-y-8">
            <form onSubmit={handleAddOffre} className="bg-slate-50 p-6 rounded-lg border border-gray-200 space-y-4">
              <h2 className="text-lg font-bold text-gray-800">Publier une offre d'emploi</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Intitulé du poste</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ingénieur BTP"
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
                <label className="block text-xs font-semibold text-gray-700 mb-1">Description et exigences</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Détails du poste..."
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

            <div className="space-y-3">
              <h3 className="text-md font-bold text-gray-800">Offres en ligne</h3>
              {offres.length === 0 ? (
                <p className="text-gray-500 text-sm italic">Aucune offre publiée.</p>
              ) : (
                offres.map((item) => (
                  <div key={item.id} className="p-4 border border-gray-200 rounded-lg flex justify-between items-center bg-white">
                    <div>
                      <h4 className="font-bold text-gray-900">{item.titre}</h4>
                      <p className="text-xs text-gray-500">{item.lieu} • {item.type}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteOffre(item.id)}
                      className="text-xs text-red-600 font-bold border border-red-200 px-3 py-1.5 rounded"
                    >
                      Supprimer
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* GALERIE PHOTOS PAR TÉLÉVERSEMENT */}
        {activeTab === 'galerie' && (
          <div className="space-y-8">
            <form onSubmit={handleAddPhoto} className="bg-slate-50 p-6 rounded-lg border border-gray-200 space-y-4">
              <h2 className="text-lg font-bold text-gray-800">Téléverser une nouvelle photo dans la galerie</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Titre de l'image / Réalisation</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Chantier de construction Kinshasa"
                    className="w-full bg-white text-gray-900 border border-gray-300 rounded p-2.5 text-sm"
                    value={nouvellePhoto.titre}
                    onChange={(e) => setNouvellePhoto({ ...nouvellePhoto, titre: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Fichier image (Téléverser)</label>
                  <input
                    type="file"
                    required
                    accept="image/*"
                    className="w-full text-xs text-gray-700 file:mr-3 file:py-2 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-amber-500 file:text-white cursor-pointer"
                    onChange={handleImageFileChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded text-sm transition"
              >
                Ajouter à la galerie
              </button>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {galerie.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white p-2">
                  <img src={item.imageData} alt={item.titre} className="w-full h-36 object-cover rounded" />
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