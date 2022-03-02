import axios from "axios";

import { store } from "../store/modules/auth/store";

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const reqTokenInterceptor = async (config) => {
  const { access_token } = store.getRawState();
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
};

api.interceptors.request.use(reqTokenInterceptor);

export const enableToken = (access_token) => {
  api.defaults.headers.common.Authorization = `Bearer ${access_token} `;
};

export default api;
