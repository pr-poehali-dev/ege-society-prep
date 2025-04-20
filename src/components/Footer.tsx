import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold mb-4">ЕГЭ по обществознанию</h3>
          <p className="text-muted-foreground">
            Качественная подготовка к экзамену с опытными преподавателями
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Навигация</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-primary">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/topics" className="text-muted-foreground hover:text-primary">
                Темы
              </Link>
            </li>
            <li>
              <Link to="/tasks" className="text-muted-foreground hover:text-primary">
                Задания
              </Link>
            </li>
            <li>
              <Link to="/resources" className="text-muted-foreground hover:text-primary">
                Ресурсы
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Контакты</h3>
          <address className="not-italic text-muted-foreground">
            <p>Email: info@ege-social.ru</p>
            <p>Телефон: +7 (800) 123-45-67</p>
          </address>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} ЕГЭ по обществознанию. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
