// All site copy lives here so every layout stays in sync.
import missingLinkImage from "../assets/missing-link.png";

export const profile = {
  name: "Randy Dyer",
  email: "rbdyer3@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/randyer" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/randy-dyer-7556b2213/" },
    { label: "Résumé", href: "/resume.pdf" },
  ],
};

export const experience = [
  {
    company: "BioSensics",
    role: "Software Engineer",
    dates: "Sep 2026 – Present",
    current: true,
    points: [],
    tags: [],
  },
  {
    company: "Space Age Electronics",
    role: "Software Engineer",
    dates: "Jan 2025 – Sep 2026",
    points: [
      "Built a touchscreen fire alarm annunciator in Electron that connects to fire panels over serial and shows device status in real time.",
      "Built its admin counterpart: a drag-and-drop editor that generates UI layout and point-to-point config files, so new buildings can be deployed quickly.",
      "Built a tablet UI and Voice over IP network infrastructure for an emergency two-way communication system.",
      "Built a 3D configurator inside Epicor ERP for placing components in custom fire-safety cabinets and generating AutoCAD drawings automatically.",
      "Automated engineering request intake with Power Automate and Planner, tracked turnaround in Power BI, and demoed products to executives and investors.",
    ],
    tags: ["Electron", "Node.js", "Serial", "VoIP", "Epicor ERP", "AutoCAD", "Power Platform"],
  },
];

export const projects = [
  {
    title: "Missing Link",
    context: "Steam · Early Access",
    description:
      "A party word game I designed and built solo. Two teams race to finish a word chain from one-word clues. The TV shows the shared board, and 4–10 players join from their phones by scanning a QR code, kept in sync in real time over WebSockets.",
    image: { src: missingLinkImage, alt: "Missing Link logo: a glowing orange chain with one broken link" },
    tags: ["React", "Electron", "Node.js", "Socket.IO"],
    links: [{ label: "Steam", href: "https://store.steampowered.com/app/4675610/Missing_Link/" }],
  },
  {
    title: "Alton Therapeutic Massage",
    context: "Freelance client",
    description:
      "Designed and built the business's website and a full-stack React app for client records (contact info, health history, appointment notes) with encrypted storage and authenticated access. The site increased client inquiries by 70%, and digital intake forms shortened first visits.",
    tags: ["React", "AWS Amplify", "RDS", "Cognito"],
    links: [
      { label: "Website", href: "https://craniosacralmassagetherapy.com/" },
      { label: "App demo", href: "https://randyer.github.io/ATM-app-demo/" },
    ],
  },
  {
    title: "Beyond the Visual",
    context: "Worcester Art Museum · WPI MQP",
    description:
      "A museum app for visually impaired visitors. Built an indoor positioning system from BLE beacons and trilateration, added screen-reader labels and audio descriptions, and ran user testing with blind and sighted visitors.",
    tags: ["React Native", "Firebase", "MongoDB", "BLE"],
    links: [],
  },
  {
    title: "Hospital Service App",
    context: "Brigham and Women's Hospital",
    description:
      "Led back-end development for a team of 10: the AWS PostgreSQL database and Java services behind service requests, hospital navigation, and admin tools like map editing.",
    tags: ["Java", "PostgreSQL", "AWS RDS"],
    links: [{ label: "GitHub", href: "https://github.com/randyer/appBWH" }],
  },
  {
    title: "Water Conservation Game",
    context: "Board of Water Supply, Oʻahu",
    description:
      "A memory matching game that teaches kids water conservation tips, tested with students and teachers at local elementary schools.",
    tags: ["JavaScript", "HTML", "CSS"],
    links: [
      { label: "Play", href: "https://randyer.github.io/BWSmemoryMatchingGame/" },
      { label: "GitHub", href: "https://github.com/randyer/BWSmemoryMatchingGame" },
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Java", "Python", "SQL", "C/C++"] },
  { group: "Frameworks", items: ["React", "React Native", "Node.js", "Electron"] },
  { group: "Cloud & data", items: ["AWS", "PostgreSQL", "MongoDB", "Firebase"] },
  { group: "Tools", items: ["Git", "Figma", "Jira"] },
];

export const education = {
  school: "Worcester Polytechnic Institute",
  degree: "B.S. Computer Science",
  year: "2024",
};

export const about =
  "Off the clock I'm playing basketball, golf, or pickleball, hiking, cooking, making music, or working on games. My first one, Missing Link, is out in Early Access on Steam.";
