import React, { forwardRef } from "react";
import linkedInIcon from "../assets/linkedin.svg";
import gitHubIcon from "../assets/github.svg";
import emailIcon from "../assets/email.svg";

const Footer = forwardRef((props, ref) => {
  return (
    <footer
      ref={ref} // Apply the ref here
      id="footer"
      className="p-4 bg-darkGreen text-white text-center mt-10"
    >
      <p className="pb-6">Contact me</p>
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/randyer">
          <img src={gitHubIcon} alt="GitHub" className="w-9" />
        </a>
        <a href="https://www.linkedin.com/in/randy-dyer-7556b2213/">
          <img src={linkedInIcon} alt="LinkedIn" className="w-10" />
        </a>
        <img
          src={emailIcon}
          alt="Email"
          className="w-10 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText("rbdyer3@gmail.com");
            alert("Email copied to clipboard!");
          }}
        />
      </div>
    </footer>
  );
});

export default Footer;
