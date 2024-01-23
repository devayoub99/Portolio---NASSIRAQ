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

export { links };
