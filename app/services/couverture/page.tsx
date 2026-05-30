import Link from 'next/link';
import Image from 'next/image';
import { Phone, Hammer, ShieldCheck, CheckCircle2, MapPin, Wrench } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rénovation de Toiture Perpignan | Réfection Couverture 66 | France Toiture',
  description: 'Confiez votre toit à un artisan couvreur local. France Toiture réalise la pose de tuiles, la rénovation complète et partielle de toiture dans les Pyrénées-Orientales.',
  keywords: 'renovation toiture Perpignan, artisan couvreur 66, refection toit tuiles, changement tuiles Roussillon, travaux couverture Canet, couvreur Elne',
};

export default function CouverturePage() {
  const expertisesCouverture = [
    {
      title: "Pose de Tuiles Traditionnelles",
      desc: "Maîtrise parfaite des couvertures locales : tuiles romanes pour une étanchéité moderne ou tuiles canal scellées au mortier de chaux pour respecter le charme catalan."
    },
    {
      title: "Résistance Face à la Tramontane",
      desc: "Dans le 66, le vent est un vrai sujet. Nous appliquons les normes DTU strictes avec un système de fixation par crochets ou clouage renforcé pour chaque tuile."
    },
    {
      title: "Isolation & Zinguerie Intégrées",
      desc: "Nous profitons de la réfection pour vérifier vos isolants sous-toiture et rénover vos abergements de cheminée, noues et solins pour éliminer tout risque futur."
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
          <span className="text-zinc-800">Rénovation Toiture</span>
        </div>

        {/* 1. HERO SECTION */}
        <div className="grid md:grid-cols-12 gap-8 items-center mb-16">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 font-extrabold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              <Hammer className="w-3.5 h-3.5" /> Travaux Garantis 10 Ans
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight mb-6">
              Rénovation de Toiture et Réfection de Couverture à Perpignan
            </h1>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              Une toiture ancienne ou mal entretenue menace directement la structure de votre maison. Qu'il s'agisse du remplacement de quelques tuiles cassées ou d'une réfection complète à neuf, **France Toiture** met son savoir-faire d'artisan couvreur à votre service dans tout le **66**.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-red-600 text-white font-bold px-6 py-4 rounded-xl hover:bg-red-700 transition-all shadow-md text-base"
              >
                Demander un Devis Couverture
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
              src="/renovation.jpg" 
              alt="Artisan couvreur en train de poser des tuiles sur une charpente en bois à Perpignan"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* 2. LES EXPERTISES TECHNIQUE */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {expertisesCouverture.map((item, idx) => (
            <div key={idx} className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-950 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 3. ARGUMENTAIRE DE REFICTION & SÉCURITÉ */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-zinc-950">Quand faut-il envisager de refaire sa couverture ?</h2>
            <p>
              La durée de vie moyenne d'une toiture en tuiles de terre cuite oscille entre 30 et 50 ans. Cependant, sous l'effet du climat des **Pyrénées-Orientales** — alternant soleil brûlant, épisodes de Tramontane violente et pluies méditerranéennes intenses —, les matériaux finissent par se fragiliser.
            </p>
            <p>
              Si vous constatez des infiltrations répétées, un affaissement de la ligne de faîtage, ou des tuiles qui s'effritent à cause du gel (porosité avancée), une réfection partielle ou totale s'impose. Intervenir à temps permet de préserver la charpente en bois des attaques de champignons ou d'humidité.
            </p>

            <h2 className="text-2xl font-bold text-zinc-950 pt-4">Notre protocole de chantier complet :</h2>
            <ul className="space-y-4">
              {[
                { t: "Dépose et Évacuation", d: "Retrait sécurisé de l'ancienne couverture et tri des anciens matériaux valorisables." },
                { t: "Vérification de la structure", d: "Contrôle de la solidité des chevrons et de la charpente. Remplacement des éléments bois si nécessaire." },
                { t: "Mise en place de l'écran de sous-toiture", d: "Installation d'un film hautement perméable à la vapeur (HPV) pour créer un double rempart contre les infiltrations et les poussières." },
                { t: "Liteonnage et Pose des Tuiles", d: "Fixation des nouveaux liteaux en bois et pose des tuiles (romanes, canal ou mécaniques) parfaitement alignées et solidement fixées." }
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

          {/* Sidebar Garantie Décennale */}
          <div className="bg-zinc-900 text-white p-8 rounded-3xl flex flex-col justify-between h-fit">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" /> Secteur d'Artisanat
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Basés localement, nous intervenons pour vos chantiers de couverture sur l'ensemble du département :
              </p>
              <ul className="space-y-2 text-sm font-medium text-zinc-200 mb-6">
                <li>• Grand Perpignan</li>
                <li>• Plaine du Roussillon & Baixas</li>
                <li>• Thuir et Aspres</li>
                <li>• Prades, Conflent et piémonts</li>
              </ul>
              <div className="p-4 bg-zinc-800 border border-zinc-700 rounded-xl text-center">
                <ShieldCheck className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <p className="text-xs text-zinc-300 font-bold uppercase tracking-wider mb-1">Garantie 10 Ans</p>
                <p className="text-sm text-white">Tous nos travaux de couverture et de réfection totale de toiture sont couverts par notre assurance décennale.</p>
              </div>
            </div>
            <div className="border-t border-zinc-800 mt-8 pt-6">
              <Link 
                href="/contact" 
                className="w-full text-center block bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all text-sm uppercase tracking-wider"
              >
                Mon Devis Décennal Gratuit
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}