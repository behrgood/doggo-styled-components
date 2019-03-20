import styled, { keyframes, css } from "styled-components";
import {
  $dog,
  $dogdark,
  $pink,
  $dark,
  $nose,
  $medal
} from "../../styles/colors";

// Animations
const head = keyframes`
0% { transform: rotate(80deg) }
20% { transform: rotate(80deg) }
60% { transform: rotate(90deg) }
100% { transform: rotate(80deg) }
`;

const paw = keyframes`
0% { transform: rotate(-10deg) translate(0, -10px) }
20% { transform: rotate(20deg) translate(0, 0) }
100% { transform: rotate(-10deg) translate(0, -10px) }
`;

const shadow = keyframes`
0% { transform: scale(1) rotate(-5deg)} 
50% { transform: scale(1.04) rotate(-5deg) }
100% {transform: scale(1) rotate(-5deg) }
`;

const run = keyframes`
0% {transform: scale(1)}
20% {transform: scale(1.02) translate(0, -3px)}
100% { transform: scale(1) }
`;

const medal = keyframes`
0% { bottom: 0px; left: 50px }
60% { bottom: 10px; left: 55px } 
100% { bottom: 0px; left: 50px }
`;

// Styles

export const DoggoWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    z-index: -20;
    display: block;
    width: 190px;
    height: 60px;
    border-radius: 90%;
    animation: ${shadow} 0.4s infinite 0.4s cubic-bezier(0.4, 0.34, 0.16, 0.79);
    background: rgba(0, 0, 0, 0.24);
    top: 102px;
    left: -10px;
  }
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

  /* Makes the doggo run faster */
  ${props =>
    props.speedy &&
    css`
      animation: ${run} 0.1s infinite 0.1s cubic-bezier(0.4, 0.34, 0.16, 0.79);
    `}
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

export const Collar = styled.div`
  width: 60px;
  height: 77px;
  background: ${$pink};
  top: 10px;
  left: 10px;
  position: absolute;
  border-radius: 50%;
  transform: rotate(60deg);
  z-index: 9;
`;

export const CollarTag = styled.div`
  width: 21px;
  height: 18px;
  background: ${$medal};
  border-radius: 50%;
  bottom: 0px;
  left: 50px;
  z-index: 999;
  position: absolute;
  animation: ${medal} 2.2s infinite 0.5s cubic-bezier(0.4, 0.34, 0.16, 0.79);
`;

export const Head = styled.div`
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

export const LeftEar = styled.div`
position: absolute;
width: 30px;
height: 60px;
background: ${$dogdark};
border-radius: 50% 80% 20% 60%;
transform: rotate(-100deg);
top: -35px
right: 30px`;

export const RightEar = styled.div`
  position: absolute;
  width: 30px;
  height: 60px;
  background: ${$dogdark};
  border-radius: 20% 60% 50% 80%;
  transform: rotate(-260deg);
  bottom: -30px;
  right: 20px;
`;

export const LeftEye = styled.div`
  position: absolute;
  height: 18px;
  width: 18px;
  background: ${$dark};
  border-radius: 50%;
  top: 19px;
  left: 40px;
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
`;

export const RightEye = styled.div`
position: absolute
height: 18px
width: 18px
background: ${$dark};
border-radius: 50%;
top: 75px;
left: 38px;
    &:before {
        position: absolute;
        display: block;
        width: 4px;
        height: 4px;
        background: white;
        border-radius: 50%;
        z-index: 99999;
        top: 4px;
        left: 6px;
        content: "";
    }
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

export const Nose = styled.div`
  position: absolute;
  transform: rotate(0deg);
  border: 10px solid transparent;
  border-left: 10px solid ${$nose};
  border-radius: 17px;
  bottom: 43px;
  right: 30px;
`;

export const LeftFrontPaw = styled.div`
  width: 20px;
  height: 60px;
  border-radius: 10px;
  position: absolute;
  bottom: -29px;
  left: 19px;
  background: ${$dog};
  animation: ${paw} 0.8s infinite 0.18s cubic-bezier(0.4, 0.34, 0.16, 0.79);
  transform-origin: 50% 0%;
`;

export const RightFrontPaw = styled.div`
  position: absolute;
  width: 20px;
  height: 60px;
  border-radius: 10px;
  bottom: -34px;
  left: 75px;
  background: ${$dog};
  animation: ${paw} 0.8s infinite 0s cubic-bezier(0.4, 0.34, 0.16, 0.79);
  transform-origin: 50% 0%;
`;

export const LeftBackPaw = styled.div`
  position: absolute;
  z-index: -10;
  width: 20px;
  height: 60px;
  border-radius: 10px;
  z-index: -1;
  bottom: -13px;
  left: 117px;
  background: ${$dogdark};
  animation: ${paw} 0.8s infinite 0.3s cubic-bezier(0.4, 0.34, 0.16, 0.79);
  transform-origin: 50% 0%;
`;

export const RightBackPaw = styled.div`
  position: absolute;
  z-index: -10;
  width: 20px;
  height: 60px;
  border-radius: 10px;
  bottom: -11px;
  left: 52px;
  background: ${$dogdark};
  z-index: -1;
  animation: ${paw} 0.9s infinite 0.2s cubic-bezier(0.4, 0.34, 0.16, 0.79);
  transform-origin: 50% 0%;
`;
