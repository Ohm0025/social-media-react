import { useEffect } from "react";
import FriendCard from "./FriendCard";
import { fetchAllFriend } from "../../api/friend";
import { useFriendList } from "../../store/friendList";

const FriendList = () => {
  const { fetchFriendList, friendList } = useFriendList();

  const callData = async () => {
    try {
      const res = await fetchAllFriend();
      if (res.data?.data.length > 0) {
        fetchFriendList(res.data.data);
      }
    } catch (err) {
      console.log(err);
      fetchFriendList([]);
    }
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <>
      {friendList.length > 0 ? (
        <div className="flex p-5 flex-wrap gap-3 justify-center">
          {friendList.map((item, index) => {
            return (
              <FriendCard
                item={item}
                btn1={"Chat"}
                btn2={"Remove"}
                key={`list-friend-${index}`}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[500px]">
          <h1 className="text-[40px]">you have no friend</h1>
        </div>
      )}
    </>
  );
};

export default FriendList;
