import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

type Lang = "fr" | "ar" | "en";

interface MapPlace {
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
  coords: [number, number];
  category: Record<Lang, string>;
}

const places: MapPlace[] = [
  {
    name: { fr: "Hammamet", ar: "الحمامات", en: "Hammamet" },
    desc: { fr: "Station balnéaire et plages de sable fin", ar: "منتجع شاطئي وشواطئ رملية ناعمة", en: "Seaside resort with fine sandy beaches" },
    coords: [36.4, 10.62],
    category: { fr: "Plages", ar: "شواطئ", en: "Beaches" },
  },
  {
    name: { fr: "Île de Djerba", ar: "جزيرة جربة", en: "Djerba Island" },
    desc: { fr: "Île paradisiaque aux plages turquoise", ar: "جزيرة الأحلام بشواطئ فيروزية", en: "Paradise island with turquoise beaches" },
    coords: [33.8, 10.86],
    category: { fr: "Plages", ar: "شواطئ", en: "Beaches" },
  },
  {
    name: { fr: "Tabarka", ar: "طبرقة", en: "Tabarka" },
    desc: { fr: "Falaises, forêts et plongée sous-marine", ar: "منحدرات وغابات وغوص", en: "Cliffs, forests and diving" },
    coords: [36.95, 8.76],
    category: { fr: "Plages", ar: "شواطئ", en: "Beaches" },
  },
  {
    name: { fr: "Douz", ar: "دوز", en: "Douz" },
    desc: { fr: "Porte du Sahara - méharées et dunes", ar: "بوابة الصحراء - رحلات جمال وكثبان", en: "Gateway to the Sahara - camel treks and dunes" },
    coords: [33.46, 8.13],
    category: { fr: "Sahara", ar: "صحراء", en: "Sahara" },
  },
  {
    name: { fr: "Tozeur", ar: "توزر", en: "Tozeur" },
    desc: { fr: "Oasis de 400 000 palmiers et Chott el Jérid", ar: "واحة 400,000 نخلة وشط الجريد", en: "Oasis of 400,000 palms and Chott el Jerid" },
    coords: [33.92, 8.13],
    category: { fr: "Sahara", ar: "صحراء", en: "Sahara" },
  },
  {
    name: { fr: "Médina de Tunis", ar: "مدينة تونس العتيقة", en: "Medina of Tunis" },
    desc: { fr: "Trésor UNESCO - 700 monuments et souks", ar: "كنز اليونسكو - 700 معلم وأسواق", en: "UNESCO treasure - 700 monuments and souks" },
    coords: [36.8, 10.17],
    category: { fr: "Patrimoine", ar: "تراث", en: "Heritage" },
  },
  {
    name: { fr: "Sidi Bou Said", ar: "سيدي بو سعيد", en: "Sidi Bou Said" },
    desc: { fr: "Village bleu et blanc emblématique", ar: "قرية زرقاء وبيضاء مميزة", en: "Iconic blue and white village" },
    coords: [36.87, 10.35],
    category: { fr: "Patrimoine", ar: "تراث", en: "Heritage" },
  },
  {
    name: { fr: "Kairouan", ar: "القيروان", en: "Kairouan" },
    desc: { fr: "4e ville sainte de l'Islam - Grande Mosquée", ar: "رابع مدينة مقدسة في الإسلام - الجامع الكبير", en: "4th holiest city in Islam - Great Mosque" },
    coords: [35.68, 10.1],
    category: { fr: "Patrimoine", ar: "تراث", en: "Heritage" },
  },
  {
    name: { fr: "Amphithéâtre d'El Jem", ar: "مدرج الجم", en: "El Jem Amphitheater" },
    desc: { fr: "3e plus grand amphithéâtre romain du monde", ar: "ثالث أكبر مدرج روماني في العالم", en: "3rd largest Roman amphitheater in the world" },
    coords: [35.3, 10.71],
    category: { fr: "Archéologie", ar: "آثار", en: "Archaeology" },
  },
  {
    name: { fr: "Carthage", ar: "قرطاج", en: "Carthage" },
    desc: { fr: "Ancienne rivale de Rome - thermes d'Antonin", ar: "منافسة روما القديمة - حمامات أنطونين", en: "Ancient rival of Rome - Antonine Baths" },
    coords: [36.86, 10.32],
    category: { fr: "Archéologie", ar: "آثار", en: "Archaeology" },
  },
  {
    name: { fr: "Dougga", ar: "دقة", en: "Dougga" },
    desc: { fr: "Site romain le mieux préservé d'Afrique du Nord", ar: "أفضل موقع روماني محفوظ في شمال أفريقيا", en: "Best-preserved Roman site in North Africa" },
    coords: [36.42, 9.22],
    category: { fr: "Archéologie", ar: "آثار", en: "Archaeology" },
  },
];

