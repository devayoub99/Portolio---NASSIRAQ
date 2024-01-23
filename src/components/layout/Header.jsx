import Links from "../Links";

export default function Header() {
  return (
    <header className="page-header">
      <nav className="container">
        <h2>
          <a href="#" className="logo">
            <img src="/logo.svg" alt="website logo" />
            <span>ayoub jasim</span>
          </a>
        </h2>
        <Links className="mobile-links" />
        <Links className="links" />
      </nav>
    </header>
  );
}
