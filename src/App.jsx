import { useState, useEffect } from "react";
import "./App.css";
import ProjectCard from "./components/ui/projectCard";
import BlockReveal from "./components/blockReveal";
import Nav from "./components/nav";

import ATM from "./assets/ATM-app.png";
import ATM_Website from "./assets/ATM-website.png";
import ATM_logo from "./assets/ATM-logo.jpeg";
import Cero from "./assets/Cero.png";
import DataAnnotation from "./assets/dataAnnotation.jpg";
import studentSuccess from "./assets/studentSuccess.png";

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
      {/* <button
        id="hamburger-button"
        class="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
      >
        <div class="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
      </button> */}
      <header className="p-4 flex space-x-4">
        <div>
          <div>
            <BlockReveal backgroundColor={"bg-cream"} delay={1000}>
              <h1 className="text-white font-normal text-3xl m-4 font-Outfit">
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
        </div>

        <Nav />
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
