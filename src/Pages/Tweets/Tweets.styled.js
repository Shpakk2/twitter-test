import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TweetsContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const HomeLink = styled(NavLink)`
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 100;
  display: inline-flex;
  border-radius: 10px;
  padding: 20px 40px;
  background-color: #5cd3a8;
  transition: transform 300ms ease-in-out;
  :hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const TweetsBlock = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  margin-bottom: 20px;
  row-gap: 20px;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const TweetsActions = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const LoadMoreBtn = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  display: inline;
  height: 50px;
  width: 200px;
  margin: 0 auto;
  padding: 15px;
  border-radius: 10px;
  background-color: #5cd3a8;
  transition: transform 300ms ease-in-out;
  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
