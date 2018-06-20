import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

/* Route - Entry point */
import { MyApp } from './app.component';

/* Modules */
import { MenuComponent } from '../components/menu/menu';

/* Ionic Components */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
	declarations: [
		MyApp,
		MenuComponent
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		{ provide: LocationStrategy, useClass: PathLocationStrategy }
	]
})
export class AppModule { }
