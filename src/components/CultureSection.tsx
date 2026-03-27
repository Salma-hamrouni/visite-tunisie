import { useLanguage } from "../contexts/LanguageContext";
import clothingImg from "../assets/clothing.jpg";
import weddingImg from "../assets/wedding.jpg";
import musicImg from "../assets/music.jpg";
import ceramicsImg from "../assets/ceramics.jpg";
import hammamImg from "../assets/hammam.jpg";
import mintTeaImg from "../assets/mint-tea.jpg";

type Lang = "fr" | "ar" | "en";

const cultureItems: {
  img: string;
  titleKey: string;
  textKey: string;
}[] = [
  { img: clothingImg, titleKey: "culture.clothing.title", textKey: "culture.clothing.text" },
  { img: weddingImg, titleKey: "culture.wedding.title", textKey: "culture.wedding.text" },
  { img: musicImg, titleKey: "culture.music.title", textKey: "culture.music.text" },
];

const moreItems: {
  img: string;
  title: Record<Lang, string>;
  text: Record<Lang, string>;
}[] = [
  {
    img: ceramicsImg,
    title: { fr: "Artisanat & Céramique", ar: "الحرف والخزف", en: "Craftsmanship & Ceramics" },
    text: {
      fr: "L'artisanat tunisien est un héritage vivant qui se transmet de génération en génération. Les poteries de Nabeul, les tapis de Kairouan, la dinanderie de Tunis et les bijoux berbères sont des trésors d'un savoir-faire millénaire. Les carreaux de céramique bleus et blancs, inspirés de l'art ottoman, ornent maisons et mosquées dans tout le pays.",
      ar: "الحرف التونسية إرث حي يُتوارث من جيل إلى جيل. فخار نابل وزرابي القيروان ونحاس تونس والمجوهرات الأمازيغية كنوز حرفة آلاف السنين. بلاط الخزف الأزرق والأبيض المستوحى من الفن العثماني يزين المنازل والمساجد في كل أنحاء البلاد.",
      en: "Tunisian craftsmanship is a living heritage passed down through generations. Nabeul pottery, Kairouan carpets, Tunis copperware, and Berber jewelry are treasures of millennia-old expertise. The blue-and-white ceramic tiles, inspired by Ottoman art, adorn houses and mosques throughout the country.",
    },
  },
  {
    img: hammamImg,
    title: { fr: "Le Hammam Traditionnel", ar: "الحمام التقليدي", en: "The Traditional Hammam" },
    text: {
      fr: "Le hammam est bien plus qu'un bain public en Tunisie : c'est un rituel social ancestral. Lieu de purification du corps et de l'esprit, il rythme la vie des Tunisiens depuis des siècles. Le rituel comprend le gommage au gant de kessa, le savon noir à l'huile d'olive et le masque au ghassoul. Un moment de détente profonde.",
      ar: "الحمام أكثر من حمام عمومي في تونس: إنه طقس اجتماعي موروث. مكان لتطهير الجسد والروح، ينظم حياة التونسيين منذ قرون. يشمل الطقس التقشير بالكسة والصابون الأسود بزيت الزيتون وقناع الغاسول. لحظة استرخاء عميق.",
      en: "The hammam is much more than a public bath in Tunisia: it's an ancestral social ritual. A place for purifying body and spirit, it has rhythmed Tunisian life for centuries. The ritual includes scrubbing with a kessa glove, olive oil black soap, and a ghassoul mask. A moment of deep relaxation.",
    },
  },
  {
    img: mintTeaImg,
    title: { fr: "L'Art du Thé & Hospitalité", ar: "فن الشاي والضيافة", en: "Tea Culture & Hospitality" },
    text: {
      fr: "L'hospitalité tunisienne est légendaire. Chaque visite, même impromptue, commence par un thé à la menthe aux pignons de pin, symbole d'accueil et de générosité. Les cafés traditionnels, avec leurs banquettes et narguilés, sont des lieux de vie essentiels où se nouent les liens sociaux.",
      ar: "الضيافة التونسية أسطورية. كل زيارة، حتى المفاجئة، تبدأ بشاي بالنعناع والصنوبر رمز الترحيب والكرم. المقاهي التقليدية بأرائكها ونراجيلها أماكن حياة أساسية تُنسج فيها الروابط الاجتماعية.",
      en: "Tunisian hospitality is legendary. Every visit, even unannounced, begins with mint tea with pine nuts, a symbol of welcome and generosity. Traditional cafés, with their benches and hookahs, are essential social spaces where bonds are forged.",
    },
  },
];

