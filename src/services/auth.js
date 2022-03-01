import api from "./api";

export const login = (email, password) => {
  return api.post("/auth/sign-in", {
    email,
    password,
  });
};
