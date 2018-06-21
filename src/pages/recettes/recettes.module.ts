import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuComponentModule } from '../../components/menu/menu.module';
import { RecettesPage } from './recettes';

@NgModule({
	declarations: [
		RecettesPage
	],
	entryComponents: [],
	imports: [
		MenuComponentModule,
		IonicPageModule.forChild(RecettesPage)
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecettesPageModule { }
