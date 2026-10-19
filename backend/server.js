
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const garderie = {
  nom: "Les Petits Explorateurs",
  description: "Une garderie chaleureuse pour apprendre et grandir.",
  adresse: "Tunis, Tunisie",
  telephone: "+216 00 000 000"
};

const services = [
  { id: 1, nom: "Éveil et créativité", description: "Dessin et peinture." },
  { id: 2, nom: "Apprentissage", description: "Jeux éducatifs." },
  { id: 3, nom: "Socialisation", description: "Jeux collectifs." }
];

const activites = [
  { id: 1, nom: "Dessin", age: "3-5 ans" },
  { id: 2, nom: "Lecture", age: "3-6 ans" },
  { id: 3, nom: "Musique", age: "2-6 ans" }
];

app.get("/api/garderie", (req, res) => {
  res.json(garderie);
});

app.get("/api/services", (req, res) => {
  res.json(services);
});

app.get("/api/activites", (req, res) => {
  res.json(activites);
});

app.listen(PORT, () => {
  console.log(`Backend disponible sur http://localhost:${PORT}`);
});
