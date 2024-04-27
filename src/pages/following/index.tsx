import IGContainer from "components/IGContainer";
import Header from "components/Header";
import IGUser from "components/User";
import { useAppSelector } from "hook";

const Following: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends;

  return (
    <>
      <Header />
      <IGContainer>
        <p className="my-8 font-bold text-2xl px-4 box-border">Following</p>
        <div className="shadow-md mt-8 mx-2 box-border">
          {friends.map((item) => {
            const { id, account, avatar, isFollowing, location } = item;
            return (
              <div className="-mt-3" key={id}>
                <IGUser
                  id={id}
                  account={account}
                  avatar={avatar}
                  location={location}
                  isFollowing={isFollowing}
                  showFollow
                />
              </div>
            );
          })}
        </div>
      </IGContainer>
    </>
  );
};

export default Following;
