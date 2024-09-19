import React, { useRef, useEffect, useState } from "react";

function ProjectCard({ imagePath, title, description, href }) {
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const cardRef = useRef(null);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768); // Check if screen width is >= 768px
    };

    handleResize(); // Call it once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection entry:", entry); // Log for debugging
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the element is in view
        }
      },
      { threshold: 0.1 } // Trigger as soon as any part of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, [cardRef]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // Skew based on X-axis position
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20; // Skew based on Y-axis position
    setRotation({ rotateX: y, rotateY: x });
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 }); // Reset rotation when cursor leaves the image
  };

  return (
    <>
      <a href={href}>
        <div
          ref={cardRef}
          className={`text-white overflow-visible transform justify-between transition duration-700 ease-in-out w-52 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          } md:w-full md:mb-16 md:flex md:p-16 md:rounded-xl max-w-4xl md:ring-2 md:ring-cream/40 md:ring- md:shadow-2xl md:gap-16 md:bg-black`}
        >
          <img
            ref={cardRef}
            src={imagePath}
            alt="image"
            className={`object-cover object-top aspect-square rounded-xl md:max-h-72 md:h-full`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(700px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg) scale(1.05)`,
              transition: "transform 0.3s ease", // Add this line for smooth reset
            }}
          />
          <div className="self-start relative bg-darkGreen bg-opacity-80 rounded-xl p-4 w-full -translate-x-14 -translate-y-24 bottom-0 translate-z-10 md:translate-x-0 md:translate-y-0">
            <p className="text-lg">{title}</p>
            <div className="w-full h-1 bg-white rounded"></div>
            <p className="text-lg hidden md:block pt-2">{description}</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default ProjectCard;
