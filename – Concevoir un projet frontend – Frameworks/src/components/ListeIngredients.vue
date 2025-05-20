<template>
  <div class="liste-ingredients">
    <h1>Liste d'Ingrédients</h1>
    
    <div class="form-ajout">
      <input 
        v-model="nomIngredient" 
        placeholder="Nom de l'ingrédient stp"
        @keyup.enter="ajouterNouvelIngredient"
      />
      <input 
        v-model="quantite" 
        placeholder="Quantité"
        @keyup.enter="ajouterNouvelIngredient"
      />
      <button @click="ajouterNouvelIngredient">Ajouter</button>
    </div>
    
    <ul class="liste">
      <li v-for="ingredient in ingredients" :key="ingredient.id" class="ingredient-item">
        <div class="ingredient-info">
          <input 
            type="checkbox" 
            :checked="ingredient.achete"
            @change="store.cocherIngredient(ingredient.id)"
          />
          <span :class="{ 'achete': ingredient.achete }">
            {{ ingredient.nom }} - {{ ingredient.quantite }}
          </span>
        </div>
        <button @click="store.supprimerIngredient(ingredient.id)" class="btn-supprimer">
          Supprimer
        </button>
      </li>
    </ul>
    
    <p v-if="ingredients.length === 0" class="liste-vide">
      Aucun ingrédient dans la liste
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useIngredientsStore } from '../stores/ingredientsStore'


const store = useIngredientsStore()


const ingredients = computed(() => store.ingredients)


const nomIngredient = ref('')
const quantite = ref('')


function ajouterNouvelIngredient() {
  store.ajouterIngredient(nomIngredient.value, quantite.value)
  
  nomIngredient.value = ''
  quantite.value = ''
}
</script>

<style scoped>
.liste-ingredients {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-ajout {
  display: flex;
  margin-bottom: 20px;
  gap: 10px;
}

input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

input[type="text"]:first-child {
  flex: 1;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.liste {
  list-style-type: none;
  padding: 0;
}

.ingredient-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.ingredient-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.achete {
  text-decoration: line-through;
  color: #888;
}

.btn-supprimer {
  background-color: #f44336;
}

.btn-supprimer:hover {
  background-color: #e53935;
}

.liste-vide {
  text-align: center;
  color: #888;
}
</style>