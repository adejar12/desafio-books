import api from "../services/api";

class Books {
  async read(page, amount) {
    const url = `https://books.ioasys.com.br/api/v1/books?page=${page}&amount=${amount}`;
    return await api.get(url);
  }
}

export default new Books();
