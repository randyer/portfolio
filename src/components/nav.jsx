import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const menuRef = useRef(null); // Reference to the menu container

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Trigger fade-out and hamburger animation simultaneously
      setIsFadingOut(true);

      // After animation completes, hide the menu
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsFadingOut(false); // Reset fade state after menu closes
      }, 300); // Match this to the fade-out animation duration
    } else {
      setIsMenuOpen(true);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (isMenuOpen) {
          toggleMenu(); // Close menu when clicking outside
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
      <button
        id="hamburger-button"
        className="z-50 h-8 min-w-8 top-4 cursor-pointer text-3xl md:hidden duration-700 animate-fade-in duration-700"
        onClick={toggleMenu}
      >
        {/* Top bar */}
        <div
          className={`absolute -mt-0.5 h-1 w-8 rounded bg-orange transition-transform duration-500
                  ${isMenuOpen ? "origin-center -rotate-45" : "translate-y-3"}
                `}
        ></div>
        {/* Middle bar */}
        <div
          className={`absolute -mt-0.5 h-1 w-8 rounded bg-orange transition-opacity duration-500
                  ${isMenuOpen ? "opacity-0" : ""}
                `}
        ></div>
        {/* Bottom bar */}
        <div
          className={`absolute -mt-0.5 h-1 w-8 rounded bg-orange transition-transform duration-500
                  ${isMenuOpen ? "origin-center rotate-45" : "-translate-y-3"}
                `}
        ></div>
      </button>

      {/* Ensure both the menu is open or fading out */}
      {(isMenuOpen || isFadingOut) && (
        <div
          ref={menuRef}
          className={`z-40 absolute top-20 right-0 p-2 mx-2 bg-cream bg-opacity-90  ${
            isMenuOpen && !isFadingOut
              ? "animate-fade-in duration-150"
              : "animate-fade-out duration-150"
          }`}
        >
          <ul
            className={`grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]`}
          >
            <li className="row-span-3">
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

            <li className="row-span-3">
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
            <li className="row-span-3">
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
