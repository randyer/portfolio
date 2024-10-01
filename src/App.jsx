// React
import { useState, useEffect, useRef } from "react";

// Styles
import "./App.css";

// Sections
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Nav from "./sections/Nav";
import Header from "./sections/Header";
import Footer from "./sections/Footer";

// Libraries
// import Lenis from "lenis";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// const lenis = new Lenis();

// lenis.on("scroll", (e) => {
//   console.log(e);
// });

// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000);
// });

// gsap.ticker.lagSmoothing(0);

function App() {
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const footerRef = useRef(null);

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navHidden, setNavHidden] = useState(false);
  const [timelineStyling, setTimelineStyling] = useState({
    top: `1000px`, // Move from bottom to top on load
    height: "82px",
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
    <div className="flex flex-col flex-">
      <Nav
        navHidden={navHidden}
        setNavHidden={setNavHidden}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        footerRef={footerRef}
      />
      <Header />
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Footer ref={footerRef} />

      <div
        className={`fixed left-3 w-1 bg-[#FE6E35] transition-all duration-700 ease-out rounded`}
        style={timelineStyling}
      ></div>
    </div>
  );
}

export default App;
