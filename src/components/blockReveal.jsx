import React, { useState, useEffect } from "react";

const BlockReveal = ({ children, backgroundColor, delay = 0 }) => {
  const [startSlideIn, setStartSlideIn] = useState(false); // Control when to start slide-in
  const [isSlidingOut, setIsSlidingOut] = useState(false); // Control when to start slide-out
  const [showText, setShowText] = useState(false); // Control when to show the text

  useEffect(() => {
    const slideInDuration = 600; // Duration of slide-in animation

    // Start the slide-in animation after the delay
    const startSlideInTimer = setTimeout(() => {
      setStartSlideIn(true); // Start slide-in after the delay
    }, delay);

    // After slide-in finishes, show the text and start slide-out
    const startSlideOutTimer = setTimeout(() => {
      setShowText(true); // Show text after slide-in completes
      setIsSlidingOut(true); // Start slide-out animation
    }, delay + slideInDuration);

    // Clean up timers
    return () => {
      clearTimeout(startSlideInTimer);
      clearTimeout(startSlideOutTimer);
    };
  }, [delay]);

  return (
    <div className="relative inline-block overflow-hidden">
      {/* Block that slides in and out */}
      <div
        className={`absolute inset-0 z-20 ${backgroundColor} transition-all ${
          startSlideIn
            ? isSlidingOut
              ? "animate-slide-out"
              : "animate-slide-in"
            : "opacity-0" // Initial opacity before animation starts
        }`}
      ></div>

      {/* Text behind the block */}
      <span
        className={`relative ${showText ? "opacity-100" : "opacity-0"} z-10`}
      >
        {children}
      </span>
    </div>
  );
};

export default BlockReveal;
