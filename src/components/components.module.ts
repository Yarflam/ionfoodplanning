import { NgModule } from '@angular/core';
import { MetroidComponent } from './metroid/metroid';
import { MetroidBoxComponent } from './metroidbox/metroidbox';
@NgModule({
	declarations: [
		MetroidComponent,
		MetroidBoxComponent
	],
	imports: [],
	exports: [
		MetroidComponent,
		MetroidBoxComponent
	]
})
export class ComponentsModule { }
