import Image from "next/image";
import { ExternalLink, Calendar } from "lucide-react";

interface FacebookPost {
  id: string;
  message?: string;
  full_picture?: string;
  created_time: string;
  permalink_url: string;
}

interface GraphApiResponse {
  data?: FacebookPost[];
  error?: {
    message: string;
    type: string;
    code: number;
  };
}

async function getFacebookPosts(): Promise<FacebookPost[]> {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!pageId || !accessToken) {
    return [];
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/v26.0/${pageId}/posts?fields=id,message,full_picture,created_time,permalink_url&limit=3&access_token=${accessToken}`,
      { next: { revalidate: 3600 } } // Cache Server Component revalidé toutes les heures
    );

    if (!res.ok) {
      return [];
    }

    const data: GraphApiResponse = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Erreur lors de la récupération du flux Facebook:", error);
    return [];
  }
}

export default async function FacebookFeed(): Promise<React.ReactElement | null> {
  const posts = await getFacebookPosts();

  // Si l'API échoue ou s'il n'y a pas de posts, le composant ne s'affiche pas pour ne pas casser le layout
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Entête du flux */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-1">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              En direct de nos chantiers
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Suivez nos actualités sur Facebook
            </h2>
          </div>
          <a
            href={`https://facebook.com/${process.env.FACEBOOK_PAGE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-2 border border-slate-700"
          >
            Voir la page Facebook <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Grille des publications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition"
            >
              <div className="space-y-4">
                {/* Image du post */}
                {post.full_picture && (
                  <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={post.full_picture}
                      alt={post.message ? post.message.slice(0, 80) : "Publication Facebook"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Contenu textuel */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>
                      {new Date(post.created_time).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  {post.message && (
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-4">
                      {post.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Lien direct vers la publication */}
              <div className="p-5 pt-0">
                <a
                  href={post.permalink_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-amber-500 hover:text-amber-400 inline-flex items-center gap-1"
                >
                  Lire sur Facebook <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}