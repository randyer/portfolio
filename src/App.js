import React, { useState } from 'react';
import './App.css';
import Project from './components/Project';
import Footer from './components/Footer';

// Project descriptions as an array of objects
const projectsDesc = [
  {
    image: '../pictures/btv.png',
    title: 'Beyond The Visual',
    link: 'https://apps.apple.com/us/app/beyond-the-visual/id6444328107'
  },
  {
    image: '../pictures/bwh.png',
    title: 'Hospital Service Application',
    link: 'https://docs.google.com/document/d/1nB_1RjJ3bOCf8VLKAoTiIXdCFOSljNsls4WEy7DaQo4/edit'
  },
  {
    image: '../pictures/sshandbook.png',
    title: 'Student Success handbook',
    link: 'https://studentsuccesshandbook.wpi.edu/'
  },
  {
    image: '../pictures/CERO.png',
    title: 'CERO cooperative',
    link: 'https://www.cero.coop/'
  },
  {
    image: '../pictures/atm.png',
    title: 'Alton Therapeutic Massage',
    link: 'https://craniosacralmassagetherapy.com/'
  },
  {
    image: '../pictures/bws.png',
    title: 'BWS Memory matching game',
    link: 'https://randyer.github.io/BWSmemoryMatchingGame'
  },
];

function App() {
  const [theme, setTheme] = useState('dark'); // Initialize theme state

  // Toggle theme on logo click
  const handleLogoClick = () => {
    setTheme(prevTheme => {
      switch (prevTheme) {
        case 'light': return 'dark';
        case 'dark': return 'light';
        // case 'minimal': return 'light';
        default: return 'dark';
      }
    });
  };

  return (
    <div className={`App theme-${theme}`}>
      <header className="App-header">
        <img src="randy.webp" className="App-logo" alt="profile" onClick={handleLogoClick} />
        <h1 className="App-title">Randy Dyer</h1>
        <nav className="App-nav">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="about" className="App-section">
        {/* Section content could be uncommented or added here */}
      </section>
      <section id="projects" className="App-section">
        <div className="project-grid">
          {projectsDesc.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
      {/* <section id="contact" className="App-section">
        <a href='https://github.com/randyer'><img style={{ width: '40px' }} src='../pictures/github.svg' alt="GitHub"></img></a>
        <a href='https://www.linkedin.com/in/randy-dyer-7556b2213/'><img style={{ width: '40px' }} src='../pictures/linkedin.svg' alt="LinkedIn"></img></a>
        <a href='mailto:rbdyer3@gmail.com'><img style={{ width: '40px' }} src='../pictures/gmail.svg' alt="Gmail"></img></a>
      </section> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
