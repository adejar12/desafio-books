import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Auth from "../../controllers/Auth_Controller";

import FormTextInput from "../../components/FormTextInput";
import Error from "../../components/Error";
import ImageBackGround from "../../components/ImageBackGround";

import { Container, Logo, Subtitulo, ContainerTitulo } from "./styles";

import BackgroundImage from "../../assets/image/jpg/backgroundImage_login.jpg";

function Login() {
  const [email, setEmail] = useState("desafio@ioasys.com.br");
  const [password, setPassword] = useState("12341234");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  async function entrar() {
    setError(false);
    const response = await Auth.read(email, password);

    if (response) {
      navigate("/books");
    } else {
      setError(!error);
    }
  }

  return (
    <>
      <ImageBackGround source={BackgroundImage} />
      <Container>
        <ContainerTitulo>
          <Logo />
          <Subtitulo white>Books</Subtitulo>
        </ContainerTitulo>
        <FormTextInput
          label="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
        />
        <FormTextInput
          label="Senha"
          placeholder="Senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          button
          onClick={entrar}
          textButton="Entrar"
          type="password"
        />
        {error && <Error text={"Email e/ou senha incorretos."} />}
      </Container>
    </>
  );
}

export default Login;
