import {
  DOUGH,
  SAUCES,
  SIZE,
  MEAT,
  CHEESE,
  VEGETABLES,
} from "../Shared/pizzaData";
import { calculatePrice } from "../Shared/calculatePrice";

export const PizzaPreview = ({ pizza }) => {
  return (
    <>
      <p>Размер пиццы: {SIZE[pizza.pizzaSize].name}</p>
      <p>Тесто: {DOUGH[pizza.doughType].name}</p>
      <p>Соус: {SAUCES[pizza.sauceType].name}</p>
      {!!(pizza.cheeseType) && (
        <p>
          Сыр:{" "}
          {pizza.cheeseType
            .map((cheeseType) => CHEESE[cheeseType].name)
            .join(", ")}
        </p>
      )}
      {!!(pizza.vegetablesType) && (
        <p>
          Овощи:{" "}
          {pizza.vegetablesType
            .map((vegetablesType) => VEGETABLES[vegetablesType].name)
            .join(", ")}
        </p>
      )}
      {!!(pizza.meatType) && (
        <p>
          Мясо:{" "}
          {pizza.meatType.map((meatType) => MEAT[meatType].name).join(", ")}
        </p>
      )}
      <p>Цена: {calculatePrice(pizza)} руб</p>
    </>
  );
};
