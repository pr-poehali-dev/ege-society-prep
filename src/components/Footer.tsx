import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2024 ЕГЭ по обществознанию. Все права защищены.
        </p>
        <div className="flex gap-4">
          <Link 
            to="/about" 
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
          >
            О нас
          </Link>
          <Link 
            to="/contacts" 
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
          >
            Контакты
          </Link>
          <Link 
            to="/policy" 
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
