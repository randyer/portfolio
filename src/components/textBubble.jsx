import React from "react";

const TextBubble = ({ children }) => {
  return (
    <p className="text-white text-lg border-2 border-white inline  self-center justify-self-center rounded-3xl p-2 mx-2 my-2">
      {children}
    </p>
  );
};

export default TextBubble;
