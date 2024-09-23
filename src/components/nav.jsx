import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const menuRef = useRef(null);

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

  return (
    <>
      {/* Hamburger button for small screens */}
      <button
        id="hamburger-button"
        className="z-50 h-8 min-w-8 top-4 cursor-pointer text-3xl lg:hidden duration-700 animate-fade-in"
        onClick={toggleMenu}
      >
        {/* Top bar */}
        <div
          className={`absolute -mt-0.5 h-1 w-8 rounded bg-orange transition-transform duration-500 ${
            isMenuOpen ? "origin-center -rotate-45" : "translate-y-3"
          }`}
        ></div>
        {/* Middle bar */}
        <div
          className={`absolute -mt-0.5 h-1 w-8 rounded bg-orange transition-opacity duration-500 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        {/* Bottom bar */}
        <div
          className={`absolute -mt-0.5 h-1 w-8 rounded bg-orange transition-transform duration-500 ${
            isMenuOpen ? "origin-center rotate-45" : "-translate-y-3"
          }`}
        ></div>
      </button>

      {/* Large screen text-based navigation */}
      <div className="hidden lg:flex space-x-4 pr-4">
        <a className="text-lg font-medium text-white hover:underline" href="/">
          Projects
        </a>
        <a
          className="text-lg font-medium text-white hover:underline"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="text-lg font-medium text-white hover:underline"
          href="#footer"
        >
          Contact
        </a>
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
              <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-darkGreen p-3 no-underline focus:shadow-md"
                href="/"
                onClick={toggleMenu}
              >
                <div className="my-2 text-lg text-white font-medium underline">
                  Projects
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Check out my latest projects.
                </p>
              </a>
            </li>
            <li>
              <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-darkGreen p-3 no-underline focus:shadow-md"
                href="#skills"
                onClick={toggleMenu}
              >
                <div className="my-2 text-lg text-white font-medium underline">
                  Skills
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Explore my skills and expertise.
                </p>
              </a>
            </li>
            <li>
              <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-darkGreen p-3 no-underline focus:shadow-md"
                href="#footer"
                onClick={toggleMenu}
              >
                <div className="my-2 text-lg text-white font-medium underline">
                  Contact
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Contact me.
                </p>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
