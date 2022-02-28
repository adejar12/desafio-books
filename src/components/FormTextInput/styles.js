import styled from "styled-components";
import { theme } from "../../utils/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 60px;
  width: 100%;
`;

export const ContainerLabel = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  top: 30px;
  width: 50px;
  z-index: 2;
  padding-left: 10px;
  left: 2px;
`;

export const Label = styled.h2`
  position: relative;
  color: ${theme.WHITE};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  opacity: 0.5;
  top: -10px;
`;

export const Tinput = styled.input`
  height: 60px;
  width: 100%;
  color: ${theme.WHITE};
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 100px;
  flex: 1;
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
  border-radius: 4px;
  border-color: transparent;
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const Button = styled.button`
  height: 36px;
  width: 85px;
  background-color: ${theme.WHITE};
  border-radius: 44px;
  border-color: transparent;
  position: absolute;
  left: 75%;
  top: 37%;
  transition-duration: 0.2s;
  :hover {
    cursor: pointer;
    background-color: ${theme.GRAY};
  }

  :active {
    transition-duration: 0.8s;
    top: 0.5px;
  }
`;

export const TextButton = styled.a`
  color: ${theme.PINK};
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
`;
