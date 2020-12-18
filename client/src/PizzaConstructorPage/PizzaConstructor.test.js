const { render, fireEvent } = require("@testing-library/react");
const { act } = require("react-test-renderer");
const { PizzaConstructor } = require("./PizzaConstructor");

describe("PizzaConstructor", () => {
  it("renders correctly", () => {
    const { getByText } = render(<PizzaConstructor />);
    expect(getByText("Выберите размер пиццы:")).toBeInTheDocument();
  });

  describe("with all additionals unchecked", () => {
    it("shows minimum price", () => {
      const { getByText } = render(<PizzaConstructor />);
      expect(getByText("Заказать за 200 руб")).toBeInTheDocument();
    });
  });

  describe("with all additionals checked", () => {
    it("shows maximum price", () => {
      const { getByText } = render(<PizzaConstructor />);
      fireEvent.click(getByText("35 см"));

      fireEvent.click(getByText("Моцарелла"));
      fireEvent.click(getByText("Чеддер"));
      fireEvent.click(getByText("Дор блю"));

      fireEvent.click(getByText("Помидоры"));
      fireEvent.click(getByText("Грибы"));
      fireEvent.click(getByText("Перцы"));

      fireEvent.click(getByText("Бекон"));
      fireEvent.click(getByText("Пепперони"));
      fireEvent.click(getByText("Ветчина"));

      expect(getByText("Заказать за 511 руб")).toBeInTheDocument();
    });
  });

  describe("on pizza submit", () => {
    it("passes constructed pizza", async () => {
      const onPizzaSubmit = jest.fn();

      const { getByText } = render(
        <PizzaConstructor onPizzaCreated={onPizzaSubmit} />
      );

      fireEvent.click(getByText("Чеддер"));
      fireEvent.click(getByText("Бекон"));
      fireEvent.click(getByText("Грибы"));

      await act(async () => {
        fireEvent.click(getByText("Заказать за 287 руб"));
      });

      expect(onPizzaSubmit).toBeCalledWith({
        pizzaSize: "cm30",
        sauceType: "tomato",
        doughType: "puffy",
        cheeseType: ["cheddar"],
        vegetablesType: ["mushrooms"],
        meatType: ["bacon"],
      });
    });
  });
});
