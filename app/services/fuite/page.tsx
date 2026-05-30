import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, ShieldAlert, CheckCircle2, AlertTriangle, MapPin } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Urgence Fuite Toiture Perpignan & 66 | Réparation 24/7 | France Toiture',
  description: 'Infiltration d’eau ou tuiles envolées ? France Toiture intervient en urgence pour la recherche et la réparation de fuite de toit dans toutes les Pyrénées-Orientales.',
  keywords: 'urgence fuite toiture Perpignan, dépannage couvreur 66, étanchéité toit terrasse, recherche infiltration eau, réparation tuile cassée Rivesaltes',
};

export default function FuitePage() {
  const etapesIntervention = [
    {
      title: "1. Sécurisation & Bâchage",
      desc: "Si la météo empêche les réparations immédiates, nous posons une bâche de protection professionnelle pour stopper instantanément les dégâts des eaux."
    },
    {
      title: "2. Recherche de Fuite",
      desc: "Inspection minutieuse de la couverture, des solins, des gouttières et des fenêtres de toit pour identifier l'origine exacte de l'infiltration."
    },
    {
      title: "3. Réparation Durable",
      desc: "Remplacement des tuiles poreuses ou cassées, réfection des maçonneries (faîtages) et étanchéité de la zinguerie avec des matériaux haute résistance."
    }
  ];

  return (
    <main className="bg-zinc-50 min-h-screen pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Fil d'Ariane (Breadcrumb) - Excellent pour le SEO */}
        <div className="text-sm text-zinc-500 mb-6 font-medium">
          <Link href="/" className="hover:text-blue-600">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-800">Réparation Fuites</span>
        </div>

        {/* 1. EN-TÊTE D'URGENCE (HERO) */}
        <div className="grid md:grid-cols-12 gap-8 items-center mb-16">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 font-extrabold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 animate-pulse">
              <ShieldAlert className="w-4 h-4" /> Intervention d'urgence 24h/24 - 7j/7
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight mb-6">
              Recherche et Réparation de Fuite de Toiture à Perpignan
            </h1>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              Une infiltration d’eau non traitée peut fragiliser votre charpente et causer de lourds dégâts à votre isolation. Nos couvreurs interviennent rapidement dans toutes les **Pyrénées-Orientales** pour localiser la source et colmater la fuite.
            </p>
            
            {/* CTA d'urgence bien visibles */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:0608008683" // Remplacer par le vrai numéro
                className="inline-flex items-center justify-center gap-3 bg-red-600 text-white font-bold px-6 py-4 rounded-xl hover:bg-red-700 transition-all shadow-md group text-lg"
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                Appeler le 06 08 00 86 83
              </a>
              <Link 
                href="/devis"
                className="inline-flex items-center justify-center bg-white border border-zinc-300 text-zinc-900 font-bold px-6 py-4 rounded-xl hover:bg-zinc-50 transition-all text-base shadow-sm"
              >
                Demande de rappel gratuit
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 h-80 md:h-[420px] relative rounded-3xl overflow-hidden shadow-lg border border-zinc-200">
            <Image 
              src="/fuite.jpg" 
              alt="Couvreur professionnel réparant une fuite de toiture en urgence dans le 66"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* 2. BLOC DE RASSURANCE DÉCENNALE */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-6 mb-16 flex flex-col md:flex-row justify-around items-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <Clock className="w-10 h-10 text-blue-600 shrink-0" />
            <div>
              <h3 className="font-bold text-zinc-950">Intervention Rapide</h3>
              <p className="text-sm text-zinc-600">Sur site sous 24 heures après votre appel.</p>
            </div>
          </div>
          <div className="w-px h-12 bg-zinc-200 hidden md:block"></div>
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-10 h-10 text-blue-600 shrink-0" />
            <div>
              <h3 className="font-bold text-zinc-950">Diagnostic Précis</h3>
              <p className="text-sm text-zinc-600">Recherche de fuite ciblée pour éviter les surcoûts.</p>
            </div>
          </div>
          <div className="w-px h-12 bg-zinc-200 hidden md:block"></div>
          <div className="flex items-center gap-4">
            <CheckCircle2 className="w-10 h-10 text-blue-600 shrink-0" />
            <div>
              <h3 className="font-bold text-zinc-950">Garantie Décennale</h3>
              <p className="text-sm text-zinc-600">Toutes nos réparations sont couvertes et assurées.</p>
            </div>
          </div>
        </div>

        {/* 3. CONTENU TEXTUEL RICHE (POUR GOOGLE) */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-zinc-950">Les causes fréquentes d'infiltrations dans la région</h2>
            <p>
              Le climat des Pyrénées-Orientales est rude pour les toitures. Les fortes rafales de **Tramontane** peuvent soulever ou déplacer les tuiles romanes traditionnelles. De plus, les **épisodes méditerranéens** déversent de grosses quantités d'eau en très peu de temps, ce qui sature les gouttières et révèle les moindres faiblesses d'étanchéité.
            </p>
            <p>
              Nos équipes inspectent les points stratégiques de votre toit : liaisons de cheminées, solins usés, gouttières bouchées par les aiguilles de pin, ou tuiles devenues poreuses avec le temps.
            </p>

            <h2 className="text-2xl font-bold text-zinc-950 pt-4">Notre protocole de dépannage</h2>
            <div className="space-y-4">
              {etapesIntervention.map((etape, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-zinc-100 shadow-sm">
                  <h4 className="font-bold text-zinc-950 mb-1">{etape.title}</h4>
                  <p className="text-sm text-zinc-600">{etape.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar latérale : Rappel des compétences locales */}
          <div className="bg-zinc-900 text-white p-8 rounded-3xl flex flex-col justify-between h-fit">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" /> Secteur Roussillon
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Nous réparons les toits des particuliers et des professionnels sur toute la plaine du Roussillon :
              </p>
              <ul className="space-y-2 text-sm font-medium text-zinc-200">
                <li>• Perpignan et agglomération</li>
                <li>• Côte Radieuse (Canet, St-Cyprien, Argelès)</li>
                <li>• Plaine de la Salanque (Rivesaltes, Pia)</li>
                <li>• Secteur Aspres & Conflent</li>
              </ul>
            </div>
            <div className="border-t border-zinc-800 mt-8 pt-6">
              <p className="text-xs text-zinc-500 mb-4">Le diagnostic visuel de votre toiture et le devis de réparation sont totalement gratuits.</p>
              <Link 
                href="/contact" 
                className="w-full text-center block bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all text-sm uppercase tracking-wider"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}