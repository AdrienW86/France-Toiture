import { FileText } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente (CGV) | France Toiture',
  robots: 'noindex, follow',
};

export default function CgvPage() {
  return (
    <main className="bg-zinc-50 min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 text-zinc-700 leading-relaxed space-y-8">
        
        <div>
          <span className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 text-zinc-700 font-semibold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            <FileText className="w-3.5 h-3.5" /> Conditions Générales de Vente & Prestations
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-zinc-950 tracking-tight">
            Conditions Générales de Vente (CGV)
          </h1>
          <p className="text-zinc-500 text-sm mt-2">Dernière mise à jour : 30 mai 2026</p>
        </div>

        <hr className="border-zinc-200" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">1. Objet</h2>
          <p>
            Les présentes conditions générales de vente et de prestations de services (CGV) s'appliquent de plein droit à tout contrat conclu entre l'entreprise <strong>France Toiture</strong> et son client (particulier ou professionnel), relatif à des travaux de rénovation de toiture, couverture, étanchéité, zinguerie, nettoyage ou peinture de façade à Perpignan et dans un rayon de 50km.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">2. Devis et Commande</h2>
          <p>
            Toute prestation donne lieu à l'établissement préalable d'un devis écrit gratuit. Le devis est valable pour une durée de <strong>2 mois</strong> à compter de sa date d'émission. 
          </p>
          <p>
            Le contrat n'est définitivement formé que lorsque le client retourne le devis daté, signé avec la mention manuscrite "Bon pour accord", et accompagné du versement de l'acompte éventuellement prévu.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">3. Prix et Modalités de Paiement</h2>
          <p>
            Les prix sont fixés par le devis accepté. Sauf accord contraire mentionné sur le devis, les modalités de règlement des chantiers s'établissent comme suit :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Un acompte de 30 % à la commande (signature du devis).</li>
            <li>Le solde de 70 % à la réception complète des travaux, dès la présentation de la facture finale.</li>
          </ul>
          <p>Le paiement peut être effectué par chèque, virement bancaire ou tout autre moyen validé d'un commun accord.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">4. Exécution des Travaux et Conditions Météo</h2>
          <p>
            Les délais d'exécution sont donnés à titre indicatif lors de la signature du devis. France Toiture s'engage à faire ses meilleurs efforts pour respecter ces délais. 
          </p>
          <p>
            Cependant, l'entreprise ne pourra être tenue responsable des retards causés par des cas de force majeure ou des <strong>conditions climatiques incompatibles avec la sécurité ou la technicité des travaux</strong> (fortes pluies, épisodes de Tramontane violente supérieure aux normes de sécurité, gel). Dans ce cas, les travaux sont suspendus et reportés dès que la météo le permet.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">5. Réception des Travaux et Assurance Décennale</h2>
          <p>
            La réception des travaux intervient dès la fin du chantier, contradictoirement entre le client et France Toiture, et donne lieu à la signature d'un procès-verbal de réception.
          </p>
          <p>
            Conformément à l'article L. 241-1 du Code des assurances, les travaux de réfection de toiture et de couverture structurelle réalisés par France Toiture sont couverts par une <strong>assurance responsabilité civile décennale</strong> souscrite auprès d'une compagnie notoirement solvable (les coordonnées de l'assurance figurent explicitement sur les devis officiels).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-950">6. Litiges et Droit Applicable</h2>
          <p>
            Les présentes CGV et les opérations qui en découlent sont régies par le droit français. En cas de litige, le client s'engage à contacter en priorité l'entreprise par courrier électronique (contact@france-toiture-couverture.fr) ou recommandé afin de privilégier une solution amiable. À défaut d'accord, le litige sera porté devant le Tribunal compétent de Perpignan.
          </p>
        </section>

      </div>
    </main>
  );
}