import { Component, Input } from '@angular/core';

/**
 * Generated class for the MetroidComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
	selector: 'metroid',
	templateUrl: 'metroid.html'
})
export class MetroidComponent {

	@Input() listItems: Array<any>;

	constructor() {
		console.log(this.listItems);
	}

}
