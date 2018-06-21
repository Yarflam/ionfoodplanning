import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuComponentModule } from '../../components/menu/menu.module';
import { AgendaPage } from './agenda';

@NgModule({
	declarations: [
		AgendaPage
	],
	entryComponents: [],
	imports: [
		MenuComponentModule,
		IonicPageModule.forChild(AgendaPage)
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgendaPageModule { }
