import { EyeOff } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | France Toiture Perpignan',
  robots: 'noindex, follow', // Protection SEO (inutile d'indexer cette page de conformité)
};

export default function ConfidentialitePage() {
  return (
    <main className="bg-zinc-50 min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 text-zinc-700 leading-relaxed space-y-8">
        
        <div>
          <span className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 text-zinc-700 font-semibold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            <EyeOff className="w-3.5 h-3.5" /> Respect de la vie privée
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-zinc-950 tracking-tight">
            Politique de Confidentialité
          </h1>
          <p className="text-zinc-500 text-sm mt-2">Dernière mise à jour : 30 mai 2026</p>
        </div>

        <hr className="border-zinc-200" />

        <p className="text-zinc-600">
          La présente Politique de Confidentialité a pour but de vous informer de manière transparente sur la façon dont l'entreprise <strong>France Toiture</strong> collecte, utilise et protège les données personnelles des utilisateurs lorsqu'ils naviguent sur notre site internet et utilisent notre formulaire de contact.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">1. Collecte des données</h2>
          <p>
            Nous recueillons uniquement les informations que vous choisissez de nous communiquer volontairement via le formulaire de demande de devis présent sur la page Contact. Les données collectées comprennent :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Votre civilité, nom et prénom</li>
            <li>Votre numéro de téléphone (obligatoire pour caler le rendez-fiable pour le diagnostic du toit)</li>
            <li>Votre adresse email</li>
            <li>La ville où se situe le chantier dans les Pyrénées-Orientales (66)</li>
            <li>La nature des travaux demandés et les détails de votre message</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">2. Utilisation des données</h2>
          <p>
            Les informations recueillies sont exclusivement utilisées dans un cadre professionnel pour :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>L’établissement et le suivi de vos devis gratuits et sans engagement.</li>
            <li>La prise de contact par téléphone ou email afin d'étudier la faisabilité technique de votre projet (réparation, nettoyage, zinguerie).</li>
            <li>La gestion de la relation client au quotidien.</li>
          </ul>
          <p>
            Nous ne pratiquons aucune démarche de prospection commerciale automatisée (pas de newsletters publicitaires, pas de SMS groupés).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">3. Partage et transmission des données</h2>
          <p>
            Vos données personnelles sont confidentielles. <strong>France Toiture s'engage formellement à ne jamais vendre, louer, échanger ou divulguer vos informations</strong> à des tiers ou à des sociétés de démarchage publicitaire. Elles restent gérées en interne par l'artisan.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">4. Sécurité et hébergement</h2>
          <p>
            Le site internet est propulsé par la plateforme sécurisée <strong>Vercel</strong>. Les transferts de données sur notre site sont entièrement chiffrés via le protocole SSL (le petit cadenas dans la barre d'adresse de votre navigateur en `https://`), garantissant que vos informations ne peuvent pas être interceptées pendant leur envoi.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">5. Durée de conservation des données</h2>
          <p>
            Si votre demande de contact n'aboutit pas sur la signature d'un devis, vos coordonnées sont supprimées dans un délai maximum de <strong>12 mois</strong>. Si nous réalisons vos travaux de toiture, vos données sont conservées pendant toute la durée légale nécessaire à la gestion de la garantie décennale de l'entreprise (10 ans).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">6. Vos droits concernant vos informations</h2>
          <p>
            Conformément à la réglementation RGPD, vous disposez d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données personnelles. 
          </p>
          <p>
            Vous pouvez exercer ces droits à tout moment, de manière simple et gratuite, en envoyant un email à l'adresse de contact officielle de l'entreprise : <strong>contact@france-toiture-couverture.fr</strong>. L'artisan traitera votre demande sous un délai de 48h.
          </p>
        </section>

      </div>
    </main>
  );
}