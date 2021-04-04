import { createFormData } from "./utils";

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
  const formData = createFormData(data);

  fetch(`${server}/ingredients`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export const getIngredients = fetch(`${server}/ingredients`).then((res) =>
  res.json()
);

export const getIngredient = (id) =>
  fetch(`${server}/ingredients/${id}`).then((res) => res.json());

export const deleteIngredient = ({ id, token }) => {
  fetch(`${server}/ingredients/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export const editIngredient = ({ id, data, token }) => {
  const formData = createFormData(data);

  fetch(`${server}/ingredients/${id}`, {
    method: "PUT",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
