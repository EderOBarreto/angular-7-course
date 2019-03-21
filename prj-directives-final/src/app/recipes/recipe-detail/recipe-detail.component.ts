import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { PageControlService } from 'src/app/page-control.service';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  // changePage(pageName = 'shopping') {
  //   this.shoppingService.setIngredients(this.recipe.ingredients);
  //   this.pageControlService.setLoadedFeature(pageName);
  // }


}
