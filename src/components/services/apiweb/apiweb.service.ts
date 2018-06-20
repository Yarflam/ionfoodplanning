import { Injectable } from '@angular/core';
import { Ingredient } from '../../Models/Ingredient';
import { HttpClient } from "@angular/common/http";
import { Recette } from '../../Models/Recette';
import {Semaine} from '../../Models/Semaine';

@Injectable()
export class ApiWebService {

  private readonly API_URL_RECETTES = 'https://foodplanning-c9b00.firebaseio.com/recettes';

  private readonly API_URL_INGREDIENTS = 'https://foodplanning-c9b00.firebaseio.com/ingredients';

  private readonly API_URL_INGREDIENTS_TO_BUY = 'https://foodplanning-c9b00.firebaseio.com/ingredientsToBuy';

  private readonly  API_URL_SEMAINES = 'https://foodplanning-c9b00.firebaseio.com/semaines';

  constructor(private httpService: HttpClient) {
  }

  GetAllRecettes() {
    return this.httpService.get(this.API_URL_RECETTES + '.json');
  }

  AddRecette(recette: Recette) {
    return this.httpService.put(this.API_URL_RECETTES + '/' + recette.Id + '.json', recette);
  }

  EditRecette(recette: Recette) {
    return this.httpService.put(this.API_URL_RECETTES + '/' + recette.Id + '.json', recette);
  }

  RemoveRecette(recette: Recette) {
    return this.httpService.delete(this.API_URL_RECETTES + '/' + recette.Id + '.json');
  }

  GetAllIngredients() {
    return this.httpService.get(this.API_URL_INGREDIENTS + '.json');
  }

  DeleteIngredientById(id: number) {
    return this.httpService.delete(this.API_URL_INGREDIENTS + '/' + id + '.json');
  }

  DeleteIngredientByIdToBuy(id: number) {
    return this.httpService.delete(this.API_URL_INGREDIENTS_TO_BUY + '/' + id + '.json');
  }

  AddIngredient(ingredient: Ingredient) {
    return this.httpService.put(this.API_URL_INGREDIENTS + '/' + ingredient.Id + '.json', ingredient);
  }

  ModifyIngredient(ingredient: Ingredient) {
    return this.httpService.put(this.API_URL_INGREDIENTS + '/' + ingredient.Id + '.json', ingredient);
  }

  ModifyIngredientToBuy(ingredient: Ingredient) {
    return this.httpService.put(this.API_URL_INGREDIENTS_TO_BUY + '/' + ingredient.Id + '.json', ingredient);
  }

  AddIngredientToBuy(ingredient: Ingredient) {
    return this.httpService.put(this.API_URL_INGREDIENTS_TO_BUY + '/' + ingredient.Id + '.json', ingredient);
  }

  GetAllIngredientsToBuy() {
    return this.httpService.get(this.API_URL_INGREDIENTS_TO_BUY + '.json');
  }

  GetAllSemaines() {
    return this.httpService.get(this.API_URL_SEMAINES + '.json');
  }

  AddSemaine (semaine: Semaine) {
    return this.httpService.put(this.API_URL_SEMAINES + '/' + semaine.Id + '.json', semaine.GetData());
  }

  EditSemaine (semaine: Semaine) {
    return this.httpService.put(this.API_URL_SEMAINES + '/' + semaine.Id + '.json', semaine.GetData());
  }

  DeleteSemaine (semaine: Semaine) {
    return this.httpService.delete(this.API_URL_SEMAINES + '/' + semaine.Id + '.json');
  }
}
