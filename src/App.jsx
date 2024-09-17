import { useState, useEffect } from "react";
import "./App.css";
import ProjectCard from "./components/ui/projectCard";
import BlockReveal from "./components/blockReveal";
import Nav from "./components/nav";
import Divider from "./components/divider";

import ATM from "./assets/ATM-app.png";
import ATM_Website from "./assets/ATM-website.png";
import ATM_logo from "./assets/ATM-client-logo.png";
import BeyondTheVisual from "./assets/BeyondTheVisual.webp";
import BWHLogo from "./assets/BWH.webp";
import Cero from "./assets/Cero.png";
import DataAnnotation from "./assets/dataAnnotation.jpg";
import studentSuccess from "./assets/studentSuccess.png";
import BWSIcon from "./assets/BWS-Logo.png";

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
      {/* <embed
          src="https://craniosacralmassagetherapy.com/"
          className="w-1/2 h-1/2"
        ></embed> */}
      <header className="p-4 flex space-x-4">
        <div>
          <div>
            <BlockReveal backgroundColor={"bg-cream"} delay={1000}>
              <h1 className="text-white font-normal text-3xl m-4 font-Outfit ">
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
      <Divider>
        <h2>Projects</h2>
      </Divider>

      <div className="timeline flex justify-center items-start relative">
        <div className="flex-col space-y-6 my-4">
          <ProjectCard imagePath={ATM_logo} description="Patient Tracker" />
          <ProjectCard
            imagePath={ATM_Website}
            description="Alton Therapeutic Massage"
            href={"https://craniosacralmassagetherapy.com/"}
          />
          {/* <ProjectCard imagePath={ATM_logo} description="Logo" /> */}
          <ProjectCard
            imagePath={BeyondTheVisual}
            description="Beyond The Visual"
            href={
              "https://apps.apple.com/us/app/beyond-the-visual/id6444328107"
            }
          />
          <ProjectCard
            imagePath={BWHLogo}
            description="Brighams and Womens"
            href={
              "https://docs.google.com/document/d/1nB_1RjJ3bOCf8VLKAoTiIXdCFOSljNsls4WEy7DaQo4/edit"
            }
          />
          <ProjectCard
            imagePath={Cero}
            description="Cero Cooperative"
            href={"https://www.cero.coop/"}
          />
          {/* <ProjectCard
            imagePath={DataAnnotation}
            description="Data Annotation"
            href={
              "https://www.dataannotation.tech/coders?worker_src=G&worker_source=G&utm_source=google&utm_medium=display&utm_campaign=20429741244&utm_adgroup=153001519820&utm_content=695853277331&gad_source=1&gclid=CjwKCAjw0aS3BhA3EiwAKaD2ZYKJ-I3y9vzArBsmiC5-Qx_vNdQebzF6unFCFUC2dLOF0wNysjio5hoCUl0QAvD_BwE"
            }
          /> */}
          <ProjectCard
            imagePath={studentSuccess}
            description="Student Success App"
            href={"https://studentsuccesshandbook.wpi.edu/"}
          />
          <ProjectCard
            imagePath={BWSIcon}
            description="Memory Matching Game"
            href={"https://randyer.github.io/BWSmemoryMatchingGame/"}
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
