"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Eye, ShieldCheck, X } from 'lucide-react';
import Link from 'next/link';

// Liste des chantiers réels de France Toiture autour de Perpignan
const projects = [
  {
    id: 1,
    title: "Rénovation complète de toiture en tuiles canal",
    category: "couverture",
    categoryLabel: "Rénovation Couverture",
    location: "Cabestany (66)",
    year: "2025",
    description: "Dépose de l'ancienne couverture fatiguée, renforcement de la charpente et pose de tuiles canal traditionnelles avec isolation thermique sous-toiture.",
    image: "/tuiles-canal.jpg",
  },
  {
    id: 2,
    title: "Nettoyage, démoussage et traitement hydrofuge",
    category: "nettoyage",
    categoryLabel: "Nettoyage & Protection",
    location: "Saint-Estève (66)",
    year: "2026",
    description: "Nettoyage basse pression des tuiles colonisées par les mousses et application d'un traitement hydrofuge incolore pour prolonger la vie du toit de 10 ans.",
    image: "/nettoyage.jpg",
  },
  {
    id: 3,
    title: "Réparation de fuite et étanchéité de cheminée",
    category: "reparation",
    categoryLabel: "Réparation / Zinguerie",
    location: "Perpignan - Centre (66)",
    year: "2026",
    description: "Recherche de fuite infiltrante après un épisode de forte pluie, remplacement des solins en zinc défectueux et étanchéité du contour de cheminée.",
    image: "/fuite.jpg",
  },
  {
    id: 4,
    title: "Rénovation de toiture terrasse et étanchéité bitume",
    category: "couverture",
    categoryLabel: "Rénovation Couverture",
    location: "Canet-en-Roussillon (66)",
    year: "2025",
    description: "Réfection totale de l'étanchéité d'un toit plat sur une maison contemporaine en bord de mer, hautement résistante aux UV et aux embruns.",
    image: "/etancheite.jpg",
  },
  {
    id: 5,
    title: "Peinture de façade et traitement anti-fissures",
    category: "facade",
    categoryLabel: "Façade",
    location: "Bompas (66)",
    year: "2026",
    description: "Nettoyage complet des murs extérieurs, rebouchage des micro-fissures de structure et application d'une peinture technique haut de gamme résistante au soleil du Sud.",
    image: "/peinture.jpg",
  },
  {
    id: 6,
    title: "Remplacement complet de gouttières en zinc",
    category: "reparation",
    categoryLabel: "Réparation / Zinguerie",
    location: "Thuir (66)",
    year: "2025",
    description: "Dépose d'anciennes gouttières PVC cuites par le soleil et pose d'un réseau complet de zinguerie sur-mesure pour une évacuation optimale des eaux pluviales.",
    image: "gouttiere.jpg",
  }
];

const categories = [
  { id: 'all', label: 'Tous les chantiers' },
  { id: 'couverture', label: 'Couverture' },
  { id: 'nettoyage', label: 'Nettoyage' },
  { id: 'reparation', label: 'Réparation / Zinguerie' },
  { id: 'facade', label: 'Façades' },
];

export default function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filtrage des chantiers
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="bg-zinc-50 min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* En-tête de page */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" /> Travaux garantis 10 ans (Décennale)
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight">
            Nos dernières réalisations à Perpignan
          </h1>
          <p className="text-zinc-600 text-base md:text-lg">
            Découvrez nos chantiers de rénovation, réparation, zinguerie et nettoyage de toitures menés avec soin dans toutes les Pyrénées-Orientales.
          </p>
        </div>

        {/* Barre de Filtres */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-zinc-950 text-white shadow-md shadow-zinc-950/10'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-100 hover:text-zinc-950'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille des réalisations avec animation de filtre */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm group hover:shadow-xl hover:border-zinc-300 transition-all duration-300 flex flex-col"
              >
                {/* Zone Image avec overlay cliquable */}
                <div 
                  onClick={() => setSelectedImage(project.image)}
                  className="relative aspect-video w-full bg-zinc-100 overflow-hidden cursor-zoom-in"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/90 text-zinc-950 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Eye className="w-4 h-4 text-red-600" /> Zoom chantier
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-3 bg-zinc-950/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-semibold tracking-wide">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Contenu textuel */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      <span>{project.location}</span>
                      <span>• {project.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-950 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-zinc-100 flex items-center text-xs text-emerald-700 font-semibold gap-1.5 bg-emerald-50/50 -mx-6 -mb-6 p-4 mt-auto">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Chantier livré conforme, nettoyage inclus
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- MODALE LIGHTBOX (ZOOM IMAGE ANIMÉ) --- */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            >
              {/* Bouton Fermer */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Fermer le zoom"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Conteneur image */}
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage} 
                  alt="Chantier zoomé" 
                  className="w-full h-full object-contain max-h-[85vh]"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA final pour capter le client */}
        <div className="mt-20 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl space-y-6 border border-zinc-800">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            Votre toiture a besoin d'un diagnostic ou d'une rénovation ?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Comme pour ces chantiers, nous nous déplaçons gratuitement chez vous autour de Perpignan pour analyser votre toit et vous propose la meilleure solution.
          </p>
          <div className="pt-2">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-red-600 text-white font-bold uppercase tracking-wider text-xs md:text-sm px-8 py-4 rounded-xl hover:bg-red-700 shadow-lg shadow-red-600/20 transition-all"
            >
              Demander mon devis gratuit
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}