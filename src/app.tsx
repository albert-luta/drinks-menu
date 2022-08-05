import { useState } from 'react';
import './app.css';
import { Box } from './components/box';
import { Card } from './components/card';
import { Checkbox } from './components/checkbox';
import { Divider } from './components/divider';
import { Radio } from './components/radio';
import { Text } from './components/text';
import { VerticalSpace } from './components/vertical-space';
import { DrinkTypes } from './constants/drink-types';
import { Drinks } from './constants/drinks';
import { Ingredients } from './constants/ingredients';
import { LinkTypes } from './constants/link-types';
import { DrinkType } from './types/drink-type';
import { Ingredient } from './types/ingredient';
import { LinkType } from './types/link-type';

export const App = () => {
  const [selectedDrinkType, setSelectedDrinkType] = useState<DrinkType | 'all'>(
    'all',
  );
  const [selectedIngredients, setSelectedIngredients] = useState<
    Record<Ingredient, boolean>
  >(
    Object.values(Ingredient).reduce(
      (acc, curr) => ({ ...acc, [curr]: false }),
      {} as Record<Ingredient, boolean>,
    ),
  );

  return (
    <Box as="div" className="container" py="5">
      <Text as="h1">Drinks Menu</Text>
      <VerticalSpace size="5" />

      <div className="choices">
        <fieldset>
          <Text as="legend" variant="heading-4">
            Drink Type
          </Text>
          <VerticalSpace size="2" />

          <Radio
            checked={selectedDrinkType === 'all'}
            onChange={() => setSelectedDrinkType('all')}
          >
            All
          </Radio>
          {Object.entries(DrinkTypes).map(([drinkType, drinkTypeDetails]) => (
            <Radio
              key={drinkType}
              checked={selectedDrinkType === drinkType}
              onChange={() => setSelectedDrinkType(drinkType as DrinkType)}
            >
              {drinkTypeDetails.name}
            </Radio>
          ))}
        </fieldset>

        <fieldset>
          <Text as="legend" variant="heading-4">
            Ingredients
          </Text>
          <VerticalSpace size="2" />

          {Object.entries(Ingredients).map(
            ([ingredient, ingredientDetails]) => (
              <Checkbox
                key={ingredient}
                checked={selectedIngredients[ingredient as Ingredient]}
                onChange={() =>
                  setSelectedIngredients((prev) => ({
                    ...prev,
                    [ingredient]: !prev[ingredient as Ingredient],
                  }))
                }
                disabled={!ingredientDetails.available}
              >
                {ingredientDetails.name}
              </Checkbox>
            ),
          )}
        </fieldset>
      </div>
      <VerticalSpace size="5" />

      <Text as="h2">Drinks</Text>
      <VerticalSpace size="4" />
      <ul className="drinks">
        {Object.entries(Drinks)
          .filter(
            ([, { type }]) =>
              selectedDrinkType === 'all' || selectedDrinkType === type,
          )
          .filter(([, drinkDetails]) =>
            Object.entries(selectedIngredients)
              .filter(([, isSelected]) => isSelected)
              .every(
                ([ingredient]) =>
                  drinkDetails.ingredients[ingredient as Ingredient],
              ),
          )
          .map(([drink, drinkDetails]) => (
            <li key={drink}>
              <Card backgroundColor="neutral-800" borderRadius="md" maxHeight>
                <Card.Header>
                  <Box as="div" p="1">
                    <Text as="h3" align="center">
                      {drinkDetails.name}
                    </Text>
                  </Box>
                  <div>
                    <img
                      src={drinkDetails.image}
                      alt={drinkDetails.name}
                      className="drink-image"
                    />
                  </div>
                </Card.Header>
                <Card.Content px="1" py="2">
                  <ul className="drink-ingredients">
                    {Object.entries(drinkDetails.ingredients).map(
                      ([ingredient, ingredientDetails]) => (
                        <Box as="li" key={ingredient} pb="0-5">
                          {ingredientDetails.quantity}{' '}
                          {ingredientDetails.measurementUnit}{' '}
                          {Ingredients[ingredient as Ingredient].name}
                        </Box>
                      ),
                    )}
                  </ul>
                </Card.Content>
                {drinkDetails.links && (
                  <Card.Footer px="1">
                    <Divider color="neutral-700" />
                    <Box as="ul" py="1" className="drink-links">
                      {Object.entries(drinkDetails.links).map(
                        ([linkType, link]) => (
                          <li key={linkType}>
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={LinkTypes[linkType as LinkType].image}
                                alt={`${drinkDetails.name} ${
                                  LinkTypes[linkType as LinkType].name
                                }`}
                                width="32"
                                height="32"
                              />
                            </a>
                          </li>
                        ),
                      )}
                    </Box>
                  </Card.Footer>
                )}
              </Card>
            </li>
          ))}
      </ul>
    </Box>
  );
};
