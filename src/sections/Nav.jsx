import React, { useState, useEffect, useRef } from "react";
import rLogo from "../assets/R-logo.svg";

export default function Nav({
  navHidden,
  setNavHidden,
  projectsRef,
  skillsRef,
  footerRef,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const menuRef = useRef(null);

  // Toggle the mobile menu
  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsFadingOut(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (isMenuOpen) {
          toggleMenu();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Hide or show the navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle smooth scroll when clicking the nav links
  const handleScrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`flex justify-between items-center p-3 bg-darkGreen fixed top-0 z-50 w-full transition-transform duration-700 ${
        navHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Logo */}
      <a href="/">
        <img
          src={rLogo}
          alt="R Logo"
          className="w-8 animate-fade-in duration-700"
        />
      </a>

      {/* Hamburger button for small screens */}
      <button
        id="hamburger-button"
        className="z-50 h-8 min-w-8 top-4 cursor-pointer text-3xl lg:hidden duration-700 animate-fade-in"
        onClick={toggleMenu}
      >
        {/* Hamburger button bars */}
        <div
          className={`absolute -mt-0.5 h-1 w-8 rounded bg-orange transition-transform duration-500 ${
            isMenuOpen ? "origin-center -rotate-45" : "translate-y-3"
          }`}
        ></div>
        <div
          className={`absolute -mt-0.5 h-1 w-8 rounded bg-orange transition-opacity duration-500 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`absolute -mt-0.5 h-1 w-8 rounded bg-orange transition-transform duration-500 ${
            isMenuOpen ? "origin-center rotate-45" : "-translate-y-3"
          }`}
        ></div>
      </button>

      {/* Large screen text-based navigation */}
      <div className="hidden lg:flex space-x-4 pr-4">
        <button
          className="text-lg font-medium text-white hover:underline"
          onClick={() => handleScrollToSection(projectsRef)}
        >
          Projects
        </button>
        <button
          className="text-lg font-medium text-white hover:underline"
          onClick={() => handleScrollToSection(skillsRef)}
        >
          Skills
        </button>
        <button
          className="text-lg font-medium text-white hover:underline"
          onClick={() => handleScrollToSection(footerRef)}
        >
          Contact
        </button>
      </div>

      {/* Small screen dropdown menu */}
      {(isMenuOpen || isFadingOut) && (
        <div
          ref={menuRef}
          className={`z-40 absolute top-20 right-0 p-2 mx-2 bg-cream bg-opacity-90  ${
            isMenuOpen && !isFadingOut
              ? "animate-fade-in duration-150"
              : "animate-fade-out duration-150"
          }`}
        >
          <ul className={`grid gap-2`}>
            <li>
              <button
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-darkGreen p-3 no-underline focus:shadow-md"
                onClick={() => {
                  handleScrollToSection(projectsRef);
                  toggleMenu();
                }}
              >
                <div className="my-2 text-lg text-white font-medium underline">
                  Projects
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Check out my latest projects.
                </p>
              </button>
            </li>
            <li>
              <button
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-darkGreen p-3 no-underline focus:shadow-md"
                onClick={() => {
                  handleScrollToSection(skillsRef);
                  toggleMenu();
                }}
              >
                <div className="my-2 text-lg text-white font-medium underline">
                  Skills
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Explore my skills and expertise.
                </p>
              </button>
            </li>
            <li>
              <button
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-darkGreen p-3 no-underline focus:shadow-md"
                onClick={() => {
                  handleScrollToSection(footerRef);
                  toggleMenu();
                }}
              >
                <div className="my-2 text-lg text-white font-medium underline">
                  Contact
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Contact me.
                </p>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
