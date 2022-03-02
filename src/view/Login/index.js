import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import BackgroundImage from "../../assets/image/jpg/backgroundImage_login.jpg";

import Error from "../../components/Error";
import FormTextInput from "../../components/FormTextInput";
import Loading from "../../components/Loading";

import { useAuth } from "../../hooks/auth";
import { useIsMount } from "../../hooks/isMount";
import { signIn } from "../../store/modules/auth/actions";

import {
  Container,
  Logo,
  Subtitulo,
  ContainerTitulo,
  ImageBackGround,
} from "./styles";

function Login() {
  const [email, setEmail] = useState("desafio@ioasys.com.br");
  const [password, setPassword] = useState("12341234");
  const [error, setError] = useState(false);

  const user = useAuth();
  const isMount = useIsMount();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isMount) {
      if (user.access_token) {
        navigate("/books");
      } else {
        if (user.current_user.loading === false) {
          setError(!error);
        }
      }
    }
  }, [user]);

  async function entrar() {
    setError(false);
    await signIn(email, password);
  }

  return (
    <>
      {user.current_user.loading && <Loading />}
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
