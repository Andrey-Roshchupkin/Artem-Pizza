import React from "react";
import { calculatePrice } from "../Shared/calculatePrice";
import { useForm } from "react-hook-form";

export const PizzaConstructor = ({ onPizzaCreated }) => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
pizzaSize: "cm30",
    doughType: "puffy",
    sauceType: "tomato",
    cheeseType: [],
    vegetablesType: [],
    meatType: []
    }
  });

  const values = watch();

  const price = calculatePrice(values);

  const onSubmit = (orderData) => {
    onPizzaCreated(orderData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Выберите размер пиццы:</legend>
          <label>
            <input
              ref={register}
              type="radio"
              value="cm30"
              name="pizzaSize"
            ></input>
            30 см
          </label>
          <label>
            <input
              ref={register}
              type="radio"
              value="cm35"
              name="pizzaSize"
            ></input>
            35 см
          </label>
        </fieldset>
        <fieldset>
          <legend>Выберите тип теста:</legend>
          <label>
            <input
              ref={register}
              type="radio"
              value="puffy"
              name="doughType"
            ></input>
            Пышное
          </label>
          <label>
            <input
              ref={register}
              type="radio"
              value="thin"
              name="doughType"
            ></input>
            Тонкое
          </label>
        </fieldset>
        <fieldset>
          <legend>Выберите тип соуса:</legend>
          <label>
            <input
              ref={register}
              type="radio"
              value="tomato"
              name="sauceType"
            ></input>
            Томатный
          </label>
          <label>
            <input
              ref={register}
              type="radio"
              value="white"
              name="sauceType"
            ></input>
            Белый
          </label>
          <label>
            <input
              ref={register}
              type="radio"
              value="spicy"
              name="sauceType"
            ></input>
            Острый
          </label>
        </fieldset>
        <fieldset>
          <legend>Добавьте сыр:</legend>
          <label>
            <input
              ref={register}
              type="checkbox"
              value="mozarella"
              name="cheeseType"
            ></input>
            Моцарелла
          </label>
          <label>
            <input
              ref={register}
              type="checkbox"
              value="cheddar"
              name="cheeseType"
            ></input>
            Чеддер
          </label>
          <label>
            <input
              ref={register}
              type="checkbox"
              value="dorblue"
              name="cheeseType"
            ></input>
            Дор блю
          </label>
        </fieldset>
        <fieldset>
          <legend>Добавьте овощи:</legend>
          <label>
            <input
              ref={register}
              type="checkbox"
              value="tomatoes"
              name="vegetablesType"
            ></input>
            Помидоры
          </label>
          <label>
            <input
              ref={register}
              type="checkbox"
              value="mushrooms"
              name="vegetablesType"
            ></input>
            Грибы
          </label>
          <label>
            <input
              ref={register}
              type="checkbox"
              value="peppers"
              name="vegetablesType"
            ></input>
            Перцы
          </label>
        </fieldset>
        <fieldset>
          <legend>Добавьте мясо:</legend>
          <label>
            <input
              ref={register}
              type="checkbox"
              value="bacon"
              name="meatType"
            ></input>
            Бекон
          </label>
          <label>
            <input
              ref={register}
              type="checkbox"
              value="pepperoni"
              name="meatType"
            ></input>
            Пепперони
          </label>
          <label>
            <input
              ref={register}
              type="checkbox"
              value="ham"
              name="meatType"
            ></input>
            Ветчина
          </label>
        </fieldset>
        <button>Заказать за {price} руб</button>
      </form>
    </>
  );
};
