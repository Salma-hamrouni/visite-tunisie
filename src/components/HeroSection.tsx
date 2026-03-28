import { useLanguage } from "../contexts/LanguageContext";
import heroImg from "../assets/hero-tunisia.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
  <section id="home" className="relative h-screen min-h-[60vh] sm:min-h-[75vh] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Tunisia - Sidi Bou Said"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="overlay-gradient" />
      <div className="absolute inset-0 bg-primary/20" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground animate-fade-up leading-tight">
          {t("hero.title")}
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-primary-foreground/90 animate-fade-up-delay-1 max-w-2xl mx-auto leading-relaxed">
          {t("hero.subtitle")}
        </p>
      </div>

      <a href="#intro" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </a>
      
    </section>
      
  );
};

export default HeroSection;
