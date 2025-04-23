import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const teas = [
  {
    id: 1,
    name: "Да Хун Пао",
    category: "Улун",
    origin: "Китай, Уишань",
    description: "Один из самых известных улунов с нотами обжаренных орехов, карамели и древесины.",
    rating: 4.9,
    price: 1800,
    popular: true,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Дарджилинг Первого сбора",
    category: "Черный чай",
    origin: "Индия, Дарджилинг",
    description: "Изысканный чай с цветочным ароматом и мускатными нотами, известный как 'шампанское чаев'.",
    rating: 4.8,
    price: 950,
    popular: true,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Гёкуро",
    category: "Зеленый чай",
    origin: "Япония",
    description: "Элитный японский зеленый чай с насыщенным умами-вкусом и сладким послевкусием.",
    rating: 4.7,
    price: 1200,
    popular: true,
    image: "/placeholder.svg",
  },
];

const PopularTeas = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Популярные сорта чая</h2>
          <p className="text-muted-foreground max-w-2xl">
            Познакомьтесь с нашей коллекцией самых популярных и высоко оцененных сортов чая со всего мира.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {teas.map((tea) => (
            <Card key={tea.id} className="overflow-hidden">
              <div className="aspect-[3/2] relative">
                <img 
                  src={tea.image} 
                  alt={tea.name} 
                  className="object-cover w-full h-full"
                />
                {tea.popular && (
                  <Badge className="absolute top-3 right-3">
                    Популярное
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{tea.name}</CardTitle>
                    <CardDescription>{tea.category} • {tea.origin}</CardDescription>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-medium text-sm">{tea.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-foreground/80 line-clamp-3">
                  {tea.description}
                </p>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center">
                <div className="font-bold">{tea.price} ₽/100г</div>
                <Button variant="outline" size="sm">Подробнее</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button size="lg" variant="outline">Смотреть все сорта</Button>
        </div>
      </div>
    </section>
  );
};

export default PopularTeas;