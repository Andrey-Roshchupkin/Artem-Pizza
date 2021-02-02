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

export const CreationPage = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = handleSubmit(async (data) => {
    await fetch("http://localhost:8080/ingredients", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Наименование:</label>
        <input ref={register} id="name" type="text" name="name" />
      </div>
      <div>
        <label htmlFor="slug">Идентификатор:</label>
        <input ref={register} id="slug" type="text" name="slug" />
      </div>
      <div>
        <label htmlFor="price">Цена:</label>
        <input ref={register} id="price" type="tel" name="price" />
      </div>
      <div>
        <label htmlFor="category">Категория ингридиентов:</label>
        <select ref={register} id="category" name="category">
          <option value="vegetables">овощи</option>
          <option value="meet">мясо</option>
          <option value="cheese">сыры</option>
          <option value="sauces">соусы</option>
        </select>
      </div>
      <div>
        <label htmlFor="image">Изображение в превью:</label>
        <input ref={register} id="image" type="file" name="image" />
      </div>
      <div>
        <label htmlFor="thumbnail">Миниатюра для списка ингридиентов:</label>
        <input ref={register} id="thumbnail" type="file" name="thumbnail" />
      </div>
      <button>Добавить</button>
    </form>
  );
};
