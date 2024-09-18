import React from "react";

const Divider = ({ children }) => {
  return (
    <div className="flex justify-center items-center m-8 animate-fade-in duration-700">
      <div className="flex-grow border-t-2 border-gold max-w-72 "></div>
      <span className="mx-4 text-xl text-gold">{children}</span>
      <div className="flex-grow border-t-2 border-gold max-w-72"></div>
    </div>
  );
};

export default Divider;
