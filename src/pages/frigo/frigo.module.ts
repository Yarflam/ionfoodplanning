import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuComponentModule } from '../../components/menu/menu.module';
import { FrigoPage } from './frigo';

@NgModule({
	declarations: [
		FrigoPage
	],
	entryComponents: [],
	imports: [
		MenuComponentModule,
		IonicPageModule.forChild(FrigoPage)
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrigoPageModule { }
