export const getOrdersList = () => {
  return fetch("http://localhost:3000/orders").then((res) => res.json());
};

export const createNewOrder = ({ data, pizza }) => {
  return fetch("http://localhost:3000/orders", {
    method: "POST",
    body: JSON.stringify({
      ingredients: pizza,
      address: data.adress,
      name: data.cardOwner,
      card_number: data.cardNumber,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
};
