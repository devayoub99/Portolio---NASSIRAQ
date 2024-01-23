import landingImg from "../../assets/landing.svg";

export default function Landing() {
  return (
    <section className="landing">
      <div className="container">
        <div className="text">
          <p>Hi ✋, I'm a</p>
          <h2>Frontend developer</h2>
          <p>Welcome to my portfolio website</p>
        </div>
        <div className="image">
          <img src={landingImg} alt="Landing" />
        </div>
      </div>
    </section>
  );
}
