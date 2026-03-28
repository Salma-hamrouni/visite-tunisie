import { useLanguage } from "../contexts/LanguageContext";
import { Landmark, UtensilsCrossed, Heart, Mountain } from "lucide-react";
import sidiImg from "../assets/sidi-bou-said.jpg";

const IntroSection = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Landmark, key: "highlights.history", color: "text-primary" },
    { icon: UtensilsCrossed, key: "highlights.food", color: "text-terracotta" },
    { icon: Heart, key: "highlights.traditions", color: "text-accent" },
    { icon: Mountain, key: "highlights.tourism", color: "text-mediterranean" },
  ];

  return (
    <section id="intro" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <h2 className="section-title">{t("intro.title")}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mt-6">{t("intro.text")}</p>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={sidiImg} alt="Sidi Bou Said" className="w-full h-48 sm:h-64 md:h-[400px] object-cover" loading="lazy" width={800} height={1200} />
            </div>
            {/* Decorative accents only on md+ to avoid overflow on small screens */}
            <div className="hidden md:block absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full -z-10" />
          </div>
        </div>

  
      </div>
    </section>
  );
};

export default IntroSection;

