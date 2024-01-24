import { links } from "../data";

export default function Links({ className }) {
  const isMobile = className === "mobile-links";

  return (
    <ul className={className}>
      {links.map((link) => {
        return isMobile ? (
          <li className="icon-link" key={link.id}>
            <a
              href={link.linkTo}
              target={link.title === "Resume" ? "_blank" : undefined}
            >
              <img src={link.icon} alt={link.title} />
            </a>
          </li>
        ) : (
          link.title && (
            <li className="link" key={link.id}>
              <a
                href={link.linkTo}
                target={link.title === "Resume" ? "_blank" : undefined}
              >
                {link.title}
              </a>
            </li>
          )
        );
      })}
    </ul>
  );
}
