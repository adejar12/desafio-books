import styled from "styled-components";
import { theme } from "../../utils/Colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`;

export const ContainerModal = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #fff;
  width: 769px;
  height: 608px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transform: scale(1.2);
  z-index: 4;
`;

export const Image = styled.div`
  background-image: url(${(props) => props.source});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 512px;
  width: 350px;
  filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
`;

export const ContainetImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  margin: 0 48px 0 48px;
`;

export const ContainerConteudo = styled.div`
  width: 100%;
  height: 512px;
`;

export const Titulo = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  color: ${theme.GRAY_DARK};
`;

export const Autor = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: ${theme.DARK_PINK};
`;

export const Info = styled.h5`
  font-size: 12px;
  line-height: 28px;
  font-weight: 600;
  color: ${theme.GRAY_DARK};
`;

export const ContainerPaginas = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-right: 4%;

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: ${theme.GRAY_DARK_SECONDARY};
  }
`;

export const ContainerResenha = styled.div`
  max-height: 140px;
  overflow: scroll;
  /* width */
  ::-webkit-scrollbar {
    width: 4px;
    height: 48px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.DARK_PINK};
    border-radius: 25px;
  }
`;

export const Resenha = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${theme.GRAY_DARK_SECONDARY};
  ::-webkit-scrollbar-track {
    background: black;
  }
`;

export const Quotes = styled.div`
  width: 17px;
  height: 14px;
  background-image: url(${(props) => props.source});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
