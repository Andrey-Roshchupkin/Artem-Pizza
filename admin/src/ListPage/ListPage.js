import { useQuery } from "react-query";

export const ListPage = () => {
  const { isLoading, isError, data, error } = useQuery(
    "ingridients",
    async () =>
      await fetch("http://localhost:3000/ingredients").then((res) => res.json())
  );

  if (isLoading) {
    return <>Загрузка...</>;
  }

  if (isError) {
    return <>Ошибка: {error.message}</>;
  }
  
  return (
    <>
      <p>Список ингредиентов: </p>
      {JSON.stringify(data)}
    </>
  );
};
