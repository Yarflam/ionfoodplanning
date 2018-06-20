import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'metroid',
	templateUrl: 'metroid.html'
})
export class MetroidComponent implements OnInit {

	@Input() props: Array<{ name: string; path: string; icon: string; color: string; }>;

	listItems: Array<{ name: string; path: string; icon: string; color: string; }>;

	ngOnInit() {
		this.listItems = this.props;
	}

}
