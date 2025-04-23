import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf } from "lucide-react";

const categories = [
  {
    title: "Черный чай",
    description: "Полностью ферментированный чай с насыщенным вкусом",
    varieties: ["Ассам", "Дарджилинг", "Цейлон", "Кимун"],
    color: "bg-amber-50 dark:bg-amber-950",
    iconColor: "text-amber-600",
  },
  {
    title: "Зеленый чай",
    description: "Неферментированный чай с травяным вкусом",
    varieties: ["Лунцзин", "Сенча", "Матча", "Би Ло Чунь"],
    color: "bg-green-50 dark:bg-green-950",
    iconColor: "text-green-600",
  },
  {
    title: "Улун (Оолонг)",
    description: "Полуферментированный чай с цветочными нотами",
    varieties: ["Те Гуань Инь", "Да Хун Пао", "Дун Дин", "Фэн Хуан Дань Цун"],
    color: "bg-teal-50 dark:bg-teal-950",
    iconColor: "text-teal-600",
  },
];

const TeaCategories = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Основные категории чая</h2>
          <p className="text-muted-foreground max-w-2xl">
            Чай классифицируется по степени ферментации листьев, что определяет его вкус,
            аромат и цвет настоя. Познакомьтесь с основными категориями чая и их особенностями.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.title} className={`${category.color} border-none shadow-sm`}>
              <CardHeader>
                <div className={`w-12 h-12 rounded-full ${category.iconColor} bg-white/90 dark:bg-black/20 flex items-center justify-center mb-4`}>
                  <Leaf className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription className="text-foreground/80">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">Популярные сорта:</p>
                <ul className="list-disc list-inside text-foreground/70 space-y-1">
                  {category.varieties.map((variety) => (
                    <li key={variety}>{variety}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeaCategories;