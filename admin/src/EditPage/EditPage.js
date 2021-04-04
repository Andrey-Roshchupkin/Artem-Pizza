import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { deleteIngredient, editIngredient, getIngredient } from "../api";
import * as yup from "yup";
import { AuthContext } from "../AuthContext";
import { useForm } from "react-hook-form";
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

export const EditPage = () => {
  const { id } = useParams();

  const history = useHistory();

  const { token } = useContext(AuthContext);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const loadData = async () => {
      const data = await getIngredient(id);
      setData(data);
      setIsLoading(false);
    };
    loadData();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  const handleDelete = handleSubmit(() => {
    deleteIngredient({ id, token });
    history.push("/");
  });

  const handleReturn = handleSubmit(() => history.goBack());

  const handleEdit = handleSubmit((data) => {
    editIngredient({ id, data, token });
    history.push("/");
  });

  return (
    <>
      <p>Редактирование ингридиента:</p>
      <form onSubmit={handleEdit}>
        <div>
          <label htmlFor="name">Наименование:</label>
          <input
            ref={register}
            id="name"
            type="text"
            name="name"
            defaultValue={data.name}
          />
        </div>
        <div>
          <label htmlFor="slug">Идентификатор:</label>
          <input
            ref={register}
            id="slug"
            type="text"
            name="slug"
            defaultValue={data.slug}
          />
        </div>
        <div>
          <label htmlFor="price">Цена:</label>
          <input
            ref={register}
            id="price"
            type="tel"
            name="price"
            defaultValue={data.price}
          />
        </div>
        <div>
          <label htmlFor="category">Категория ингридиентов:</label>
          <select
            ref={register}
            id="category"
            name="category"
            defaultValue={data.category}
          >
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
        <button>Сохранить изменения</button>
      </form>
      <button onClick={handleDelete}>Удалить ингредиент</button>
      <button onClick={handleReturn}>Вернуться назад без изменений</button>
    </>
  );
};
