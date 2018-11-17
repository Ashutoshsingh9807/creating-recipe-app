import { Component, Input, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component ({
    selector: 'recipe-detail-component',
    templateUrl: 'recipe-detail.component.html',
    styleUrls: ['recipe-detail.component.css']
})

export class recipeDetailComponent { 
    @Input() recipe:Recipe;
    constructor(private recipeService: RecipeService) {

    }
    ngOnInit() {

    }
    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
    
}