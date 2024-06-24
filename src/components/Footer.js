import React from 'react';

function Footer() {

  return (
    <footer className="App-footer">
      {/* <nav className="footer-nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav> */}
      <div className="social-links">
        <a href='mailto:rbdyer3@gmail.com'><img style={{ width: '40px' }} src='../pictures/email.svg' alt="Gmail"></img></a>
        <a href='https://www.linkedin.com/in/randy-dyer-7556b2213/'><img style={{ width: '40px' }} src='../pictures/linkedin.svg' alt="LinkedIn"></img></a>
        <a href='https://github.com/randyer'><img style={{ width: '38px' }} src='../pictures/github.svg' alt="GitHub"></img></a>
      </div>
    </footer>
  );
}

export default Footer;
