import { Link, Route, Switch } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { NotFoundPage } from "./NotFoundPage";
import { OrderListPage } from "./OrdersListPage";
import { PaymentPage } from "./PaymentPage";
import { PizzaConstructorPage } from "./PizzaConstructorPage";
import { PizzaPreviewPage } from "./PizzaPreviewPage";
import { ReceiptPage } from "./ReceiptPage";
import { RegistrationPage } from "./RegistrationPage";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/pizza-preview">Превью пиццы</Link>
          </li>
          <li>
            <Link to="/payment">Оплата пиццы</Link>
          </li>
          <li>
            <Link to="/login">Логин</Link>
          </li>
          <li>
            <Link to="/orders">Заказы</Link>
          </li>
          <li>
            <Link to="/registration">Регистрация</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/registration">
          <RegistrationPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <PizzaConstructorPage />
        </Route>
        <Route path="/pizza-preview">
          <PizzaPreviewPage />
        </Route>
        <Route path="/payment">
          <PaymentPage />
        </Route>
        <Route path="/receipt">
          <ReceiptPage />
        </Route>
        <Route path="/orders">
          <OrderListPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
