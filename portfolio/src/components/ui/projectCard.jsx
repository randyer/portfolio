import React, { useRef, useEffect, useState } from "react";

function ProjectCard({ imagePath, description }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the element is in view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`text-white overflow-visible w-52 transform transition-all duration-700 ease-in-out  ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      <img
        src={imagePath}
        alt="image"
        className="object-cover transition-transform hover:scale-105 rounded"
      />
      <div className="relative bottom-0 -translate-x-14 -translate-y-24 p-4 w-full backdrop-blur-sm bg-black bg-opacity-50 rounded">
        <p className="text-lg">{description}</p>
        <div className="w-full h-1 bg-white rounded"></div>
      </div>
    </div>
  );
}

export default ProjectCard;
