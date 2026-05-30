"use client";
import { motion, Variants } from 'framer-motion';
import { Zap, ShieldCheck, FileText, Home, Wrench, Droplets, PaintBucket } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  // Animation pour les éléments qui arrivent au scroll
  const cardVariants : Variants= {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const services = [
    { 
      title: "Réparation Fuites", 
      icon: <Wrench className="w-8 h-8 text-red-600" />, 
      desc: "Intervention d'urgence pour localiser et stopper toute infiltration, protégeant ainsi votre charpente et vos plafonds.", 
      img: "/fuite.jpg", 
      href: "/services/fuite" 
    },
    { 
      title: "Rénovation Couverture", 
      icon: <Home className="w-8 h-8 text-red-600" />, 
      desc: "Rénovation complète ou partielle de votre couverture pour assurer l'étanchéité et la longévité de votre habitat.", 
      img: "/renovation.jpg", 
      href: "/services/couverture" 
    },
    { 
      title: "Nettoyage Toiture", 
      icon: <Droplets className="w-8 h-8 text-red-600" />, 
      desc: "Démoussage et nettoyage en profondeur pour redonner à votre toit son éclat et éviter la prolifération de végétaux.", 
      img: "/nettoyage.jpg", 
      href: "/services/nettoyage" 
    },
    { 
      title: "Peinture Façades", 
      icon: <PaintBucket className="w-8 h-8 text-red-600" />, 
      desc: "Redonnez éclat et protection à votre maison. Nous appliquons des peintures de haute qualité, résistantes aux UV et aux intempéries, pour embellir vos extérieurs tout en renforçant l'étanchéité de vos murs.", 
      img: "/peinture.jpg", 
      href: "/services/peinture" 
    },
  ];

  return (
    <section className="py-20 px-6 bg-zinc-50 w-full flex justify-center">
      <div className="w-full max-w-7xl">
        
        {/* 1. SECTION RÉASSURANCE ANIMÉE */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[Zap, ShieldCheck, FileText].map((Icon, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-zinc-100"
            >
              <Icon className="w-10 h-10 text-brand-blue mb-4" />
              <h3 className="font-bold text-lg mb-2 text-zinc-950">
                {i === 0 ? "Intervention Rapide" : i === 1 ? "Garantie Décennale" : "Devis Gratuit à Domicile"}
              </h3>
              <p className="text-sm text-zinc-600">
                {i === 0 ? "Réponse sous 24h pour vos urgences." : i === 1 ? "Travaux couverts par assurance." : "Chiffrage sans engagement."}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 2. INTRO ENTREPRISE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4">L'Expertise France Toiture</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Basée au cœur des Pyrénées-Orientales, France Toiture met son savoir-faire artisanal au service de votre habitat. De la rénovation à l'entretien, nous garantissons des solutions durables pour protéger votre toit.
          </p>
        </div>

        {/* 3. GRILLE DES SERVICES ANIMÉE */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={cardVariants}
              className="h-full"
            >
              <Link 
                href={s.href} 
                className="group flex flex-col rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all border border-zinc-100 h-full hover:-translate-y-2"
              >
                <div 
                  className="h-56 w-full bg-zinc-200" 
                  style={{ backgroundImage: `url(${s.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
                />
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-6">{s.icon}</div>
                  <h3 className="font-bold text-xl mb-4 text-zinc-950 group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-base text-zinc-600 mb-8 flex-grow leading-relaxed">
                    {s.desc}
                  </p>
                  <span className="text-blue-600 font-bold text-sm inline-flex items-center uppercase tracking-wider">
                    En savoir plus →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}