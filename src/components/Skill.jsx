import { motion as m } from "framer-motion";



export default function Skill({ language, progress, variants, custom }) {
  const filledSequres = Array.from(
    { length: progress },
    (_, index) => index + 1
  );

  const emptySequres = Array.from(
    { length: 5 - progress },
    (_, index) => index + progress + 1
  );

  return (
    <m.div className="skill" variants={variants} custom={custom}>
      <h3 className="language">{language}</h3>
      <ul className="progress">
        {filledSequres.map((_, index) => (
          <li key={index} className="filled-sequre"></li>
        ))}
        {emptySequres.map((_, index) => (
          <li key={index} className="empty-sequre">
            {" "}
          </li>
        ))}
      </ul>
    </m.div>
  );
}
