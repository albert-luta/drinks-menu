import { Drink } from '../enums/drink';
import { DrinkOrigin } from '../enums/drink-origin';
import { DrinkType } from '../enums/drink-type';
import { Ingredient } from '../enums/ingredient';
import { LinkType } from '../enums/link-type';
import { MeasurementUnit } from '../enums/measurement-unit';
import { getAsset } from '../utils/get-asset';

export interface DrinkDetails {
  name: string;
  type: DrinkType;
  ingredients: Partial<
    Record<Ingredient, { quantity: string; measurementUnit: MeasurementUnit }>
  >;
  origins?: Partial<Record<DrinkOrigin, true>>;
  image: string;
  links?: Partial<Record<LinkType, string>>;
}

export const Drinks: Record<Drink, DrinkDetails> = {
  [Drink.MoscowMule]: {
    name: 'Moscow Mule',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.GingerBeer]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.MintLeaves]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/moscow-mule.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=J7X-AeGHPcE',
      [LinkType.Wikipedia]: 'https://en.wikipedia.org/wiki/Moscow_mule',
    },
  },
  [Drink.GinGinMule]: {
    name: 'Gin Gin Mule',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Gin]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.GingerBeer]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.MintLeaves]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/gin-gin-mule.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=CtzaTXYoRn4',
    },
  },
  [Drink.Margarita]: {
    name: 'Margarita',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Tequila]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.TripleSec]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.SimpleSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Salt]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    origins: {
      [DrinkOrigin.Mexico]: true,
    },
    image: getAsset('images/drinks/margarita.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=lNwNvq8Kxl8',
      [LinkType.Wikipedia]: 'https://en.wikipedia.org/wiki/Margarita',
    },
  },
  [Drink.BlueMargarita]: {
    name: 'Blue Margarita',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Tequila]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.BlueCuracao]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.SimpleSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Salt]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/blue-margarita.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=EYV__Ln03vs',
    },
  },
  [Drink.BlueCosmo]: {
    name: 'Blue Cosmo',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.BlueCuracao]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.CranberryJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/blue-cosmo.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=RzrsP9pbsOo',
    },
  },
  [Drink.WhiteRussian]: {
    name: 'White Russian',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.CoffeeLiqueur]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.FreshCream]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/white-russian.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=jruigYP9oFI',
    },
  },
  [Drink.PinaColada]: {
    name: 'Pina Colada',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.WhiteRum]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.CoconutSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.PineappleJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/pina-colada.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=__vhRDo-DAE',
    },
  },
  [Drink.CubaLibre]: {
    name: 'Cuba Libre',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Rum]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Cola]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/cuba-libre.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=EZpY--7FfPo',
    },
  },
  [Drink.SailorsSunrise]: {
    name: 'Sailors Sunrise',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Rum]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.OrangeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.GrenadineSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/sailors-sunrise.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/shorts/XbGC5EKm_lw',
    },
  },
  [Drink.BayBreeze]: {
    name: 'Bay Breeze',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.CranberryJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.PineappleJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/bay-breeze.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=vXiJn4iLeMk',
    },
  },
  [Drink.BlueArrow]: {
    name: 'Blue Arrow',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Gin]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.TripleSec]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.BlueCuracao]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/blue-arrow.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=YISaFJOYebM',
    },
  },
  [Drink.GinMartini]: {
    name: 'Gin Martini',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Gin]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.DryVermouth]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Olives]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/gin-martini.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=ApMR3IWYZHI',
    },
  },
  [Drink.SpicyMargarita]: {
    name: 'Spicy Margarita',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Tequila]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.TripleSec]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.SimpleSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.TajinPowder]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Jalapenos]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/spicy-margarita.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=UUVIKqp-Lks',
    },
  },
  [Drink.Hurricane]: {
    name: 'Hurricane',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.WhiteRum]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Rum]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.OrangeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.SimpleSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.GrenadineSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/hurricane.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=aIC56QCd8Zc',
    },
  },
  [Drink.TequilaSunrise]: {
    name: 'Tequila Sunrise',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Tequila]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.OrangeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.GrenadineSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/tequila-sunrise.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=QmBkd_Zxv8k',
    },
  },
  [Drink.BloodOrangeMargarita]: {
    name: 'Blood Orange Margarita',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Tequila]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.BloodOrangeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.TripleSec]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.SimpleSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Salt]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/blood-orange-margarita.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=YxtM_hQ2xZ0',
    },
  },
  [Drink.SexOnTheBeach]: {
    name: 'Sex On The Beach',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.PeachSchnapps]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.OrangeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.CranberryJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/sex-on-the-beach.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=d8tJn3OPGgE',
    },
  },
  [Drink.Paloma]: {
    name: 'Paloma',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Tequila]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.GrapefruitSoda]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/paloma.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=SScW78ICQm8',
    },
  },
  [Drink.Mojito]: {
    name: 'Mojito',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.WhiteRum]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.SodaWater]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.SimpleSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.MintLeaves]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    origins: {
      [DrinkOrigin.Cuba]: true,
    },
    image: getAsset('images/drinks/mojito.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=gg2iW8ai1KY',
    },
  },
  [Drink.MaiTai]: {
    name: 'Mai Tai',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Rum]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.WhiteRum]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.OrangeLiqueur]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.AlmondSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.OrangeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    origins: {
      [DrinkOrigin.USA]: true,
    },
    image: getAsset('images/drinks/mai-tai.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=vTqNLJG2ExE',
    },
  },
  [Drink.Daiquiri]: {
    name: 'Daiquiri',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.WhiteRum]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.SimpleSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    origins: {
      [DrinkOrigin.USA]: true,
      [DrinkOrigin.Cuba]: true,
    },
    image: getAsset('images/drinks/daiquiri.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=TbRmNrAeymo',
    },
  },
  [Drink.HoneysuckleDaiquiri]: {
    name: 'Honeysuckle Daiquiri',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.WhiteRum]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LemonJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.OrangeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.HoneySyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    origins: {
      [DrinkOrigin.USA]: true,
      [DrinkOrigin.Cuba]: true,
    },
    image: getAsset('images/drinks/honeysuckle-daiquiri.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=z2xssizb7D4',
    },
  },
  [Drink.Cosmopolitan]: {
    name: 'Cosmopolitan',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.TripleSec]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.CranberryJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    origins: {
      [DrinkOrigin.USA]: true,
    },
    image: getAsset('images/drinks/cosmopolitan.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=y23sJPG5McA',
    },
  },
  [Drink.BlackRussian]: {
    name: 'Black Russian',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.CoffeeLiqueur]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/black-russian.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=YqVKHz8-kbY',
    },
  },
  [Drink.IrishCoffee]: {
    name: 'Irish Coffee',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Whiskey]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Coffee]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Sugar]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.WhippedCream]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/irish-coffee.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=9xwtCHELxMA',
    },
  },
  [Drink.EspressoMartini]: {
    name: 'Espresso Martini',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Coffee]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.CoffeeLiqueur]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Sugar]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/espresso-martini.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=U4WJ7Ljy4K0',
    },
  },
  [Drink.BloodyMarry]: {
    name: 'Bloody Marry',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.TomatoJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LemonJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Salt]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.BlackPepper]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.TabascoSauce]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    origins: {
      [DrinkOrigin.USA]: true,
      [DrinkOrigin.France]: true,
    },
    image: getAsset('images/drinks/bloody-mary.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=hvnFanV4LPg',
    },
  },
  [Drink.LongIsland]: {
    name: 'Long Island',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.WhiteRum]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Gin]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Tequila]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.TripleSec]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.SimpleSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Cola]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/long-island.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=6AI7BOw81BM',
    },
  },
  [Drink.WhiskeySour]: {
    name: 'Whiskey Sour',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Whiskey]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LemonJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.SimpleSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/whiskey-sour.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=kfB1vLhz2Pw',
    },
  },
  [Drink.GreenParrot]: {
    name: 'Green Parrot',
    type: DrinkType.Cocktail,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.WhiteRum]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.DryVermouth]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.BlueCuracao]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.CremeDeCacao]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.OrangeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/green-parrot.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=5TQSKbnOtnM',
    },
  },
  [Drink.Kamikaze]: {
    name: 'Kamikaze',
    type: DrinkType.Shot,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.TripleSec]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    origins: {
      [DrinkOrigin.USA]: true,
      [DrinkOrigin.Japan]: true,
    },
    image: getAsset('images/drinks/kamikaze.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=CtnDBv6FfAI',
    },
  },
  [Drink.Blowjob]: {
    name: 'Blowjob',
    type: DrinkType.Shot,
    ingredients: {
      [Ingredient.AlmondLiqueur]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.CoffeeLiqueur]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.IrishCream]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.WhippedCream]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/blowjob.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=IlouvXNILwQ',
    },
  },
  [Drink.PurpleStarfucker]: {
    name: 'Purple Starfucker',
    type: DrinkType.Shot,
    ingredients: {
      [Ingredient.BlueCuracao]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.PeachSchnapps]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.AlmondLiqueur]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.CranberryJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/purple-starfucker.webp'),
  },
  [Drink.RedHeadedSlut]: {
    name: 'Red Headed Slut',
    type: DrinkType.Shot,
    ingredients: {
      [Ingredient.PeachSchnapps]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Jagermeister]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.CranberryJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/red-headed-slut.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=Fk7Z1lRkbHk',
    },
  },
  [Drink.ApocalypseNow]: {
    name: 'Apocalypse Now',
    type: DrinkType.Shot,
    ingredients: {
      [Ingredient.Tequila]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.DryVermouth]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.IrishCream]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/apocalypse-now.webp'),
  },
  [Drink.DeepOcean]: {
    name: 'Deep Ocean',
    type: DrinkType.Shot,
    ingredients: {
      [Ingredient.BlueCuracao]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.WhiteRum]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Hpnotiq]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/deep-ocean.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=WUQPrHVyR4A',
    },
  },
  [Drink.WaterMoccasin]: {
    name: 'Water Moccasin',
    type: DrinkType.Shot,
    ingredients: {
      [Ingredient.Whiskey]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.PeachSchnapps]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.TripleSec]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LimeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.SimpleSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/water-mocassin.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=MsNG_-atvAI',
    },
  },
  [Drink.LemonDrop]: {
    name: 'Lemon Drop',
    type: DrinkType.Shot,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LemonJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.SimpleSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Salt]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/lemon-drop.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=IUFQN54mAfw',
    },
  },
  [Drink.AlienBrainHemorage]: {
    name: 'Alien Brain Hemorage',
    type: DrinkType.Shot,
    ingredients: {
      [Ingredient.PeachSchnapps]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.IrishCream]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.BlueCuracao]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.GrenadineSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/alien-brain-hemorage.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=4knoUXpi3eo',
    },
  },
  [Drink.MonkeyBrain]: {
    name: 'Monkey Brain',
    type: DrinkType.Shot,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.LemonJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.IrishCream]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.GrenadineSyrup]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/monkey-brain.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=874BDhCf3IQ',
    },
  },
  [Drink.WhiskeyCola]: {
    name: 'Whiskey Cola',
    type: DrinkType.LongDrink,
    ingredients: {
      [Ingredient.Whiskey]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Cola]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    origins: {
      [DrinkOrigin.USA]: true,
    },
    image: getAsset('images/drinks/whiskey-cola.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=AYbmpFyUbfA',
    },
  },
  [Drink.GinTonic]: {
    name: 'Gin Tonic',
    type: DrinkType.LongDrink,
    ingredients: {
      [Ingredient.Gin]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Tonic]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    origins: {
      [DrinkOrigin.UK]: true,
      [DrinkOrigin.India]: true,
    },
    image: getAsset('images/drinks/gin-tonic.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=CQw5uqyOh_Y',
    },
  },
  [Drink.VodkaOrange]: {
    name: 'Vodka Orange',
    type: DrinkType.LongDrink,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.OrangeJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/vodka-orange.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=1h-9DLb6jhw',
    },
  },
  [Drink.VodkaCranberry]: {
    name: 'Vodka Cranberry',
    type: DrinkType.LongDrink,
    ingredients: {
      [Ingredient.Vodka]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.CranberryJuice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    origins: {
      [DrinkOrigin.UK]: true,
      [DrinkOrigin.India]: true,
    },
    image: getAsset('images/drinks/vodka-cranberry.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=CQw5uqyOh_Y',
    },
  },
  [Drink.RumCola]: {
    name: 'Rum Cola',
    type: DrinkType.LongDrink,
    ingredients: {
      [Ingredient.Rum]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Cola]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Ice]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/rum-cola.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=mHYDjO1DgGA',
    },
  },
  [Drink.Coffee]: {
    name: 'Coffee',
    type: DrinkType.Other,
    ingredients: {
      [Ingredient.Coffee]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/coffee.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=rLaVDQy0q8Y',
    },
  },
  [Drink.JagermeisterOreoMilkshake]: {
    name: 'Jagermeister Oreo Milkshake',
    type: DrinkType.Other,
    ingredients: {
      [Ingredient.Jagermeister]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.Oreos]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
      [Ingredient.IceCream]: {
        quantity: '50',
        measurementUnit: MeasurementUnit.Part,
      },
    },
    image: getAsset('images/drinks/jagermeister-oreo-milkshake.webp'),
    links: {
      [LinkType.YouTube]: 'https://www.youtube.com/watch?v=jJ0DI7ZJFz4',
    },
  },
};
