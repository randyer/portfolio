import { useState, useEffect } from "react";
import "./App.css";
import ProjectCard from "./components/ui/projectCard";
import BlockReveal from "./components/blockReveal";
import Nav from "./components/nav";
import Divider from "./components/divider";
import TextBubble from "./components/textBubble";
import ATM_Website from "./assets/ATM-website.png";
import ATM_logo from "./assets/ATM-client-logo.png";
import BeyondTheVisual from "./assets/BeyondTheVisual.webp";
import BWHLogo from "./assets/BWH.webp";
import Cero from "./assets/Cero.png";
import studentSuccess from "./assets/studentSuccess.png";
import BWSIcon from "./assets/BWS-Logo.png";

import rLogo from "./assets/R-logo.svg";
import gitHubIcon from "./assets/github.svg";
import linkedInIcon from "./assets/linkedin.svg";
import emailIcon from "./assets/email.svg";

function App() {
  const [lastScrollTop, setLastScrollTop] = useState(0); // To track the previous scroll position
  const [navHidden, setNavHidden] = useState(false); // State to hide/show the nav
  const [timelineStyling, setTimelineStyling] = useState({
    top: `1000px`, // Move from bottom to top on load
    height: "82px", // Follows scroll progress after initial animation
  });

  // Function to update scroll progress and direction
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    // Update the navHidden state when scrolling down or up
    if (scrollTop > lastScrollTop) {
      if (scrollTop > 100) {
        setNavHidden(true);
      }
    } else {
      setNavHidden(false);
    }

    setLastScrollTop(scrollTop);

    // Update timeline styling dynamically
    if (scrollTop > 140) {
      setTimelineStyling((prevStyling) => ({
        ...prevStyling,
        top: "90px",
        height: "80vh",
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
        {/* /* Sticky element that hides on scroll down and shows on scroll up */}
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
                <h1 className="text-white font-normal text-3xl m-4 font-Outfit lg:text-6xl">
                  Hi, my name is{" "}
                  <span className="font-Indie font-normal text-3xl lg:text-7xl">
                    Randy Dyer
                  </span>
                </h1>
              </BlockReveal>
            </div>
            <div>
              <BlockReveal backgroundColor={"bg-gold"} delay={1600}>
                <h1 className="text-white text-2xl px-4 font-normal font-Outfit lg:text-4xl">
                  I design and develop mobile apps and websites
                </h1>
              </BlockReveal>
            </div>
          </div>
        </header>
        <Divider className="flex-grow">
          <h2>Projects</h2>
        </Divider>
        <div className="timeline flex justify-center items-start relative mt-10">
          <div className="flex-col space-y-6 my-4">
            <ProjectCard
              imagePath={ATM_logo}
              title="Patient Tracker"
              description="A web based mobile app for tracking patient information. This app allows users to view patient information, add new patients, and update existing patient information. The app is designed to be used by massage therapists to keep track of their clients."
              href={"https://randyer.github.io/ATM-app-demo/"}
            />
            <ProjectCard
              imagePath={ATM_Website}
              title="Alton Therapeutic Massage"
              description="The website for Alton Therapeutic Massage, a local business based in Alton, NH. Developed and maintained by me."
              href={"https://craniosacralmassagetherapy.com/"}
            />
            <ProjectCard
              imagePath={BeyondTheVisual}
              title="Beyond The Visual"
              description="The Worcester Art museum's mobile app for visually impaired guests. This app allows visitors to get detailed descriptions of the art pieces on display in the gallery."
              href={
                "https://apps.apple.com/us/app/beyond-the-visual/id6444328107"
              }
            />
            <ProjectCard
              imagePath={BWHLogo}
              title="Brighams and Womens"
              description="An application for the Brighams and Women's hospital that enables hospital administrators to efficiently manage service requests, patient and employee lists, room assignments, and other essential tasks. Employees can easily view their responsibilities and navigate the hospital. Patients benefit by staying informed of notifications, signing up for text message alerts, and navigating the hosptial."
              href={
                "https://docs.google.com/document/d/1nB_1RjJ3bOCf8VLKAoTiIXdCFOSljNsls4WEy7DaQo4/edit"
              }
            />
            <ProjectCard
              imagePath={Cero}
              title="Cero Cooperative"
              description="The website for Cero Cooperative, a composting company based in Boston Massachusetts. As an intern, I worked on enhancing the user interface for their website. This included implementing responsive web design, updating page layouts, and organizing content."
              href={"https://www.cero.coop/"}
            />
            <ProjectCard
              imagePath={studentSuccess}
              title="Student Success"
              description="A virtual handbook for students at Worcester Polytechnic Institute. This handbook is designed to ensure that all students have access to the resources on campus that promote student success. It highlights a variety of strategies and tools tailored to support the diverse student body, helping incoming students find the right resources."
              href={"https://studentsuccesshandbook.wpi.edu/"}
            />
            <ProjectCard
              imagePath={BWSIcon}
              title="Memory Matching Game"
              description="A memory matching game to teach kids about water conservation. I developed this game working as an intern for the Board of Water Supply in Oahu, Hawaii."
              href={"https://randyer.github.io/BWSmemoryMatchingGame/"}
            />
          </div>
        </div>
        <Divider className="flex-grow">
          <h2 id="skills">Skills</h2>
        </Divider>
        <div className="flex flex-wrap self-center justify-center mx-2 max-w-4xl">
          <div className="flex flex-wrap self-center justify-center mx-2 max-w-4xl">
            {tools.map((item) => (
              <TextBubble>{item}</TextBubble>
            ))}
            {languages.map((item) => (
              <TextBubble>{item}</TextBubble>
            ))}
          </div>
          <div className="flex flex-wrap self-center justify-center mx-2 max-w-4xl">
            {development.map((item) => (
              <TextBubble>{item}</TextBubble>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center mx-2"></div>
        <footer
          id="footer"
          className="p-4 bg-darkGreen text-white text-center mt-10"
        >
          <p className="pb-6">Contact me</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/randyer">
              <img src={gitHubIcon} alt="GitHub" className="w-9" />
            </a>
            <a href="https://www.linkedin.com/in/randy-dyer-7556b2213/">
              <img src={linkedInIcon} alt="LinkedIn" className="w-10" />
            </a>
            <img
              src={emailIcon}
              alt="Email"
              className="w-10 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("rbdyer3@gmail.com");
                alert("Email copied to clipboard!");
              }}
            />
          </div>
        </footer>
        <div
          className={`fixed left-3 w-1 bg-[#FE6E35] transition-all duration-700 ease-out rounded`}
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

const languages = ["Java", "Python", "C", "C++", "JavaScript", "TypeScript"];

export default App;
