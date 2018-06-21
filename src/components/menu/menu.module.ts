import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuComponent } from './menu';

@NgModule({
	declarations: [
		MenuComponent
	],
	imports: [
		IonicPageModule.forChild(MenuComponent)
	],
	exports: [
		MenuComponent
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuComponentModule { }
