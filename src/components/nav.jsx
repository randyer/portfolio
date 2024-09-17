import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavigationMenu className="bg-transparent">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <button
              id="hamburger-button"
              className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
              onClick={toggleMenu}
            >
              <div
                className={`absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500
                  ${!isMenuOpen ? "translate-y-3" : "origin-center -rotate-45 "}
                `}
              ></div>
              <div
                className={`absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500
                  ${!isMenuOpen ? "-translate-y-3" : "origin-center -rotate-45"}
                `}
              ></div>
              <div
                className={`absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500
                  ${!isMenuOpen ? "" : "rotate-45 "}
                `}
              ></div>
            </button>
          </NavigationMenuTrigger>
          {isMenuOpen && (
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-black p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg text-white font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
