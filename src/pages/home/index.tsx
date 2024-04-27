import Header from "components/Header";
import IGContainer from "components/IGContainer";
import styled from "styled-components";
import IGStory from "./components/IGStory";
import IGPost from "./components/IGPost";
import IGProfile from "./components/IGProfile";
import { useGetIGPostsQuery } from "services/homeServices";
import Loading from "components/Loading";

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;

  .leftContainer {
    width: 600px;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }
  .rightContainer {
    display: block;
    width: 424px;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`;

const IGPostList: React.FC = () => {
  const { data, isLoading } = useGetIGPostsQuery("all");


  return (
    <>
      {isLoading && (
        <div className="w-full flex justify-center mt-20">
          <Loading />
        </div>
      )}
      {!isLoading &&
        data?.map((item) => {
          const {
            id,
            location,
            account,
            avatar,
            photo,
            likes,
            description,
            hashTags,
            createTime,
          } = item;
          return (
            <IGPost
              location={location}
              account={account}
              avatar={avatar}
              photo={photo}
              likes={likes}
              description={description}
              hashTags={hashTags}
              createTime={createTime}
              key={id}
            />
          );
        })}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <IGContainer>
        <FlexCenter>
          <div className="leftContainer">
            <IGStory />
            <IGPostList/>
          </div>
          <div className="rightContainer">
          <IGProfile/>
          </div>
        </FlexCenter>
      </IGContainer>
    </>
  );
};

export default Home;
