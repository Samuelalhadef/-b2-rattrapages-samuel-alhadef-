# Liste d'Ingrédients - Application Vue.js

## Description

Ce projet est une application web simple permettant de gérer une liste d'ingrédients pour faire ses courses. Développée avec Vue.js 3 et Pinia pour la gestion de l'état, cette application offre une interface utilisateur intuitive et réactive.

## Fonctionnalités

- Ajouter un ingrédient avec sa quantité à la liste
- Cocher/décocher les ingrédients (avec effet visuel barré)
- Supprimer un ingrédient de la liste
- Sauvegarde automatique dans le localStorage

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/liste-ingredients.git
cd liste-ingredients

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run serve
```

L'application sera accessible à l'adresse `http://localhost:8080`.

## Technologies utilisées

- Vue.js 3 (Composition API)
- Pinia pour la gestion d'état
- CSS personnalisé pour le style

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
```

## Comment utiliser l'application

1. Entrez le nom de l'ingrédient et sa quantité dans les champs appropriés
2. Cliquez sur "Ajouter" ou appuyez sur Entrée
3. Pour marquer un ingrédient comme acheté, cochez la case correspondante
4. Pour supprimer un ingrédient, cliquez sur le bouton "Supprimer"

## Sources d'inspiration

Ce projet a été développé en s'inspirant des ressources suivantes :
- Documentation officielle de Vue.js : [https://vuejs.org/](https://vuejs.org/)
- Documentation de Pinia : [https://pinia.vuejs.org/](https://pinia.vuejs.org/)
- W3Schools - Tutoriels Vue.js : [https://www.w3schools.com/vue/](https://www.w3schools.com/vue/)
- Tutoriel vidéo "Vue.js Course for Beginners" par Traversy Media : [https://youtu.be/FXpIoQ_rT_c?si=CUJzptyz19I1qgcr](https://youtu.be/FXpIoQ_rT_c?si=CUJzptyz19I1qgcr)

## Licence

MIT

---

*Note: Ce README a été reformulé par une IA pour corriger les fautes d'orthographe. Les sources citées incluent W3Schools, la documentation officielle de Vue.js et la vidéo de formation [https://youtu.be/FXpIoQ_rT_c?si=CUJzptyz19I1qgcr](https://youtu.be/FXpIoQ_rT_c?si=CUJzptyz19I1qgcr).*
