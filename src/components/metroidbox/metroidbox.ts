import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'metroid-box',
	templateUrl: 'metroidbox.html'
})
export class MetroidBoxComponent implements OnInit {

	@Input() props: any;

	itemName: string;
	itemTarget: string;
	itemIcon: string;
	itemTheme = 'theme-primary';

	constructor(private navCtrl: NavController) { }

	ngOnInit() {
		this.itemName = this.props.name;
		this.itemTarget = this.props.target;
		this.itemIcon = this.props.icon;
		this.itemTheme = 'theme-' + this.props.color;
	}

	openPage() {
		this.navCtrl.setRoot(this.itemTarget);
	}

}
