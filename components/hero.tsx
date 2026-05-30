"use client";
import { motion, Variants } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink, imageUrl }: HeroProps) {
  // Définition des variantes pour l'animation
  // 2. Type explicitement tes objets avec 'Variants'
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8, staggerChildren: 0.2 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } // 3. Ajoute 'as const' pour fixer la valeur de ease
    }
  };

  return (
    <section className="relative w-full py-28 px-6 flex items-center justify-center overflow-hidden">
      {/* Image de fond fixe */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{ 
          backgroundImage: `url(${imageUrl})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      ></div>
      
      {/* Conteneur animé */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto max-w-2xl text-center bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-xl"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-5xl font-extrabold text-blue mb-4 leading-tight tracking-tight"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg text-zinc-800 mb-8 leading-relaxed font-medium"
        >
          {subtitle}
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <a 
            href={ctaLink} 
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-red-700 transition-all hover:scale-105 shadow-lg"
          >
            {ctaText}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}