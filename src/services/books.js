import api from "./api";

export const getAll = (page, amount) => {
  return api.get(`/books?page=${page}&amount=${amount}`);
};
