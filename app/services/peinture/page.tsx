import Link from 'next/link';
import Image from 'next/image';
import { Phone, PaintBucket, ShieldCheck, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture de Façade Perpignan | Rénovation Extérieure 66 | France Toiture',
  description: 'Protégez vos murs du soleil et des intempéries. France Toiture réalise le nettoyage et la peinture de façade décorative et protectrice dans les Pyrénées-Orientales.',
  keywords: 'peinture facade Perpignan, rénovation facade 66, peintre extérieur Roussillon, ravalement peinture Canet, enduit et peinture maison Argeles',
};

export default function PeinturePage() {
  const caracteristiquesPeinture = [
    {
      title: "Haute Résistance aux UV",
      desc: "Le soleil du Sud est redoutable. Nous utilisons des peintures acryliques et siloxanes haut de gamme qui ne ternissent pas et gardent leur éclat des années."
    },
    {
      title: "Anti-Fissures & Imperméable",
      desc: "Nos revêtements souples masquent les micro-fissures de l'enduit et empêchent l'eau de pluie de pénétrer, tout en laissant respirer le support."
    },
    {
      title: "Protection Anti-Encrassement",
      desc: "Grâce à un effet auto-lavant, les poussières, les pollutions urbaines et les traces d'humidité s'évacuent naturellement à la première pluie."
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
          <span className="text-zinc-800">Peinture Façades</span>
        </div>

        {/* 1. HERO SECTION */}
        <div className="grid md:grid-cols-12 gap-8 items-center mb-16">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 font-extrabold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              <PaintBucket className="w-3.5 h-3.5" /> Esthétique & Protection Longue Durée
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight mb-6">
              Travaux de Peinture de Façade et Rénovation Extérieure à Perpignan
            </h1>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              Vos façades ont terni, se salissent ou présentent des micro-fissures ? **France Toiture** redonne de la valeur et de l'éclat à votre maison. Nous appliquons des peintures extérieures professionnelles adaptées au climat méditerranéen dans toutes les **Pyrénées-Orientales**.
            </p>
            
            {/* Boutons d'action mis à jour avec tes instructions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-red-600 text-white font-bold px-6 py-4 rounded-xl hover:bg-red-700 transition-all shadow-md text-base"
              >
                Demander un Devis Gratuit
              </Link>
              <a 
                href="tel:0608008683"
                className="inline-flex items-center justify-center gap-3 bg-white border border-zinc-300 text-zinc-900 font-bold px-6 py-4 rounded-xl hover:bg-zinc-50 transition-all text-base shadow-sm group"
              >
                <Phone className="w-4 h-4 text-blue-600 group-hover:animate-bounce" />
                06 08 00 86 83
              </a>
            </div>
          </div>

          <div className="md:col-span-5 h-80 md:h-[420px] relative rounded-3xl overflow-hidden shadow-lg border border-zinc-200">
            <Image 
              src="/peinture.jpg" 
              alt="Rénovation et application de peinture sur façade extérieure d'une maison individuelle dans le 66"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* 2. AVANTAGES PRODUITS */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {caracteristiquesPeinture.map((item, idx) => (
            <div key={idx} className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-950 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 3. ARGUMENTAIRE TECHNIQUE ET SEO */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-zinc-950">Pourquoi repeindre sa façade avec un artisan qualifié ?</h2>
            <p>
              Le ravalement par peinture ne sert pas uniquement à embellir vos murs extérieurs. Dans le **Roussillon**, les façades subissent d'importants écarts thermiques et une exposition maximale aux rayons solaires. Sans protection, les enduits de façade se dessèchent, deviennent poreux et laissent l'humidité s'infiltrer lors des pluies violentes.
            </p>
            <p>
              Appliquer un revêtement de classe D2 (peinture décorative) ou D3 (revêtement semi-épais de protection) permet d'imperméabiliser les murs extérieurs tout en masquant le faïençage. C'est la solution idéale pour retarder des travaux de ravalement lourds et coûteux.
            </p>

            <h2 className="text-2xl font-bold text-zinc-950 pt-4">Notre méthode de ravalement en 4 étapes :</h2>
            <ul className="space-y-4">
              {[
                { t: "Préparation & Nettoyage", d: "Lavage complet moyenne pression pour éliminer les salissures, poussières et mousses incrustées." },
                { t: "Traitement des défauts", d: "Ouverture et rebouchage des micro-fissures à l'aide d'un mastic extérieur élastique spécifique." },
                { t: "Impression / Fixateur", d: "Application d'une sous-couche (primaire) pour fixer le fond, réguler la porosité et garantir l'adhérence de la peinture." },
                { t: "Finition double couche", d: "Application de deux couches croisées de peinture professionnelle (finition mat ou talochée selon vos goûts)." }
              ].map((etape, i) => (
                <li key={i} className="flex gap-3 items-start text-sm text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-950 block font-bold">{etape.t}</strong>
                    <span className="text-zinc-600">{etape.d}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar Zone Géographique */}
          <div className="bg-zinc-900 text-white p-8 rounded-3xl flex flex-col justify-between h-fit">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" /> Intervention 66
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Artisan peintre de proximité, nous nous déplaçons gratuitement pour évaluer vos murs extérieurs :
              </p>
              <ul className="space-y-2 text-sm font-medium text-zinc-200 mb-6">
                <li>• Perpignan et première couronne</li>
                <li>• Littoral (Canet, Argelès, St-Cyprien, Barcares)</li>
                <li>• Secteur Ribéral (Saint-Estève, Le Soler)</li>
                <li>• Plaine de l'Illibéris & Vallespir</li>
              </ul>
              <div className="p-4 bg-zinc-800 border border-zinc-700 rounded-xl text-center">
                <ShieldCheck className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <p className="text-xs text-zinc-300 font-bold uppercase tracking-wider mb-1">Tranquillité</p>
                <p className="text-sm text-white">Assurance Responsabilité Civile et Garantie Décennale sur nos prestations.</p>
              </div>
            </div>
            <div className="border-t border-zinc-800 mt-8 pt-6">
              <Link 
                href="/contact" 
                className="w-full text-center block bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all text-sm uppercase tracking-wider"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}