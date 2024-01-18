import FriendCard from "./FriendCard";

const FriendList = () => {
  return (
    <div className="flex p-5 flex-wrap gap-3 justify-center">
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
    </div>
  );
};

export default FriendList;
