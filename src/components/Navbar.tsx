import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import tunisiaFlag from "../assets/Flag_of_Tunisia.svg";

const navItems = [
  { key: "nav.home", href: "/" },
  { key: "nav.history", href: "/history" },
  { key: "nav.culture", href: "/culture" },
  { key: "nav.food", href: "/food" },
  { key: "nav.places", href: "/places" },
  { key: "nav.gallery", href: "/gallery" },
  { key: "nav.map", href: "/map" },
  { key: "nav.contact", href: "/contact" },
];

const Navbar = () => {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const langOptions = [
    { code: "fr" as const, label: "FR" },
    { code: "ar" as const, label: "عربي" },
    { code: "en" as const, label: "EN" },
  ];

  const showSolid = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid ? "bg-card/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className={`flex items-center gap-3 font-display text-xl md:text-2xl font-bold transition-colors ${showSolid ? "text-primary" : "text-primary-foreground"}`} aria-label="Home">
<img src={tunisiaFlag} alt="Tunisia logo" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
            <span className="hidden sm:inline">Tunisia</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.href ? "bg-primary/10 text-primary" : ""
                } ${
                  showSolid
                    ? "text-foreground hover:text-primary hover:bg-muted"
                    : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/10"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className={`flex items-center gap-1 ml-4 px-2 py-1 rounded-full border ${showSolid ? "border-border" : "border-white/20"}`}>
              <Globe className="w-4 h-4" />
              {langOptions.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2 py-0.5 text-xs rounded-full transition-colors ${
                    lang === l.code
                      ? "bg-primary text-primary-foreground"
                      : showSolid
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg ${showSolid ? "text-foreground" : "text-primary-foreground"}`}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-card/98 backdrop-blur-lg border-t border-border shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-4 pt-4">
              {langOptions.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setOpen(false); }}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    lang === l.code ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
