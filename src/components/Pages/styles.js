import styled from "styled-components";
import { theme } from "../../utils/Colors";

export const Container = styled.div`
  position: relative;
  margin-top: 2%;
  padding-right: 1%;
  display: flex;
  align-items: center;
`;

export const NumeroPage = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${theme.GRAY_DARK};
  margin-right: 16px;
`;

export const Icon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${(props) => props.source});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 8px;

  :hover {
    cursor: pointer;
  }
`;
