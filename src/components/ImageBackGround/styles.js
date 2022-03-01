import styled from "styled-components";

export const Container = styled.div`
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
