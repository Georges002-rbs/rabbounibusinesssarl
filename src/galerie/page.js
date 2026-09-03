'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function GaleriePage() {
  const [filtre, setFiltre] = useState('tous');

  const photos = [
    {
      id: 1,
      titre: "Siège Administratif & Bureau",
      categorie: "locaux",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      description: "Nos locaux principaux situés à Kinshasa."
    },
    {
      id: 2,
      titre: "Inauguration Officielle",
      categorie: "evenements",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      description: "Lancement des activités de Rabbouni Business SARL."
    },
    {
      id: 3,
      titre: "Chantier BTP & Construction",
      categorie: "projets",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80",
      description: "Suivi de nos projets de construction et d&apos;aménagement."
    },
    {
      id: 4,
      titre: "Équipe & Collaborateurs",
      categorie: "evenements",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      description: "Notre équipe engagée pour le développement socio-économique."
    },
    {
      id: 5,
      titre: "Services de Secrétariat & Bureautique",
      categorie: "projets",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      description: "Espace de traitement de documents, impression et scanner."
    }
  ];

  const photosFiltrees = filtre === 'tous' 
    ? photos 
    : photos.filter(p => p.categorie === filtre);

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* Header Banner */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold uppercase tracking-wide">Galerie &amp; Réalisations</h1>
        <p className="mt-3 text-lg text-orange-300 max-w-2xl mx-auto">
          Découvrez nos projets, événements et infrastructures en images.
        </p>
      </section>

      {/* Filtres de catégorie */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { key: 'tous', label: 'Toutes les photos' },
            { key: 'locaux', label: 'Locaux &amp; Bureaux' },
            { key: 'projets', label: 'Projets &amp; Services' },
            { key: 'evenements', label: 'Événements' }
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFiltre(item.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                filtre === item.key 
                  ? 'bg-orange-500 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-200 border'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grille d'images */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photosFiltrees.map((photo) => (
            <div key={photo.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border border-gray-100">
              <img 
                src={photo.image} 
                alt={photo.titre} 
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg text-blue-900">{photo.titre}</h3>
                <p className="text-gray-600 text-sm mt-2">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Contact */}
      <section className="bg-blue-900 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold">Un projet en tête ou besoin de nos services ?</h2>
        <p className="mt-2 text-gray-300">Contactez nos équipes basées à Kinshasa dès aujourd&apos;hui.</p>
        <Link href="/contact" className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition shadow-lg">
          Nous contacter
        </Link>
      </section>

    </main>
  );
}