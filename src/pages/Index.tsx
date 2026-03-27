import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Landmark, UtensilsCrossed, Heart, Camera, MapPin } from "lucide-react";

import carthageImg from "../assets/carthage-ruins.jpg";
import clothingImg from "../assets/clothing.jpg";
import couscousImg from "../assets/couscous.jpg";
import beachImg from "../assets/beach-tunisia.jpg";
import soukImg from "../assets/souk-market.jpg";
import sidiImg from "../assets/sidi-bou-said.jpg";

const quickLinks = [
  { to: "/history", icon: Landmark, img: carthageImg, labelKey: "nav.history", color: "from-primary/80" },
  { to: "/culture", icon: Heart, img: clothingImg, labelKey: "nav.culture", color: "from-accent/80" },
  { to: "/food", icon: UtensilsCrossed, img: couscousImg, labelKey: "nav.food", color: "from-terracotta/80" },
  { to: "/places", icon: MapPin, img: beachImg, labelKey: "nav.places", color: "from-mediterranean/80" },
  { to: "/gallery", icon: Camera, img: soukImg, labelKey: "nav.gallery", color: "from-sand-dark/80" },
];

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection />
      <br></br>
      <IntroSection />

      {/* Explore Pages Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-4">
            {t("lang") === "ar" ? "استكشف المزيد" : t("lang") === "en" ? "Explore More" : "Explorez Plus"}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group relative rounded-2xl overflow-hidden h-64 card-hover shadow-lg block"
              >
                <img
                  src={link.img}
                  alt={t(link.labelKey)}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${link.color} to-transparent opacity-70 group-hover:opacity-80 transition-opacity`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  <link.icon className="w-10 h-10 text-primary-foreground mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-2xl font-display font-bold text-primary-foreground">{t(link.labelKey)}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Preview of Gallery */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="section-title mb-4">{t("gallery.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[carthageImg, sidiImg, soukImg].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden h-48 md:h-64">
                <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
          <Link
            to="/gallery"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            {t("hero.cta")}
          </Link>
        </div>
      </section>
<br></br>
      <Footer />
    </div>
  );
};

export default Index;
