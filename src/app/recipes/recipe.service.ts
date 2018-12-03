import { EventEmitter, Injectable } from '@angular/core';
import {Recipe} from './recipe.model'
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.services';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('A test recipe', 
        'description of recipe', 
        'https://image.shutterstock.com/image-photo/vegan-raw-carrot-cake-healthy-450w-459399457.jpg',
        [
            new Ingredient('meat', 1),
            new Ingredient('french fries',20)
        ]),
        new Recipe('A test 1 recipe', 
        'description of recipe1', 
        'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_1280.jpg',
        [
            new Ingredient('buns', 1),
            new Ingredient('meat',20)
        ]),
        new Recipe('A test 2 recipe', 
        'description of recipe2', 
        'https://cdn.pixabay.com/photo/2018/01/15/19/45/sunset-3084651__340.jpg',
        [
            new Ingredient('biriyani', 2),
            new Ingredient('rayta',3)
        ]),
        new Recipe('A test 3 recipe', 
        'description of recipe2', 
        'https://cdn.pixabay.com/photo/2017/09/06/16/28/wal-2722172_1280.jpg',
        [
            new Ingredient('mixed', 2),
            new Ingredient('non',3)
        ])
    ];
    constructor(private slService: ShoppingListService) {

    }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index:number) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
            this.slService.addIngredients(ingredients);
    }
    addRecipe(recipe:Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index:number, newRecipe:Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index:number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}