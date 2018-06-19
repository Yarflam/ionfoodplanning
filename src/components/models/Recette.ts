import { Ingredient } from "./Ingredient";

export class Recette
{
  public Id = 0;
  public Name = '';
  public Description = '';
  public Image = '';
  public Ingredients: Ingredient[] = [];
}
