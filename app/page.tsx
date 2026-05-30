import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <Hero 
        title="Artisan couvreur en Pyrénées-Orientales"
        subtitle="Intervention rapide pour tous vos travaux de toiture : réparation de fuites, rénovation de couverture et zinguerie."
        ctaText="Appeler un couvreur"
        ctaLink="tel:0608008683"
        imageUrl="/hero.png"
      />     
      <Services />
    </main>
  );
}