import React, { useState } from "react";
import { calculatePrice } from "../Shared/calculatePrice";
import { useCollection } from "../Shared/useCollection";

export const PizzaConstructor = ({ onPizzaCreated }) => {
  const [pizzaSize, setPizzaSize] = useState("cm30");
  const [doughType, setDoughType] = useState("puffy");
  const [sauceType, setSauceType] = useState("tomato");
  const [cheeseType, addCheese, removeCheese] = useCollection();
  const [vegetablesType, addVegetables, removeVegetables] = useCollection();
  const [meatType, addMeat, removeMeat] = useCollection();

  const price = calculatePrice({
    pizzaSize,
    doughType,
    sauceType,
    cheeseType,
    vegetablesType,
    meatType,
  });

  const updatePizzaSize = (event) => {
    setPizzaSize(event.target.value);
  };

  const updateDoughType = (event) => {
    setDoughType(event.target.value);
  };

  const updateSauceType = (event) => {
    setSauceType(event.target.value);
  };
  const updateCheeseType = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      addCheese(value);
    } else {
      removeCheese(value);
    }
  };

  const updateVegetablesType = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      addVegetables(value);
    } else {
      removeVegetables(value);
    }
  };

  const updateMeatType = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      addMeat(value);
    } else {
      removeMeat(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onPizzaCreated({
      pizzaSize,
      doughType,
      sauceType,
      cheeseType,
      vegetablesType,
      meatType,
    });
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Выберите размер пиццы:</legend>
          <label>
            <input
              type="radio"
              value="cm30"
              onChange={updatePizzaSize}
              checked={pizzaSize === "cm30"}
            ></input>
            30 см
          </label>
          <label>
            <input
              type="radio"
              value="cm35"
              onChange={updatePizzaSize}
              checked={pizzaSize === "cm35"}
            ></input>
            35 см
          </label>
        </fieldset>
        <fieldset>
          <legend>Выберите тип теста:</legend>
          <label>
            <input
              type="radio"
              value="puffy"
              onChange={updateDoughType}
              checked={doughType === "puffy"}
            ></input>
            Пышное
          </label>
          <label>
            <input
              type="radio"
              value="thin"
              onChange={updateDoughType}
              checked={doughType === "thin"}
            ></input>
            Тонкое
          </label>
        </fieldset>
        <fieldset>
          <legend>Выберите тип соуса:</legend>
          <label>
            <input
              type="radio"
              value="tomato"
              onChange={updateSauceType}
              checked={sauceType === "tomato"}
            ></input>
            Томатный
          </label>
          <label>
            <input
              type="radio"
              value="white"
              onChange={updateSauceType}
              checked={sauceType === "white"}
            ></input>
            Белый
          </label>
          <label>
            <input
              type="radio"
              value="spicy"
              onChange={updateSauceType}
              checked={sauceType === "spicy"}
            ></input>
            Острый
          </label>
        </fieldset>
        <fieldset>
          <legend>Добавьте сыр:</legend>
          <label>
            <input
              type="checkbox"
              value="mozarella"
              onChange={updateCheeseType}
              checked={cheeseType.includes("mozarella")}
            ></input>
            Моцарелла
          </label>
          <label>
            <input
              type="checkbox"
              value="cheddar"
              onChange={updateCheeseType}
              checked={cheeseType.includes("cheddar")}
            ></input>
            Чеддер
          </label>
          <label>
            <input
              type="checkbox"
              value="dorblue"
              onChange={updateCheeseType}
              checked={cheeseType.includes("dorblue")}
            ></input>
            Дор блю
          </label>
        </fieldset>
        <fieldset>
          <legend>Добавьте овощи:</legend>
          <label>
            <input
              type="checkbox"
              value="tomatoes"
              onChange={updateVegetablesType}
              checked={vegetablesType.includes("tomatoes")}
            ></input>
            Помидоры
          </label>
          <label>
            <input
              type="checkbox"
              value="mushrooms"
              onChange={updateVegetablesType}
              checked={vegetablesType.includes("mushrooms")}
            ></input>
            Грибы
          </label>
          <label>
            <input
              type="checkbox"
              value="peppers"
              onChange={updateVegetablesType}
              checked={vegetablesType.includes("peppers")}
            ></input>
            Перцы
          </label>
        </fieldset>
        <fieldset>
          <legend>Добавьте мясо:</legend>
          <label>
            <input
              type="checkbox"
              value="bacon"
              onChange={updateMeatType}
              checked={meatType.includes("bacon")}
            ></input>
            Бекон
          </label>
          <label>
            <input
              type="checkbox"
              value="pepperoni"
              onChange={updateMeatType}
              checked={meatType.includes("pepperoni")}
            ></input>
            Пепперони
          </label>
          <label>
            <input
              type="checkbox"
              value="ham"
              onChange={updateMeatType}
              checked={meatType.includes("ham")}
            ></input>
            Ветчина
          </label>
        </fieldset>
        <button>Заказать за {price} руб</button>
      </form>
    </>
  );
}
