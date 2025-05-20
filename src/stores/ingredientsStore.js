import { defineStore } from 'pinia'

export const useIngredientsStore = defineStore('ingredients', {
  state: () => ({
    ingredients: []
  }),
  
  actions: {
    ajouterIngredient(nom, quantite) {
      if (nom.trim() && quantite.trim()) {
        this.ingredients.push({
          id: Date.now(),
          nom,
          quantite,
          achete: false
        })
      }
    },
    
    cocherIngredient(id) {
      const ingredient = this.ingredients.find(item => item.id === id)
      if (ingredient) {
        ingredient.achete = !ingredient.achete
      }
    },
    
    supprimerIngredient(id) {
      const index = this.ingredients.findIndex(item => item.id === id)
      if (index !== -1) {
        this.ingredients.splice(index, 1)
      }
    }
  }
})