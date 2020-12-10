const { render } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { PaymentPage } = require("./PaymentPage");

describe("PaymentPage", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <PaymentPage />
      </MemoryRouter>
    );
    expect(getByText("Страница оплаты")).toBeInTheDocument();
    expect(getByText("Вернуться на главную")).toBeInTheDocument();
  });
});
