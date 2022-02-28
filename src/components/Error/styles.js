import styled, { css } from "styled-components";
import { theme } from "../../utils/Colors";

const animation = css`
  animation: inAnimation 250ms ease-in;

  @keyframes inAnimation {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes outAnimation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  height: 48px;
  width: 239px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  top: 15px;
  ${animation}
`;

export const ContainerText = styled.span`
  color: ${theme.WHITE};
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
`;

export const ContainerTriangle = styled.div`
  height: 8px;
  width: 16px;
  background-color: transparent;
  position: relative;
  top: 15px;
  left: 15px;
  border-bottom: 9px solid rgba(255, 255, 255, 0.4);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  ${animation}
`;
