import BooksModel from "../model/Books_Model";

class Books {
  async read(page, amount) {
    return await BooksModel.read(page, amount);
  }
}

export default new Books();
