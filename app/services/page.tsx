import Link from 'next/link';
import Image from 'next/image';
import { Wrench, Home, Droplets, PaintBucket, MapPin, Shield, Clock } from 'lucide-react';
import { Metadata } from 'next';

// Métadonnées SEO pour Google
export const metadata: Metadata = {
  title: 'Entreprise de Couverture Pyrénées-Orientales (66) | France Toiture',
  description: 'Artisan couvreur certifié pour vos travaux de toiture à Perpignan et dans toutes les Pyrénées-Orientales. Réparation de fuites, démoussage et rénovation.',
  keywords: 'couvreur Perpignan, toiture Pyrénées-Orientales, réparation fuite toit 66, rénovation couverture, nettoyage toiture Canet, artisan couvreur argeles',
};

interface ServiceSection {
  title: string;
  keywordTitle: string;
  icon: React.ReactNode;
  desc: string;
  bullets: string[];
  img: string;
  href: string;
  alt: string;
}

export default function ServicesPage() {
  const allServices: ServiceSection[] = [
    {
      title: "Réparation de Fuites & Étanchéité",
      keywordTitle: "Urgence Fuite Toiture 66",
      icon: <Wrench className="w-6 h-6 text-red-600" />,
      desc: "Face à la Tramontane et aux épisodes méditerranéens violents, les infiltrations doivent être traitées immédiatement. Nous localisons et stoppons les fuites d'eau pour protéger vos plafonds et votre charpente.",
      bullets: [
        "Recherche de fuite non-destructive",
        "Bâchage d'urgence après intempéries",
        "Remplacement de tuiles cassées ou déplacées",
        "Étanchéité des fenêtres de toit (Velux) et zinguerie"
      ],
      img: "/fuite.jpg",
      href: "/services/fuite",
      alt: "Dépannage et réparation de fuite de toiture en urgence à Perpignan"
    },
    {
      title: "Rénovation & Réfection de Couverture",
      keywordTitle: "Travaux de Couverture dans les PO",
      icon: <Home className="w-6 h-6 text-red-600" />,
      desc: "Que votre toit soit en tuiles romanes, canal ou mécaniques, nous réalisons sa réfection partielle ou totale. Une couverture solide valorise votre patrimoine et isole efficacement votre maison du climat catalan.",
      bullets: [
        "Rénovation complète de toitures en tuiles",
        "Pose d'écrans sous-toiture (protection vent/eau)",
        "Réfection de faîtages et rives maçonnées ou à sec",
        "Isolation des combles et traitement de charpente"
      ],
      img: "/renovation.jpg",
      href: "/services/couverture",
      alt: "Rénovation complète de couverture en tuiles romanes dans les Pyrénées-Orientales"
    },
    {
      title: "Nettoyage & Démoussage Écologique",
      keywordTitle: "Entretien de Toiture à Perpignan",
      icon: <Droplets className="w-6 h-6 text-red-600" />,
      desc: "L'humidité hivernale favorise la prolifération de mousses et de lichens qui rendent les tuiles poreuses. Notre traitement élimine les micro-organismes en profondeur sans altérer les matériaux.",
      bullets: [
        "Nettoyage basse pression respectueux du support",
        "Application de traitement anti-mousse curatif et préventif",
        "Traitement hydrofuge (imperméabilisation des tuiles)",
        "Nettoyage et vidage des gouttières obstruées"
      ],
      img: "/nettoyage.jpg",
      href: "/services/nettoyage",
      alt: "Artisan appliquant un traitement anti-mousse hydrofuge sur un toit"
    },
    {
      title: "Peinture de Façades & Extérieurs",
      keywordTitle: "Rénovation de Façade Pyrénées-Orientales",
      icon: <PaintBucket className="w-6 h-6 text-red-600" />,
      desc: "Le soleil intense du 66 ternit et fissure les enduits. Nos peintures haut de gamme protègent vos façades contre les UV et les agressions marines, tout en redonnant un aspect neuf à votre habitation.",
      bullets: [
        "Nettoyage technique des murs extérieurs",
        "Traitement des micro-fissures et réparation des enduits",
        "Application de peintures extérieures acryliques ou siloxanes",
        "Protection longue durée contre la décoloration"
      ],
      img: "/peinture.jpg",
      href: "/services/peinture",
      alt: "Maison rénovée avec une nouvelle peinture de façade résistante aux intempéries"
    },
  ];

  const zones = [
    "Perpignan", "Canet-en-Roussillon", "Saint-Estève", "Saint-Cyprien", 
    "Argelès-sur-Mer", "Rivesaltes", "Thuir", "Elne", "Prades", "Céret"
  ];

  return (
    <main className="bg-zinc-50 min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 1. HERO CORNER SEO */}
        <div className="max-w-3xl mb-20">
          <span className="text-blue-600 font-extrabold text-sm uppercase tracking-wider block mb-3">
            Artisan Couvreur de Confiance • 66
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-none mb-6">
            Nos Services de Toiture & Couverture dans les Pyrénées-Orientales
          </h1>
          <p className="text-zinc-600 text-lg leading-relaxed">
            Spécialiste des toits méditerranéens, **France Toiture** intervient pour protéger, réparer et valoriser votre maison. Profitez de l'expertise d'un artisan local, d'un devis gratuit à domicile et de travaux couverts par la garantie décennale.
          </p>
        </div>

        {/* 2. LISTING DES SERVICES AVEC ALTERNANCE (SEO ACCENTUÉ) */}
        <div className="flex flex-col gap-24 mb-24">
          {allServices.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <section 
                key={index} 
                className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Image optimisée */}
                <div className="w-full lg:w-1/2 h-72 md:h-96 relative rounded-3xl overflow-hidden shadow-md border border-zinc-200">
                  <Image 
                    src={service.img} 
                    alt={service.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Contenu textuel */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-white border border-zinc-200 rounded-xl shadow-sm">
                      {service.icon}
                    </div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      {service.keywordTitle}
                    </h2>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-zinc-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="text-sm text-zinc-700 flex items-start gap-2">
                        <span className="text-red-600 font-bold">✓</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={service.href}
                    className="inline-flex items-center justify-center bg-zinc-950 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-600 transition-all shadow-sm"
                  >
                    Détails de la prestation →
                  </Link>
                </div>
              </section>
            );
          })}
        </div>

        {/* 3. BLOC SEO ZONE D'INTERVENTION */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-3">
              Où intervient votre couvreur dans le 66 ?
            </h2>
            <p className="text-zinc-600">
              Basés à Perpignan, nous nous déplaçons rapidement dans un rayon de 50 km pour réaliser vos diagnostics, réparations urgentes et chantiers de rénovation de façade ou de couverture.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
            {zones.map((zone, zIdx) => (
              <div 
                key={zIdx} 
                className="bg-zinc-50 border border-zinc-100 rounded-xl py-3 px-4 text-sm font-semibold text-zinc-700 hover:text-blue-600 hover:border-blue-200 transition-all"
              >
                {zone}
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}