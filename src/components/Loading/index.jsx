import React from "react";

import { Container, Gif } from "./styles";

import LoadingIcon from "../../assets/image/svg/loading.svg";

function Loading() {
  return (
    <Container>
      <Gif source={LoadingIcon} />
    </Container>
  );
}

export default Loading;
