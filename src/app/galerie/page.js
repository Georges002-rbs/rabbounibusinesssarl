'use client';

import { useState } from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function GaleriePage() {
  const [filtreActif, setFiltreActif] = useState('tout');

  // Catégories et projets de démonstration
  const categories = [
    { id: 'tout', nom: 'Tous les projets' },
    { id: 'construction', nom: 'Construction & BTP' },
    { id: 'technologie', nom: 'Technologies & IT' },
    { id: 'services', nom: 'Services & Logistique' },
  ];

  const projets = [
    {
      id: 1,
      titre: 'Projet Infrastructure BTP',
      categorie: 'construction',
      description: 'Supervision et gestion de projet de construction d\'infrastructures.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      titre: 'Développement de Solutions IT',
      categorie: 'technologie',
      description: 'Déploiement de plateformes et systèmes informatiques d\'entreprise.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      titre: 'Logistique & Fournitures',
      categorie: 'services',
      description: 'Approvisionnement et gestion de projets de services pour entreprises.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      titre: 'Aménagement & Design',
      categorie: 'construction',
      description: 'Conception architecturale et modélisation de bâtiments modernes.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      titre: 'Infrastructure Réseau',
      categorie: 'technologie',
      description: 'Installation et maintenance de réseaux informatiques sécurisés.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      titre: 'Partenariat d\'Affaires',
      categorie: 'services',
      description: 'Accompagnement stratégique et gestion de projets multi-sectoriels.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const projetsFiltres = filtreActif === 'tout' 
    ? projets 
    : projets.filter(p => p.categorie === filtreActif);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col justify-between p-6 md:p-12 relative overflow-hidden">
      {/* Header / Navigation */}
      <header className="flex justify-between items-center max-w-7xl mx-auto w-full py-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-black text-xl">
            R
          </div>
          <div>
            <h1 className="font-bold text-sm tracking-wider uppercase">Rabbouni</h1>
            <p className="text-xs text-gray-400">BUSINESS SARL</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">Accueil</Link>
          <Link href="/a-propos" className="hover:text-white transition">À propos</Link>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/sieges" className="hover:text-white transition">Sièges</Link>
          <Link href="/galerie" className="text-orange-400 font-semibold transition">Galerie</Link>
          <Link href="/carrieres" className="hover:text-white transition">Carrières</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>

        <Link 
          href="/mon-espace" 
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
        >
          Mon espace
        </Link>
      </header>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto w-full py-12">
        <div className="text-center mb-10 space-y-3">
          <p className="text-xs uppercase tracking-widest text-orange-400 font-semibold">
            Nos Réalisations
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-white">Galerie Projets</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Découvrez un aperçu de nos projets et réalisations à travers nos différents secteurs d'activité.
          </p>
        </div>

        {/* Boutons de Filtre */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFiltreActif(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filtreActif === cat.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat.nom}
            </button>
          ))}
        </div>

        {/* Grille d'Images / Cartes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetsFiltres.map((projet) => (
            <div 
              key={projet.id} 
              className="bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500/50 transition group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={projet.image} 
                  alt={projet.titre} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                  {projet.categorie}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition">
                  {projet.titre}
                </h3>
                <p className="text-sm text-gray-400">
                  {projet.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full text-center text-xs text-gray-500 py-4 border-t border-gray-800 mt-12">
        © {new Date().getFullYear()} Rabbouni Business SARL. Tous droits réservés.
      </footer>
    </div>
  );
}