import { Store } from "pullstate";

const defaultStoresState = {
  books: [],
  page: 0,
  totalPages: 0,
  totalItems: 0,
  loading: false,
};

export const store = new Store(defaultStoresState);

export const clean = () => {
  store.replace(defaultStoresState);
};

export default { store, clean, key: "@books" };
