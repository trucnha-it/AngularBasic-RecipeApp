import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeWasPicked: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeWasPicked = this.recipeService.getRecipeDetail(this.id);
    });
  }
  onAddIngredients() {
    this.recipeService.addIngredientsFromRecipe(
      this.recipeWasPicked.ingredients
    );
  }
  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
