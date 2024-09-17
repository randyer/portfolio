import { useState, useEffect } from "react";
import "./App.css";
import ProjectCard from "./components/ui/projectCard";
import BlockReveal from "./components/blockReveal";

import ATM from "./assets/ATM-app.png";
import ATM_Website from "./assets/ATM-website.png";
import ATM_logo from "./assets/ATM-logo.jpeg";
import Cero from "./assets/Cero.png";
import DataAnnotation from "./assets/dataAnnotation.jpg";
import studentSuccess from "./assets/studentSuccess.png";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function App() {
  const [scrollProgress, setScrollProgress] = useState(12);
  const [initialTop, setInitialTop] = useState("100vh"); // Start from the bottom of the viewport
  const [animateInitial, setAnimateInitial] = useState(true); // To trigger the initial top position animation

  // Function to update scroll progress
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const totalScroll = (scrollTop / (docHeight - winHeight)) * 100 + 12; // The +12 is to have some extra padding for visibility
    setScrollProgress(totalScroll);
  };

  // Add event listener to update scroll progress
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Trigger the initial load animation to move the line from the bottom to its starting position
  useEffect(() => {
    const initialAnimationTimer = setTimeout(() => {
      setInitialTop("36px"); // Set the top to the final position after the animation
      setAnimateInitial(false); // Disable initial animation once done
    }, 2200);

    return () => clearTimeout(initialAnimationTimer);
  }, []);

  return (
    <>
      <NavigationMenu className="bg-black">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>E</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-2 mt-4 text-lg font-medium">
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
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <header className="p-4">
        <div>
          <BlockReveal backgroundColor={"bg-cream"} delay={1000}>
            <h1 className="text-white font-normal text-3xl p-4 font-Outfit">
              Hi, my name is{" "}
              <span className="font-Indie font-normal text-3xl">
                Randy Dyer
              </span>
            </h1>
          </BlockReveal>
        </div>
        <div>
          <BlockReveal backgroundColor={"bg-gold"} delay={1600}>
            <h1 className="text-white text-2xl px-4 font-normal font-Outfit">
              I design and develop mobile apps and websites
            </h1>
          </BlockReveal>
        </div>
      </header>

      <div className="timeline flex justify-center items-start relative">
        <div className="flex-col space-y-6 my-4">
          <ProjectCard imagePath={ATM} description="Mobile Patient Tracker" />
          <ProjectCard imagePath={ATM_Website} description="Website" />
          <ProjectCard imagePath={ATM_logo} description="Logo" />
          <ProjectCard imagePath={Cero} description="Mobile App" />
          <ProjectCard
            imagePath={DataAnnotation}
            description="Data Annotation"
          />
          <ProjectCard
            imagePath={studentSuccess}
            description="Student Success App"
          />
        </div>

        {/* Scroll progress tracker */}
        <div
          className={`fixed left-3 w-[3px] bg-[#FE6E35] transition-all duration-1000 ease-out rounded`}
          style={{
            top: animateInitial ? initialTop : `36px`, // Move from bottom to top on load
            height: `${scrollProgress}vh`, // Follows scroll progress after initial animation
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
