"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '', city: '', service: '', message: '' });
      } else {
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur de connexion avec le serveur.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-zinc-50 min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* En-tête de la page */}
        <div className="max-w-3xl mb-12">
          <span className="text-blue-600 font-extrabold text-sm uppercase tracking-wider block mb-2">
            Demande de chiffrage gratuit
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
            Contactez France Toiture à Perpignan
          </h1>
          <p className="text-zinc-600 text-lg">
            Besoin d'une réparation urgente, d'un démoussage ou d'un devis pour votre couverture ? Remplissez le formulaire ci-dessous ou appelez-nous directement. Nos diagnostics sont 100 % gratuits et sans engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* COLONNE GAUCHE : FORMULAIRE DE DEVIS */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-950 mb-6">Formulaire de demande de devis</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl text-center">
                <h3 className="font-bold text-lg mb-2">Merci pour votre demande !</h3>
                <p className="text-sm text-green-700">
                  Votre message a bien été transmis. L'artisan de France Toiture vous recontactera par téléphone sous 24h pour convenir d'un rendez-vous.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-2">Nom / Prénom</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
                      placeholder="M. ou Mme Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-2">Téléphone</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
                      placeholder="06 08 00 86 83"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-2">Adresse Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
                      placeholder="exemple@mail.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-2">Ville du chantier (66)</label>
                    <input 
                      type="text" 
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
                      placeholder="Ex: Canet-en-Roussillon"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Type de prestation</label>
                  <select 
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm cursor-pointer"
                  >
                    <option value="">-- Sélectionnez un service --</option>
                    <option value="fuite">Réparation de Fuite / Urgence Étanchéité</option>
                    <option value="couverture">Rénovation complète ou partielle de Toiture</option>
                    <option value="nettoyage">Nettoyage, Démoussage & Hydrofuge</option>
                    <option value="peinture">Peinture de Façade & Ravalement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Description de votre projet</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm resize-none"
                    placeholder="Précisez l'état actuel de votre toit ou de vos murs (Ex: tuiles cassées après coup de vent, traces vertes de mousse...)"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all shadow-md disabled:bg-zinc-400 cursor-pointer"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer ma demande de devis <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* COLONNE DROITE : INFOS ARTISAN & CARTE GOOGLE MAPS */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Infos rapides */}
            <div className="bg-zinc-900 text-white p-8 rounded-3xl shadow-sm space-y-6">
              <h3 className="text-xl font-bold">Contact Direct</h3>
              
              <div className="space-y-4">
                <a href="tel:0608008683" className="flex items-center gap-4 group p-2 hover:bg-zinc-800 rounded-xl transition-all">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center font-bold shrink-0">
                    <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block font-medium">Ligne Directe Artisan</span>
                    <span className="text-lg font-bold group-hover:text-red-400 transition-colors">06 08 00 86 83</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-2">
                  <div className="w-10 h-10 bg-zinc-800 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block font-medium">Horaires d'intervention</span>
                    <span className="text-sm font-semibold text-zinc-200">Lun - Dim : 24h/24 (Urgences fuites)</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-2">
                  <div className="w-10 h-10 bg-zinc-800 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block font-medium">Zone d'activité</span>
                    <span className="text-sm font-semibold text-zinc-200">Perpignan et rayon de 50km (66)</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-800 pt-4 flex items-start gap-3 text-xs text-zinc-400 leading-relaxed">
                <ShieldCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>Vos travaux sont couverts par l'assurance responsabilité civile et la garantie décennale de l'entreprise France Toiture.</span>
              </div>
            </div>

            {/* INTEGRATION DE LA CARTE GOOGLE MAPS (ZONAL PERPIGNAN) */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2 px-1">
                <MapPin className="w-4 h-4 text-red-600" /> Périmètre d'intervention
              </h4>
              
              <div className="w-full h-80 rounded-3xl overflow-hidden shadow-md border border-zinc-200 relative bg-zinc-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93830.92074171249!2d2.82193949290679!3d42.699141158705615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06e4e80fd88fd%3A0x1c83306520f2dd4f!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1780170538357!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zone de couverture France Toiture - Perpignan"
                className="grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              </div>
              <p className="text-center text-xs text-zinc-500 italic">
                Passez la souris sur la carte pour l'activer en couleur.
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}