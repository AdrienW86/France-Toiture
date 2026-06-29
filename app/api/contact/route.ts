import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, city, service, message } = body;

    // Envoi via Resend
    const data = await resend.emails.send({
      from: 'France Toiture <contact@france-toiture-couverture.fr>', // Remplacez par votre domaine validé
      to: process.env.ZOHO_USER || 'contact@france-toiture-couverture.fr',
      subject: `Nouveau devis : ${service} - ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Nouvelle demande de devis</h2>
          <p>Vous avez reçu une nouvelle demande via votre site web :</p>
          
          <div style="background: #f4f4f5; padding: 15px; border-radius: 8px;">
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Téléphone :</strong> ${phone}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Ville :</strong> ${city}</p>
            <p><strong>Service demandé :</strong> ${service}</p>
          </div>

          <h3 style="margin-top: 20px;">Message du client :</h3>
          <p style="background: #fff; border-left: 4px solid #dc2626; padding: 10px;">
            ${message || 'Aucun message particulier.'}
          </p>

          <p style="font-size: 12px; color: #666; margin-top: 30px;">
            Ce message provient du formulaire de contact de France Toiture.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erreur Resend:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi du mail' }, { status: 500 });
  }
}