import React, { useState, forwardRef } from "react";
import linkedInIcon from "../assets/linkedin.svg";
import gitHubIcon from "../assets/github.svg";
import emailIcon from "../assets/email.svg";

import ToastNotification from "@/components/toastNitification";

const Footer = forwardRef((props, ref) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleEmailClick = () => {
    const email = "rbdyer3@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <>
      {/* Toast Notification */}
      <ToastNotification
        show={showNotification}
        message="Email copied to clipboard!"
      />

      {/* Footer Component */}
      <footer
        ref={ref}
        id="footer"
        className="p-4 bg-darkGreen text-white text-center mt-10"
      >
        <p className="pb-6">Contact me</p>
        <div className="flex justify-center space-x-4">
          <img
            src={emailIcon}
            alt="Email"
            className="w-10 cursor-pointer"
            onClick={handleEmailClick}
          />
          <a href="https://www.linkedin.com/in/randy-dyer-7556b2213/">
            <img src={linkedInIcon} alt="LinkedIn" className="w-10" />
          </a>
          <a href="https://github.com/randyer">
            <img src={gitHubIcon} alt="GitHub" className="w-9" />
          </a>
        </div>
      </footer>
    </>
  );
});

export default Footer;
