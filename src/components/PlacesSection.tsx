import { useLanguage } from "../contexts/LanguageContext";
import { MapPin, Star, Sun } from "lucide-react";
import beachImg from "../assets/beach-tunisia.jpg";
import saharaImg from "../assets/sahara-desert.jpg";
import soukImg from "../assets/souk-market.jpg";
import elJemImg from "../assets/el-jem.jpg";
import djerbaImg from "../assets/djerba.jpg";
import tozeurImg from "../assets/tozeur.jpg";
import kairouanImg from "../assets/kairouan.jpg";
import tabarkImg from "../assets/tabarka.jpg";
import douggaImg from "../assets/dougga.jpg";
import sidiImg from "../assets/sidi-bou-said.jpg";
import carthageImg from "../assets/carthage-ruins.jpg";

type Lang = "fr" | "ar" | "en";

const categories: {
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  places: {
    img: string;
    name: Record<Lang, string>;
    desc: Record<Lang, string>;
    location: string;
    best: Record<Lang, string>;
    rating: number;
  }[];
}[] = [
  {
    title: { fr: "🏖️ Plages & Côtes", ar: "🏖️ الشواطئ والسواحل", en: "🏖️ Beaches & Coasts" },
    desc: {
      fr: "Avec 1 300 km de côtes méditerranéennes, la Tunisie offre certaines des plus belles plages d'Afrique du Nord.",
      ar: "مع 1300 كم من السواحل المتوسطية، تقدم تونس بعض أجمل شواطئ شمال أفريقيا.",
      en: "With 1,300 km of Mediterranean coastline, Tunisia offers some of North Africa's most beautiful beaches.",
    },
    places: [
      {
        img: beachImg,
        name: { fr: "Hammamet", ar: "الحمامات", en: "Hammamet" },
        desc: {
          fr: "Station balnéaire par excellence, Hammamet séduit par ses plages de sable fin, sa médina historique et ses jardins de jasmin. La ville abrite aussi le Festival International de Hammamet, l'un des plus anciens festivals de la Méditerranée.",
          ar: "المنتجع الشاطئي بامتياز، تأسر الحمامات بشواطئها الرملية الناعمة ومدينتها العتيقة وحدائق الياسمين. تستضيف المدينة أيضاً مهرجان الحمامات الدولي، أحد أقدم مهرجانات البحر المتوسط.",
          en: "The quintessential seaside resort, Hammamet captivates with its fine sandy beaches, historic medina, and jasmine gardens. The city also hosts the International Festival of Hammamet, one of the Mediterranean's oldest festivals.",
        },
        location: "Cap Bon",
        best: { fr: "Mai - Octobre", ar: "مايو - أكتوبر", en: "May - October" },
        rating: 4.7,
      },
      {
        img: djerbaImg,
        name: { fr: "Île de Djerba", ar: "جزيرة جربة", en: "Djerba Island" },
        desc: {
          fr: "L'île des rêves, Djerba est un paradis où se mêlent plages turquoise, architecture blanche et traditions millénaires. Ne manquez pas la synagogue de la Ghriba, l'une des plus anciennes du monde, et le street art de Djerbahood.",
          ar: "جزيرة الأحلام، جربة هي جنة تمتزج فيها الشواطئ الفيروزية والعمارة البيضاء والتقاليد الألفية. لا تفوتوا كنيس الغريبة، أحد أقدم الكنس في العالم، والفن الحضري في جربة هود.",
          en: "The island of dreams, Djerba is a paradise where turquoise beaches, white architecture, and ancient traditions blend. Don't miss the El Ghriba synagogue, one of the world's oldest, and the street art of Djerbahood.",
        },
        location: "Sud-Est",
        best: { fr: "Avril - Novembre", ar: "أبريل - نوفمبر", en: "April - November" },
        rating: 4.8,
      },
      {
        img: tabarkImg,
        name: { fr: "Tabarka", ar: "طبرقة", en: "Tabarka" },
        desc: {
          fr: "Nichée entre montagne et mer, Tabarka surprend par ses falaises rouges, ses forêts de chênes-lièges et ses fonds marins exceptionnels. C'est aussi la capitale du corail et accueille chaque été un festival de jazz renommé.",
          ar: "تقع بين الجبل والبحر، تفاجئ طبرقة بمنحدراتها الحمراء وغاباتها من البلوط الفليني وأعماقها البحرية الاستثنائية. إنها أيضاً عاصمة المرجان وتستضيف كل صيف مهرجان جاز مشهور.",
          en: "Nestled between mountain and sea, Tabarka surprises with its red cliffs, cork oak forests, and exceptional diving spots. It's also the coral capital and hosts a renowned jazz festival every summer.",
        },
        location: "Nord-Ouest",
        best: { fr: "Juin - Septembre", ar: "يونيو - سبتمبر", en: "June - September" },
        rating: 4.5,
      },
    ],
  },
  {
    title: { fr: "🏜️ Sahara & Oasis", ar: "🏜️ الصحراء والواحات", en: "🏜️ Sahara & Oases" },
    desc: {
      fr: "Le sud tunisien offre une immersion inoubliable dans le grand Sahara, entre dunes dorées, oasis luxuriantes et villages troglodytes.",
      ar: "يقدم جنوب تونس تجربة لا تُنسى في الصحراء الكبرى، بين الكثبان الذهبية والواحات الخضراء والقرى الكهفية.",
      en: "Southern Tunisia offers an unforgettable immersion in the great Sahara, between golden dunes, lush oases, and troglodyte villages.",
    },
    places: [
      {
        img: saharaImg,
        name: { fr: "Douz - Porte du Sahara", ar: "دوز - بوابة الصحراء", en: "Douz - Gateway to the Sahara" },
        desc: {
          fr: "Surnommée la 'Porte du Sahara', Douz est le point de départ idéal pour une aventure dans le désert. Méharées à dos de dromadaire, nuits sous les étoiles, et le célèbre Festival du Sahara en décembre.",
          ar: "تُلقب ببوابة الصحراء، دوز هي نقطة الانطلاق المثالية لمغامرة في الصحراء. رحلات على ظهور الجمال، ليالٍ تحت النجوم، ومهرجان الصحراء الشهير في ديسمبر.",
          en: "Nicknamed the 'Gateway to the Sahara', Douz is the ideal starting point for a desert adventure. Camel treks, nights under the stars, and the famous Sahara Festival in December.",
        },
        location: "Kébili",
        best: { fr: "Octobre - Mars", ar: "أكتوبر - مارس", en: "October - March" },
        rating: 4.9,
      },
      {
        img: tozeurImg,
        name: { fr: "Tozeur", ar: "توزر", en: "Tozeur" },
        desc: {
          fr: "Joyau du sud, Tozeur fascine avec son oasis de plus de 400 000 palmiers, son architecture en briques traditionnelles et le Chott el Jérid, le plus grand lac salé du Sahara. C'est aussi un lieu de tournage de Star Wars !",
          ar: "جوهرة الجنوب، تبهر توزر بواحتها التي تضم أكثر من 400,000 نخلة، وعمارتها بالطوب التقليدي وشط الجريد، أكبر بحيرة ملحية في الصحراء. إنها أيضاً موقع تصوير حرب النجوم!",
          en: "Jewel of the south, Tozeur fascinates with its oasis of over 400,000 palm trees, traditional brick architecture, and Chott el Jerid, the Sahara's largest salt lake. It's also a Star Wars filming location!",
        },
        location: "Sud-Ouest",
        best: { fr: "Octobre - Avril", ar: "أكتوبر - أبريل", en: "October - April" },
        rating: 4.8,
      },
    ],
  },
  {
    title: { fr: "🕌 Médinas & Patrimoine", ar: "🕌 المدن العتيقة والتراث", en: "🕌 Medinas & Heritage" },
    desc: {
      fr: "Les médinas tunisiennes sont des labyrinthes vivants, classées au patrimoine mondial de l'UNESCO, où artisanat, commerce et vie quotidienne s'entremêlent.",
      ar: "المدن العتيقة التونسية متاهات حية مصنفة ضمن التراث العالمي لليونسكو، حيث تتشابك الحرف والتجارة والحياة اليومية.",
      en: "Tunisian medinas are living labyrinths, UNESCO World Heritage sites where craftsmanship, commerce, and daily life intertwine.",
    },
    places: [
      {
        img: soukImg,
        name: { fr: "Médina de Tunis", ar: "مدينة تونس العتيقة", en: "Medina of Tunis" },
        desc: {
          fr: "Fondée au VIIe siècle, la médina de Tunis est un trésor classé à l'UNESCO. Ses 700 monuments, dont la mosquée Zitouna, ses souks parfumés d'épices et d'encens, et ses palais cachés en font un labyrinthe enchanteur.",
          ar: "تأسست في القرن السابع، مدينة تونس العتيقة كنز مصنف لدى اليونسكو. معالمها الـ 700، بما فيها جامع الزيتونة، وأسواقها المعطرة بالتوابل والبخور، وقصورها المخفية تجعلها متاهة ساحرة.",
          en: "Founded in the 7th century, the Medina of Tunis is a UNESCO-listed treasure. Its 700 monuments, including the Zitouna Mosque, spice-scented souks, and hidden palaces make it an enchanting labyrinth.",
        },
        location: "Tunis",
        best: { fr: "Toute l'année", ar: "طوال السنة", en: "Year-round" },
        rating: 4.6,
      },
      {
        img: sidiImg,
        name: { fr: "Sidi Bou Said", ar: "سيدي بو سعيد", en: "Sidi Bou Said" },
        desc: {
          fr: "Le village bleu et blanc le plus photographié de Tunisie. Perché sur une colline surplombant le golfe de Tunis, Sidi Bou Said est un bijou architectural avec ses portes bleues cloutées, ses cafés panoramiques et son ambiance bohème.",
          ar: "أكثر قرية زرقاء وبيضاء تصويراً في تونس. يتربع سيدي بو سعيد على تلة تطل على خليج تونس، وهو جوهرة معمارية بأبوابه الزرقاء المسمّرة ومقاهيه البانورامية وأجوائه البوهيمية.",
          en: "Tunisia's most photographed blue-and-white village. Perched on a hill overlooking the Gulf of Tunis, Sidi Bou Said is an architectural gem with its studded blue doors, panoramic cafés, and bohemian atmosphere.",
        },
        location: "Grand Tunis",
        best: { fr: "Mars - Novembre", ar: "مارس - نوفمبر", en: "March - November" },
        rating: 4.9,
      },
      {
        img: kairouanImg,
        name: { fr: "Kairouan", ar: "القيروان", en: "Kairouan" },
        desc: {
          fr: "Quatrième ville sainte de l'Islam, Kairouan est un haut lieu spirituel et culturel. Sa Grande Mosquée, fondée en 670, est un chef-d'œuvre architectural. La ville est aussi célèbre pour ses makrouds et son artisanat de tapis.",
          ar: "رابع مدينة مقدسة في الإسلام، القيروان مركز روحي وثقافي عظيم. جامعها الكبير المؤسس عام 670 تحفة معمارية. تشتهر المدينة أيضاً بمقروضها وحرفة صناعة الزرابي.",
          en: "The fourth holiest city in Islam, Kairouan is a major spiritual and cultural center. Its Great Mosque, founded in 670, is an architectural masterpiece. The city is also famous for its makroud pastries and carpet craftsmanship.",
        },
        location: "Centre",
        best: { fr: "Mars - Mai, Sept - Nov", ar: "مارس - مايو، سبتمبر - نوفمبر", en: "Mar - May, Sep - Nov" },
        rating: 4.7,
      },
    ],
  },
  {
    title: { fr: "🏛️ Sites Archéologiques", ar: "🏛️ المواقع الأثرية", en: "🏛️ Archaeological Sites" },
    desc: {
      fr: "La Tunisie possède huit sites classés au patrimoine mondial de l'UNESCO, témoins de civilisations millénaires.",
      ar: "تملك تونس ثمانية مواقع مصنفة ضمن التراث العالمي لليونسكو، شاهدة على حضارات آلاف السنين.",
      en: "Tunisia has eight UNESCO World Heritage sites, witnesses to millennia-old civilizations.",
    },
    places: [
      {
        img: elJemImg,
        name: { fr: "Amphithéâtre d'El Jem", ar: "مدرج الجم", en: "El Jem Amphitheater" },
        desc: {
          fr: "Troisième plus grand amphithéâtre romain du monde, El Jem rivalise avec le Colisée de Rome. Construit au IIIe siècle, il pouvait accueillir 35 000 spectateurs. Son état de conservation exceptionnel en fait l'un des monuments les plus impressionnants d'Afrique.",
          ar: "ثالث أكبر مدرج روماني في العالم، يُنافس الجم كولوسيوم روما. بُني في القرن الثالث ويمكنه استيعاب 35,000 متفرج. حالته الاستثنائية تجعله أحد أكثر المعالم إبهاراً في أفريقيا.",
          en: "The third-largest Roman amphitheater in the world, El Jem rivals Rome's Colosseum. Built in the 3rd century, it could hold 35,000 spectators. Its exceptional preservation makes it one of Africa's most impressive monuments.",
        },
        location: "Mahdia",
        best: { fr: "Toute l'année", ar: "طوال السنة", en: "Year-round" },
        rating: 4.9,
      },
      {
        img: carthageImg,
        name: { fr: "Carthage", ar: "قرطاج", en: "Carthage" },
        desc: {
          fr: "Ancienne rivale de Rome, Carthage est un site archéologique majeur qui s'étend sur plusieurs collines surplombant la Méditerranée. Visitez les thermes d'Antonin, le tophet punique, les ports antiques et le musée national.",
          ar: "منافسة روما القديمة، قرطاج موقع أثري رئيسي يمتد على عدة تلال تطل على البحر المتوسط. زوروا حمامات أنطونين والتوفة البونيقية والموانئ القديمة والمتحف الوطني.",
          en: "Ancient rival of Rome, Carthage is a major archaeological site stretching across several hills overlooking the Mediterranean. Visit the Antonine Baths, the Punic Tophet, ancient ports, and the national museum.",
        },
        location: "Grand Tunis",
        best: { fr: "Toute l'année", ar: "طوال السنة", en: "Year-round" },
        rating: 4.7,
      },
      {
        img: douggaImg,
        name: { fr: "Dougga", ar: "دقة", en: "Dougga" },
        desc: {
          fr: "Considéré comme le site archéologique le mieux préservé d'Afrique du Nord, Dougga offre un panorama complet d'une cité romaine : théâtre, capitole, temples, thermes et arcs de triomphe. Classé UNESCO depuis 1997.",
          ar: "يُعتبر الموقع الأثري الأفضل حفظاً في شمال أفريقيا، يقدم دقة بانوراما كاملة لمدينة رومانية: مسرح وكابيتول ومعابد وحمامات وأقواس نصر. مصنف من اليونسكو منذ 1997.",
          en: "Considered North Africa's best-preserved archaeological site, Dougga offers a complete panorama of a Roman city: theater, capitol, temples, baths, and triumphal arches. UNESCO-listed since 1997.",
        },
        location: "Béja",
        best: { fr: "Mars - Juin, Sept - Nov", ar: "مارس - يونيو، سبتمبر - نوفمبر", en: "Mar - Jun, Sep - Nov" },
        rating: 4.8,
      },
    ],
  },
];

const PlacesSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="places" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center mb-4">{t("places.title")}</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
        <p className="section-subtitle mx-auto text-center mb-16">
          {lang === "fr"
            ? "De la Méditerranée au Sahara, explorez les trésors de la Tunisie"
            : lang === "ar"
            ? "من البحر المتوسط إلى الصحراء، استكشفوا كنوز تونس"
            : "From the Mediterranean to the Sahara, explore Tunisia's treasures"}
        </p>

        <div className="space-y-24">
          {categories.map((cat) => (
            <div key={cat.title.en}>
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                  {cat.title[lang]}
                </h3>
                <p className="text-muted-foreground text-lg max-w-3xl">{cat.desc[lang]}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.places.map((place) => (
                  <div key={place.name.en} className="group rounded-2xl overflow-hidden bg-card shadow-sm border border-border/50 card-hover flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={place.img}
                        alt={place.name[lang]}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                        <span className="text-primary-foreground text-sm font-semibold">{place.rating}</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h4 className="text-xl font-display font-bold text-foreground mb-2">{place.name[lang]}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{place.desc[lang]}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1 bg-muted px-2.5 py-1 rounded-full">
                          <MapPin className="w-3 h-3" /> {place.location}
                        </span>
                        <span className="flex items-center gap-1 bg-muted px-2.5 py-1 rounded-full">
                          <Sun className="w-3 h-3" /> {place.best[lang]}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fun facts */}
        <div className="mt-24 bg-primary/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            {lang === "fr" ? "🌟 Le saviez-vous ?" : lang === "ar" ? "🌟 هل تعلم؟" : "🌟 Did you know?"}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "8", label: { fr: "Sites UNESCO", ar: "مواقع يونسكو", en: "UNESCO Sites" } },
              { num: "1300 km", label: { fr: "de côtes", ar: "من السواحل", en: "of coastline" } },
              { num: "3000+", label: { fr: "ans d'histoire", ar: "سنة من التاريخ", en: "years of history" } },
              { num: "12M", label: { fr: "habitants", ar: "نسمة", en: "inhabitants" } },
            ].map((fact) => (
              <div key={fact.label.en} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">{fact.num}</div>
                <div className="text-muted-foreground mt-1">{fact.label[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacesSection;
