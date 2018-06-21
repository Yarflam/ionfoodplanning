import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { IngredientsService } from '../../components/services/ingredients/ingredients.service';

/* Leazy Loading */
@IonicPage({
	name: "page-frigo",
	segment: "frigo"
})
@Component({
	selector: "page-frigo",
	templateUrl: "frigo.html"
})
export class FrigoPage {

	ingredients: Array<any> = new Array();

	constructor(private ingredientService: IngredientsService) {
		this.ingredientService.GetAll((data) => {
			this.ingredients = data;
		});
	}

}
