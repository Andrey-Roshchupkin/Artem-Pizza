const { render, fireEvent } = require("@testing-library/react");
const { createMemoryHistory } = require("history");
const { MemoryRouter, Router } = require("react-router-dom");
const { PizzaConstructorPage } = require("./PizzaConstructorPage");

jest.mock("./PizzaConstructor", () => ({
  PizzaConstructor: ({ onPizzaCreated }) => (
    <button onClick={() => onPizzaCreated({ foo: "bar" })}>Сохранить</button>
  ),
}));

describe("PizzaConstructorPage", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <PizzaConstructorPage
          _usePizzaHook={() => ({
            setPizza: () => {},
          })}
        />
      </MemoryRouter>
    );

    expect(getByText("Создайте свою пиццу:")).toBeInTheDocument();
  });
  describe(".onPizzaChange", () => {
    it("sets pizza value in the pizza context", () => {
      const mockSetPizza = jest.fn();

      const { getByText } = render(
        <MemoryRouter>
          <PizzaConstructorPage
            _usePizzaHook={() => ({
              setPizza: mockSetPizza,
            })}
          />
        </MemoryRouter>
      );
      fireEvent.click(getByText("Сохранить"));

      expect(mockSetPizza).toBeCalledWith({ foo: "bar" });
    });
    it("navigates to '/pizza-preview'", () => {
      const history = createMemoryHistory();

      const { getByText } = render(
        <Router history={history}>
          <PizzaConstructorPage
            _usePizzaHook={() => ({
              setPizza: () => {},
            })}
          />
        </Router>
      );
      fireEvent.click(getByText("Сохранить"));

      expect(history.location.pathname).toEqual("/pizza-preview");
    });
  });
});
