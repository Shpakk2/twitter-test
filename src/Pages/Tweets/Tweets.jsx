import { Card } from "../../components/Card/Card";
import {
  HomeLink,
  LoadMoreBtn,
  TweetsActions,
  TweetsBlock,
  TweetsContainer,
} from "./Tweets.styled";
import { useState, useEffect } from "react";
import { getTweets } from "../../service/requestApi";
import { Loader } from "../../components/Loader/Loader";

const Tweets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 12;

  useEffect(() => {
    async function getAllUsers() {
      try {
        setIsLoading(true);
        const allUsers = await getTweets();
        setUsers(allUsers);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getAllUsers();
    const savedArray = JSON.parse(localStorage.getItem("followingArray"));
    if (savedArray) {
      setFollowing(savedArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("followingArray", JSON.stringify(following));
  }, [following]);

  const loadMore = () => {
    setPage((prev) => ++prev);
  };

  const paginationUsers = (users, page, perPage) => {
    return users.slice(0, perPage * page);
  };

  return (
    <TweetsContainer>
      <TweetsActions>
        <HomeLink to="/">Go Home</HomeLink>
      </TweetsActions>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TweetsBlock>
            {paginationUsers(users, page, perPage).map((user) => (
              <Card
                followingUser={following.includes(user.id)}
                setFollowing={setFollowing}
                key={user.id}
                photo={user.avatar}
                tweets={user.tweets}
                followers={user.followers}
                id={user.id}
              />
            ))}
          </TweetsBlock>
          {users.length > page * perPage && (
            <LoadMoreBtn type="button" onClick={loadMore}>
              Load more
            </LoadMoreBtn>
          )}
        </>
      )}
    </TweetsContainer>
  );
};

export default Tweets;
