import { motion as m } from "framer-motion";

import { projects } from "../../data";
import Project from "../Project";
import { fadeInHeadingVariants, fadeInVariants } from "../../animations";

export default function Portfolio() {
  return (
    <m.section
      className="portfolio"
      id="portfolio"
      initial="from"
      whileInView="to"
      viewport={{ once: true }}
    >
      <div className="container">
        <m.h2 className="special-heading" variants={fadeInHeadingVariants}>
          My
          <m.span
            className="colored"
            variants={fadeInHeadingVariants}
            custom={1}
          >
            Portfolio
          </m.span>
        </m.h2>
        <div className="projects">
          {projects.map((project, index) => (
            <Project
              key={project.id}
              {...project}
              variants={fadeInVariants}
              custom={index}
            />
          ))}
        </div>
      </div>
    </m.section>
  );
}
