import { useQuery } from "react-query";
import { getIngredients } from "../api";

export const ListPage = () => {
  const { isLoading, isError, data, error } = useQuery(
    `ingredients`,
    async () => getIngredients
  );

  if (isLoading) {
    return <>Загрузка...</>;
  }

  if (isError) {
    return <>Ошибка: {JSON.stringify(error)}</>;
  }

  return (
    <>
      <p>Список ингредиентов: </p>
      {JSON.stringify(data)}
    </>
  );
};
