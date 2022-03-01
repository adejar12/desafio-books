import { getAll as get } from "../../../services/books";

import { store } from "./store";

export const getAll = async (page, amount) => {
  try {
    store.update((s) => {
      s.loading = true;
    });
    const data = await get(page, amount);

    if (data.data) {
      store.update((s) => {
        s.books = data.data.data;
        s.page = data.data.page;
        s.totalPages = data.data.totalPages;
        s.totalItems = data.data.totalItems;
      });
    }
  } catch (error) {
    console.log("error ==>", error);
  } finally {
    store.update((s) => {
      s.loading = false;
    });
  }
};
