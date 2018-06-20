import { Injectable } from '@angular/core';
import { ISemaines } from '../../Interfaces/isemaines';
import { ApiWebService } from '../apiweb/apiweb.service';
import { Semaine } from '../../Models/Semaine';
import { RecettesService } from '../Recettes/recettes.service';
import { Recette } from '../../Models/Recette';

@Injectable()
export class SemainesService implements ISemaines {

	private listSemaines: any;
	private listIndexSemaines: Array<string>;

	constructor(
		private recettesService: RecettesService,
		private apiweb: ApiWebService
	) {
		this.listSemaines = {};
		this.listIndexSemaines = [];
		this.Sync();
	}

	AddSemaine(semaine: Semaine): void {
		if (semaine.FirstDay.match(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/) !== null) {
			/* Ajouter un ID */
			let max = 0;
			for (const dateSemaine of this.listIndexSemaines) {
				max = Math.max(max, this.listSemaines[dateSemaine].Id);
			}
			semaine.Id = max + 1;
			/* L'enregistrer dans la liste */
			this.listSemaines[semaine.FirstDay] = semaine;
			this.listIndexSemaines.push(semaine.FirstDay);
			/* Envoyer les données en ligne */
			this.apiweb.AddSemaine(semaine).subscribe();
		}
	}

	Edit(semaine: Semaine) {
		if (this.listSemaines[semaine.FirstDay]) {
			this.listSemaines[semaine.FirstDay] = semaine;
			/* Enregistrer les données en ligne */
			this.apiweb.EditSemaine(semaine).subscribe();
		}
	}

	SetAll(data): void {
		const firstDayOfWeek = this.GetFirstDayOfWeek();
		const secondWeek = this.GetFirstDayOfNextWeek(1);
		const thirdWeek = this.GetFirstDayOfNextWeek(2);
		/* Insertion dans la liste */
		for (const item of data) {
			if (item) {
				/* Extraire au format date le premier jour de la semaine */
				const dayOfWeek = new Date(item.FirstDay.split('/').reverse().join('-') + ' 00:00:00');
				/* Si la semaine ne précède pas cette semaine alors enregistrer les données */
				if (dayOfWeek.getTime() >= firstDayOfWeek.date.getTime()) {
					const semaine = new Semaine();
					semaine.Id = item.Id;
					semaine.FirstDay = item.FirstDay;
					for (const day in semaine.Planning) {
						for (let i = 0; i < 3; i++) {
							const recetteId = item.Planning[day][i];
							const recette = this.recettesService.GetById(recetteId);
							if (recette) {
								semaine.Planning[day][i] = recette;
							}
						}
					}
					this.listSemaines[semaine.FirstDay] = semaine;
					this.listIndexSemaines.push(semaine.FirstDay);
				} else {
					/* Sinon effacer les données */
					this.apiweb.DeleteSemaine(item).subscribe();
				}
			}
		}
		/* Ajouter automatiquement le premier de la semaine (S) */
		if (this.listSemaines[firstDayOfWeek.str] === undefined) {
			const semaine = new Semaine();
			semaine.FirstDay = firstDayOfWeek.str;
			this.AddSemaine(semaine);
		}
		/* Ajouter également la semaine d'après (S+1) */
		if (this.listSemaines[secondWeek.str] === undefined) {
			const semaine = new Semaine();
			semaine.FirstDay = secondWeek.str;
			this.AddSemaine(semaine);
		}
		/* Ajouter également la semaine encore après (S+2) */
		if (this.listSemaines[thirdWeek.str] === undefined) {
			const semaine = new Semaine();
			semaine.FirstDay = thirdWeek.str;
			this.AddSemaine(semaine);
		}
	}

	GetAll(): any {
		return this.listSemaines;
	}

	Sync(callback = new Function()): void {
		this.apiweb.GetAllSemaines().subscribe(data => {
			this.SetAll(data);
			if (callback) { callback(this.GetAll()); }
		});
	}

	GetFirstDayOfWeek(): any {
		const d = new Date();
		const dayInWeek = (d.getDay() + 6) % 7;
		const firstDay = new Date((new Date([
			d.getFullYear(), ('0' + (d.getMonth() + 1)).slice(-2), ('0' + d.getDate()).slice(-2)
		].join('-') + ' 00:00:00')).getTime() - dayInWeek * 24 * 3600 * 1000);
		return {
			'str': [('0' + firstDay.getDate()).slice(-2), ('0' + (firstDay.getMonth() + 1)).slice(-2), firstDay.getFullYear()].join('/'),
			'date': firstDay
		};
	}

	GetFirstDayOfNextWeek(n: number): any {
		const firstDay = this.GetFirstDayOfWeek();
		const nextDay = new Date(firstDay.date.getTime() + Math.floor(Number(n)) * 7 * 24 * 3600 * 1000);
		return {
			'str': [('0' + nextDay.getDate()).slice(-2), ('0' + (nextDay.getMonth() + 1)).slice(-2), nextDay.getFullYear()].join('/'),
			'date': nextDay
		};
	}

}
