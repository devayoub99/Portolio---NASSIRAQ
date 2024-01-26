export default function Skill({ language, progress }) {
  const filledSequres = Array.from(
    { length: progress },
    (_, index) => index + 1
  );

  const emptySequres = Array.from(
    { length: 5 - progress },
    (_, index) => index + progress + 1
  );

  return (
    <div className="skill">
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
    </div>
  );
}
