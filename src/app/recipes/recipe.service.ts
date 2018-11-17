import { EventEmitter, Injectable } from '@angular/core';
import {Recipe} from './recipe.model'
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.services';

@Injectable()
export class RecipeService {
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
        'https://cdn.pixabay.com/photo/2018/11/08/18/26/robin-3803081_1280.jpg',
        [
            new Ingredient('biriyani', 2),
            new Ingredient('rayta',3)
        ])
    ];
    constructor(private slService: ShoppingListService) {

    }
    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
            this.slService.addIngredients(ingredients);
    }
}