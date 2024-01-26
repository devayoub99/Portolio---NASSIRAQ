import homeIcon from "./assets/home.svg";
import skillsIcon from "./assets/skills.svg";
import portfolioIcon from "./assets/portfolio.svg";
import resumeIcon from "./assets/resume.svg";
import contactIcon from "./assets/contact.svg";
import resumeFile from "./assets/resume.pdf";

import youtubeProjectImg from "./assets/youtube.webp";
import portfolioProjectImg from "./assets/new.webp";
import oldPortfolioProjectImg from "./assets/old.webp";
import ecoProjectImg from "./assets/eco.webp";

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

const projects = [
  {
    id: 1,
    title: "YouTube - Cloned",
    description:
      "Clone YouTube using ReactJS and youtube v3 API. Offers some good features of YouTube.",
    liveUrl: "https://youtube-cloned.devayb.com/",
    githubUrl: "https://github.com/devayoub99/YouTube---Cloned",
    imgUrl: youtubeProjectImg,
  },
  {
    id: 2,
    title: "My portfolio website",
    description:
      "My new portfolio website, created using React, Framer-motion and SCSS",
    liveUrl: "https://devayb.com/",
    githubUrl: "https://github.com/devayoub99/Portfolio-website---ReactJS",
    imgUrl: portfolioProjectImg,
  },
  {
    id: 3,
    title: "E-commerce Website",
    description:
      "Ecommerce website Build from scratch, Using HTML, SCSS, JavaScript and RESTful API",
    liveUrl: "https://eco.devayb.com/",
    githubUrl: "https://github.com/devayoub99/Ecommerce-website",
    imgUrl: ecoProjectImg,
  },
  {
    id: 4,
    title: "Old portfolio website",
    description: "My portfolio website, with HTML, JavaScript and SCSS.",
    liveUrl: "https://old.devayb.com/",
    githubUrl: "https://github.com/devayoub99/Portfolio-website",
    imgUrl: oldPortfolioProjectImg,
  },
  {
    id: 5,
    title: "YouTube - Cloned",
    description:
      "Clone YouTube using ReactJS and youtube v3 API. Offers some good features of YouTube.",
    liveUrl: "https://youtube-cloned.devayb.com/",
    githubUrl: "https://github.com/devayoub99/YouTube---Cloned",
    imgUrl: youtubeProjectImg,
  },
  {
    id: 6,
    title: "My portfolio website",
    description:
      "My new portfolio website, created using React, Framer-motion and SCSS",
    liveUrl: "https://devayb.com/",
    githubUrl: "https://github.com/devayoub99/Portfolio-website---ReactJS",
    imgUrl: portfolioProjectImg,
  },
];

export { links, skills, projects };
