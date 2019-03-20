import styled, { keyframes, css } from "styled-components";
import { $dog, $dogdark, $pink, $dark, $nose } from "../../../styles/colors";

// Animations
const head = keyframes`
0% { transform: rotate(80deg) }
20% { transform: rotate(80deg) }
60% { transform: rotate(90deg) }
100% { transform: rotate(80deg) }
`;

// Styles
export const HeadWrapper = styled.div`
  border-radius: 47%;
  position: absolute;
  background: ${$dog};
  box-shadow: 2px -2px 2px rgba(${$dark}, 0.3);
  transform: rotate(80deg);
  width: 105px;
  height: 110px;
  top: -32px;
  left: -30px;
  z-index: 13;
  animation: ${head} 3.8s infinite 1s cubic-bezier(0.4, 0.34, 0.16, 0.79);
`;

export const Ear = styled.div`
position: absolute;
width: 30px;
height: 60px;
background: ${$dogdark};

/* Left Ear */
  ${props =>
    props.left &&
    css`
      border-radius: 50% 80% 20% 60%;
      transform: rotate(-100deg);
      top: -35px;
      right: 30px;
    `}

/* Right Ear */
  ${props =>
    props.right &&
    css`
      border-radius: 20% 60% 50% 80%;
      transform: rotate(-260deg);
      bottom: -30px;
      right: 20px;
    `}
`;

export const Eye = styled.div`
  position: absolute;
  height: 18px;
  width: 18px;
  background: ${$dark};
  border-radius: 50%;
  &:before {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    z-index: 99999;
    top: 4px;
    left: 6px;
    display: block;
  }

  /* Left Eye */
  ${props =>
    props.left &&
    css`
      top: 19px;
      left: 40px;
    `}

  /* Right Eye */
  ${props =>
    props.right &&
    css`
      top: 75px;
      left: 38px;
    `}
`;

export const Nose = styled.div`
  position: absolute;
  transform: rotate(0deg);
  border: 10px solid transparent;
  border-left: 10px solid ${$nose};
  border-radius: 17px;
  bottom: 43px;
  right: 30px;
`;

export const Teef = styled.div`
  position: absolute;
  transform: rotate(270deg);
  width: 50%;
  height: 30%;
  background: none;
  border-bottom: 20px solid ${$pink};
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  top: 30px;
  left: 40px;
  &:after {
    content: "";
    position: absolute;
    z-index: 5;
    transform: rotate(45deg);
    width: 50%;
    height: 120%;
    background: ${$dogdark};
    border-radius: 50%;
    bottom: -20px;
    right: 29px;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: 5;
    transform: rotate(-50deg);
    width: 50%;
    height: 120%;
    background: ${$dogdark};
    border-radius: 50%;
    bottom: -20px;
    right: -2px;
  }
`;
