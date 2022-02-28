import api, { enableToken } from "../services/api";

class Auth {
  async read(email, password) {
    const url = "https://books.ioasys.com.br/api/v1/auth/sign-in";
    var response = null;
    try {
      response = await api.post(url, { email, password });

      if (response.headers.authorization) {
        enableToken(response.headers?.authorization);
      }
    } catch (error) {
      console.log(error);
    }

    return response;
  }
}

export default new Auth();
