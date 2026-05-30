"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Wrench, Home, Droplets, PaintBucket } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Nouvel état pour gérer l'accordéon mobile indépendamment
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      subServices: [
        { name: 'Réparation Fuites', href: '/services/fuite', icon: <Wrench className="w-4 h-4 text-red-600" /> },
        { name: 'Rénovation Couverture', href: '/services/couverture', icon: <Home className="w-4 h-4 text-red-600" /> },
        { name: 'Nettoyage Toiture', href: '/services/nettoyage', icon: <Droplets className="w-4 h-4 text-red-600" /> },
        { name: 'Peinture Façades', href: '/services/peinture', icon: <PaintBucket className="w-4 h-4 text-red-600" /> },
      ]
    },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 mx-4 md:mx-auto max-w-5xl bg-white/90 backdrop-blur-md border border-zinc-200 shadow-sm rounded-2xl">
        <div className="px-6 py-3 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="text-xl font-extrabold text-zinc-950 tracking-tight">
            FRANCE<span className="text-blue-600 pl-1">TOITURE</span>
          </Link>

          {/* Nav Desktop (Inchangée) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-700">
            {navLinks.map((link) => {
              if (link.subServices) {
                return (
                  <div 
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1 hover:text-red-600 transition-colors cursor-pointer font-semibold text-zinc-700">
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white border border-zinc-200 shadow-xl rounded-xl p-2 z-50 flex flex-col gap-1"
                        >
                          {link.subServices.map((sub) => (
                            <Link 
                              key={sub.name} 
                              href={sub.href}
                              onClick={() => setIsDropdownOpen(false)}
                              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-zinc-700 hover:bg-zinc-50 hover:text-red-600 transition-all font-medium"
                            >
                              {sub.icon}
                              {sub.name}
                            </Link>
                          ))}
                          <div className="border-t border-zinc-100 my-1"></div>
                          <Link 
                            href={link.href}
                            onClick={() => setIsDropdownOpen(false)}
                            className="text-center text-xs text-blue-600 hover:underline py-1 font-bold"
                          >
                            Voir tous les services
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link key={link.name} href={link.href} className="hover:text-red-600 transition-colors">
                  {link.name}
                </Link>
              );
            })}
            
            <Link href="/devis" className="bg-red-600 text-white px-5 py-2 rounded-xl text-xs uppercase tracking-wider font-bold hover:bg-red-700 transition-all">
              Devis Gratuit
            </Link>
          </nav>

          {/* Bouton Hamburger */}
          <button 
            className="md:hidden p-2 flex flex-col justify-center items-center gap-[6px] z-50 relative w-10 h-10" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`w-6 h-0.5 bg-zinc-950 transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-zinc-950 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-zinc-950 transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></div>
          </button>
        </div>
      </header>

      {/* Menu Mobile Modifié */}
      <div className={`fixed inset-0 z-40 bg-white md:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-6 text-xl font-bold text-zinc-950 px-8 pt-24 pb-8 overflow-y-auto">
          {navLinks.map((link) => {
            if (link.subServices) {
              return (
                <div key={link.name} className="flex flex-col items-center w-full">
                  {/* Ligne Services : Lien principal accessible + chevron rétractable */}
                  <div className="flex items-center justify-center gap-2 w-full pl-6">
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)} 
                      className="hover:text-red-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                    <button 
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="p-2 text-zinc-500 hover:text-red-600 transition-colors"
                      aria-label="Voir les sous-services"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  
                  {/* Sous-menu mobile animé en accordéon */}
                  <div className="w-full flex flex-col items-center overflow-hidden">
                    <AnimatePresence initial={false}>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="flex flex-col items-center gap-4 bg-zinc-50 w-full mt-2 py-3 rounded-xl border border-zinc-100"
                        >
                          {link.subServices.map((sub) => (
                            <Link 
                              key={sub.name} 
                              href={sub.href} 
                              onClick={() => setIsOpen(false)} 
                              className="text-zinc-600 hover:text-red-600 text-base flex items-center gap-2 font-medium transition-colors"
                            >
                              {sub.icon}
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            }

            return (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-red-600 transition-colors">
                {link.name}
              </Link>
            );
          })}
          
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-red-600 text-white px-8 py-3 rounded-xl text-sm uppercase tracking-wider font-bold hover:bg-red-700 text-center w-full max-w-xs transition-all"
          >
            Devis Gratuit
          </Link>
        </div>
      </div>
    </>
  );
}