import { useLanguage } from "../contexts/LanguageContext";


const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground/80 py-12">
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm">
          © 2026 Discover Tunisia. {t("footer.rights")}.
        </div>
    </footer>
  );
};

export default Footer;
