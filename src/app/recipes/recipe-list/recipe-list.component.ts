import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component ({
    selector: 'recipe-list-component',
    templateUrl:'recipe-list.component.html',
    styleUrls:['recipe-list.component.css']
})

export class recipeListComponent implements OnInit {
   @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A test recipe', 'description of recipe', 'https://image.shutterstock.com/image-photo/vegan-raw-carrot-cake-healthy-450w-459399457.jpg'),
        new Recipe('A test 1 recipe', 'description of recipe1', 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_1280.jpg')
    ];
    ngOnInit () {

    }
    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}