import {
  CardWrapper,
  CardBtn,
  CardLogo,
  CenterPart,
  LowPart,
  LowPartText,
  UpperPart,
  UserImg,
  UserImgThumb,
} from "./Card.styled";
import { useState } from "react";

import logoGoIT from "../../images/CardGoITLogo.svg";

export const Card = ({
  followingUser,
  setFollowing,
  photo,
  tweets,
  followers,
  id,
}) => {
  const [btnIsHovered, setBtnIsHovered] = useState(false);
  const followUser = () => {
    if (id === 777) {
      return alert("You can`t unfollow Elon Musk");
    }
    if (!followingUser) {
      setFollowing((prev) => [...prev, id]);
    } else {
      setFollowing((prev) => prev.filter((element) => element !== id));
    }
  };

  const handleHover = () => {
    setBtnIsHovered(true);
  };

  const handleLeave = () => {
    setBtnIsHovered(false);
  };

  return (
    <CardWrapper>
      <UpperPart>
        <CardLogo src={logoGoIT} alt="logo GoIt" />
      </UpperPart>
      <CenterPart>
        <UserImgThumb btnIsHovered={btnIsHovered}>
          <UserImg src={photo} alt="UserPhoto" />
        </UserImgThumb>
      </CenterPart>
      <LowPart>
        <LowPartText>{tweets.toLocaleString("en-US") + " Tweets"}</LowPartText>
        <LowPartText>
          {(!followingUser
            ? followers.toLocaleString("en-US")
            : (followers + 1).toLocaleString("en-US")) + " Followers"}
        </LowPartText>
        <CardBtn
          type="button"
          onClick={followUser}
          followingUser={followingUser}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {followingUser ? "Following" : "Follow"}
        </CardBtn>
      </LowPart>
    </CardWrapper>
  );
};
