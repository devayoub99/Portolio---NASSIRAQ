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

import linkedinImg from "./assets/linkedin.svg";
import discordImg from "./assets/discord.svg";
import facebookImg from "./assets/facebook.svg";
import emailImg from "./assets/email.svg";

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
    title: "Contact",
    icon: contactIcon,
    linkTo: "#contact",
  },
  {
    id: 5,
    title: "Resume",
    icon: resumeIcon,
    linkTo: resumeFile,
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

const socialMedia = [
  {
    id: 1,
    title: "facebook",
    img: facebookImg,
    url: "https://www.facebook.com/profile.php?id=100085270735685",
  },
  {
    id: 2,
    title: "discord",
    img: discordImg,
    url: "https://discord.com/users/869210911863361567",
  },
  {
    id: 3,
    title: "linkedin",
    img: linkedinImg,
    url: "https://www.linkedin.com/in/ayoubjasim/",
  },
  {
    id: 4,
    title: "Email",
    img: emailImg,
    url: "mailTo:admin@devayb.com",
  },
];

export { links, skills, projects, socialMedia };
