import React from "react";

import { Container, ContainerText, ContainerTriangle } from "./styles";

function Error({ text, ...rest }) {
  return (
    <>
      <ContainerTriangle {...rest} />
      <Container {...rest}>
        <ContainerText>{text}</ContainerText>
      </Container>
    </>
  );
}

export default Error;
