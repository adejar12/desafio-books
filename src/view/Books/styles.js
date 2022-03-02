import styled from "styled-components";
import { theme } from "../../utils/Colors";

export const ImageBackGround = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-image: url(${(props) => props.source});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1016px) {
    background-repeat: repeat;
    height: 167vh;
  }

  @media (max-width: 677px) {
    height: 310vh;
  }
`;

export const Container = styled.div`
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

  @media (max-width: 466px) {
    width: 300px;
  }
`;

export const ContainerUsuario = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${theme.GRAY_DARK};
    margin-right: 10px;

    @media (max-width: 466px) {
      visibility: hidden;
      opacity: 0;
      margin-right: 0px;
    }
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

  :hover {
    cursor: pointer;
  }

  @media (max-width: 466px) {
    position: absolute;
    right: 0px;
  }
`;

export const ContainerBooks = styled.div`
  position: relative;
  margin-top: 50px;
  width: 100%;
  max-width: 1160px;
  justify-content: center;

  display: flex;
  flex-wrap: wrap;
`;
