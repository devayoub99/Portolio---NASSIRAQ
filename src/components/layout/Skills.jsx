import developerImage from "../../assets/developer.webp";
import { skills } from "../../data";

import Skill from "../Skill";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="brief">
          <div className="image">
            <img src={developerImage} alt="Developer" />
          </div>
          <div className="text">
            <h3 className="name">Ayoub Jasim</h3>
            <p className="description">
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
              <span className="bold-text"> React JS, Tailwindcss, and much more</span>
              .
            </p>
          </div>
        </div>
        <h2 className="special-heading">
          Hard <span className="colored">Skills</span>
        </h2>
        <div className="skills-container">
          {skills.map((skill) => (
            <Skill key={skill.id} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
