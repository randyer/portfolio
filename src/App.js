import React, { useState } from 'react';

import './App.css';
import Project from './components/Project'; // Import the Project component


const projects = [
  {
    image: '../project-thumbnail.png',
    title: 'Project 1',
    description: 'Description of Project 1',
    link: 'https://example.com/project1'
  },
  {
    image: '../project-thumbnail.png',
    title: 'Project 2',
    description: 'Description of Project 1',
    link: 'https://example.com/project1'
  },
  {
    image: '../project-thumbnail.png',
    title: 'Project 3',
    description: 'Description of Project 1',
    link: 'https://example.com/project1'
  },
  {
    image: '../project-thumbnail.png',
    title: 'Project 4',
    description: 'Description of Project 1',
    link: 'https://example.com/project1'
  },
  // Add more projects here
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
        <p className="App-subtitle">Software Engineer | Full Stack Developer </p>
        <nav className="App-nav">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="about" className="App-section">
        <h2>About Me</h2>
        <p>Hi, I'm [Your Name], a software engineer with a passion for developing innovative programs. I've got a knack for problem-solving and work well in both team-oriented and self-directed environments.</p>
      </section>
      <section id="projects" className="App-section">
        <h2>Projects</h2>
        <div className="project-grid"> 
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
      <section id="contact" className="App-section">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile">yourprofile</a></p>
        <p>GitHub: <a href="https://github.com/yourusername">yourusername</a></p>
      </section>
    </div>
    
  );
}

export default App;
