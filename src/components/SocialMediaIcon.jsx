import { motion as m } from "framer-motion";

export default function SocialMediaIcon(props) {
  return (
    <m.a
      href={props.url}
      target="_blank"
      className="social-media-icon"
      variants={props.variants}
    custom = {props.custom}
    >
      <img src={props.img} alt={props.title} />
    </m.a>
  );
}
