import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Droplets, ShieldCheck, CheckCircle, Info, MapPin } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage et Démoussage Toiture Perpignan | Traitement Hydrofuge 66',
  description: 'Prolongez la durée de vie de vos tuiles. France Toiture réalise le nettoyage, le démoussage écologique et le traitement hydrofuge de votre toit dans les Pyrénées-Orientales.',
  keywords: 'démoussage toiture Perpignan, nettoyage tuiles 66, traitement hydrofuge toiture, artisan couvreur entretien toit Canet, enlever mousse toit Roussillon',
};

export default function NettoyagePage() {
  const pointsForts = [
    {
      title: "Technique Basse Pression",
      desc: "Nous n'utilisons jamais de haute pression brutale qui risque de rendre vos tuiles romanes ou canal poreuses et friables."
    },
    {
      title: "Produits Éco-Responsables",
      desc: "Nos traitements anti-mousses et algicides sont certifiés, respectueux des matériaux et sans danger pour vos évacuations d'eau."
    },
    {
      title: "Effet Perlant Longue Durée",
      desc: "L'application de notre hydrofuge de surface protège la tuile contre l'humidité, le gel et retarde le retour des végétaux pendant plusieurs années."
    }
  ];

  return (
    <main className="bg-zinc-50 min-h-screen pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Fil d'Ariane */}
        <div className="text-sm text-zinc-500 mb-6 font-medium">
          <Link href="/" className="hover:text-blue-600">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-800">Nettoyage & Démoussage</span>
        </div>

        {/* 1. HERO SECTION */}
        <div className="grid md:grid-cols-12 gap-8 items-center mb-16">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 font-extrabold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Entretien & Valorisation de votre Habitat
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight mb-6">
              Nettoyage, Démoussage et Traitement Hydrofuge de Toiture dans le 66
            </h1>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              Des tuiles recouvertes de mousse retiennent l'eau, deviennent poreuses et finissent par se casser sous l'effet des variations de température. **France Toiture** redonne de l'éclat à votre toit et applique des traitements protecteurs durables à Perpignan et dans tout le département.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-red-600 text-white font-bold px-6 py-4 rounded-xl hover:bg-red-700 transition-all shadow-md text-base"
              >
                Demander un Devis Nettoyage Gratuit
              </Link>
              <a 
                href="tel:0608008683"
                className="inline-flex items-center justify-center bg-white border border-zinc-300 text-zinc-900 font-bold px-6 py-4 rounded-xl hover:bg-zinc-50 transition-all text-base shadow-sm"
              >
                Nous Contacter par Téléphone
              </a>
            </div>
          </div>

          <div className="md:col-span-5 h-80 md:h-[420px] relative rounded-3xl overflow-hidden shadow-lg border border-zinc-200">
            <Image 
              src="/nettoyage.jpg" 
              alt="Nettoyage et démoussage d'une toiture en tuiles dans les Pyrénées-Orientales"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* 2. LES 3 PILIERS DE NOTRE MÉTHODE */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pointsForts.map((point, idx) => (
            <div key={idx} className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-zinc-950 mb-2">{point.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* 3. ARGUMENTAIRE SEO & EXPÉRIENCE DE TERRAIN */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-zinc-950">Pourquoi entretenir sa toiture dans les Pyrénées-Orientales ?</h2>
            <p>
              Entre la pollution urbaine à Perpignan, les vents marins chargés de sel sur la côte (Canet, Saint-Cyprien) et la proximité de la végétation dans les terres, les couvertures subissent de lourdes agressions. Les lichens et les mousses s'incrustent dans la terre cuite de vos tuiles.
            </p>
            <p>
              En plus de l'aspect esthétique négligé, ces micro-organismes rendent le support spongieux. Lors des fortes chaleurs d'été ou des rares gels d'hiver, la tuile travaille, se fissure et crée des micro-infiltrations invisibles à l'œil nu. Un nettoyage régulier coûte **10 fois moins cher** qu'une réfection complète de couverture.
            </p>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4 text-zinc-800">
              <Info className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold mb-1">Le conseil de l'artisan</h4>
                <p className="text-sm text-zinc-600">
                  Nous incluons systématiquement le **vidage et le nettoyage de vos gouttières** lors de notre intervention de démoussage. Cela évite les débordements d'eau sous toiture lors des gros orages méditerranéens.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-zinc-950 pt-4">Notre procédé en 4 étapes</h2>
            <ul className="space-y-3">
              {[
                "Inspection globale de la couverture pour vérifier l'état des tuiles avant intervention.",
                "Application d'un agent nettoyant dégraissant et brossage manuel des zones très encrassées.",
                "Rincage à basse pression pour évacuer les résidus végétaux sans abîmer les joints en mortier.",
                "Pulvérisation d'un traitement anti-mousse longue durée combiné à un hydrofuge incolore."
              ].map((etape, i) => (
                <li key={i} className="flex gap-3 items-start text-sm text-zinc-700">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>{etape}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar latérale */}
          <div className="bg-zinc-900 text-white p-8 rounded-3xl flex flex-col justify-between h-fit">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" /> Proximité 66
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Nos équipes interviennent rapidement chez vous pour inspecter l'état de votre toit :
              </p>
              <ul className="space-y-2 text-sm font-medium text-zinc-200 mb-6">
                <li>• Plaine du Roussillon</li>
                <li>• Secteur Agly & Fenouillèdes</li>
                <li>• Côte Vermeille et Illibéris</li>
                <li>• Vallespir et Conflent</li>
              </ul>
              <div className="p-4 bg-zinc-800 border border-zinc-700 rounded-xl text-center">
                <p className="text-xs text-zinc-300 font-bold uppercase tracking-wider mb-1">Garantie</p>
                <p className="text-sm text-white">Travaux d'entretien encadrés par responsabilité civile professionnelle.</p>
              </div>
            </div>
            <div className="border-t border-zinc-800 mt-8 pt-6">
              <Link 
                href="/contact" 
                className="w-full text-center block bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all text-sm uppercase tracking-wider"
              >
                Demander mon devis gratuit
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}