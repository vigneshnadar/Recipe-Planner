import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService,
  router: Router) { }


  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
// git push origin develop
// git flow release start release
// after git flow feature finish
// git pull origin develop
// git push origin develop
   // vim config change the feature prefixes there  escape :wq
  }

  passOnRecipe(eventData: Recipe) {
  }

}
