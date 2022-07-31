import { DrinkOrigin } from '../types/drink-origin';

export interface DrinkOriginDetails {
  name: string;
}

export const DrinkOrigins: Record<DrinkOrigin, DrinkOriginDetails> = {
  [DrinkOrigin.Mexico]: { name: 'Mexico' },
  [DrinkOrigin.Cuba]: { name: 'Cuba' },
  [DrinkOrigin.USA]: { name: 'USA' },
  [DrinkOrigin.France]: { name: 'France' },
  [DrinkOrigin.Japan]: { name: 'Japan' },
  [DrinkOrigin.UK]: { name: 'UK' },
  [DrinkOrigin.India]: { name: 'India' },
};
