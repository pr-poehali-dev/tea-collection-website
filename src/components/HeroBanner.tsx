import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/30" />
      
      {/* Узор из листьев (опциональный декоративный элемент) */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMCwxIEM1LjUsMSAyLDQuNSAyLDljMCw0LjUgMy41LDggOCw4IGM0LjUsMCA4LTMuNSA4LTggQzE4LDQuNSAxNC41LDEgMTAsMSB6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=')]" />
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Откройте для себя<br />мир изысканного чая
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Погрузитесь в богатую историю, разнообразие вкусов и удивительные свойства 
              самого популярного напитка в мире.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Исследовать виды чая</Button>
              <Button variant="outline" size="lg">Наша коллекция</Button>
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Ассорти чая" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg">
              <p className="font-medium text-lg">Более 100 сортов чая</p>
              <p className="text-sm text-muted-foreground">
                От классических до редких и экзотических
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;