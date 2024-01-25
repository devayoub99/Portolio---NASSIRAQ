import homeIcon from "./assets/home.svg";
import skillsIcon from "./assets/skills.svg";
import portfolioIcon from "./assets/portfolio.svg";
import resumeIcon from "./assets/resume.svg";
import contactIcon from "./assets/contact.svg";

import resumeFile from "./assets/resume.pdf";

const links = [
  {
    id: 1,
    icon: homeIcon,
    linkTo: "#",
  },
  {
    id: 2,
    title: "Skills",
    icon: skillsIcon,
    linkTo: "#skills",
  },
  {
    id: 3,
    title: "Portfolio",
    icon: portfolioIcon,
    linkTo: "#portfolio",
  },
  {
    id: 4,
    title: "Resume",
    icon: resumeIcon,
    linkTo: resumeFile,
  },
  {
    id: 5,
    title: "Contact",
    icon: contactIcon,
    linkTo: "#contact",
  },
];

const skills = [
  {
    id: 1,
    language: "HTML",
    progress: 4,
  },
  {
    id: 2,
    language: "CSS",
    progress: 4,
  },
  {
    id: 3,
    language: "JavaScript",
    progress: 4,
  },
  {
    id: 4,
    language: "SCSS",
    progress: 4,
  },
  {
    id: 5,
    language: "Bootstrap",
    progress: 3,
  },
  {
    id: 6,
    language: "Git & GitHub",
    progress: 3,
  },
  {
    id: 7,
    language: "TailwindCSS",
    progress: 4,
  },
  {
    id: 8,
    language: "React JS",
    progress: 4,
  },
];

export { links, skills };
