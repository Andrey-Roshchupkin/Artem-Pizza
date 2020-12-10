import { DOUGH, SIZE, SAUCES, CHEESE, VEGETABLES, MEAT } from "./pizzaData";

export function calculatePrice({
  pizzaSize,
  doughType,
  sauceType,
  cheeseType,
  vegetablesType,
  meatType,
}) {
  const doughPrice = DOUGH[doughType].price;

  const sizePrice = SIZE[pizzaSize].price;

  const saucePrice = SAUCES[sauceType].price;

  const cheesePrice = cheeseType.reduce(
    (price, cheeseType) => price + CHEESE[cheeseType].price,
    0
  );

  const vegetablesPrice = vegetablesType.reduce(
    (price, vegetablesType) => price + VEGETABLES[vegetablesType].price,
    0
  );

  const meatPrice = meatType.reduce(
    (price, meatType) => price + MEAT[meatType].price,
    0
  );

  return (
    doughPrice +
    sizePrice +
    saucePrice +
    cheesePrice +
    vegetablesPrice +
    meatPrice
  );
}
