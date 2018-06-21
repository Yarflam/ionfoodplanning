import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'metroid',
	templateUrl: 'metroid.html'
})
export class MetroidComponent implements OnInit {

	@Input() props: Array<any>;

	listItems: Array<any>;

	ngOnInit() {
		this.listItems = this.props;
	}

}
