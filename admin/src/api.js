export const server = "http://localhost:8080";

export const serverLogin = (data) => {
  return fetch(`${server}/admin-auth/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    if (res.status === 200) {
      return res.json().then((data) => {
        return data.token;
      });
    } else {
      const error = new Error(res.error);
      throw error;
    }
  });
};

export const createIngredient = ({ data, token }) => {
  console.log(token);
  console.log(data);
  fetch("http://localhost:8080/ingredients", {
    method: "POST",
    body: data,
    headers: {
    "Content-type": `multipart/form-data`,
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());
};

export const getIngredients = fetch(`${server}/ingredients`).then((res) =>
  res.json()
);
