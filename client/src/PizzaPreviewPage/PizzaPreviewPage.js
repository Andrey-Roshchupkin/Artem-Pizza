import { Link, Redirect } from "react-router-dom";
import { usePizza } from "../PizzaContext";
import { PizzaPreview } from "./PizzaPreview";

export const PizzaPreviewPage = () => {
  const { pizza } = usePizza();

  if (!pizza) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <p>Ваша пицца:</p>
      <PizzaPreview pizza={pizza} />
      <hr />
      <Link to="/payment">Перейти к оплате</Link>
    </>
  );
};
