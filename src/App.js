import React, { useState } from 'react';

import './App.css';
import Project from './components/Project'; // Import the Project component


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
  

const [theme, setTheme] = useState('dark'); // Default theme

const handleLogoClick = () => {
  const newTheme = theme === 'light' ? 'dark' : (theme === 'dark' ? 'minimal' : 'light');
  setTheme(newTheme);
};

  return (
    <div className={`App theme-${theme}`}> 
      <header className="App-header">
        <img src="randy.webp" className="App-logo" alt="profile" onClick={handleLogoClick} /* Add click handler */
/>
        <h1 className="App-title">Randy Dyer</h1>
        {/* <p className="App-subtitle">Software Engineer | Full Stack Developer </p> */}
        <nav className="App-nav">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="about" className="App-section">
        {/* <h2>About Me</h2> */}
        {/* <p>Hi, I'm [Your Name], a software engineer with a passion for developing innovative programs. I've got a knack for problem-solving and work well in both team-oriented and self-directed environments.</p> */}
      </section>
      <section id="projects" className="App-section">
        {/* <h2>Projects</h2> */}
        <div className="project-grid"> 
          {projectsDesc.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
      <section id="contact" className="App-section">
        <h2>Contact</h2>
        <p>Email: rbdyer3@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/randy-dyer-7556b2213/">Randy Dyer</a></p>
        <p>GitHub: <a href="https://github.com/randyer">randyer</a></p>
      </section>
    </div>
    
  );
}

export default App;
