import styled from "styled-components";
import { theme } from "../../utils/Colors";

export const Container = styled.div`
  position: relative;
  width: 272px;
  height: 160px;
  background-color: ${theme.WHITE};
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  display: flex;
  margin-right: 16px;
  margin-bottom: 16px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    margin-right: 0px;
  }
`;

export const Image = styled.div`
  background-image: url(${(props) => props.source});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 122px;
  width: 81px;
`;

export const ContainetImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
`;

export const ContainetConteudo = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  height: 100%;
  width: 50%;
`;

export const Titulo = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${theme.GRAY_DARK};
`;

export const Autor = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${theme.DARK_PINK};
`;

export const Info = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${theme.GRAY_DARK_SECONDARY};
`;
