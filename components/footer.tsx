// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Colonne Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-lg font-extrabold text-zinc-950 tracking-tight">
            FRANCE<span className="text-blue-600 pl-1">TOITURE</span>
          </Link>
          <div className="text-xs text-zinc-500 flex flex-col items-center md:items-start gap-0.5">
            <p>© {currentYear} France Toiture. Tous droits réservés.</p>
            <p>
              Développé par{' '}
              <a 
                href="https://code-v.fr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-900 font-semibold hover:text-red-600 transition-colors underline underline-offset-2"
              >
                Codev
              </a>
            </p>
          </div>
        </div>

        {/* Liens légaux */}
        <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium text-zinc-600">
          <Link href="/mentions-legales" className="hover:text-blue-600 transition-colors">
            Mentions Légales
          </Link>
          <Link href="/cgv" className="hover:text-blue-600 transition-colors">
            CGV
          </Link>
          <Link href="/politique-confidentialite" className="hover:text-blue-600 transition-colors">
            Politique de Confidentialité
          </Link>
        </nav>
      </div>
    </footer>
  );
}