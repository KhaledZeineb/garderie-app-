
"use client";

import { useEffect, useState } from "react";

type Garderie = {
  nom: string;
  description: string;
  adresse: string;
  telephone: string;
};

export default function Hero() {
  const [garderie, setGarderie] = useState<Garderie | null>(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/garderie")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur API");
        return res.json();
      })
      .then(setGarderie)
      .catch(() => setGarderie(null));
  }, []);

  return (
    <section id="accueil" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">
              {garderie?.nom ?? "Grandir, apprendre et s'épanouir !"}
            </h1>
            <p className="lead my-4">
              {garderie?.description ??
                "Un lieu chaleureux pour apprendre en s'amusant."}
            </p>
            <p>{garderie?.adresse}</p>
            <p>{garderie?.telephone}</p>
            <a href="#contact" className="btn btn-warning btn-lg">
              Inscrire mon enfant
            </a>
          </div>

          <div className="col-md-6">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80"
              alt="Enfant qui joue"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
