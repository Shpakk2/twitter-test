import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  background: rgb(187, 174, 218);
  background: linear-gradient(
    90deg,
    rgba(187, 174, 218, 1) 0%,
    rgba(87, 54, 163, 1) 50%,
    rgba(187, 174, 218, 1) 100%
  );
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const svgColorAnimation = keyframes`
  0% {
    color: #eeeaf5
  }
  100% {
    color: #bbaeda;
  }
`;

export const HeaderText = styled.h1`
  font-size: 36px;
  color: #ccc2e3;
  animation: ${svgColorAnimation} 5s infinite alternate;
`;
