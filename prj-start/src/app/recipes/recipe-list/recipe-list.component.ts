import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe( 'A Test Recipe', 'This is a simply a test',
    'https://realfood.tesco.com/media/images/VEGANMAC-1400x919-86f158ca-f16d-4b05-bc33-5a94de0f46b6-0-1400x919.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
