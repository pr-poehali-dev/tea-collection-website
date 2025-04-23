import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import TeaCategories from "@/components/TeaCategories";
import PopularTeas from "@/components/PopularTeas";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main>
        <HeroBanner />
        <TeaCategories />
        <PopularTeas />
      </main>
      <footer className="mt-auto py-6 border-t">
        <div className="container">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2023 ЧайМир. Все права защищены.
            </p>
            <p className="text-sm text-muted-foreground">
              Исследуйте мир чая с нами
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;