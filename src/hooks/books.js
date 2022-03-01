import { store } from "../store/modules/books/store";

export const useBooks = () => store.useState((s) => s);
