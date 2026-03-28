import { useLanguage } from "../contexts/LanguageContext";
import carthageImg from "../assets/carthage-ruins.jpg";
import elJemImg from "../assets/el-jem.jpg";
import mosqueImg from "../assets/mosque.jpg";
import kairouanImg from "../assets/kairouan.jpg";
import douggaImg from "../assets/dougga.jpg";
import sidiImg from "../assets/sidi-bou-said.jpg";

type Lang = "fr" | "ar" | "en";

const timeline: {
  titleKey: string;
  textKey: string;
  img: string | null;
  year: string;
  extra?: Record<Lang, string>;
}[] = [
  {
    titleKey: "history.carthage.title",
    textKey: "history.carthage.text",
    img: carthageImg,
    year: "814 av. J.-C.",
    extra: {
      fr: "Carthage dominait le commerce maritime de toute la Méditerranée occidentale. La légendaire reine Didon (Elyssa) aurait fondé la ville. L'empire carthaginois s'étendait de l'Espagne à la Libye, et le grand général Hannibal Barca a traversé les Alpes avec ses éléphants pour affronter Rome dans les guerres puniques.",
      ar: "سيطرت قرطاج على التجارة البحرية في كل غرب المتوسط. يُقال إن الملكة الأسطورية ديدون (عليسة) أسست المدينة. امتدت الإمبراطورية القرطاجية من إسبانيا إلى ليبيا، وعبر القائد الكبير حنبعل جبال الألب بأفياله لمواجهة روما في الحروب البونيقية.",
      en: "Carthage dominated maritime trade across the entire western Mediterranean. The legendary Queen Dido (Elyssa) is said to have founded the city. The Carthaginian empire stretched from Spain to Libya, and the great general Hannibal Barca crossed the Alps with his elephants to confront Rome in the Punic Wars.",
    },
  },
  {
    titleKey: "history.roman.title",
    textKey: "history.roman.text",
    img: elJemImg,
    year: "146 av. J.-C.",
    extra: {
      fr: "Sous Rome, la Tunisie (Africa Proconsularis) devint le 'grenier à blé de Rome'. Le pays se couvrit de villes prospères, de routes, d'aqueducs et de monuments spectaculaires. Les mosaïques romaines trouvées en Tunisie, conservées au Musée du Bardo, constituent la plus grande collection au monde.",
      ar: "تحت حكم روما أصبحت تونس (أفريقيا البروقنصلية) 'سلة خبز روما'. غُطيت البلاد بمدن مزدهرة وطرق وقنوات مائية ومعالم مذهلة. فسيفساء رومانية وُجدت في تونس ومحفوظة بمتحف باردو تُشكل أكبر مجموعة في العالم.",
      en: "Under Rome, Tunisia (Africa Proconsularis) became the 'breadbasket of Rome'. The country was covered with prosperous cities, roads, aqueducs, and spectacular monuments. Roman mosaics found in Tunisia, preserved at the Bardo Museum, constitute the world's largest collection.",
    },
  },
  {
    titleKey: "history.islamic.title",
    textKey: "history.islamic.text",
    img: kairouanImg,
    year: "670",
    extra: {
      fr: "Kairouan devint la première capitale de l'Islam en Afrique du Nord et un centre majeur de savoir islamique. La dynastie aghlabide construisit des bassins monumentaux et des mosquées. Les Zirides et les Hafsides firent de la Tunisie un carrefour culturel et commercial entre Orient et Occident.",
      ar: "أصبحت القيروان أول عاصمة للإسلام في شمال أفريقيا ومركزاً رئيسياً للعلم الإسلامي. بنت الدولة الأغلبية أحواضاً ضخمة ومساجد. جعل الزيريون والحفصيون تونس ملتقى ثقافياً وتجارياً بين الشرق والغرب.",
      en: "Kairouan became the first capital of Islam in North Africa and a major center of Islamic learning. The Aghlabid dynasty built monumental basins and mosques. The Zirids and Hafsids made Tunisia a cultural and commercial crossroads between East and West.",
    },
  },
  {
    titleKey: "history.ottoman.title" as string,
    textKey: "history.ottoman.text" as string,
    img: mosqueImg,
    year: "1574",
    extra: {
      fr: "La période ottomane a laissé une empreinte architecturale et culturelle profonde. Les beys de Tunis ont joui d'une large autonomie, développant le commerce, l'artisanat et les arts. Les palais beylicaux, les mosquées hanéfites et les souks couverts témoignent de cette époque raffinée.",
      ar: "تركت الفترة العثمانية بصمة معمارية وثقافية عميقة. تمتع بايات تونس باستقلالية واسعة وطوروا التجارة والحرف والفنون. تشهد القصور البايلكية والمساجد الحنفية والأسواق المسقوفة على هذا العصر الراقي.",
      en: "The Ottoman period left a deep architectural and cultural imprint. The Beys of Tunis enjoyed broad autonomy, developing commerce, craftsmanship, and arts. Beylical palaces, Hanafi mosques, and covered souks testify to this refined era.",
    },
  },
  {
    titleKey: "history.colonial.title" as string,
    textKey: "history.colonial.text" as string,
    img: sidiImg,
    year: "1881",
    extra: {
      fr: "Le protectorat français a modernisé les infrastructures mais aussi provoqué un fort mouvement national. Des figures comme Habib Bourguiba ont mené la lutte pour l'indépendance, obtenue le 20 mars 1956. Cette date est célébrée chaque année comme Fête de l'Indépendance.",
      ar: "حدّث الاستعمار الفرنسي البنية التحتية لكنه أثار أيضاً حركة وطنية قوية. قادت شخصيات مثل الحبيب بورقيبة النضال من أجل الاستقلال الذي تحقق في 20 مارس 1956. يُحتفل بهذا التاريخ كل عام كعيد الاستقلال.",
      en: "The French protectorate modernized infrastructure but also sparked a strong national movement. Figures like Habib Bourguiba led the struggle for independence, achieved on March 20, 1956. This date is celebrated annually as Independence Day.",
    },
  },
  {
    titleKey: "history.modern.title",
    textKey: "history.modern.text",
    img: douggaImg,
    year: "1956",
    extra: {
      fr: "Depuis l'indépendance, la Tunisie a été pionnière en matière de droits des femmes dans le monde arabe grâce au Code du Statut Personnel de 1956. La révolution de 2011, première du Printemps arabe, a ouvert la voie à la démocratie. Aujourd'hui, la Tunisie rayonne par sa culture, son tourisme et sa jeunesse créative.",
      ar: "منذ الاستقلال، كانت تونس رائدة في حقوق المرأة بالعالم العربي بفضل مجلة الأحوال الشخصية 1956. ثورة 2011، أولى ثورات الربيع العربي، فتحت الطريق نحو الديمقراطية. اليوم تتألق تونس بثقافتها وسياحتها وشبابها المبدع.",
      en: "Since independence, Tunisia has been a pioneer in women's rights in the Arab world thanks to the 1956 Personal Status Code. The 2011 revolution, the first of the Arab Spring, paved the way to democracy. Today, Tunisia shines through its culture, tourism, and creative youth.",
    },
  },
];

