import { DrinkType } from '../types/drink-type';

export interface DrinkTypeDetails {
  name: string;
}

export const DrinkTypes: Record<DrinkType, DrinkTypeDetails> = {
  [DrinkType.Cocktail]: { name: 'Cocktail' },
  [DrinkType.Shot]: { name: 'Shot' },
  [DrinkType.LongDrink]: { name: 'Long Drink' },
  [DrinkType.Other]: { name: 'Other' },
};
