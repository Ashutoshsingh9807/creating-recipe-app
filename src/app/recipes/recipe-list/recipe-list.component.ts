import { Component, OnInit} from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component ({
    selector: 'recipe-list-component',
    templateUrl:'recipe-list.component.html',
    styleUrls:['recipe-list.component.css']
})

export class recipeListComponent implements OnInit {

    recipes: Recipe[];
    constructor(private recipeService: RecipeService) {

    }
    ngOnInit () {
this.recipes = this.recipeService.getRecipes();
    }
 
}