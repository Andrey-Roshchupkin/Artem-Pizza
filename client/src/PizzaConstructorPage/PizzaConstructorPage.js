import { useHistory } from "react-router-dom";
import { usePizza } from "../PizzaContext";
import { PizzaConstructor } from "./PizzaConstructor";

export const PizzaConstructorPage = ({ _usePizzaHook = usePizza }) => {
  const { setPizza } = _usePizzaHook();
  const history = useHistory();

  const onPizzaChange = (pizza) => {
    setPizza(pizza);
    history.push("/pizza-preview")
  };

  return (
    <>
      <p>Создайте свою пиццу:</p>
      <PizzaConstructor onPizzaCreated={onPizzaChange} />
    </>
  );
};
