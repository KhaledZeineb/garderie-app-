import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold brand-color" href="#accueil">
            🧸 Les Petits Explorateurs
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Ouvrir le menu"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#accueil">Accueil</a>
              <a className="nav-link" href="#services">Services</a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="accueil" className="hero-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">
                Grandir, apprendre et s'épanouir !
              </h1>
              <p className="lead my-4">
                Bienvenue dans notre garderie, un lieu chaleureux où
                chaque enfant découvre le monde en s'amusant.
              </p>
              <a href="#contact" className="btn btn-warning btn-lg">
                Inscrire mon enfant
              </a>
            </div>

            <div className="col-md-6">
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80"
                alt="Enfant qui joue dans un environnement adapté"
              />
            </div>
          </div>
        </div>
      </section>

      <Services />

      <footer id="contact" className="bg-white py-4 text-center">
        <div className="container">
          <p className="mb-1 fw-bold">Les Petits Explorateurs</p>
          <p className="mb-1">Contactez-nous pour visiter notre garderie.</p>
          <p className="mb-0">Adresse : Tunis, Tunisie</p>
        </div>
      </footer>
    </>
  );
}
