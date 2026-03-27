import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Lang = "fr" | "ar" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const translations: Record<string, Record<Lang, string>> = {
  "nav.home": { fr: "Accueil", ar: "الرئيسية", en: "Home" },
  "nav.history": { fr: "Histoire", ar: "التاريخ", en: "History" },
  "nav.culture": { fr: "Culture", ar: "الثقافة", en: "Culture" },
  "nav.food": { fr: "Gastronomie", ar: "المطبخ", en: "Food" },
  "nav.places": { fr: "Destinations", ar: "الوجهات", en: "Places" },
  "nav.gallery": { fr: "Galerie", ar: "معرض الصور", en: "Gallery" },
  "nav.contact": { fr: "Contact", ar: "اتصل بنا", en: "Contact" },
  "hero.title": { fr: "Découvrez la Tunisie", ar: "اكتشف تونس", en: "Discover Tunisia" },
  "hero.subtitle": {
    fr: "Là où la Méditerranée rencontre le Sahara, où l'histoire épouse la modernité",
    ar: "حيث يلتقي البحر الأبيض المتوسط بالصحراء، حيث يعانق التاريخ الحداثة",
    en: "Where the Mediterranean meets the Sahara, where history embraces modernity",
  },
  "hero.cta": { fr: "Explorer maintenant", ar: "اكتشف الآن", en: "Explore Now" },
  "intro.title": { fr: "Bienvenue en Tunisie", ar: "مرحباً بكم في تونس", en: "Welcome to Tunisia" },
  "intro.text": {
    fr: "Au carrefour de l'Afrique et de l'Europe, la Tunisie est un joyau méditerranéen qui séduit par sa diversité. Des plages dorées aux dunes du Sahara, des médinas millénaires aux villes modernes, ce pays offre une expérience unique où se mêlent traditions ancestrales et art de vivre contemporain.",
    ar: "على مفترق طرق أفريقيا وأوروبا، تونس جوهرة متوسطية تأسر بتنوعها. من الشواطئ الذهبية إلى كثبان الصحراء، من المدن العتيقة إلى المدن الحديثة، تقدم هذه البلاد تجربة فريدة تمزج بين التقاليد العريقة وأسلوب الحياة المعاصر.",
    en: "At the crossroads of Africa and Europe, Tunisia is a Mediterranean gem that captivates with its diversity. From golden beaches to Saharan dunes, from ancient medinas to modern cities, this country offers a unique experience blending ancestral traditions with contemporary living.",
  },
  "highlights.history": { fr: "3000 ans d'histoire", ar: "3000 سنة من التاريخ", en: "3000 Years of History" },
  "highlights.food": { fr: "Saveurs authentiques", ar: "نكهات أصيلة", en: "Authentic Flavors" },
  "highlights.traditions": { fr: "Traditions vivantes", ar: "تقاليد حية", en: "Living Traditions" },
  "highlights.tourism": { fr: "Paysages époustouflants", ar: "مناظر خلابة", en: "Breathtaking Landscapes" },
  "history.title": { fr: "Notre Histoire", ar: "تاريخنا", en: "Our History" },
  "history.carthage.title": { fr: "Carthage & Les Phéniciens", ar: "قرطاج والفينيقيون", en: "Carthage & The Phoenicians" },
  "history.carthage.text": {
    fr: "Fondée au IXe siècle av. J.-C., Carthage fut l'une des plus grandes civilisations de l'Antiquité. Son empire commercial rivalisait avec Rome, laissant un héritage qui façonne encore la Tunisie d'aujourd'hui.",
    ar: "تأسست قرطاج في القرن التاسع قبل الميلاد، وكانت واحدة من أعظم حضارات العالم القديم. نافست إمبراطوريتها التجارية روما، تاركة إرثاً لا يزال يشكل تونس اليوم.",
    en: "Founded in the 9th century BC, Carthage was one of the greatest civilizations of antiquity. Its commercial empire rivaled Rome, leaving a legacy that still shapes Tunisia today.",
  },
  "history.roman.title": { fr: "L'Ère Romaine", ar: "العصر الروماني", en: "The Roman Era" },
  "history.roman.text": {
    fr: "Après la chute de Carthage, la Tunisie devint une province romaine prospère. L'amphithéâtre d'El Jem, les thermes d'Antonin et les mosaïques de Bardo témoignent de cette grandeur.",
    ar: "بعد سقوط قرطاج، أصبحت تونس مقاطعة رومانية مزدهرة. يشهد مدرج الجم وحمامات أنطونين وفسيفساء باردو على هذه العظمة.",
    en: "After the fall of Carthage, Tunisia became a prosperous Roman province. The El Jem amphitheater, the Antonine Baths, and the Bardo mosaics testify to this grandeur.",
  },
  "history.islamic.title": { fr: "La Civilisation Islamique", ar: "الحضارة الإسلامية", en: "Islamic Civilization" },
  "history.islamic.text": {
    fr: "L'arrivée de l'Islam au VIIe siècle a profondément marqué la culture tunisienne. La Grande Mosquée de Kairouan, fondée en 670, reste l'un des lieux les plus sacrés du monde musulman.",
    ar: "أثر وصول الإسلام في القرن السابع بشكل عميق في الثقافة التونسية. يظل جامع القيروان الكبير، الذي تأسس عام 670، أحد أقدس الأماكن في العالم الإسلامي.",
    en: "The arrival of Islam in the 7th century profoundly marked Tunisian culture. The Great Mosque of Kairouan, founded in 670, remains one of the most sacred places in the Muslim world.",
  },
  "history.modern.title": { fr: "La Tunisie Moderne", ar: "تونس الحديثة", en: "Modern Tunisia" },
  "history.modern.text": {
    fr: "Indépendante depuis 1956, la Tunisie est pionnière dans le monde arabe pour les droits des femmes et l'éducation. Elle continue d'évoluer comme un pont entre Orient et Occident.",
    ar: "مستقلة منذ 1956، تعتبر تونس رائدة في العالم العربي في مجال حقوق المرأة والتعليم. تواصل تطورها كجسر بين الشرق والغرب.",
    en: "Independent since 1956, Tunisia is a pioneer in the Arab world for women's rights and education. It continues to evolve as a bridge between East and West.",
  },
  "culture.title": { fr: "Culture & Traditions", ar: "الثقافة والتقاليد", en: "Culture & Traditions" },
  "culture.clothing.title": { fr: "Vêtements Traditionnels", ar: "الملابس التقليدية", en: "Traditional Clothing" },
  "culture.clothing.text": {
    fr: "Le Jebba, le Sefsari et la Fouta racontent l'histoire d'un savoir-faire transmis de génération en génération.",
    ar: "الجبة والسفساري والفوطة تروي قصة حرفة توارثتها الأجيال.",
    en: "The Jebba, Sefsari, and Fouta tell the story of craftsmanship passed down through generations.",
  },
  "culture.wedding.title": { fr: "Mariages & Fêtes", ar: "الأعراس والاحتفالات", en: "Weddings & Celebrations" },
  "culture.wedding.text": {
    fr: "Les mariages tunisiens sont des célébrations somptueuses qui durent plusieurs jours, mêlant rituels anciens et joie collective.",
    ar: "الأعراس التونسية احتفالات فخمة تمتد لعدة أيام، تمزج بين الطقوس القديمة والفرح الجماعي.",
    en: "Tunisian weddings are lavish celebrations lasting several days, blending ancient rituals with collective joy.",
  },
  "culture.music.title": { fr: "Musique & Danse", ar: "الموسيقى والرقص", en: "Music & Dance" },
  "culture.music.text": {
    fr: "Du Malouf au Mezoued, la musique tunisienne est un voyage sonore entre influences andalouses, orientales et africaines.",
    ar: "من المالوف إلى المزود، الموسيقى التونسية رحلة صوتية بين التأثيرات الأندلسية والشرقية والأفريقية.",
    en: "From Malouf to Mezoued, Tunisian music is a sonic journey between Andalusian, Eastern, and African influences.",
  },
  "food.title": { fr: "Gastronomie Tunisienne", ar: "المطبخ التونسي", en: "Tunisian Cuisine" },
  "food.subtitle": {
    fr: "Un festin de saveurs méditerranéennes et orientales",
    ar: "وليمة من النكهات المتوسطية والشرقية",
    en: "A feast of Mediterranean and Eastern flavors",
  },
  "places.title": { fr: "Destinations Incontournables", ar: "وجهات لا تُفوَّت", en: "Must-Visit Destinations" },
  "gallery.title": { fr: "Galerie Photos", ar: "معرض الصور", en: "Photo Gallery" },
  "contact.title": { fr: "Contactez-nous", ar: "اتصل بنا", en: "Contact Us" },
  "contact.subtitle": {
    fr: "Planifiez votre voyage en Tunisie",
    ar: "خطط لرحلتك إلى تونس",
    en: "Plan your trip to Tunisia",
  },
  "contact.name": { fr: "Nom", ar: "الاسم", en: "Name" },
  "contact.email": { fr: "Email", ar: "البريد الإلكتروني", en: "Email" },
  "contact.message": { fr: "Message", ar: "الرسالة", en: "Message" },
  "contact.send": { fr: "Envoyer", ar: "إرسال", en: "Send" },
  "footer.rights": { fr: "Tous droits réservés", ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr");
  const isRtl = lang === "ar";
  const t = (key: string) => translations[key]?.[lang] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRtl }}>
      <div dir={isRtl ? "rtl" : "ltr"} className={isRtl ? "font-arabic" : "font-sans"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
