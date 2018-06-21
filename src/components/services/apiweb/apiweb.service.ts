import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Ingredient } from '../../models/Ingredient';
import { Recette } from '../../models/Recette';
import { Semaine } from '../../models/Semaine';

@Injectable()
export class ApiWebService {

	private readonly API_URL_BASE = 'https://ionfoodplanning.firebaseio.com/';

	private readonly API_URL_RECETTES = this.API_URL_BASE + '/recettes';

	private readonly API_URL_INGREDIENTS = this.API_URL_BASE + '/ingredients';

	private readonly API_URL_INGREDIENTS_TO_BUY = this.API_URL_BASE + '/ingredientsToBuy';

	private readonly API_URL_SEMAINES = this.API_URL_BASE + '/semaines';

	constructor(private http: Http) {
	}

	GetAllRecettes() {
		return this.http.get(this.API_URL_RECETTES + '.json');
	}

	AddRecette(recette: Recette) {
		return this.http.put(this.API_URL_RECETTES + '/' + recette.Id + '.json', recette);
	}

	EditRecette(recette: Recette) {
		return this.http.put(this.API_URL_RECETTES + '/' + recette.Id + '.json', recette);
	}

	RemoveRecette(recette: Recette) {
		return this.http.delete(this.API_URL_RECETTES + '/' + recette.Id + '.json');
	}

	GetAllIngredients() {
		return this.http.get(this.API_URL_INGREDIENTS + '.json');
	}

	DeleteIngredientById(id: number) {
		return this.http.delete(this.API_URL_INGREDIENTS + '/' + id + '.json');
	}

	DeleteIngredientByIdToBuy(id: number) {
		return this.http.delete(this.API_URL_INGREDIENTS_TO_BUY + '/' + id + '.json');
	}

	AddIngredient(ingredient: Ingredient) {
		return this.http.put(this.API_URL_INGREDIENTS + '/' + ingredient.Id + '.json', ingredient);
	}

	ModifyIngredient(ingredient: Ingredient) {
		return this.http.put(this.API_URL_INGREDIENTS + '/' + ingredient.Id + '.json', ingredient);
	}

	ModifyIngredientToBuy(ingredient: Ingredient) {
		return this.http.put(this.API_URL_INGREDIENTS_TO_BUY + '/' + ingredient.Id + '.json', ingredient);
	}

	AddIngredientToBuy(ingredient: Ingredient) {
		return this.http.put(this.API_URL_INGREDIENTS_TO_BUY + '/' + ingredient.Id + '.json', ingredient);
	}

	GetAllIngredientsToBuy() {
		return this.http.get(this.API_URL_INGREDIENTS_TO_BUY + '.json');
	}

	GetAllSemaines() {
		return this.http.get(this.API_URL_SEMAINES + '.json');
	}

	AddSemaine(semaine: Semaine) {
		return this.http.put(this.API_URL_SEMAINES + '/' + semaine.Id + '.json', semaine.GetData());
	}

	EditSemaine(semaine: Semaine) {
		return this.http.put(this.API_URL_SEMAINES + '/' + semaine.Id + '.json', semaine.GetData());
	}

	DeleteSemaine(semaine: Semaine) {
		return this.http.delete(this.API_URL_SEMAINES + '/' + semaine.Id + '.json');
	}
}
