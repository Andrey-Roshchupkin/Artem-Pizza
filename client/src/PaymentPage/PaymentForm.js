import { Controller, useForm } from "react-hook-form";
import { calculatePrice } from "../Shared/calculatePrice";
import InputMask from "react-input-mask";

export const PaymentForm = ({ pizza }) => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="cardNumber">Номер карты: </label>
        <Controller
          as={InputMask}
          control={control}
          mask="9999 9999 9999 9999"
          name="cardNumber"
        />
      </div>

      <button>Оплатить {calculatePrice(pizza)} руб.</button>
    </form>
  );
};
