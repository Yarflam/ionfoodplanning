import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";

/* Leazy Loading */
@IonicPage({
	name: "page-home"
})
@Component({
	selector: "page-home",
	templateUrl: "home.html"
})
export class HomePage {
	constructor() {
		/* La liste des éléments sur le dashboard */
		this.listMetroid = [
			{ 'name': 'Calendrier' },
			{ 'name': 'Frigo' },
			{ 'name': 'Recettes' },
			{ 'name': 'Liste des courses' },
		];
	}
}
