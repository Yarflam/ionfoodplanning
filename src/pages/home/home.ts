import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";

/* Leazy Loading */
@IonicPage({
	name: "page-home",
	segment: "tableau-bord" // root
})
@Component({
	selector: "page-home",
	templateUrl: "home.html"
})
export class HomePage {

	listMetroid: Array<any> = new Array();

	constructor() {
		/* La liste des éléments sur le dashboard */
		this.listMetroid = [
			{ 'name': 'Agenda', 'target': 'page-agenda', 'icon': 'calendar', 'color': 'primary' },
			{ 'name': 'Frigo', 'target': 'page-frigo', 'icon': 'pricetags', 'color': 'secondary' },
			{ 'name': 'Recettes', 'target': 'page-recettes', 'icon': 'book', 'color': 'danger' },
			{ 'name': 'Liste des courses', 'target': 'page-liste-courses', 'icon': 'list-box', 'color': 'dark' },
		];
	}
}
