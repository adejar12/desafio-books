import { enableToken } from "../../../services/api";
import { login } from "../../../services/auth";

import { store } from "./store";

export const signIn = async (email, password) => {
  try {
    store.update((s) => {
      s.current_user.loading = true;
    });
    const data = await login(email, password);

    if (data.data) {
      store.update((s) => {
        s.current_user.user = data.data;
        s.access_token = data.headers?.authorization;
      });
      enableToken(data.headers?.authorization);
    }
  } catch (error) {
    console.log("error ==>", error);
  } finally {
    store.update((s) => {
      s.current_user.loading = false;
    });
  }
};
