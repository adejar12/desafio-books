import { Store } from "pullstate";

const defaultStoresState = {
  current_user: {
    loading: false,
    user: {
      id: "",
      name: "",
      birthdate: "",
      gender: "",
    },
  },

  access_token: "",

  refresh_token: "",
};

export const store = new Store(defaultStoresState);

export const clean = () => {
  store.replace(defaultStoresState);
};

export default { store, clean, key: "@auth" };
