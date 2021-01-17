import { Link, Redirect } from "react-router-dom";
import { usePizza } from "../PizzaContext";
import { PaymentForm } from "./PaymentForm";

export const PaymentPage = () => {
  const { pizza } = usePizza();

  if (!pizza) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <p>Страница оплаты</p>
      <PaymentForm pizza={pizza}/>
      <hr />
      <Link to="/">Вернуться на главную</Link>
    </>
  );
};
