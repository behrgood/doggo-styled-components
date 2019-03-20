import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: black;
  padding: 20px 50px;
  border-radius: 0;
  font-size: 1.5rem;
  

  /* Primary Button */
  ${props =>
    props.primary &&
    css`
      background-color: black;
    `}

  /* Secondary Button */
  ${props =>
    props.secondary &&
    css`
      background-color: white;
    `}

    /* Absolute Left */
  ${props =>
    props.left &&
    css`
      left: 40px;
      bottom: 40px;
    `}

    /* Absolute Right */
  ${props =>
    props.right &&
    css`
      position: absolute;
      right: 40px;
      bottom: 40px;
    `}
`;
