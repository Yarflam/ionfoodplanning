import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';

/* Application - Entry point */
import { MyApp } from './app.component';

/* Services */
import { RecettesService } from '../components/services/recettes/recettes.service';
import { IngredientsService } from '../components/services/ingredients/ingredients.service';
import { ApiWebService } from '../components/services/apiweb/apiweb.service';
import { ImgWebService } from '../components/services/imgweb/imgweb.service';
import { SemainesService } from '../components/services/semaines/semaines.service';

/* Ionic Components */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
	declarations: [
		MyApp
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [],
	providers: [
		RecettesService,
		IngredientsService,
		ApiWebService,
		ImgWebService,
		SemainesService,
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		{ provide: LocationStrategy, useClass: HashLocationStrategy }
	]
})
export class AppModule { }
