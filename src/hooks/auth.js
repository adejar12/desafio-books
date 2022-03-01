import { store } from "../store/modules/auth/store";

export const useAuth = () => store.useState((s) => s);
