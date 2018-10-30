import {Component} from '@angular/core';
import { Recipe } from './recipe.model';

@Component ({
    selector: 'recipes-component',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class recipesComponent {
    selectedRecipe =  Recipe;
}