const categoryColors: Record<string, string> = {
  Beaches: "hsl(198 93% 60%)",
  Sahara: "hsl(38 92% 50%)",
  Heritage: "hsl(262 83% 58%)",
  Archaeology: "hsl(0 84% 60%)",
};

const categoryLabels: Record<string, Record<Lang, string>> = {
  Beaches: { fr: "Plages", ar: "شواطئ", en: "Beaches" },
  Sahara: { fr: "Sahara", ar: "صحراء", en: "Sahara" },
  Heritage: { fr: "Patrimoine", ar: "تراث", en: "Heritage" },
  Archaeology: { fr: "Archéologie", ar: "آثار", en: "Archaeology" },
};

const getCategoryColor = (cat: string) => categoryColors[cat] || "hsl(var(--primary))";

const createIcon = (color: string) =>
  L.divIcon({
    className: "",
    html: `<div style="width:28px;height:28px;border-radius:9999px;background:${color};border:3px solid hsl(var(--background));box-shadow:0 8px 20px hsl(0 0% 0% / 0.25);"></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -16],
  });

const InteractiveMap = () => {
  const { lang } = useLanguage();
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  const title = { fr: "Carte Interactive", ar: "خريطة تفاعلية", en: "Interactive Map" };
  const subtitle = {
    fr: "Explorez les destinations touristiques de la Tunisie",
    ar: "استكشفوا الوجهات السياحية في تونس",
    en: "Explore Tunisia's tourist destinations",
  };

  useEffect(() => {
    if (!mapElementRef.current || mapRef.current) return;

    const map = L.map(mapElementRef.current, {
      center: [34.5, 9.5],
      zoom: 6,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const markersLayer = L.layerGroup().addTo(map);

    mapRef.current = map;
    markersLayerRef.current = markersLayer;

    return () => {
      markersLayer.clearLayers();
      map.remove();
      mapRef.current = null;
      markersLayerRef.current = null;
    };
  }, []);

  useEffect(() => {
    const markersLayer = markersLayerRef.current;
    if (!markersLayer) return;

    markersLayer.clearLayers();

    places.forEach((place) => {
      const color = getCategoryColor(place.category.en);
      const popupHtml = `
        <div style="min-width:200px;font-size:14px;line-height:1.5;">
          <h3 style="font-weight:700;font-size:16px;margin:0 0 6px;">${place.name[lang]}</h3>
          <span style="display:inline-block;margin-bottom:8px;padding:2px 8px;border-radius:9999px;background:${color};color:white;font-size:12px;">
            ${place.category[lang]}
          </span>
          <p style="margin:0;color:hsl(222 15% 35%);">${place.desc[lang]}</p>
        </div>
      `;

      L.marker(place.coords, { icon: createIcon(color) })
        .bindPopup(popupHtml)
        .addTo(markersLayer);
    });
  }, [lang]);

  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title mb-4 text-center">{title[lang]}</h2>
        <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-primary" />
        <p className="mb-8 text-center text-lg text-muted-foreground">{subtitle[lang]}</p>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {Object.entries(categoryColors).map(([cat, color]) => (
            <div key={cat} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
              {categoryLabels[cat][lang]}
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/50 shadow-lg">
          <div ref={mapElementRef} className="h-[600px] w-full bg-muted" aria-label={title[lang]} />
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/places"
            className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            {lang === "fr" ? "Voir toutes les destinations" : lang === "ar" ? "عرض جميع الوجهات" : "View all destinations"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
