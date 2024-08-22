# My Movie App

## Description

**My Movie App** est une application de gestion de films développée avec **React** et **Redux**. L'application permet de lister des films, de les filtrer par catégorie, de les paginer, de les aimer/détester, et de les supprimer. L'objectif de ce projet est de démontrer des compétences en développement front-end avec React et la gestion d'état global avec Redux.

## Fonctionnalités

- **Liste de films** : Affiche les films sous forme de cartes avec titre, catégorie, likes, et dislikes.
- **Filtrage par catégorie** : Filtre les films par catégorie avec un multi-sélecteur.
- **Pagination** : Navigation entre les pages avec possibilité de choisir le nombre de films affichés par page (4, 8 ou 12).
- **Gestion des likes/dislikes** : Ajout d'un bouton pour aimer ou détester un film.
- **Suppression de film** : Supprime un film de la liste.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) (généralement installé avec Node.js)

## Installation

1. **Cloner le dépôt** :
   ```bash
   git clone git@github.com:julie-dstl/react-interview.git
   cd moviesapp
   ```

2. **Installer les dépendances**:
    ```bash
    npm install
    ```

## Lancer l'application

1. **Démarrer le serveur**
    ```bash
    npm start
    ```

2. **Accéder à l'application**:

Une fois le serveur démarré, l'application sera accessible à l'adresse suivante : http://localhost:3000.

## Architecture du projet

```bash
├── package.json
├── package-lock.json
├── public
│   ├── index.html
│   ├── small-thumb-down-gray.png
│   └── small-thumb-up-gray.png
├── README.md
└── src
    ├── App.js
    ├── App.test.js
    ├── components
    │   ├── Filter.css
    │   ├── Filter.js
    │   ├── HomePage.css
    │   ├── HomePage.js
    │   ├── MovieCard.css
    │   ├── MovieCard.js
    │   ├── MovieList.css
    │   ├── MovieList.js
    │   ├── Pagination.js
    │   └── Pagination.css
    ├── index.css
    ├── index.js
    ├── movies.js
    ├── redux
    │   ├── actions.js
    │   ├── reducers.js
    │   └── store.js
    ├── reportWebVitals.js
    └── setupTests.js
```
