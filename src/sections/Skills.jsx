import React, { forwardRef } from "react";
import Divider from "../components/Divider";
import TextBubble from "../components/TextBubble";

const Skills = forwardRef((props, ref) => {
  const development = [
    "React",
    "Node.js",
    "Agile",
    "AWS",
    "Expo",
    "Express.js",
    "Github",
    "PostgreSQL",
    "mongoDB",
    "Firebase",
    "Junit",
    "Skikit-learn",
    "Linux",
    "macOS",
    "Jira",
    "Windows",
    "Figma",
  ];

  const languages = [
    "Java",
    "Python",
    "C/C++",
    "mySQL",
    "JavaScript",
    "TypeScript",
  ];

  return (
    <section className="flex flex-col" ref={ref}>
      <Divider className="flex-grow">
        <h2 id="skills">Skills</h2>
      </Divider>
      <div className="flex flex-wrap self-center justify-center mx-2 max-w-4xl">
        <div className="flex flex-wrap self-center justify-center mx-2 max-w-4xl">
          {development.map((item, index) => (
            <TextBubble key={index}>{item}</TextBubble>
          ))}
          {languages.map((item, index) => (
            <TextBubble key={index}>{item}</TextBubble>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;
