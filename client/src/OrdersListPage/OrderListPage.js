import { useEffect, useState } from "react";
import { getOrdersList } from "../api";

export const OrderListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const loadData = async () => {
      const json = await getOrdersList();
      setData(json);
      setIsLoading(false);
    };
    loadData();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <p>Ваши заказы:</p>
      <>{JSON.stringify(data)}</>
    </>
  );
};
