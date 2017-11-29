import { Recipe } from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [ new Recipe('AWS', 'EC2 Lambda', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/AmazonWebservices_Logo.svg/1200px-AmazonWebservices_Logo.svg.png',
    [ new Ingredient('S3', 10),
     new Ingredient('Lambda', 20)]),
    new Recipe('Angular 2', 'Components Services Routing', 'https://i.ytimg.com/vi/hXfigUyeHaY/maxresdefault.jpg',
      [ new Ingredient('Directives', 10),
        new Ingredient('Observables', 20)])];


  constructor(private slService: ShoppingListService) {

  }
  getRecipeById(id: number) {
    return this.recipes[id];
  }

  getRecipes() {
    return this.recipes.slice();
  }
  addToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }
}
