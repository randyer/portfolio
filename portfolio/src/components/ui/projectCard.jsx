import React, { useRef, useEffect, useState } from "react";

function ProjectCard({ imagePath, description }) {
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
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
    <div
      ref={cardRef}
      className={`text-white overflow-visible w-52 transform transition-all duration-700 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      <div
        style={{
          transform: `perspective(700px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg) scale(1.05)`,
          transition: "transform 0.3s ease", // Add this line for smooth reset
        }}
      >
        <img
          src={imagePath}
          alt="image"
          className="object-cover object-top aspect-square rounded"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
        <div className="relative bottom-0 -translate-x-14 -translate-y-24 p-4 w-full rounded translate-z-10 bg-opacity-40 bg-black">
          <p className="text-lg">{description}</p>
          <div className="w-full h-1 bg-white rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
