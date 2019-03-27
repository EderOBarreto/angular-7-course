import { Recipe } from '../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable({providedIn: 'root'})
export class RecipeService {
    
    recipes: Recipe[] = [
        new Recipe('A Test Recipe',
        'This is simply a test',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Another Test Recipe',
        'This is simply a test',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    constructor(private shoppingService: ShoppingService) {}

    selectedRecipe: Subject<Recipe> = new Subject();

    setSelectedRecipe(recipe: Recipe) {
        this.selectedRecipe.next(recipe);
    }

    addIngredientsToShoppingList(ingredients: Ingredient []) {
        this.shoppingService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

}