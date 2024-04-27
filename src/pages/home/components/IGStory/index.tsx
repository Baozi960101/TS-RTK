import styled from "styled-components";
import Item from "./Item";
import { useGetIGStoiesQuery } from "services/homeServices";
import Loading from "components/Loading";

const StoryContainer = styled.div`
  width: 100%;
  height: 110px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  scrollbar-width: none;
  padding-left: 1rem;
  box-sizing: border-box;
  @media screen and (min-width: 1024px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .storyDiv {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const IGStory: React.FC = () => {
  // const { data, isLoading } = useGetIGStoiesQuery("all");

  const { data, error, isLoading } = useGetIGStoiesQuery("all");

  return (
    <StoryContainer>
      {isLoading && <div className="storyDiv"><Loading /></div>}
      {!isLoading &&
        data?.map((item) => {
          const { id, name, avatar } = item;
          return <Item key={id} name={name} avatar={avatar} />;
        })}
    </StoryContainer>
  );
};

export default IGStory;
