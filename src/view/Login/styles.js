import styled from "styled-components";

import { theme } from "../../utils/Colors";

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
  background-image: url("/assets/image/png/logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 104px;
  height: 36px;
  z-index: 2;
`;

export const Subtitulo = styled.span`
  color: ${(props) => (props.white ? theme.WHITE : theme.GRAY_DARK)};
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 40px;
`;