// Add missing translation keys inline
const extraTranslations: Record<string, Record<Lang, string>> = {
  "history.ottoman.title": { fr: "La Période Ottomane", ar: "الفترة العثمانية", en: "The Ottoman Period" },
  "history.ottoman.text": {
    fr: "Sous les Ottomans, la Tunisie connut une période de relative autonomie et de prospérité culturelle sous les dynasties beylicales.",
    ar: "تحت الحكم العثماني، عرفت تونس فترة استقلالية نسبية وازدهار ثقافي تحت الدول البايلكية.",
    en: "Under the Ottomans, Tunisia experienced a period of relative autonomy and cultural prosperity under the beylical dynasties.",
  },
  "history.colonial.title": { fr: "Le Protectorat Français", ar: "الحماية الفرنسية", en: "The French Protectorate" },
  "history.colonial.text": {
    fr: "En 1881, la France établit un protectorat sur la Tunisie, période qui dura jusqu'à l'indépendance en 1956.",
    ar: "عام 1881 أقامت فرنسا الحماية على تونس، وهي فترة استمرت حتى الاستقلال عام 1956.",
    en: "In 1881, France established a protectorate over Tunisia, a period that lasted until independence in 1956.",
  },
};

const HistorySection = () => {
  const { t: translate, lang } = useLanguage();

  const t = (key: string) => {
    if (extraTranslations[key]) return extraTranslations[key][lang];
    return translate(key);
  };

  return (
    <section id="history" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-4">{t("history.title")}</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
        <p className="section-subtitle mx-auto text-center mb-16">
          {lang === "fr"
            ? "Plus de 3 000 ans d'une histoire riche et fascinante"
            : lang === "ar"
            ? "أكثر من 3000 سنة من التاريخ الغني والمذهل"
            : "Over 3,000 years of rich and fascinating history"}
        </p>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-16">
            {timeline.map((item, i) => (
              <div key={item.titleKey} className={`relative flex flex-col md:flex-row items-start gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background z-10 shadow-md shadow-primary/20" />

                <div className={`md:w-1/2 pl-10 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="inline-block text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">{item.year}</span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mt-1">{t(item.titleKey)}</h3>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{t(item.textKey)}</p>
                  {item.extra && (
                    <p className="text-muted-foreground/80 mt-3 leading-relaxed text-sm">{item.extra[lang]}</p>
                  )}
                </div>

                <div className="md:w-1/2 pl-10 md:pl-12">
                      {item.img && (
                        <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden shadow-lg card-hover">
                          <img 
                            src={item.img!} 
                            alt={t(item.titleKey)} 
                            className="w-full h-full object-cover" 
                            loading="lazy" 
                          />
                        </div>
                      )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key figures */}
        <div className="mt-24 bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-sm">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            {lang === "fr" ? "Personnages Historiques Clés" : lang === "ar" ? "شخصيات تاريخية بارزة" : "Key Historical Figures"}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Hannibal Barca",
                period: "247-183 av. J.-C.",
                desc: { fr: "Général carthaginois légendaire qui traversa les Alpes", ar: "القائد القرطاجي الأسطوري الذي عبر جبال الألب", en: "Legendary Carthaginian general who crossed the Alps" },
              },
              {
                name: "Ibn Khaldoun",
                period: "1332-1406",
                desc: { fr: "Père de la sociologie et de l'historiographie moderne", ar: "أبو علم الاجتماع والتأريخ الحديث", en: "Father of sociology and modern historiography" },
              },
              {
                name: "Habib Bourguiba",
                period: "1903-2000",
                desc: { fr: "Père de l'indépendance et premier président de la Tunisie", ar: "أب الاستقلال وأول رئيس لتونس", en: "Father of independence and first president of Tunisia" },
              },
              {
                name: "Tahar Haddad",
                period: "1899-1935",
                desc: { fr: "Réformiste pionnier des droits des femmes tunisiennes", ar: "إصلاحي رائد في حقوق المرأة التونسية", en: "Pioneering reformist for Tunisian women's rights" },
              },
            ].map((person) => (
              <div key={person.name} className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center text-2xl font-display font-bold text-primary">
                  {person.name[0]}
                </div>
                <h4 className="font-display font-bold text-foreground">{person.name}</h4>
                <p className="text-primary text-xs font-semibold mt-1">{person.period}</p>
                <p className="text-muted-foreground text-sm mt-2">{person.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
