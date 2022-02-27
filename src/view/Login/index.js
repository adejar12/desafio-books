import React from "react";

import FormTextInput from "../../components/FormTextInput";

import {
  ContainerImg,
  Container,
  Logo,
  Subtitulo,
  ContainerTitulo,
} from "./styles";

function Login() {
  return (
    <ContainerImg>
      <Container>
        <ContainerTitulo>
          <Logo />
          <Subtitulo>Books</Subtitulo>
        </ContainerTitulo>
        <FormTextInput label="Email" placeholder="Email" />
        <FormTextInput label="Senha" placeholder="Senha" />
      </Container>
    </ContainerImg>
  );
}

export default Login;
