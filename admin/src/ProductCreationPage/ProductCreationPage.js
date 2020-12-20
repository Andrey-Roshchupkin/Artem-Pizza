import { useForm } from "react-hook-form";

export const ProductCreationPage = () => {
  const { register, handleSubmit } = useForm();

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
