export const createFormData = (data) => {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("slug", data.slug);
  formData.append("price", data.price);
  formData.append("category", data.category);
  formData.append("image", data.image[0]);
  formData.append("thumbnail", data.thumbnail[0]);

  return formData;
};
