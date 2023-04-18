import { HomeContainer, TweetsLink } from "./Home.styled";
import { Card } from "../../components/Card/Card";
const Home = () => {
  return (
    <HomeContainer>
      <TweetsLink to="/tweets">View users</TweetsLink>
      <Card
        followingUser={"Following"}
        setFollowing={[777]}
        key={777}
        photo={
          "https://www.thestreet.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MjMwNjY0MzA2MTA3Njk2/elon-musk-twitter.jpg"
        }
        tweets={21000000}
        followers={7887999999}
        id={777}
      />
    </HomeContainer>
  );
};

export default Home;
