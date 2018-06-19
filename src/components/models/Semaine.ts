import { Recette } from './Recette';

export class Semaine
{
  public Id = 0;
  public FirstDay = ''; /* date du premier jour */
  public Planning = {
    'monday': [new Recette(), new Recette(), new Recette()],
    'tuesday': [new Recette(), new Recette(), new Recette()],
    'wednesday': [new Recette(), new Recette(), new Recette()],
    'thursday': [new Recette(), new Recette(), new Recette()],
    'friday': [new Recette(), new Recette(), new Recette()],
    'saturday': [new Recette(), new Recette(), new Recette()],
    'sunday': [new Recette(), new Recette(), new Recette()]
  };

  /* Permet d'obtenir une transcription de l'objet avec des ID (Objet -> ID) */
  GetData(): any {
    /* Préparation de la transcription */
    const output = {
      'Id': this.Id,
      'FirstDay': this.FirstDay,
      'Planning': {}
    };
    /* Remplacement des objets par des ID */
    for(const day in this.Planning) {
      output.Planning[day] = [];
      for(const recette of this.Planning[day]) {
        output.Planning[day].push(recette.Id || 0);
      }
    }
    return output;
  }
}
