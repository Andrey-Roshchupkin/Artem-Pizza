import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { getIngredients, server } from "../api";

export const ListPage = () => {
  const history = useHistory();
  const { isLoading, isError, data, error } = useQuery(
    `ingredientsList`,
    () => getIngredients
  );

  if (isLoading) {
    return <>Загрузка...</>;
  }

  if (isError) {
    return <>Ошибка: {JSON.stringify(error)}</>;
  }
  const ingredients = data;

  const handleEdit = (id) => {
    history.push(`/edit/${id}`);
  };

  const handleCreate = () => {
    history.push("/create");
  };

  return (
    <>
      <button onClick={handleCreate}>Добавить новый ингредиент</button>
      <hr />
      <p>Список ингредиентов: </p>
      {ingredients.map((ingredients) => {
        return (
          <div key={ingredients.id}>
            <hr />
            <div>Наименование: {ingredients.name}</div>
            <div>Идентификатор: {ingredients.slug}</div>
            <div>Цена: {ingredients.price} руб.</div>
            <div>Категория: {ingredients.category}</div>
            <div>
              Изображение в превью:
              <img
                src={`${server}/${ingredients.image}`}
                alt="Изображение в превью"
              />
            </div>
            <div>
              Миниатюра для списка ингридиентов:
              <img
                src={`${server}/${ingredients.thumbnail}`}
                alt="Миниатюра для списка ингридиентов"
              />
            </div>
            <button type="button" onClick={() => handleEdit(ingredients.id)}>
              Редактировать
            </button>
          </div>
        );
      })}
    </>
  );
};
