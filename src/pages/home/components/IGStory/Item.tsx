import styled from "styled-components";

type ItemProps = {
  name: string;
  avatar: string;
};

const StoryContainer = styled.div`
  text-align: center;
  margin-right: 15px;

  .storyItem {
    width: 56px;
    height: 56px;
    padding: 3px;
    border: 2px solid #ffffff;
    outline-width: 2px;
    outline-style: solid;
    outline-color: #ef4444;
    border-radius: 9999px;
    overflow: hidden;
  }

  .storyImg {
    width: 100%;
    border-radius: 9999px;
  }

  .storyName {
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
`;

const StoryItem = styled.div<{ $avatar?: any }>`
  width: 56px;
  height: 56px;
  padding: 3px;
  border: 2px solid #ffffff;
  outline-width: 2px;
  outline-style: solid;
  outline-color: #ef4444;
  border-radius: 9999px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-image: ${(props) => props.$avatar && `url(${props.$avatar})`};
`;

const Item: React.FC<ItemProps> = ({ name, avatar }) => {
  return (
    <StoryContainer>
      <StoryItem $avatar={avatar}>
        <img className="storyImg" alt="" src={avatar} />
      </StoryItem>
      <p className="storyName">{name}</p>
    </StoryContainer>
  );
};

export default Item;
