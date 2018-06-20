import { Injectable } from '@angular/core';
import { Recette } from '../../Models/Recette';
import { IRecettes } from '../../Interfaces/irecettes';
import { ApiWebService } from "../apiweb/apiweb.service";
import { IngredientsService } from '../Ingredients/ingredients.service';

@Injectable()
export class RecettesService implements IRecettes {

	private listRecettes: Array<Recette>;
	private listIdRecettes: Array<number>;

	constructor(
		private apiweb: ApiWebService,
		private ingredients_service: IngredientsService
	) {
		this.listRecettes = [];
		this.listIdRecettes = [];
		this.Sync();
	}

	Add(recette: Recette) {
		recette.Id = this.GetMaxId() + 1;
		this.listRecettes.push(recette);
		this.listIdRecettes.push(recette.Id);
		this.apiweb.AddRecette(recette).subscribe();
	}

	Edit(id: number, recette: Recette) {
		const index = this.listIdRecettes.indexOf(id);
		if (index >= 0) {
			recette.Id = id;
			this.listRecettes[index] = recette;
			this.apiweb.EditRecette(recette).subscribe();
		}
	}

	Remove(id: number) {
		const index = this.listIdRecettes.indexOf(id);
		if (index >= 0) {
			this.apiweb.RemoveRecette(this.listRecettes[index]).subscribe();
			this.listRecettes.splice(index, 1);
			this.listIdRecettes.splice(index, 1);
		}
	}

	CanBeCook(id: number) {
		/* Flag: on peut cuisiner cette recette */
		let test = false;
		let listMissing = [];
		/* Prendre la recette demandé */
		const recette = this.GetById(id);
		if (recette && recette.Ingredients && recette.Ingredients.length) {
			/* La liste des ingrédients n'est pas vide (checklist) */
			test = true;
			/* Prender la liste des ingrédients */
			const listIngredients = this.ingredients_service.GetAll();
			/* Création de la liste des index */
			const listIndex = {};
			for (const ing of listIngredients) {
				listIndex[ing.Name.toLowerCase().replace(/[^\w]/g, '')] = ing;
			}
			/* Rechercher les ingrédients */
			for (const ing of recette.Ingredients) {
				/* Rechercher dans la liste des ingrédients */
				const index = ing.Name.toLowerCase().replace(/[^\w]/g, '');
				/* Vérifier qu'il existe, la quantité stocké dans le frigo est suffisant et l'unité est identiique */
				if (listIndex[index] === undefined || listIndex[index].Unit !== ing.Unit || listIndex[index].Quantity < ing.Quantity) {
					listMissing.push(ing.Name);
					test = false;
				}
			}
		}
		return { 'bool': test, 'list': listMissing };
	}

	Cooking(id: number): void {
		/* Prendre la recette demandé */
		let recette = this.GetById(id);
		if (recette && recette.Ingredients && recette.Ingredients.length) {
			/* Prender la liste des ingrédients */
			const listIngredients = this.ingredients_service.GetAll();
			/* Création de la liste des index */
			const listIndex = {};
			for (const ing of listIngredients) {
				listIndex[ing.Name.toLowerCase().replace(/[^\w]/g, '')] = ing;
			}
			/* Rechercher les ingrédients */
			for (const ing of recette.Ingredients) {
				/* Rechercher dans la liste des ingrédients */
				const index = ing.Name.toLowerCase().replace(/[^\w]/g, '');
				/* Vérifier qu'il n'y a pas d'erreur */
				if (listIndex[index]) {
					/* On enlève les quantités */
					listIndex[index].Quantity = Number(listIndex[index].Quantity) - Number(ing.Quantity);
					/* Si l'ingrédient en stock n'a plus de quantité, l'enlever du frigo sinon le mettre à jour */
					if (!listIndex[index].Quantity) {
						this.ingredients_service.RemoveIngredient(listIndex[index].Id);
					} else {
						this.ingredients_service.ModifyQuantity(listIndex[index].Id);
					}
				}
			}
		}
	}

	SetAll(myList: Object) {
		this.listRecettes = [];
		this.listIdRecettes = [];
		// tslint:disable-next-line:forin
		for (const key in myList) {
			const item = myList[key];
			if (item != null) {
				const recette = new Recette();
				recette.Id = item.Id;
				recette.Name = item.Name;
				recette.Description = item.Description;
				recette.Image = item.Image;
				recette.Ingredients = item.Ingredients;
				this.listRecettes.push(recette);
				this.listIdRecettes.push(recette.Id);
			}
		}
	}

	GetAll(): Recette[] {
		return this.listRecettes;
	}

	GetMaxId(): number {
		return this.listIdRecettes.reduce(function(a, b) {
			return Math.max(a, b);
		});
	}

	GetById(id: number) {
		const index = this.listIdRecettes.indexOf(id);
		return (index >= 0 ? this.listRecettes[index] : null);
	}

	GetLength() {
		return this.listRecettes.length;
	}

	Sync(callback = new Function()) {
		this.apiweb.GetAllRecettes().subscribe(
			(data: Response) => {
				this.SetAll(data);
				if (callback) { callback(this.GetAll()); }
			}
		);
	}

}
