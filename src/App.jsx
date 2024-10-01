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
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const footerRef = useRef(null);

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navHidden, setNavHidden] = useState(false);

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
  };

  // Add event listener to update scroll progress and direction
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  // Trigger the initial load animation for the scrollbar
  useEffect(() => {
    const barContainer = document.querySelector(".bar-container");
    const barContainerHeight = barContainer.clientHeight;

    const scrollBar = gsap.fromTo(
      ".bar",
      { height: "80px" },
      {
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "bottom bottom",
          // markers: true,
          scrub: 1,
        },
        height: barContainerHeight,
      }
    );

    const initialLoadAnimation = gsap.fromTo(
      ".bar",
      { y: 1000, height: 0 },
      {
        y: 0,
        ease: "power3.inOut",
        duration: 2.2,
        height: 80,
        delay: 1.2,
      }
    );

    const tl = gsap.timeline({
      initialLoadAnimation,
      scrollBar,
    });
  }, []);

  return (
    <div className="wrapper flex flex-col">
      <div className="bar-container fixed top-[120px] left-3 h-[80%] w-1 ">
        <div className="bar h-20 w-1 rounded bg-orange"></div>
      </div>
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
    </div>
  );
}

export default App;
