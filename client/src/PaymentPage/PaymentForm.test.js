const { render } = require("@testing-library/react");
const { PaymentForm } = require("./PaymentForm");

describe("PaymentForm", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <PaymentForm
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

    expect(getByText("Оплатить 424 руб.")).toBeInTheDocument();
  });
});
