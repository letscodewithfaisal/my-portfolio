
import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
} from "react-icons/fa";

import profileImg from "./profile.jpeg";

import projectImg1 from "./project1.avif";
import projectImg2 from "./project2.avif";
import projectImg3 from "./project3.avif";
import projectImg4 from "./project4.avif";
import projectImg5 from "./project5.avif";
import projectImg6 from "./project6.avif";

// Main Assets
export const assets = {
  profileImg,
};

// About Information
export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I enjoy solving problems and building creative solutions using modern web technologies.",
    color: "text-purple-400",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "I focus on creating clean, attractive and user-friendly web experiences.",
    color: "text-pink-400",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I believe in writing organized, reusable and maintainable code.",
    color: "text-blue-400",
  },
];

// Skills Information
export const skills = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, user-friendly and visually appealing web interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "Cross-Browser Compatibility",
    ],
    featured: true,
  },
  {
    number: "02",
    title: "React Ecosystem",
    description:
      "Creating reusable components and interactive applications using React.",
    skills: [
      "React.js",
      "React Hooks",
      "useState",
      "useEffect",
      "Props & State",
      "Component Architecture",
    ],
  },
  {
    number: "03",
    title: "Backend & API Fundamentals",
    description:
      "Understanding backend concepts and connecting frontend applications with APIs.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Fetch API",
      "Async / Await",
      "JSON",
    ],
  },
  {
    number: "04",
    title: "Tools & Development Workflow",
    description:
      "Using modern development tools to build, manage and deploy projects.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "npm",
      "Vercel",
    ],
  },
];

// Projects Information
export const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects and frontend development journey.",
    image: projectImg1,
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    demo: "#",
    github: "#",
  },
  {
    title: "Random Password Generator",
    description:
      "A responsive password generator offering customizable passwords, strength checking, and instant clipboard copying.",
    image: projectImg2,
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://random-password-generator-alpha-orpin.vercel.app/",
    github: "https://github.com/letscodewithfaisal/random-password-generator",
  },
  {
    title: "ChaiTailwind",
    description:
      "A lightweight JavaScript engine transforming custom HTML utility classes into dynamic inline CSS styles.",
    image: projectImg3,
    tech: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    demo: "https://mini-tailwind-css-like-engine-using.vercel.app/",
    github: "https://github.com/letscodewithfaisal/mini-Tailwind-CSS-like-engine-using-JavaScript.",
  },
  {
    title: "The Meal Board",
    description:
      "An interactive recipe browser fetching meal data and displaying recipes inspired interface.",
    image: projectImg4,
    tech: ["React.js", "CSS", "REST API"],
    demo: "https://the-meal-board.vercel.app/",
    github: "https://github.com/letscodewithfaisal/The-Meal-Board",
  },
  {
    title: "Quotes Catalog",
    description:
      "An interactive quote library featuring random quotes, searchable collections.",
    image: projectImg5,
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "https://random-quote-listing.vercel.app/",
    github: "https://github.com/letscodewithfaisal/Random-Quote-Listing-",
  },
  {
    title: "Youtube-Videos-Listing-UI",
    description:
      "YouTube-style video listing interface using the Videos API.",
    image: projectImg6,
    tech: ["HTML", "Tailwind CSS", "JAVASCRIPT"],
    demo: "https://you-tube-videos-listing-ui-one.vercel.app/",
    github: "https://github.com/letscodewithfaisal/YouTube-Videos-Listing-UI",
  },
];

// Work Information
export const workData = [];
