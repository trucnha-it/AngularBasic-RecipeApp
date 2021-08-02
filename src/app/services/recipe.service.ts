import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  // recipeSelected = new Subject<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test 1',
      'This is simply a test1',
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-recipe-book-design-template-96cfa4235ae5da396de74c3bdad442f7_screen.jpg?ts=1597154519',
      [new Ingredient('Apple', 5), new Ingredient('Banana', 10)]
    ),
    new Recipe(
      'A test 2',
      'This is simply a test2',
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-recipe-book-design-template-96cfa4235ae5da396de74c3bdad442f7_screen.jpg?ts=1597154519',
      [new Ingredient('Meat', 16), new Ingredient('Berry', 20)]
    ),
    new Recipe(
      'A test 3',
      'This is simply a test3',
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-recipe-book-design-template-96cfa4235ae5da396de74c3bdad442f7_screen.jpg?ts=1597154519',
      [new Ingredient('Potato', 3), new Ingredient('Meat', 10)]
    ),
    new Recipe(
      'A test 4',
      'This is simply a test4',
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-recipe-book-design-template-96cfa4235ae5da396de74c3bdad442f7_screen.jpg?ts=1597154519',
      [new Ingredient('Meat', 14), new Ingredient('Berry', 2)]
    ),
    new Recipe(
      'A test 5',
      'This is simply a test5',
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-recipe-book-design-template-96cfa4235ae5da396de74c3bdad442f7_screen.jpg?ts=1597154519',
      [new Ingredient('Potato', 4), new Ingredient('Meat', 11)]
    ),
    new Recipe(
      'A test 6',
      'This is simply a test6',
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-recipe-book-design-template-96cfa4235ae5da396de74c3bdad442f7_screen.jpg?ts=1597154519',
      [new Ingredient('Apple', 5), new Ingredient('Banana', 10)]
    ),
  ];
  constructor(private shoppingListService: ShoppingListService) {}
  getListRecipes() {
    return this.recipes.slice();
  }
  getRecipeDetail(id: number) {
    return this.recipes[id];
  }
  addIngredientsFromRecipe(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
