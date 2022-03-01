import axios from "axios";

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const enableToken = (access_token) => {
  api.defaults.headers.common.Authorization = `Bearer ${access_token} `;
};

export default api;
