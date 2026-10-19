
"use client";

import { useEffect, useState } from "react";

type Service = {
  id: number;
  nom: string;
  description: string;
};

type Activite = {
  id: number;
  nom: string;
  age: string;
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [activites, setActivites] = useState<Activite[]>([]);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:4000/api/services").then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des services");
        return res.json();
      }),
      fetch("http://localhost:4000/api/activites").then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des activités");
        return res.json();
      }),
    ])
      .then(([servicesData, activitesData]) => {
        setServices(servicesData);
        setActivites(activitesData);
      })
      .catch(() => {
        setErreur("Impossible de charger les données. Vérifiez que le backend fonctionne.");
      });
  }, []);

  return (
    <section id="services" className="container py-5">
      <h2 className="text-center mb-4">Nos services</h2>

      {erreur && <p className="alert alert-danger">{erreur}</p>}

      <div className="row g-4">
        {services.map((service) => (
          <div className="col-md-4" key={service.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title h5">{service.nom}</h3>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center mt-5 mb-4">Nos activités</h2>

      <div className="row g-4">
        {activites.map((activite) => (
          <div className="col-md-4" key={activite.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title h5">{activite.nom}</h3>
                <p className="card-text">Âge : {activite.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
