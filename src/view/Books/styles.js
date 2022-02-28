import styled from "styled-components";
import { theme } from "../../utils/Colors";

export const Container = styled.div`
  background-color: blue;
  height: 100vh;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCabecalho = styled.div`
  margin-top: 2%;
  height: 50px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
`;

export const ContainerUsuario = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    font-size: 12px;
    line-height: 16px;
    color: ${theme.GRAY_DARK};
    margin-right: 10px;
  }
`;

export const Logo = styled.div`
  position: relative;
  background-image: url("/assets/image/png/logo_black.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 104px;
  height: 36px;
`;

export const Exit = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${(props) => props.source});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContainerBooks = styled.div`
  margin-top: 50px;
  max-width: 1160px;

  display: flex;
  flex-wrap: wrap;
`;
