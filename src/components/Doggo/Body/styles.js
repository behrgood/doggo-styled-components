import styled, { keyframes, css } from "styled-components";
import { $dog, $dogdark } from "../../../styles/colors";

// Animations

const paw = keyframes`
0% { transform: rotate(-10deg) translate(0, -10px) }
20% { transform: rotate(20deg) translate(0, 0) }
100% { transform: rotate(-10deg) translate(0, -10px) }
`;

const run = keyframes`
0% {transform: scale(1)}
20% {transform: scale(1.02) translate(0, -3px)}
100% { transform: scale(1) }
`;

// Styles

export const BodyWrapper = styled.div`
  position: relative;
`;

export const Trunk = styled.div`
  position: relative;
  width: 160px;
  height: 110px;
  border-radius: 50%;
  background: ${$dog};
  transform: rotate(-15deg);
  z-index: 5;
  animation: ${run} 0.4s infinite 0.2s cubic-bezier(0.4, 0.34, 0.16, 0.79);
`;

export const Tail = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background: ${$dog};
  right: -10px;
  top: 13px;
  border-radius: 50%;
  animation: ${run} 0.4s infinite 0.21s cubic-bezier(0.4, 0.34, 0.16, 0.79);
`;

export const Paw = styled.div`
  position: absolute;
  width: 20px;
  height: 60px;
  border-radius: 10px;

  /* Left Far Paw */
  ${props =>
    props.left &&
    props.far &&
    css`
      z-index: -10;
      bottom: -13px;
      left: 117px;
      background: ${$dogdark};
      animation: ${paw} 0.8s infinite 0.3s cubic-bezier(0.4, 0.34, 0.16, 0.79);
    `}

  /* Right Far Paw */
  ${props =>
    props.right &&
    props.far &&
    css`
      z-index: -10;
      bottom: -11px;
      left: 52px;
      background: ${$dogdark};
      z-index: -1;
      animation: ${paw} 0.9s infinite 0.2s cubic-bezier(0.4, 0.34, 0.16, 0.79);
    `}

  /* Right Near Paw */
  ${props =>
    props.right &&
    props.near &&
    css`
      bottom: -34px;
      left: 75px;
      background: ${$dog};
      animation: ${paw} 0.8s infinite 0s cubic-bezier(0.4, 0.34, 0.16, 0.79);
    `}

  /* Left Near Paw */
  ${props =>
    props.left &&
    props.near &&
    css`
      bottom: -29px;
      left: 19px;
      background: ${$dog};
      animation: ${paw} 0.8s infinite 0.18s cubic-bezier(0.4, 0.34, 0.16, 0.79);
    `}
`;
