import { calculatePrice } from "./calculatePrice";

describe("calculatePrice", () => {
  it("returns sum of all the selected ingridients and small size of pizza", () => {
    expect(
      calculatePrice({
        pizzaSize: "cm30",
        doughType: "thin",
        sauceType: "tomato",
        cheeseType: ["mozarella", "cheddar", "dorblue"],
        vegetablesType: ["tomatoes", "mushrooms", "peppers"],
        meatType: ["ham", "pepperoni", "bacon"],
      })
    ).toEqual(461);
  });
});

describe("calculatePrice", () => {
  it("returns sum of all the selected ingridients and big size of pizza", () => {
    expect(
      calculatePrice({
        pizzaSize: "cm35",
        doughType: "thin",
        sauceType: "tomato",
        cheeseType: ["mozarella", "cheddar", "dorblue"],
        vegetablesType: ["tomatoes", "mushrooms", "peppers"],
        meatType: ["ham", "pepperoni", "bacon"],
      })
    ).toEqual(511);
  });
});
