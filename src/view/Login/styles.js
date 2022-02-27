import styled from "styled-components";

import { theme } from "../../utils/Colors";

export const ContainerImg = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-image: url("/backgroundImage.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  position: absolute;
  left: 8.42%;
  right: 83.94%;
  top: 35.68%;
  bottom: 59.64%;
`;

export const ContainerTitulo = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 200px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  position: relative;
  background-image: url("/logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 104px;
  height: 36px;
  z-index: 2;
`;

export const Subtitulo = styled.h1`
  color: ${theme.WHITE};
  margin-top: 20px;
  font-family: Heebo;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 40px;
`;
