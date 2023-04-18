import styled from "styled-components";
import imageBG from "../../images/CardBG.png";

export const CardWrapper = styled.div`
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  text-transform: uppercase;
`;

export const UpperPart = styled.div`
  position: relative;
  width: 100%;
  height: 214px;
  background-image: url(${imageBG});
  background-repeat: no-repeat;
  background-position: center 28px;
`;

export const CardLogo = styled.img`
  width: 76px;
  height: 22px;
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const CenterPart = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const UserImgThumb = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  left: 0px;
  top: 0px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserImg = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  object-fit: cover;
`;

export const LowPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 62px;
`;

export const LowPartText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: #ebd8ff;
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 26px;
  }
`;

export const CardBtn = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  width: 196px;
  height: 50px;
  border-radius: 10px;
  background-color: ${(props) => (props.followingUser ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: transform 300ms ease-in-out;
  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
