import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";

/* Leazy Loading */
@IonicPage({
	name: "page-home",
	segment: "." // root
})
@Component({
	selector: "page-home",
	templateUrl: "home.html"
})
export class HomePage {

	listMetroid: Array<{ name: string; path: string; icon: string; color: string; }> = new Array();

	constructor() {
		/* La liste des éléments sur le dashboard */
		this.listMetroid = [
			{ 'name': 'Agenda', 'icon': 'calendar', 'color': 'primary' },
			{ 'name': 'Frigo', 'icon': 'pricetags', 'color': 'secondary' },
			{ 'name': 'Recettes', 'icon': 'book', 'color': 'danger' },
			{ 'name': 'Liste des courses', 'icon': 'list-box', 'color': 'dark' },
		];
	}
}
