
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold brand-color" href="#">
          🧸 Les Petits Explorateurs
        </a>
        <div className="navbar-nav ms-auto flex-row gap-3">
          <a className="nav-link" href="#accueil">Accueil</a>
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
