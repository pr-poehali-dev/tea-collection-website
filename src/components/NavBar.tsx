import { Link } from "react-router-dom";
import { Coffee, Home, Info, Leaf, ShoppingBag } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ЧайМир</span>
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Home className="mr-2 h-4 w-4" />
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Leaf className="mr-2 h-4 w-4" />
                Виды чая
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  {teaCategories.map((category) => (
                    <ListItem
                      key={category.title}
                      title={category.title}
                      href={category.href}
                    >
                      {category.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Coffee className="mr-2 h-4 w-4" />
                Заваривание
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  {brewingMethods.map((method) => (
                    <ListItem
                      key={method.title}
                      title={method.title}
                      href={method.href}
                    >
                      {method.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Info className="mr-2 h-4 w-4" />
                  О нас
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button variant="outline" size="icon">
          <ShoppingBag className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const teaCategories = [
  {
    title: "Черный чай",
    href: "/black-tea",
    description: "Крепкий и насыщенный чай с богатым вкусом и ароматом",
  },
  {
    title: "Зеленый чай",
    href: "/green-tea",
    description: "Освежающий чай с множеством полезных свойств",
  },
  {
    title: "Улун (Оолонг)",
    href: "/oolong-tea",
    description: "Полуферментированный чай с цветочными нотами",
  },
  {
    title: "Белый чай",
    href: "/white-tea",
    description: "Нежный и деликатный чай с легким вкусом",
  },
];

const brewingMethods = [
  {
    title: "Китайская чайная церемония",
    href: "/chinese-ceremony",
    description: "Традиционное искусство заваривания чая гунфу ча",
  },
  {
    title: "Западный способ",
    href: "/western-brewing",
    description: "Классический способ заваривания в чайнике",
  },
  {
    title: "Холодное заваривание",
    href: "/cold-brew",
    description: "Метод приготовления освежающего чая без кипятка",
  },
  {
    title: "Матча",
    href: "/matcha-brewing",
    description: "Особый способ приготовления японского порошкового чая",
  },
];

export default NavBar;