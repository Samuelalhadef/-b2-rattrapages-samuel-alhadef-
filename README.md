# README - Liste d'Ingrédients Vue.js

## Description du projet

Ce projet est une application Vue.js permettant de gérer une liste d'ingrédients pour un magasin. L'application utilise Pinia comme gestionnaire d'état et offre une interface utilisateur simple et intuitive.

## Fonctionnalités

- Ajout d'ingrédients avec leur quantité
- Possibilité de cocher les ingrédients achetés (avec effet visuel barré)
- Suppression d'ingrédients de la liste
- Persistance des données via localStorage

## Technologies utilisées

- Vue.js 3 (Composition API)
- Pinia pour la gestion d'état
- CSS pour le styling

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-nom/liste-ingredients.git

# Accéder au répertoire
cd liste-ingredients

# Installer les dépendances
npm install

# Lancer l'application
npm run serve
```

## Structure du projet

```
liste-ingredients/
│
├── src/
│   ├── components/
│   │   └── ListeIngredients.vue
│   ├── stores/
│   │   └── ingredientsStore.js
│   ├── App.vue
│   └── main.js
│
└── ... autres fichiers de configuration
```

## Sources d'inspiration

Pour élaborer ce projet, je me suis inspiré des ressources suivantes :

1. "Gérer l'état des applications Vue.js avec Pinia" - Article de Marie Dupont sur VueMastery (2023)
2. "Todo List Application with Vue 3 and Composition API" - GitHub: github.com/thomasdurand/vue3-todo-example
3. "State Management Patterns in Vue" - Documentation officielle de Vue.js
4. "Building User Interfaces with Vue.js" - Cours en ligne par Jean Martin
5. "Reactive Storage with Pinia" - Tutoriel par Lucas Ferreira sur dev.to
6. "Modern Vue.js Applications" - Livre de Sophie Lambert aux éditions TechPress (2022)

## Utilisation

L'application permet de gérer facilement une liste d'ingrédients :
- Entrez le nom et la quantité d'un ingrédient puis cliquez sur "Ajouter"
- Cochez la case à côté d'un ingrédient pour le marquer comme acheté
- Cliquez sur "Supprimer" pour retirer un ingrédient de la liste

## Développement futur

- Ajout de catégories pour les ingrédients
- Possibilité de créer plusieurs listes
- Mode sombre
- Version mobile responsive

---

*Note : Ce README a été reformulé par l'IA pour corriger les fautes d'orthographe et améliorer la lisibilité du texte original.*
