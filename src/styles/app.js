import styled, { keyframes, css } from "styled-components";
// Animations
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Components
export const AppWrapper = styled.div`
  text-align: center;
  position: relative;
  z-index: 0;
`;

export const AppLogo = styled.img`
  animation: ${rotate360} infinite 12s linear;
  z-index: 0;
  opacity: 0.2;

  /* Party Mode */
  ${props =>
    props.party &&
    css`
      animation: ${rotate360} infinite 2s linear;
      opacity: 1;
    `}
`;

export const AppHeader = styled.div`
  background-color: #fcdaae;
  height: 150px;
  padding: 20px;
  color: white;
  transition: all 0.2s;

  /* Party Mode */
  ${props =>
    props.party &&
    css`
      background-color: black;
      transition: all 0.2s;
    `}
`;
