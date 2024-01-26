import { projects } from "../../data";
import Project from "../Project";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="special-heading">
          My <span className="colored">Portfolio</span>
        </h2>
        <div className="projects">
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
