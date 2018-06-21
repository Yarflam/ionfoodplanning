import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuComponentModule } from '../../components/menu/menu.module';
import { MetroidComponent } from '../../components/metroid/metroid';
import { MetroidBoxComponent } from '../../components/metroidbox/metroidbox';
import { HomePage } from './home';

@NgModule({
	declarations: [
		HomePage,
		MetroidComponent,
		MetroidBoxComponent
	],
	imports: [
		MenuComponentModule,
		IonicPageModule.forChild(HomePage)
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule { }
