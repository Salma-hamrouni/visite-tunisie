import { useLanguage } from "../contexts/LanguageContext";
import couscousImg from "../assets/couscous.jpg";
import brikImg from "../assets/brik.jpg";
import lablabiImg from "../assets/lablabi.jpg";
import ojjaImg from "../assets/ojja.jpg";
import makroudImg from "../assets/makroud.jpg";
import mintTeaImg from "../assets/mint-tea.jpg";
import harissaImg from "../assets/harissa.jpg";
import bambalouniImg from "../assets/bambalouni.jpg";

type Lang = "fr" | "ar" | "en";

const dishes: {
  img: string;
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
  category: Record<Lang, string>;
}[] = [
  {
    img: couscousImg,
    name: { fr: "Couscous", ar: "كسكسي", en: "Couscous" },
    category: { fr: "Plat principal", ar: "طبق رئيسي", en: "Main dish" },
    desc: {
      fr: "Le plat national par excellence, servi chaque vendredi en famille. La semoule est roulée à la main et cuite à la vapeur, accompagnée de légumes de saison, de viande d'agneau ou de poisson selon les régions. Chaque famille a sa propre recette secrète.",
      ar: "الطبق الوطني بامتياز، يُقدّم كل جمعة مع العائلة. يُلف السميد باليد ويُطهى على البخار مع خضروات الموسم ولحم الغنم أو السمك حسب المناطق. لكل عائلة وصفتها السرية.",
      en: "The quintessential national dish, served every Friday with family. The semolina is hand-rolled and steamed, accompanied by seasonal vegetables and lamb or fish depending on the region. Every family has their own secret recipe.",
    },
  },
  {
    img: brikImg,
    name: { fr: "Brik à l'œuf", ar: "بريك بالبيض", en: "Brik" },
    category: { fr: "Entrée", ar: "مقبلات", en: "Starter" },
    desc: {
      fr: "Incontournable de la cuisine tunisienne, le brik est une feuille de malsouka croustillante garnie d'un œuf coulant, de thon, de câpres et de persil. L'art est de le manger sans faire couler le jaune ! C'est le roi des entrées du Ramadan.",
      ar: "ضرورة في المطبخ التونسي، البريك ورقة ملسوقة مقرمشة محشوة ببيضة سائلة وتونة وكبار وبقدونس. الفن هو أكله دون سيلان الصفار! إنه ملك مقبلات رمضان.",
      en: "A must-have of Tunisian cuisine, brik is a crispy malsouka pastry filled with a runny egg, tuna, capers, and parsley. The art is eating it without spilling the yolk! It's the king of Ramadan starters.",
    },
  },
  {
    img: lablabiImg,
    name: { fr: "Lablabi", ar: "لبلابي", en: "Lablabi" },
    category: { fr: "Plat principal", ar: "طبق رئيسي", en: "Main dish" },
    desc: {
      fr: "Le petit-déjeuner populaire des Tunisiens, surtout en hiver. Une soupe de pois chiches épicée servie sur du pain rassis, assaisonnée de harissa, cumin, huile d'olive et ail. Un plat réconfortant et nourrissant qui coûte presque rien.",
      ar: "فطور الشعب التونسي، خاصة في الشتاء. حساء حمص متبل يُقدم على خبز يابس مع الهريسة والكمون وزيت الزيتون والثوم. طبق مريح ومغذي بتكلفة زهيدة.",
      en: "The popular Tunisian breakfast, especially in winter. A spiced chickpea soup served over stale bread, seasoned with harissa, cumin, olive oil, and garlic. A comforting and nourishing dish that costs almost nothing.",
    },
  },
  {
    img: ojjaImg,
    name: { fr: "Ojja", ar: "عجة", en: "Ojja" },
    category: { fr: "Plat principal", ar: "طبق رئيسي", en: "Main dish" },
    desc: {
      fr: "Des œufs pochés dans une sauce tomate épicée aux poivrons, merguez ou crevettes. Ce plat convivial se partage directement dans la poêle avec du pain frais. C'est un classique des repas entre amis.",
      ar: "بيض مسلوق في صلصة طماطم حارة مع الفلفل والمرقاز أو الجمبري. هذا الطبق الجماعي يُتقاسم مباشرة من المقلاة مع الخبز الطازج. إنه كلاسيكي وجبات الأصدقاء.",
      en: "Eggs poached in a spicy tomato sauce with peppers, merguez, or shrimp. This convivial dish is shared directly from the pan with fresh bread. It's a classic for meals among friends.",
    },
  },
  {
    img: harissaImg,
    name: { fr: "Harissa", ar: "هريسة", en: "Harissa" },
    category: { fr: "Condiment", ar: "بهارات", en: "Condiment" },
    desc: {
      fr: "L'âme de la cuisine tunisienne ! Cette pâte de piments rouges séchés, d'ail, de carvi et d'huile d'olive accompagne presque tous les plats. Inscrite au patrimoine immatériel de l'UNESCO en 2022, elle est bien plus qu'un condiment : c'est une identité.",
      ar: "روح المطبخ التونسي! معجون الفلفل الأحمر المجفف والثوم والكراوية وزيت الزيتون يرافق تقريباً كل الأطباق. مسجلة في التراث اللامادي لليونسكو عام 2022، هي أكثر من بهار: إنها هوية.",
      en: "The soul of Tunisian cuisine! This paste of dried red peppers, garlic, caraway, and olive oil accompanies almost every dish. Listed as UNESCO Intangible Heritage in 2022, it's more than a condiment—it's an identity.",
    },
  },
  {
    img: mintTeaImg,
    name: { fr: "Thé à la Menthe", ar: "شاي بالنعناع", en: "Mint Tea" },
    category: { fr: "Boisson", ar: "مشروب", en: "Beverage" },
    desc: {
      fr: "Rituel d'hospitalité par excellence, le thé vert à la menthe garni de pignons de pin est servi à toute heure. C'est plus qu'une boisson : c'est un moment de partage et de convivialité qui symbolise l'accueil tunisien.",
      ar: "طقس الضيافة بامتياز، الشاي الأخضر بالنعناع المزين بالصنوبر يُقدم في كل وقت. هو أكثر من مشروب: إنه لحظة مشاركة وتآلف ترمز إلى الضيافة التونسية.",
      en: "The quintessential hospitality ritual, green mint tea garnished with pine nuts is served at all hours. It's more than a drink: it's a moment of sharing and conviviality that symbolizes Tunisian welcome.",
    },
  },
  {
    img: makroudImg,
    name: { fr: "Makroud", ar: "مقروض", en: "Makroud" },
    category: { fr: "Pâtisserie", ar: "حلويات", en: "Pastry" },
    desc: {
      fr: "Emblème de Kairouan, le makroud est un losange de semoule fourré de pâte de dattes et frit dans l'huile avant d'être plongé dans le miel. Chaque bouchée est un voyage entre le croquant de la semoule et le fondant des dattes.",
      ar: "رمز القيروان، المقروض معين من السميد محشو بعجينة التمر ومقلي في الزيت قبل غمسه في العسل. كل لقمة رحلة بين قرمشة السميد وطراوة التمر.",
      en: "Emblem of Kairouan, makroud is a diamond-shaped semolina pastry stuffed with date paste, fried in oil, then dipped in honey. Every bite is a journey between the crunch of semolina and the softness of dates.",
    },
  },
  {
    img: bambalouniImg,
    name: { fr: "Bambalouni", ar: "بمبلوني", en: "Bambalouni" },
    category: { fr: "Street food", ar: "أكل الشارع", en: "Street food" },
    desc: {
      fr: "Le donut tunisien ! Ce beignet en forme d'anneau, frit à la perfection et saupoudré de sucre, est le roi du street food tunisien. On le déguste chaud sur les plages et dans les marchés, un pur moment de gourmandise.",
      ar: "الدونات التونسي! هذا الكعك الدائري المقلي بإتقان والمرشوش بالسكر هو ملك أكل الشارع التونسي. يُتذوق ساخناً على الشواطئ وفي الأسواق، لحظة تلذذ خالصة.",
      en: "The Tunisian donut! This ring-shaped fritter, fried to perfection and dusted with sugar, is the king of Tunisian street food. Enjoyed hot on beaches and in markets, a pure moment of indulgence.",
    },
  },
];

const FoodSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="food" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">{t("food.title")}</h2>
          <p className="section-subtitle mx-auto mt-4">{t("food.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dishes.map((dish) => (
            <div key={dish.name.en} className="group rounded-2xl overflow-hidden bg-card shadow-sm border border-border/50 card-hover flex flex-col">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name[lang]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 glass rounded-full px-3 py-1">
                  <span className="text-primary-foreground text-xs font-medium">{dish.category[lang]}</span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{dish.name[lang]}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{dish.desc[lang]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Culinary tips */}
        <div className="mt-20 bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-sm">
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
            {lang === "fr" ? "🍽️ Conseils Gourmands" : lang === "ar" ? "🍽️ نصائح تذوقية" : "🍽️ Foodie Tips"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                {lang === "fr" ? "Marchés locaux" : lang === "ar" ? "الأسواق المحلية" : "Local Markets"}
              </h4>
              <p>
                {lang === "fr"
                  ? "Visitez les marchés centraux de chaque ville pour découvrir les produits frais, épices et huile d'olive de première qualité. Le Marché Central de Tunis est un incontournable."
                  : lang === "ar"
                  ? "زوروا الأسواق المركزية في كل مدينة لاكتشاف المنتجات الطازجة والتوابل وزيت الزيتون الممتاز. السوق المركزي بتونس لا بد منه."
                  : "Visit central markets in each city to discover fresh produce, spices, and premium olive oil. Tunis Central Market is a must-visit."}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                {lang === "fr" ? "Huile d'olive tunisienne" : lang === "ar" ? "زيت الزيتون التونسي" : "Tunisian Olive Oil"}
              </h4>
              <p>
                {lang === "fr"
                  ? "La Tunisie est le 4e producteur mondial d'huile d'olive. Goûtez l'huile extra vierge de la région de Sfax ou du Cap Bon pour une expérience gustative unique."
                  : lang === "ar"
                  ? "تونس رابع منتج لزيت الزيتون في العالم. تذوقوا زيت الزيتون البكر الممتاز من منطقة صفاقس أو الوطن القبلي لتجربة ذوقية فريدة."
                  : "Tunisia is the world's 4th largest olive oil producer. Taste the extra virgin olive oil from the Sfax or Cap Bon regions for a unique flavor experience."}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                {lang === "fr" ? "Restaurants traditionnels" : lang === "ar" ? "المطاعم التقليدية" : "Traditional Restaurants"}
              </h4>
              <p>
                {lang === "fr"
                  ? "Pour une expérience authentique, privilégiez les 'gargotes' et restaurants populaires où les Tunisiens mangent au quotidien. Les meilleurs plats sont souvent les plus simples."
                  : lang === "ar"
                  ? "لتجربة أصيلة، فضّلوا المطاعم الشعبية حيث يأكل التونسيون يومياً. أفضل الأطباق غالباً ما تكون الأبسط."
                  : "For an authentic experience, choose popular eateries where Tunisians eat daily. The best dishes are often the simplest."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
