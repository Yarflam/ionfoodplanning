import { Unit } from "./EnumUnit";

export class Ingredient
{
  public Id = 0;
  public Name = '';
  public Quantity: number;
  public Unit: Unit;
  public Checked: boolean;
}
