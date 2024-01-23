import { links } from "../data";

export default function Links({ className }) {
  const isMobile = className === "mobile-links" ? true : false;

  return (
    <ul className={className}>
      {links.map((link) => {
        return (
          <li className={isMobile ? "icon-link" : "link"} key={link.id}>
            <a
              href={link.linkTo}
              target={link.title === "Resume" ? "_blank" : undefined}
            >
              {isMobile ? <img src={link.icon} alt={link.title} /> : link.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
