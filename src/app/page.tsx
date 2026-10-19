
const services = [
  {
    icon: "🎨",
    title: "Éveil et créativité",
    description: "Des activités artistiques pour développer l'imagination."
  },
  {
    icon: "📚",
    title: "Apprentissage",
    description: "Des jeux éducatifs adaptés à chaque âge."
  },
  {
    icon: "🧸",
    title: "Jeux et socialisation",
    description: "Des moments de partage dans un environnement sécurisé."
  }
];

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold brand-color" href="#">
            🧸 Les Petits Explorateurs
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
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

      <section id="services" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nos services</h2>
          <p>Un accompagnement adapté au développement de chaque enfant.</p>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-4" key={service.title}>
              <div className="card service-card p-4 text-center">
                <div className="display-4">{service.icon}</div>
                <h3 className="h5 fw-bold mt-3">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-white py-4 text-center">
        <p className="mb-1 fw-bold">Les Petits Explorateurs</p>
        <p className="mb-0">Contactez-nous pour visiter notre garderie.</p>
      </footer>
    </>
  );
}
