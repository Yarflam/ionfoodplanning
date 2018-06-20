import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'metroid-box',
	templateUrl: 'metroidbox.html'
})
export class MetroidBoxComponent {

	@Input() props: { name: string; path: string; icon: string; color: string; };

	itemName: string;
	itemIcon: string;
	itemTheme = 'theme-primary';

	ngOnInit() {
		this.itemName = this.props.name;
		this.itemIcon = this.props.icon;
		this.itemTheme = 'theme-' + this.props.color;
	}

}
