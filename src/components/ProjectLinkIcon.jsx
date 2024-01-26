import githubIcon from "../assets/github.svg";
import websiteIcon from "../assets/website.svg";

export default function ProjectLinkIcon({ icon, url }) {
  const theIcon = icon === "Website" ? websiteIcon : githubIcon;

  return (
    <a href={url} target="_blank">
      <img src={theIcon} alt={icon} className="icon" />
    </a>
  );
}
