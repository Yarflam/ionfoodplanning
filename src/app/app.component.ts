import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = 'page-home';

	routes: Array<{ path: string, component: any }>;
	pages: Array<{ title: string, component: any }>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();

		/* Routes */
		this.routes = [
			{ path: '.', component: 'page-home' },
			{ path: 'accueil', component: 'page-home' },
			{ path: 'frigo', component: 'page-frigo' },
		];

		/* Navigation */
		this.pages = [
			{ title: 'Tableau de bord', component: 'page-home' },
			{ title: 'Agenda', component: 'page-agenda' },
			{ title: 'Frigo', component: 'page-frigo' },
			{ title: 'Recettes', component: 'page-recettes' },
			{ title: 'Liste des courses', component: 'page-liste-courses' }
		];

	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		this.nav.setRoot(page.component);
	}
}
