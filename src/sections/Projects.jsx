import React, { forwardRef } from "react";
import ProjectCard from "../components/ui/projectCard";
import ATM_Website from "../assets/ATM-website.png";
import ATM_logo from "../assets/ATM-client-logo.png";
import BeyondTheVisual from "../assets/BeyondTheVisual.webp";
import BWHLogo from "../assets/BWH.webp";
import Cero from "../assets/Cero.png";
import studentSuccess from "../assets/studentSuccess.png";
import BWSIcon from "../assets/BWS-Logo.png";
import Divider from "../components/divider";

// Use React.forwardRef to allow the ref to be passed down to the section
const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <Divider className="flex-grow">
        <h2>Projects</h2>
      </Divider>
      <div className="timeline flex justify-center items-start relative mt-10">
        <div className="flex-col space-y-6 my-4">
          <ProjectCard
            imagePath={ATM_logo}
            title="Patient Tracker"
            description="A web based mobile app for tracking patient information. This app allows users to view patient information, add new patients, and update existing patient information. The app is designed to be used by massage therapists to keep track of their clients."
            href={"https://randyer.github.io/ATM-app-demo/"}
          />
          <ProjectCard
            imagePath={ATM_Website}
            title="Alton Therapeutic Massage"
            description="The website for Alton Therapeutic Massage, a local business based in Alton, NH. Developed and maintained by me."
            href={"https://craniosacralmassagetherapy.com/"}
          />
          <ProjectCard
            imagePath={BeyondTheVisual}
            title="Beyond The Visual"
            description="The Worcester Art museum's mobile app for visually impaired guests. This app allows visitors to get detailed descriptions of the art pieces on display in the gallery."
            href={
              "https://apps.apple.com/us/app/beyond-the-visual/id6444328107"
            }
          />
          <ProjectCard
            imagePath={BWHLogo}
            title="Brighams and Womens"
            description="An application for the Brighams and Women's hospital that enables hospital administrators to efficiently manage service requests, patient and employee lists, room assignments, and other essential tasks. Employees can easily view their responsibilities and navigate the hospital. Patients benefit by staying informed of notifications, signing up for text message alerts, and navigating the hosptial."
            href={
              "https://docs.google.com/document/d/1nB_1RjJ3bOCf8VLKAoTiIXdCFOSljNsls4WEy7DaQo4/edit"
            }
          />
          <ProjectCard
            imagePath={Cero}
            title="Cero Cooperative"
            description="The website for Cero Cooperative, a composting company based in Boston Massachusetts. As an intern, I worked on enhancing the user interface for their website. This included implementing responsive web design, updating page layouts, and organizing content."
            href={"https://www.cero.coop/"}
          />
          <ProjectCard
            imagePath={studentSuccess}
            title="Student Success"
            description="A virtual handbook for students at Worcester Polytechnic Institute. This handbook is designed to ensure that all students have access to the resources on campus that promote student success. It highlights a variety of strategies and tools tailored to support the diverse student body, helping incoming students find the right resources."
            href={"https://studentsuccesshandbook.wpi.edu/"}
          />
          <ProjectCard
            imagePath={BWSIcon}
            title="Memory Matching Game"
            description="A memory matching game to teach kids about water conservation. I developed this game working as an intern for the Board of Water Supply in Oahu, Hawaii."
            href={"https://randyer.github.io/BWSmemoryMatchingGame/"}
          />
        </div>
      </div>
    </section>
  );
});

export default Projects;