const traditions: {
  title: Record<Lang, string>;
  text: Record<Lang, string>;
  emoji: string;
}[] = [
  {
    emoji: "🎊",
    title: { fr: "Le Mouled", ar: "المولد", en: "Mouled" },
    text: {
      fr: "La célébration de la naissance du Prophète est l'une des fêtes les plus joyeuses en Tunisie, marquée par la préparation de l'Assidat Zgougou, une crème de pignons d'Alep.",
      ar: "الاحتفال بمولد النبي من أبهج المناسبات في تونس، يتميز بتحضير عصيدة الزقوقو، كريمة بذور الصنوبر الحلبي.",
      en: "The celebration of the Prophet's birth is one of the most joyful holidays in Tunisia, marked by the preparation of Assidat Zgougou, an Aleppo pine nut cream.",
    },
  },
  {
    emoji: "💍",
    title: { fr: "Le Henné", ar: "الحنة", en: "Henna" },
    text: {
      fr: "La nuit du henné est un rituel pré-nuptial essentiel où la mariée est ornée de motifs complexes au henné naturel, symbolisant bonheur et fertilité.",
      ar: "ليلة الحناء طقس ما قبل الزفاف حيث تُزين العروس بزخارف معقدة بالحناء الطبيعي رمزاً للسعادة والخصوبة.",
      en: "Henna night is an essential pre-wedding ritual where the bride is adorned with intricate natural henna patterns, symbolizing happiness and fertility.",
    },
  },
  {
    emoji: "🎵",
    title: { fr: "Le Stambeli", ar: "الستمبالي", en: "Stambeli" },
    text: {
      fr: "Musique rituelle d'origine sub-saharienne, le Stambeli est une tradition spirituelle unique à la Tunisie, mêlant percussions, chants et transes mystiques.",
      ar: "موسيقى طقسية من أصل أفريقي، الستمبالي تقليد روحاني فريد بتونس يمزج الإيقاعات والغناء والنشوة الصوفية.",
      en: "A ritual music of sub-Saharan origin, Stambeli is a spiritual tradition unique to Tunisia, blending percussion, chanting, and mystical trances.",
    },
  },
  {
    emoji: "🫒",
    title: { fr: "La Récolte des Olives", ar: "قطف الزيتون", en: "Olive Harvest" },
    text: {
      fr: "Chaque automne, la récolte des olives rassemble familles et communautés dans un événement festif et essentiel à l'économie rurale tunisienne.",
      ar: "كل خريف، يجمع قطف الزيتون العائلات والمجتمعات في حدث احتفالي وأساسي للاقتصاد الريفي التونسي.",
      en: "Every autumn, the olive harvest brings families and communities together in a festive event essential to Tunisia's rural economy.",
    },
  },
];

const CultureSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="culture" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center mb-4">{t("culture.title")}</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
        <p className="section-subtitle mx-auto text-center mb-16">
          {lang === "fr"
            ? "Un patrimoine riche entre traditions berbères, arabes et méditerranéennes"
            : lang === "ar"
            ? "تراث غني بين التقاليد الأمازيغية والعربية والمتوسطية"
            : "A rich heritage blending Berber, Arab, and Mediterranean traditions"}
        </p>

  {/* Main culture cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cultureItems.map((item) => (
            <div key={item.titleKey} className="group rounded-2xl overflow-hidden bg-card shadow-sm border border-border/50 card-hover">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={t(item.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{t(item.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(item.textKey)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Extended culture: alternating layout */}
        <div className="space-y-16 mb-20">
          {moreItems.map((item, i) => (
            <div
              key={item.title.en}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={item.img} alt={item.title[lang]} className="w-full h-72 md:h-80 object-cover" loading="lazy" />
                </div>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{item.title[lang]}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{item.text[lang]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Traditions grid */}
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-display font-bold text-foreground mb-10 text-center">
            {lang === "fr" ? "Fêtes & Traditions" : lang === "ar" ? "الأعياد والتقاليد" : "Festivals & Traditions"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {traditions.map((t) => (
              <div key={t.title.en} className="bg-card rounded-xl p-6 border border-border/50 shadow-sm card-hover">
                <div className="text-3xl mb-3">{t.emoji}</div>
                <h4 className="text-lg font-display font-bold text-foreground mb-2">{t.title[lang]}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.text[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
