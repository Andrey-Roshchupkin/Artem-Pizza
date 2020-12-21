const { PizzaPreview } = require("./PizzaPreview");
import { render } from "@testing-library/react";

describe("PizzaPreview", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <PizzaPreview
        pizza={{
          doughType: "thin",
          pizzaSize: "cm35",
          sauceType: "spicy",
          cheeseType: ["cheddar", "dorblue"],
          vegetablesType: ["peppers"],
          meatType: ["bacon", "pepperoni", "ham"],
        }}
      />
    );
    expect(getByText("Тесто: тонкое")).toBeInTheDocument();
    expect(getByText("Соус: острый")).toBeInTheDocument();
    expect(getByText("Размер пиццы: 35 см")).toBeInTheDocument();
    expect(getByText("Сыр: чеддер, дор блю")).toBeInTheDocument();
    expect(getByText("Мясо: бекон, пепперони, ветчина")).toBeInTheDocument();
    expect(getByText("Овощи: перцы")).toBeInTheDocument();
  });
});
