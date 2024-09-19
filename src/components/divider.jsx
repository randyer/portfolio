import React from "react";

const Divider = ({ children }) => {
  return (
    <div className="flex justify-center items-center m-8 animate-fade-in duration-700">
      <div className="flex-grow border-t-2 border-gold max-w-xl rounded "></div>
      <span className="mx-4 text-2xl text-gold">{children}</span>
      <div className="flex-grow border-t-2 border-gold max-w-xl rounded"></div>
    </div>
  );
};

export default Divider;
