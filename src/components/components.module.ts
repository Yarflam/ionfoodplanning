import { NgModule } from '@angular/core';
import { MetroidComponent } from './metroid/metroid';
import { MetroidBoxComponent } from './metroid-box/metroid-box';
@NgModule({
    declarations: [MetroidComponent,
    MetroidBoxComponent],
    imports: [],
    exports: [MetroidComponent,
    MetroidBoxComponent]
})
export class ComponentsModule {}
