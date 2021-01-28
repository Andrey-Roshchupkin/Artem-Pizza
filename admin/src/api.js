const server = "http://localhost:8080";

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

export const getIngredients = fetch(`${server}/ingredients`).then((res) =>
  res.json()
);
