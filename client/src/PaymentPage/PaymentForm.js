import { Controller, useForm } from "react-hook-form";
import { calculatePrice } from "../Shared/calculatePrice";
import InputMask from "react-input-mask";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  adress: yup.string().required("Введите адрес!"),
  entrance: yup
    .number()
    .transform((cv, ov) => (ov === "" ? undefined : cv))
    .typeError("подъезд должен быть числом!")
    .required("Введите номер подъезда!"),
  floor: yup
    .number()
    .transform((cv, ov) => (ov === "" ? undefined : cv))
    .typeError("этаж должен быть числом!")
    .required("Укажите этаж!"),
  flat: yup
    .number()
    .transform((cv, ov) => (ov === "" ? undefined : cv))
    .typeError("квартира должна быть числом!")
    .required("Введите номер квартиры!"),
});

export const PaymentForm = ({ pizza }) => {
  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="adress">Адрес доставки</label>
        <input type="text" name="adress" ref={register} />
        {errors.adress?.message}
      </div>
      <div>
        <label htmlFor="entrance">подъезд</label>
        <input type="tel" name="entrance" ref={register} />
        {errors.entrance?.message}
      </div>
      <div>
        <label htmlFor="floor">этаж</label>
        <input type="tel" name="floor" ref={register} />
        {errors.floor?.message}
      </div>
      <div>
        <label htmlFor="flat">квартира</label>
        <input type="tel" name="flat" ref={register} />
        {errors.flat?.message}
      </div>
      <hr />
      <div>
        <label htmlFor="cardNumber">Номер карты: </label>
        <Controller
          as={InputMask}
          control={control}
          mask="9999 9999 9999 9999"
          name="cardNumber"
          ref={register}
        />
        {errors.cardNumber?.message}
      </div>
      <div>
        <label htmlFor="cardDate">Срок действия карты: </label>
        <Controller
          as={InputMask}
          control={control}
          mask="99/9999"
          name="cardDate"
        />
      </div>
      <div>
        <label htmlFor="cardCCV">CCV: </label>
        <Controller
          as={InputMask}
          control={control}
          mask="999"
          name="cardCCV"
        />
      </div>
      <div>
        <label htmlFor="cardOwner">Владелец карты: </label>
        <input
          type="text"
          name="cardOwner"
          onInput={(e) =>
            (e.target.value = ("" + e.target.value).toUpperCase())
          }
        />
      </div>

      <button>Оплатить {calculatePrice(pizza)} руб.</button>
    </form>
  );
};
