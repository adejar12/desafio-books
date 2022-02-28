import AuthModel from "../model/Auth_Model";

class Auth {
  async read(email, password) {
    return await AuthModel.read(email, password);
  }
}

export default new Auth();
