import auth from "../store/modules/auth/store";

export const persistState = async (key, store, watch = (s) => s) => {
  const data = await sessionStorage.getItem(key);

  if (data) {
    store.replace(JSON.parse(data));
  }

  store.subscribe(watch, (state) => {
    sessionStorage.setItem(key, JSON.stringify(state));
  });
};

export const cleanStorage = () => {
  auth.clean();
};

export const enablePersistors = () => {
  persistState(auth.key, auth.store);
};
