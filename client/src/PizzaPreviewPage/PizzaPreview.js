import { DOUGH, SAUCES, SIZE, MEAT, CHEESE, VEGETABLES } from "../Shared/pizzaData";
import {calculatePrice} from "../Shared/calculatePrice"

export const PizzaPreview = ({ pizza }) => {
  return (
        <>
      <p>Размер пиццы: {SIZE[pizza.pizzaSize].name}</p>
      <p>Тесто: {DOUGH[pizza.doughType].name}</p>
      <p>Соус: {SAUCES[pizza.sauceType].name}</p>
      {Boolean(pizza.cheeseType.length) && (
        <p>
          Сыр:{" "}
          {pizza.cheeseType
            .map((cheeseType) => CHEESE[cheeseType].name)
            .join(", ")}
        </p>
      )}
      {Boolean(pizza.vegetablesType.length) && (
        <p>
          Овощи:{" "}
          {pizza.vegetablesType
            .map((vegetablesType) => VEGETABLES[vegetablesType].name)
            .join(", ")}
        </p>
      )}
      {Boolean(pizza.meatType.length) && (
        <p>
          Мясо:{" "}
          {pizza.meatType.map((meatType) => MEAT[meatType].name).join(", ")}
        </p>
      )}
      <p>Цена: {calculatePrice(pizza)} руб</p>
    </>
  );
};

