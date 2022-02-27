import styled from "styled-components";
import { theme } from "../../utils/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100px;
  margin-bottom: -25px;
  width: 9cm;
`;

export const ContainerLabel = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  top: 30px;
  width: 50px;
  z-index: 2;
  padding-left: 10px;
`;

export const Label = styled.h2`
  color: ${theme.WHITE};
  font-size: 14px;
  font-family: Heebo;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  opacity: 0.5;
`;

export const Tinput = styled.input`
  height: 60px;
  width: 100%;
  color: ${theme.WHITE};
  padding-top: 10px;
  padding-left: 10px;
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

export const TError = styled.h2`
  font-size: 12px;
  margin-bottom: 8px;
  color: ${theme.RED};
  margin-top: 8px;
  margin-left: 8px;
`;
