import { Recipe } from './recipe.model';

export class RecipeService {

  private recipes: Recipe[] = [ new Recipe('Chicken Tandoori', 'Roasted Chicken', 'http://4.bp.' +
    'blogspot.com/-YEulquWpL48/VDfPlS2JzqI/AAAAAAABVJI/7zIrjZwOJwk/s1600/1.JPG'),
    new Recipe('Chicken Tandoori', 'Roasted Chicken', 'http://4.bp.' +
      'blogspot.com/-YEulquWpL48/VDfPlS2JzqI/AAAAAAABVJI/7zIrjZwOJwk/s1600/1.JPG')];

  getRecipes() {
    return this.recipes.slice();
  }
}
