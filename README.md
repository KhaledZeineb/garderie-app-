
# Garderie App

## Présentation

Garderie App est une application web responsive pour une garderie
d'enfants. Elle présente les informations de la garderie, ses services
et les activités proposées aux enfants.

## Technologies utilisées

- Next.js et React : frontend
- TypeScript : typage
- Bootstrap 5 : interface responsive
- Node.js et Express : backend REST
- Git et GitHub : gestion de versions

## Structure du projet

```text
garderie-app/
├── backend/
│   ├── package.json
│   └── server.js
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       └── Services.tsx
├── package.json
└── README.md
```

## Installation

Prérequis : Node.js, npm et Git.

Installer le frontend depuis la racine du projet :

```bash
npm install
npm install bootstrap
```

Installer le backend :

```bash
cd backend
npm install
```

## Exécution

Terminal 1 — Backend :

```bash
cd backend
npm run dev
```

Terminal 2 — Frontend, depuis la racine :

```bash
npm run dev
```

Ouvrir http://localhost:3000 dans le navigateur.

Le backend écoute sur http://localhost:4000.

## Documentation des API REST

### GET /api/garderie

Retourne les informations générales de la garderie.

Exemple :

```json
{
  "nom": "Les Petits Explorateurs",
  "description": "Une garderie chaleureuse pour apprendre et grandir.",
  "adresse": "Tunis, Tunisie",
  "telephone": "+216 00 000 000"
}
```

### GET /api/services

Retourne la liste des services proposés.

### GET /api/activites

Retourne les activités destinées aux enfants, avec leur tranche d'âge.

## Branches Git

- main : branche principale
- feature/landing-page : première landing page
- feature/components : composants indépendants
- feature/backend : API REST Express
- feature/api-integration : connexion frontend/backend
- docs/readme : documentation du projet

Chaque étape est développée dans une branche dédiée,
puis fusionnée dans main après un commit.
