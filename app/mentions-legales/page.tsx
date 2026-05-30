import Link from 'next/link';
import { Shield } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | France Toiture Perpignan',
  robots: 'noindex, follow', // Inutile d'indexer ça sur Google, mais on laisse les robots suivre les liens
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-zinc-50 min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 text-zinc-700 leading-relaxed space-y-8">
        
        <div>
          <span className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 text-zinc-700 font-semibold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            <Shield className="w-3.5 h-3.5" /> Conformité RGPD & LCEN
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-zinc-950 tracking-tight">
            Mentions Légales
          </h1>
          <p className="text-zinc-500 text-sm mt-2">En vigueur au 30 mai 2026</p>
        </div>

        <hr className="border-zinc-200" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">1. Présentation du site</h2>
          <p>
            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Propriétaire :</strong> France Toiture — Entreprise Individuelle / SARL (À compléter) — Adresse : Perpignan (66000)</li>
            <li><strong>Responsable de la publication :</strong> Hospice Michel — contact@france-toiture-couverture.fr</li>
            <li><strong>Numéro SIRET / RM :</strong> 48316042000012</li>
            <li><strong>Numéro de TVA Intracommunautaire :</strong> [Numéro de TVA ou "TVA non applicable, art. 293 B du CGI"]</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">2. Hébergement</h2>
          <p>
            Le site est hébergé par la société <strong>Vercel Inc.</strong>, situé au 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis. 
            <br />Site web officiel : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://vercel.com</a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">3. Propriété intellectuelle et contrefaçons</h2>
          <p>
            France Toiture est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de France Toiture.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">4. Limitation de responsabilité</h2>
          <p>
            France Toiture ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site. France Toiture décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur son site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">5. Gestion des données personnelles (RGPD)</h2>
          <p>
            Conformément aux dispositions de la loi 78-17 du 6 janvier 1971 modifiée, l’utilisateur du site dispose d’un droit d’accès, de modification et de suppression des informations collectées via notre formulaire de contact. 
          </p>
          <p>
            Les données collectées (Nom, Téléphone, Email, Ville) ont pour unique but de recontacter l'utilisateur afin d'établir un devis gratuit pour des prestations de couverture. Elles ne sont en aucun cas cédées, revendues ou partagées avec des tiers.
          </p>
          <p>
            Pour exercer ce droit, l'utilisateur peut envoyer un message à : <strong>contact@france-toiture-couverture.fr</strong>.
          </p>
        </section>

      </div>
    </main>
  );
}