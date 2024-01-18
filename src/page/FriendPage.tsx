import FriendFilter from "../component/friendPage/FriendFilter";
import FriendList from "../component/friendPage/FriendList";

const FriendPage = () => {
  return (
    <div className="flex flex-col">
      <FriendFilter />
      <FriendList />
    </div>
  );
};

export default FriendPage;
