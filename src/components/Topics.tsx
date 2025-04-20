import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Topics = () => {
  const topics = [
    {
      title: "Человек и общество",
      description: "Основные понятия, подходы к изучению общества, типы обществ и формы социальных связей",
    },
    {
      title: "Экономика",
      description: "Экономические системы, рынок труда, финансовые институты, государственное регулирование",
    },
    {
      title: "Социальные отношения",
      description: "Социальная стратификация, социальные группы, социальные нормы и социальный контроль",
    },
    {
      title: "Политика",
      description: "Политическая система, государство, демократия, политические партии и политический процесс",
    },
    {
      title: "Право",
      description: "Правовая система, отрасли права, правоотношения, правонарушения и юридическая ответственность",
    },
    {
      title: "Духовная сфера",
      description: "Культура, наука, образование, религия, искусство и моральные ценности",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Основные темы курса
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Изучите все ключевые разделы обществознания для успешной сдачи ЕГЭ
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {topics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{topic.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
