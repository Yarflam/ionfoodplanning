import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuComponentModule } from '../../components/menu/menu.module';
import { ListeCoursesPage } from './liste-courses';

@NgModule({
	declarations: [
		ListeCoursesPage
	],
	entryComponents: [],
	imports: [
		MenuComponentModule,
		IonicPageModule.forChild(ListeCoursesPage)
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListeCoursesPageModule { }
