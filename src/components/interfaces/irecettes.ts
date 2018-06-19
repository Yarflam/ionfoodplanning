import {Recette} from "../Models/Recette";

export interface IRecettes {

  Add(recette: Recette); // Ajouter une recette

  Remove(id: number); // supprimer à partir de l'ID

  CanBeCook (id: number); // peut-on cuisiner cette recette ?

  Cooking (id: number); // cuisinons, cuisinons ...

  SetAll(myList: Object); // remplace les données

  GetAll(): Recette[]; // retourne la liste des recettes

  GetMaxId(): number; // retourne l'ID maximum

  GetById(id: number); // retourne une recette grâce à son ID

  GetLength(): number; // retourne le nombre de recettes

  Sync(callback: Function); // synchronize with web API

}
