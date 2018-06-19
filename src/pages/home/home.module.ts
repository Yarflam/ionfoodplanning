import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { MetroidComponent } from '../../components/metroid/metroid';

@NgModule({
    declarations: [
        HomePage,
        MetroidComponent
    ],
    entryComponents: [
        MetroidComponent
    ],
    imports: [
        IonicPageModule.forChild(HomePage)
    ]
})
export class HomePageModule {}
