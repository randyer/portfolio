import React, { forwardRef } from "react";
import Divider from "../components/Divider";
import TextBubble from "../components/TextBubble";

const Skills = forwardRef((props, ref) => {
  const tools = [
    "React",
    "mySQL",
    "mongoDB",
    "Firebase",
    "PostgreSQL",
    "Skikit-learn",
    "Node.js",
    "Junit",
    "Express.js",
  ];

  const development = [
    "Agile",
    "Expo",
    "Github",
    "Linux",
    "AWS",
    "macOS",
    "Jira",
    "Windows",
    "Figma",
  ];

  const languages = ["Java", "Python", "C", "C++", "JavaScript", "TypeScript"];

  return (
    <section className="flex flex-col" ref={ref}>
      <Divider className="flex-grow">
        <h2 id="skills">Skills</h2>
      </Divider>
      <div className="flex flex-wrap self-center justify-center mx-2 max-w-4xl">
        <div className="flex flex-wrap self-center justify-center mx-2 max-w-4xl">
          {tools.map((item, index) => (
            <TextBubble key={index}>{item}</TextBubble>
          ))}
          {languages.map((item, index) => (
            <TextBubble key={index}>{item}</TextBubble>
          ))}
        </div>
        <div className="flex flex-wrap self-center justify-center mx-2 max-w-4xl">
          {development.map((item, index) => (
            <TextBubble key={index}>{item}</TextBubble>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;
