import { Injectable } from '@angular/core';
import { Ingredient } from '../../models/Ingredient';
import { ApiWebService } from '../apiweb/apiweb.service';

@Injectable()
export class IngredientsService {
	/* tslint:disable */
	private SyncPromises: Array<any> = [];
	public IngredientsDispo: Ingredient[] = [];
	public IngredientsToBuy: Ingredient[] = [];
	public Id: number;

	constructor(public api: ApiWebService) {
		this.Id = 1;
		this.Sync();
	}

	Sync() {
		let promise = { ing: (data) => { }, ingBuy: (data) => { } };

		this.IngredientsDispo = [];
		this.IngredientsToBuy = [];

		/* First call */
		if (!this.SyncPromises.length) {

			this.api.GetAllIngredients().subscribe(
				(data: Response) => {
					data = window['yengin'].jsonParse(data['_body']);
					for (const key in data) {
						const item = data[key];
						if (item != null)
						// tslint:disable-next-line:one-line
						{
							const ingredient = this.SetAll(item);
							this.IngredientsDispo.push(ingredient);
						}
					}
					/* Dispatch */
					for (let i = 0; i < this.SyncPromises.length; i++) {
						this.SyncPromises[i].ing(this.IngredientsDispo);
						delete this.SyncPromises[i]['ing'];
						/* Autoremove */
						if (this.SyncPromises[i]['ingBuy'] === undefined) {
							this.SyncPromises.splice(i, 1); i--;
						}
					}
				}
			);

			this.api.GetAllIngredientsToBuy().subscribe(
				(data: Ingredient[]) => {
					data = window['yengin'].jsonParse(data['_body']);
					for (const key in data) {
						const item = data[key];
						if (item != null)
						// tslint:disable-next-line:one-line
						{
							const ingredient = this.SetAll(item);
							this.IngredientsToBuy.push(ingredient);
						}
					}
					/* Dispatch */
					for (let i = 0; i < this.SyncPromises.length; i++) {
						this.SyncPromises[i].ingBuy(this.IngredientsDispo);
						delete this.SyncPromises[i]['ingBuy'];
						/* Autoremove */
						if (this.SyncPromises[i]['ing'] === undefined) {
							this.SyncPromises.splice(i, 1); i--;
						}
					}
				}
			);

		}

		this.SyncPromises.push(promise);
		return promise;
	}


	SetAll(item: Ingredient) {
		// tslint:disable-next-line:forin

		const ingredient = new Ingredient();
		ingredient.Id = item.Id;
		ingredient.Name = item.Name;
		ingredient.Quantity = item.Quantity;
		ingredient.Unit = item.Unit;
		ingredient.Checked = item.Checked != null ? item.Checked : false;
		return ingredient;
	}



	AddIngredient(ing: Ingredient) {

		const updateItem = this.IngredientsDispo.find(t => t.Name === ing.Name);
		if (updateItem !== undefined) {
			const index = this.IngredientsDispo.indexOf(updateItem);
			updateItem.Quantity += ing.Quantity;
			this.IngredientsDispo[index] = updateItem;
			this.api.ModifyIngredient(updateItem).subscribe()
		}
		else {
			const idList: number[] = [];
			let c = 0;
			if (this.IngredientsDispo.length !== 0) {
				for (const t of this.IngredientsDispo) {
					idList.push(t.Id);
				}
				c = idList.reduce(function(a, b) {
					return Math.max(a, b);
				});
			}

			ing.Id = c + 1;

			this.IngredientsDispo.push(ing);
			this.api.AddIngredient(ing).subscribe();
		}
	}

	RemoveIngredient(id: Ingredient) {
		const index = this.IngredientsDispo.indexOf(id, 0);
		if (index > -1) {
			this.IngredientsDispo.splice(index, 1);
		}
		this.api.DeleteIngredientById(id.Id).subscribe();
	}

	findIndexToUpdate(newItem) {
		return newItem.id === this;
	}

	ModifyQuantity(id: Ingredient) {
		const updateItem = this.IngredientsDispo.find(t => t.Name === id.Name);
		const index = this.IngredientsDispo.indexOf(updateItem);
		this.IngredientsDispo[index] = id;
		this.api.ModifyIngredient(updateItem).subscribe();
	}

	GetAll(callback) {
		if (this.IngredientsDispo.length) {
			callback(this.IngredientsDispo);
		} else {
			this.Sync()['ing'] = callback;
		}
	}

	GetIngredientById(id: number) {
		return this.IngredientsDispo.find(t => t.Id === id);
	}

	GetAllIngredientsToBuy() {
		if (this.IngredientsToBuy !== null) {
			return this.IngredientsToBuy;
		}
	}

	RemoveIngredientToBuy(id: Ingredient) {
		const index = this.IngredientsToBuy.indexOf(id);
		if (index > -1) {
			this.IngredientsToBuy.splice(index, 1);
		}
		this.api.DeleteIngredientByIdToBuy(id.Id).subscribe();
	}

	RemoveAllIngredientToBuy(addToFrigo: boolean) {
		if (addToFrigo === true) {
			while (this.IngredientsToBuy.length) {
				if (this.IngredientsToBuy[0].Checked !== true) {
					this.AddIngredient(this.IngredientsToBuy[0]);
				}
				this.RemoveIngredientToBuy(this.IngredientsToBuy[0]);
			}
		}
		else {
			while (this.IngredientsToBuy.length) {
				this.RemoveIngredientToBuy(this.IngredientsToBuy[0]);
			}
		}
	}

	CheckIngredient(ing: Ingredient) {
		const updateItem = this.IngredientsToBuy.find(t => t.Name === ing.Name);
		if (updateItem !== undefined) {
			const index = this.IngredientsToBuy.indexOf(updateItem);
			updateItem.Checked = ing.Checked;
			this.IngredientsToBuy[index].Checked = updateItem.Checked;
			this.api.ModifyIngredientToBuy(updateItem).subscribe();

		}
	}

	AddIngredientToBuy(ing: Ingredient) {

		const updateItem = this.IngredientsToBuy.find(t => t.Name === ing.Name);
		if (updateItem !== undefined) {
			const index = this.IngredientsToBuy.indexOf(updateItem);
			updateItem.Checked = ing.Checked;
			this.IngredientsToBuy[index].Checked = updateItem.Checked;
			this.api.ModifyIngredientToBuy(updateItem).subscribe();

		}
		else {
			const idList: number[] = [];
			let c = 0;
			if (this.IngredientsToBuy.length !== 0) {
				for (const t of this.IngredientsToBuy) {
					idList.push(t.Id);
				}
				c = idList.reduce(function(a, b) {
					return Math.max(a, b);
				});
			}
			ing.Id = c + 1;
			this.IngredientsToBuy.push(ing);
			this.api.AddIngredientToBuy(ing).subscribe();
		}
	}
}
