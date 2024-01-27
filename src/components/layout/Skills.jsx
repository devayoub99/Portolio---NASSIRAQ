import { motion as m } from "framer-motion";

import developerImage from "../../assets/developer.webp";
import { skills } from "../../data";
import { fadeInVariants } from "../../animations";

import Skill from "../Skill";

const fadeInSkillVariants = {
  from: {
    opacity: 0,
    y: 50,
  },
  to: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <m.div
          className="brief"
          initial="from"
          whileInView="to"
          viewport={{ once: true }}
        >
          <m.div className="image" variants={fadeInVariants} custom={0}>
            <img src={developerImage} alt="Developer" />
          </m.div>
          <div className="text">
            <m.h3 className="name" variants={fadeInVariants} custom={1}>
              Ayoub Jasim
            </m.h3>
            <m.p className="description" variants={fadeInVariants} custom={2}>
              A passionate, self-learning developer who specializes in
              <span className="bold-text"> Frontend development</span>. User
              experience, pixel perfect design, and writing clean, readable,
              highly performant code matters to me. I began my journey in
              <span className="bold-text"> 2021</span>, and since then, I've
              continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now,
              <span className="bold-text"> I have +3 years experience</span>,
              I'm building cutting-edge web applications using modern
              technologies such as
              <span className="bold-text">
                {" "}
                React JS, Tailwindcss, and much more
              </span>
              .
            </m.p>
          </div>
        </m.div>
        <m.h2
          className="special-heading"
          initial="from"
          whileInView="to"
          viewport={{ once: true }}
          variants={fadeInVariants}
          custom={3}
        >
          Hard <span className="colored">Skills</span>
        </m.h2>
        <m.div
          className="skills-container"
          initial="from"
          whileInView="to"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <Skill
              key={skill.id}
              {...skill}
              variants={fadeInSkillVariants}
              custom={index + 4}
            />
          ))}
        </m.div>
      </div>
    </section>
  );
}
