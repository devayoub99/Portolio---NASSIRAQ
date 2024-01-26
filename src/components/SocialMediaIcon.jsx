export default function SocialMediaIcon(props) {
  return (
    <a href={props.url} target="_blank" className="social-media-icon">
      <img src={props.img} alt={props.title} />
    </a>
  );
}
