import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import heroImg from "../assets/hero-tunisia.jpg";
import sidiImg from "../assets/sidi-bou-said.jpg";
import saharaImg from "../assets/sahara-desert.jpg";
import soukImg from "../assets/souk-market.jpg";
import couscousImg from "../assets/couscous.jpg";
import mosqueImg from "../assets/mosque.jpg";
import beachImg from "../assets/beach-tunisia.jpg";
import elJemImg from "../assets/el-jem.jpg";
import djerbaImg from "../assets/djerba.jpg";
import tozeurImg from "../assets/tozeur.jpg";
import ceramicsImg from "../assets/ceramics.jpg";
import hammamImg from "../assets/hammam.jpg";
import tabarkImg from "../assets/tabarka.jpg";
import douggaImg from "../assets/dougga.jpg";
import kairouanImg from "../assets/kairouan.jpg";
import mintTeaImg from "../assets/mint-tea.jpg";

const images = [
  { src: heroImg, alt: "Sidi Bou Said panorama" },
  { src: sidiImg, alt: "Blue door" },
  { src: saharaImg, alt: "Sahara desert" },
  { src: soukImg, alt: "Traditional souk" },
  { src: couscousImg, alt: "Couscous" },
  { src: mosqueImg, alt: "Mosque architecture" },
  { src: beachImg, alt: "Tunisian beach" },
  { src: elJemImg, alt: "El Jem amphitheater" },
  { src: djerbaImg, alt: "Djerba island" },
  { src: tozeurImg, alt: "Tozeur oasis" },
  { src: ceramicsImg, alt: "Tunisian ceramics" },
  { src: hammamImg, alt: "Traditional hammam" },
  { src: tabarkImg, alt: "Tabarka coastline" },
  { src: douggaImg, alt: "Dougga ruins" },
  { src: kairouanImg, alt: "Kairouan mosque" },
  { src: mintTeaImg, alt: "Mint tea" },
];

const GallerySection = () => {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + images.length) % images.length);
  };

  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center mb-4">{t("gallery.title")}</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-16 rounded-full" />

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid cursor-pointer rounded-xl overflow-hidden card-hover"
              onClick={() => setLightbox(i)}
            >
              <img src={img.src} alt={img.alt} className="w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground z-10" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 md:left-8 text-primary-foreground/80 hover:text-primary-foreground z-10 p-2"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="absolute right-4 md:right-8 text-primary-foreground/80 hover:text-primary-foreground z-10 p-2"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 text-primary-foreground/60 text-sm">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
