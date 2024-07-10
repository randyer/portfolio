// import React, { useState } from 'react';
import './App.css';
import Project from './components/Project';
import Footer from './components/Footer';
import TriPanel from './components/TriPanel';



function App() {

  return (
    <div className={`App theme-dark`} >
      <header className="App-header">
        <img src="randy.webp" className="App-logo" alt="profile" />
        <nav className="App-nav">
        <a href="#projects">Projects</a>

        <a href="#employment">Employment</a>

        <a href="#about">About</a>
        </nav>
      </header>
      <section id="about" className="App-section">
        <TriPanel className='montserrat-100' sectionData={sectionData}></TriPanel>
        
      </section>
      <section id="projects" className="App-section">
      <div className="custom-shape-divider-top-1720548982">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
      </div>
        <div className="project-grid">
          {projectsDesc.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
      <section id="contact" className="App-section">
        <Footer />
      </section>
    </div>
  );
}

export default App;

const projectsDesc = [
  {
    image: '../pictures/btv.png',
    title: 'Beyond The Visual',
    link: 'https://apps.apple.com/us/app/beyond-the-visual/id6444328107',
    description: "The Worcester Art museum's mobile app for visually impaired guests. This app allows visitors to get detailed descriptions of the art pieces on display in the gallery."
  },
  {
    image: '../pictures/bwh.png',
    title: 'Hospital Service Application',
    link: 'https://docs.google.com/document/d/1nB_1RjJ3bOCf8VLKAoTiIXdCFOSljNsls4WEy7DaQo4/edit',
    description: "An application for the Brighams and Women's hospital that enables hospital administrators to efficiently manage service requests, patient and employee lists, room assignments, and other essential tasks. Employees can easily view their responsibilities and navigate the hospital. Patients benefit by staying informed of notifications, signing up for text message alerts, and navigating the hosptial."
  },
  {
    image: '../pictures/sshandbook.png',
    title: 'Student Success handbook',
    link: 'https://studentsuccesshandbook.wpi.edu/',
    description: 'A virtual handbook for students at Worcester Polytechnic Institute. This handbook is designed to ensure that all students have access to the resources on campus that promote student success. It highlights a variety of strategies and tools tailored to support the diverse student body, helping incoming students find the right resources. '
  },
  {
    image: '../pictures/CERO.png',
    title: 'CERO cooperative',
    link: 'https://www.cero.coop/',
    description: "The website for Cero Cooperative, a composting company based in Boston Massachusetts. As an intern, I worked on enhancing the user interface for their website. This included implementing responsive web design, updating page layouts, and organizing content."
  },
  {
    image: '../pictures/atm.png',
    title: 'Alton Therapeutic Massage',
    link: 'https://craniosacralmassagetherapy.com/',
    description: 'The website for Alton Therapeutic Massage, a local business based in Alton, NH. Developed and maintained by me.'
  },
  {
    image: '../pictures/bws.png',
    title: 'BWS Memory matching game',
    link: 'https://randyer.github.io/BWSmemoryMatchingGame',
    description: 'A memory matching game to teach kids about water conservation. I developed this game working as an intern for the Board of Water Supply in Oahu, Hawaii.'
  },
];

const sectionData = [
  {
    title: 'Tools',
    items: [
      'React','mySQL',
      'mongoDB','Firebase',
      'PostgreSQL','Skikit-learn',
      'Node.js', 'Junit',
      'Express.js'
    ],
  },
  {
    title: 'Languages',
    images: [
      { src: '..//pictures/java.svg', alt: 'Java' },
      { src: '..//pictures/python.svg', alt: 'Python' },
      { src: '..//pictures/c.svg', alt: 'C' },
      { src: '..//pictures/c++.svg', alt: 'C++' },
      { src: '..//pictures/js.svg', alt: 'JavaScript' },
      { src: '..//pictures/typeScript.svg', alt: 'TypeScript' },
      { src: '..//pictures/html.svg', alt: 'html'},
      { src: '..//pictures/css.svg', alt: 'css' },

    ],
  },
  {
    title: 'Development',
    items: [
      'Agile','Expo',
      'Github','Linux',
      'AWS','macOS',
      'Jira','Windows',
      'Figma'
      

 
 

    ],
  },
];
