import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  price: yup
    .number()
    .transform((cv, ov) => (ov === "" ? undefined : cv))
    .typeError("Цена должна быть числом")
    .required("Цена обязательна к заполнению"),
  name: yup.string().required("Имя обязательно к заполнению"),
  slug: yup.string().required("Идентификатор обязателен к заполнению"),
});

export const ProductCreationPage = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="price">Цена:</label>
        <input ref={register} id="price" type="tel" name="price" />
      </div>
      <div>
        <label htmlFor="name">Наименование:</label>
        <input ref={register} id="name" type="text" name="name" />
      </div>
      <div>
        <label htmlFor="slug">Идентификатор:</label>
        <input ref={register} id="slug" type="text" name="slug" />
      </div>
      <div>
        <label htmlFor="picture">Изображение:</label>
        <input ref={register} id="picture" type="file" name="picture" />{" "}
      </div>
      <button>Отправить</button>
    </form>
  );
};
