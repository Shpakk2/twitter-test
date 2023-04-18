import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeContainer = styled.div`
  padding-top: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100%-40px);
`;

export const TweetsLink = styled(NavLink)`
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 14px 39px;
  background-color: #5cd3a8;
  transition: transform 300ms ease-in-out;
  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
