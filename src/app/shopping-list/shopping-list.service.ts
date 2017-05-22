import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient>();
  private ingredients: Ingredient[] = [
    new Ingredient('Oranges', 4),
    new Ingredient('Mangoes', 10)
  ];

  onIngredientAdded(ing: Ingredient) {
    this.ingredients.push(ing);
  }
  getIngredients() {
    return this.ingredients.slice();
  }
}
