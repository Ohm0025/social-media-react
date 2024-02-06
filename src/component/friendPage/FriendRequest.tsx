import { useEffect, useState } from "react";
import { fetchFriendRequest } from "../../api/friend";
import FriendCard from "./FriendCard";

type Props = {};

const FriendRequest = ({}: Props) => {
  const [arrFriend, setArrFriend] = useState<any>([]);

  const callData = async () => {
    try {
      const res = await fetchFriendRequest();
      if (res.data?.data.length > 0) {
        setArrFriend([...res.data.data]);
      }
    } catch (err) {
      console.log(err);
      setArrFriend([]);
    }
  };

  useEffect(() => {
    callData();
  }, []);
  return (
    <div className="flex flex-col items-center min-w-[300px] mt-6">
      {arrFriend.length > 0 ? (
        <div className="flex gap-4 mt-6">
          {arrFriend.map((item: any, index: number) => {
            return (
              <FriendCard
                item={item}
                btn1={"Pending"}
                btn2={""}
                key={`friend-item-` + index}
                cb={() => {}}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[500px]">
          <h1 className="text-[40px]">no friend found</h1>
        </div>
      )}
    </div>
  );
};

export default FriendRequest;
