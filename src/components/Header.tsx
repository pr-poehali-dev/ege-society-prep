import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden text-xl font-bold sm:inline-block">
              ЕГЭ по обществознанию
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              to="/"
              className="transition-colors hover:text-primary"
            >
              Главная
            </Link>
            <Link
              to="/topics"
              className="transition-colors hover:text-primary"
            >
              Темы
            </Link>
            <Link
              to="/tasks"
              className="transition-colors hover:text-primary"
            >
              Задания
            </Link>
            <Link
              to="/resources"
              className="transition-colors hover:text-primary"
            >
              Ресурсы
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="outline" className="ml-auto hidden h-8 md:flex">
              Войти
            </Button>
          </div>
          <Button className="h-8">Начать обучение</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
