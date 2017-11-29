import { EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient>();
  private selectedRecipe: Recipe;
  private ingredients: Ingredient[] = [
    new Ingredient('Oranges', 4),
    new Ingredient('Mangoes', 10)
  ];
  constructor() { }

  // ngOnInit() {
  //   this.recService.recipeSelected.subscribe(
  //     (recipe: Recipe) => {
  //       this.ingredients = recipe.ingredients;
  //     });
  // }
  addIngredients(ing: Ingredient[]) {
    for (let i of ing) {
      this.onIngredientAdded(i);
    }
  }

  onIngredientAdded(ing: Ingredient) {
    this.ingredients.push(ing);
  }
  getIngredients() {
    return this.ingredients.slice();
  }
}
