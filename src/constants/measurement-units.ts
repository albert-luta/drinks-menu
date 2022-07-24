import { MeasurementUnit } from '../enums/measurement-unit';

export interface MeasurementUnitDetails {
  name: string;
}

export const MeasurementUnits: Record<MeasurementUnit, MeasurementUnitDetails> =
  {
    [MeasurementUnit.Part]: { name: 'part(s)' },
    [MeasurementUnit.Teaspoon]: { name: 'teaspoon(s)' },
    [MeasurementUnit.Tablespoon]: { name: 'tablespoon(s)' },
    [MeasurementUnit.Ounce]: { name: 'ounce(s)' },
    [MeasurementUnit.Milliliter]: { name: 'milliliter(s)' },
  };
