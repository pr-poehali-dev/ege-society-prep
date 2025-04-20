import { BookOpenCheck, FileCheck, GraduationCap } from "lucide-react";

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Комплексная подготовка к экзамену
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Все, что вам нужно для успешной сдачи ЕГЭ по обществознанию
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
            <div className="rounded-full bg-primary p-3 text-white">
              <BookOpenCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Теоретический материал</h3>
            <p className="text-muted-foreground">
              Подробные лекции по всем темам с понятными объяснениями и примерами
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
            <div className="rounded-full bg-primary p-3 text-white">
              <FileCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Практика и тесты</h3>
            <p className="text-muted-foreground">
              Тренировочные задания разных типов с подробными разборами решений
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
            <div className="rounded-full bg-primary p-3 text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Индивидуальный подход</h3>
            <p className="text-muted-foreground">
              Учебные программы разной сложности для любого уровня подготовки
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
