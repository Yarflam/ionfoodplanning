import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuComponent } from '../../components/menu/menu';
import { FrigoPage } from './frigo';

@NgModule({
	declarations: [
		FrigoPage,
		MenuComponent
	],
	entryComponents: [
		FrigoPage,
		MenuComponent
	],
	imports: [
		IonicPageModule.forChild(FrigoPage)
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrigoPageModule { }
