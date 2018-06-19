import {Semaine} from "../Models/Semaine";

export interface ISemaines {

  AddSemaine (semaine: Semaine): void;

  SetAll(data): void; // définir les paramètres

  GetAll(): any; // retourner la liste des semaines

  Sync(): void; // synchroniser avec la base

  GetFirstDayOfWeek(): any; // retourne le premier jour de la semaine

  GetFirstDayOfNextWeek(n: number): any; // retourne le premier jour des semaines à venir (= n)

}
