import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 hero-gradient text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Подготовка к ЕГЭ по обществознанию
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl">
              Комплексная программа подготовки с нуля до высоких баллов. Структурированные материалы, практические задания и пошаговые инструкции.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/topics">Начать обучение</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/tasks">Пробный тест</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
