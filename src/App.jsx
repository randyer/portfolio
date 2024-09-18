import { useState, useEffect } from "react";
import "./App.css";
import ProjectCard from "./components/ui/projectCard";
import BlockReveal from "./components/blockReveal";
import Nav from "./components/nav";
import Divider from "./components/divider";
import TextBubble from "./components/textBubble";
import ATM from "./assets/ATM-app.png";
import ATM_Website from "./assets/ATM-website.png";
import ATM_logo from "./assets/ATM-client-logo.png";
import BeyondTheVisual from "./assets/BeyondTheVisual.webp";
import BWHLogo from "./assets/BWH.webp";
import Cero from "./assets/Cero.png";
import DataAnnotation from "./assets/dataAnnotation.jpg";
import studentSuccess from "./assets/studentSuccess.png";
import BWSIcon from "./assets/BWS-Logo.png";
import Java from "./assets/java.svg";
import Python from "./assets/python.svg";
import C from "./assets/c.svg";
import Cpp from "./assets/c++.svg";
import JS from "./assets/js.svg";
import TypeScript from "./assets/typeScript.svg";
import HTML from "./assets/html.svg";
import CSS from "./assets/css.svg";

import rLogo from "./assets/R-logo.svg";

function App() {
  // const [scrollProgress, setScrollProgress] = useState(12);
  const [scrollDirection, setScrollDirection] = useState("up"); // New state to track scroll direction
  const [lastScrollTop, setLastScrollTop] = useState(0); // To track the previous scroll position
  const [navHidden, setNavHidden] = useState(false); // State to hide/show the nav
  const [timelineStyling, setTimelineStyling] = useState({
    top: `1000px`, // Move from bottom to top on load
    height: "82px", // Follows scroll progress after initial animation
    maxHeight: "50vh",
  });

  // Function to update scroll progress and direction
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const winHeight = window.innerHeight;

    // Set the top value based on scroll position, until it hits the top of the viewport (120px in this case)

    const docHeight = document.documentElement.scrollHeight;
    // const totalScroll = (scrollTop / (docHeight - winHeight)) * 100;
    // setScrollProgress(totalScroll);

    if (scrollTop > lastScrollTop) {
      setScrollDirection("down");
      setNavHidden(true);
    } else {
      setScrollDirection("up");
      setNavHidden(false);
    }
    setLastScrollTop(scrollTop);

    // Update timeline styling dynamically
    if (scrollTop > 140) {
      setTimelineStyling((prevStyling) => ({
        ...prevStyling,
        top: "90px",
        height: "250px",
      }));
    } else if (scrollTop < 140) {
      setTimelineStyling((prevStyling) => ({
        ...prevStyling,
        top: `120px`,
        height: "82px",
      }));
    }
  };

  // Add event listener to update scroll progress and direction
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  // Trigger the initial load animation to move the line from the bottom to its starting position
  useEffect(() => {
    const initialAnimationTimer = setTimeout(() => {
      setTimelineStyling({ ...timelineStyling, top: "120px" });
    }, 2200);

    return () => clearTimeout(initialAnimationTimer);
  }, []);

  return (
    <>
      <div className="flex flex-col flex-">
        {/* Sticky element that hides on scroll down and shows on scroll up */}
        <nav
          className={`flex justify-between items-center p-3 bg-darkGreen fixed top-0 z-50 w-full transition-transform duration-700 ${
            navHidden ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <a href="/">
            <img
              src={rLogo}
              alt="R Logo"
              className="w-8 animate-fade-in duration-700"
            />
          </a>
          <Nav />
        </nav>
        <header className="p-4 flex space-x-4 pt-28">
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
        </header>
        <Divider className="flex-grow">
          <h2>Projects</h2>
        </Divider>
        <div className="timeline flex justify-center items-start relative mt-24">
          <div className="flex-col space-y-6 my-4">
            <ProjectCard imagePath={ATM_logo} description="Patient Tracker" />
            <ProjectCard
              imagePath={ATM_Website}
              description="Alton Therapeutic Massage"
              href={"https://craniosacralmassagetherapy.com/"}
            />
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
        </div>
        <Divider className="flex-grow">
          <h2>Skills</h2>
        </Divider>
        <div id="skills" className="flex flex-wrap justify-center mx-2">
          {tools.map((item) => (
            <TextBubble>{item}</TextBubble>
          ))}
          {languages.map((item) => (
            <TextBubble>{item}</TextBubble>
          ))}
        </div>

        <div
          className="w-3/4 border-t-2
         border-white self-center m-4 max-w-96"
        ></div>

        <div className="flex flex-wrap justify-center mx-2">
          {development.map((item) => (
            <TextBubble>{item}</TextBubble>
          ))}
        </div>
        {/* <Divider className="flex-grow">
          <h2>Languages</h2>
        </Divider> */}
        {/* <ul className="flex space-x-4 flex-wrap">
          {languages.map((item) => (
            <li>
              <img src={item.src} alt={item.alt} className="w-8" />
            </li>
          ))}
        </ul> */}

        <div
          className={`fixed left-3 w-[3px] max-h-[1/2vh] bg-[#FE6E35] transition-all duration-700 ease-out rounded`}
          style={timelineStyling}
        ></div>
      </div>
    </>
  );
}

const tools = [
  "React",
  "mySQL",
  "mongoDB",
  "Firebase",
  "PostgreSQL",
  "Skikit-learn",
  "Node.js",
  "Junit",
  "Express.js",
];

const development = [
  "Agile",
  "Expo",
  "Github",
  "Linux",
  "AWS",
  "macOS",
  "Jira",
  "Windows",
  "Figma",
];

const languagesIcon = [
  { src: Java, alt: "Java" },
  { src: Python, alt: "Python" },
  { src: C, alt: "C" },
  { src: Cpp, alt: "C++" },
  { src: JS, alt: "JavaScript" },
  { src: TypeScript, alt: "TypeScript" },
  { src: HTML, alt: "html" },
  { src: CSS, alt: "css" },
];

const languages = ["Java", "Python", "C", "C++", "JavaScript", "TypeScript"];

const sectionData = [
  {
    title: "Tools",
    items: [
      "React",
      "mySQL",
      "mongoDB",
      "Firebase",
      "PostgreSQL",
      "Skikit-learn",
      "Node.js",
      "Junit",
      "Express.js",
    ],
  },
  {
    title: "Languages",
    images: [
      { src: Java, alt: "Java" },
      { src: Python, alt: "Python" },
      { src: C, alt: "C" },
      { src: Cpp, alt: "C++" },
      { src: JS, alt: "JavaScript" },
      { src: TypeScript, alt: "TypeScript" },
      { src: HTML, alt: "html" },
      { src: CSS, alt: "css" },
    ],
  },
  {
    title: "development",
    items: [
      "Agile",
      "Expo",
      "Github",
      "Linux",
      "AWS",
      "macOS",
      "Jira",
      "Windows",
      "Figma",
    ],
  },
];

export default App;
